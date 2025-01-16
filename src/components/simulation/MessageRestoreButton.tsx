import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { RotateCw, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

interface MessageRestoreButtonProps {
  messageId: number;
  onRestore: () => void;
}

export const MessageRestoreButton = ({ messageId, onRestore }: MessageRestoreButtonProps) => {
  const [isRestoring, setIsRestoring] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleRestore = async () => {
    try {
      setIsRestoring(true);
      
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

      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 2000);

      toast({
        title: "Message Restored",
        description: "The message has been successfully restored.",
      });
      
      onRestore();
    } catch (error) {
      console.error("Error restoring message:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to restore message. Please try again.",
      });
    } finally {
      setIsRestoring(false);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="outline"
        size="sm"
        className={cn(
          "gap-2 transition-all duration-300",
          isSuccess ? "bg-green-50 text-green-600" : "bg-blue-900/20 hover:bg-blue-900/30 text-blue-400"
        )}
        onClick={handleRestore}
        disabled={isRestoring || isSuccess}
      >
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <Check className="w-4 h-4" />
            </motion.div>
          ) : (
            <motion.div
              key="loading"
              animate={isRestoring ? { rotate: 360 } : {}}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <RotateCw className="w-4 h-4" />
            </motion.div>
          )}
        </AnimatePresence>
        {isSuccess ? "Restored!" : isRestoring ? "Restoring..." : "Restore"}
      </Button>
    </motion.div>
  );
};