import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { SupportMessage } from "./SupportMessage";
import { ResourceCard } from "./ResourceCard";
import { useToast } from "@/components/ui/use-toast";

type Message = {
  id: string;
  type: "user" | "bot";
  content: string;
  resources?: any[];
  isUrgent?: boolean;
};

export const SupportChat = () => {
  const [messages, setMessages] = useState<Message[]>([{
    id: "initial",
    type: "bot",
    content: "Hi there! I'm here to help. Could you tell me what's troubling you today?"
  }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { toast } = useToast();

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await supabase.functions.invoke('analyze-support-message', {
        body: { message: input }
      });

      if (response.error) throw new Error(response.error.message);
      
      const { analysis, resources } = response.data;
      console.log('Analysis result:', analysis);

      // If urgency is high, show an immediate crisis resource
      if (analysis.urgency === 'high') {
        const crisisResources = resources?.filter(r => r.category === 'crisis') || [];
        if (crisisResources.length > 0) {
          const botUrgentMessage: Message = {
            id: Date.now().toString() + '-urgent',
            type: 'bot',
            content: '⚠️ I hear you, and I want you to know that your life matters. Help is available right now:',
            resources: crisisResources,
            isUrgent: true
          };
          setMessages(prev => [...prev, botUrgentMessage]);
        }

        // Show toast for urgent situations
        toast({
          title: "Important",
          description: "If you're having thoughts of suicide, please reach out to emergency services or a crisis hotline immediately. You're not alone.",
          variant: "destructive",
          duration: 10000,
        });
      }

      // Add the main response with matched resources
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: analysis.response,
        resources: resources
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error in chat:', error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        type: "bot",
        content: "I'm having trouble right now, but I want to help. If you're in immediate crisis, please reach out to emergency services or a crisis hotline right away."
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-16rem)] max-w-3xl mx-auto">
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        <AnimatePresence mode="popLayout">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <SupportMessage message={message} />
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-gray-500"
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Analyzing your message...</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-4 border-t bg-white/80 backdrop-blur-sm">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};