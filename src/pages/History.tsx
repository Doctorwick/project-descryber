import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, AlertTriangle, History as HistoryIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Message, MessageSender } from "@/types/message";
import { FilterResult } from "@/types/filter";
import { HistoryTable } from "@/components/history/HistoryTable";
import { ClearHistoryDialog } from "@/components/history/ClearHistoryDialog";
import { getMessageHistory, subscribeToHistory } from "@/utils/historyUtils";
import { motion } from "framer-motion";

export default function History() {
  const [history, setHistory] = useState<Message[]>([]);
  const [restoringId, setRestoringId] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const { toast } = useToast();

  const loadHistory = async () => {
    try {
      const messages = await getMessageHistory();
      setHistory(messages.map(msg => ({
        ...msg,
        sender: msg.sender as MessageSender,
        filterResult: msg.filterResult as FilterResult | undefined
      })));
    } catch (error) {
      console.error('Error loading history:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: (
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span>Failed to load message history</span>
          </div>
        ),
      });
    }
  };

  const restoreMessage = async (messageId: number) => {
    try {
      setRestoringId(messageId);
      
      const { data: message, error: fetchError } = await supabase
        .from("message_history")
        .select("*")
        .eq("id", messageId)
        .single();

      if (fetchError) throw fetchError;

      const { error: updateError } = await supabase
        .from("message_history")
        .update({
          is_hidden: false,
          restored_at: new Date().toISOString(),
          restored_from_id: messageId,
        })
        .eq("id", messageId);

      if (updateError) throw updateError;

      toast({
        title: "Success",
        description: (
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Message restored successfully</span>
          </div>
        ),
      });
      
      await loadHistory();
    } catch (error) {
      console.error('Error restoring message:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: (
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span>Failed to restore message</span>
          </div>
        ),
      });
    } finally {
      setRestoringId(null);
    }
  };

  const clearHistory = async () => {
    try {
      const { error } = await supabase
        .from('message_history')
        .delete()
        .neq('id', 0);

      if (error) throw error;

      toast({
        title: "Success",
        description: (
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Message history cleared successfully</span>
          </div>
        ),
      });
      
      await loadHistory();
    } catch (error) {
      console.error('Error clearing history:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: (
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span>Failed to clear message history</span>
          </div>
        ),
      });
    }
  };

  useEffect(() => {
    loadHistory();
    const unsubscribe = subscribeToHistory(loadHistory);
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`mx-auto mt-8 ${isMobile ? 'w-full' : 'max-w-4xl'}`}
        >
          <div className="glass rounded-2xl shadow-xl p-6 border border-blue-500/20">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <HistoryIcon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gradient">
                    Message History
                  </h1>
                  <p className="text-muted-foreground text-sm mt-1">
                    Track and manage your message interactions
                  </p>
                </div>
              </div>
              <ClearHistoryDialog onClear={clearHistory} />
            </div>
            <HistoryTable
              history={history}
              restoringId={restoringId}
              onRestore={restoreMessage}
              isMobile={isMobile}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}