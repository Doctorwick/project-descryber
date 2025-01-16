import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, MessageSquare, User, Bot, Clock, Shield, ThumbsUp, ThumbsDown } from "lucide-react";
import { Message } from "@/types/message";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format } from "date-fns";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface MessageListProps {
  messages: Message[];
}

export const MessageList = ({ messages }: MessageListProps) => {
  const [expandedMessage, setExpandedMessage] = useState<number | null>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const handleFeedback = (messageId: number, isPositive: boolean) => {
    toast({
      title: "Feedback Recorded",
      description: `Thank you for your ${isPositive ? "positive" : "negative"} feedback!`,
      variant: isPositive ? "default" : "destructive",
    });
  };

  return (
    <ScrollArea className="h-[calc(100vh-20rem)] sm:h-[600px] pr-4">
      <div className="space-y-4 mb-4">
        <AnimatePresence mode="popLayout">
          {messages.map(message => (
            <motion.div
              key={message.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.4,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={cn(
                  "max-w-[90%] sm:max-w-[80%] rounded-2xl shadow-lg backdrop-blur-sm",
                  message.sender === "user"
                    ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white"
                    : "bg-blue-900/20 border border-blue-500/20 text-blue-100"
                )}
              >
                <div className="p-3 sm:p-4 space-y-3">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className={cn(
                      "p-1.5 sm:p-2 rounded-full",
                      message.sender === "user" 
                        ? "bg-blue-500/20" 
                        : "bg-blue-400/20"
                    )}>
                      {message.sender === "user" ? (
                        <User className="w-3 h-3 sm:w-4 sm:h-4 text-blue-200" />
                      ) : (
                        <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300" />
                      )}
                    </div>
                    
                    {message.isHidden ? (
                      <div className="flex items-center gap-2 text-gray-400">
                        <AlertTriangle className="w-4 h-4" />
                        <span className="italic text-sm">Message hidden due to harmful content</span>
                      </div>
                    ) : (
                      <div className="flex-1 space-y-2">
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        
                        <div className="flex items-center gap-4 text-xs opacity-75">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{format(new Date(message.timestamp), "HH:mm")}</span>
                          </div>
                          
                          {message.filterResult?.severity && (
                            <div className="flex items-center gap-1">
                              <Shield className="w-3 h-3" />
                              <span>Severity: {message.filterResult.severity}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {!message.isHidden && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: expandedMessage === message.id ? 1 : 0,
                        height: expandedMessage === message.id ? "auto" : 0
                      }}
                      className="pt-2 border-t border-blue-500/20"
                    >
                      {message.filterResult && (
                        <div className="space-y-2 text-sm">
                          {message.filterResult.categories?.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {message.filterResult.categories.map((category, idx) => (
                                <span
                                  key={idx}
                                  className={cn(
                                    "px-2 py-1 rounded-full text-xs",
                                    message.sender === "user"
                                      ? "bg-blue-500/20 text-blue-200"
                                      : "bg-blue-400/20 text-blue-300"
                                  )}
                                >
                                  {category}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          <div className="flex justify-between items-center">
                            <div className="flex gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleFeedback(message.id, true)}
                                className={cn(
                                  "hover:bg-green-900/20 hover:text-green-400",
                                  message.sender === "user" && "text-blue-200 hover:text-green-400"
                                )}
                              >
                                <ThumbsUp className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleFeedback(message.id, false)}
                                className={cn(
                                  "hover:bg-red-900/20 hover:text-red-400",
                                  message.sender === "user" && "text-blue-200 hover:text-red-400"
                                )}
                              >
                                <ThumbsDown className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setExpandedMessage(
                    expandedMessage === message.id ? null : message.id
                  )}
                  className={cn(
                    "w-full rounded-none border-t text-xs sm:text-sm",
                    message.sender === "user"
                      ? "border-blue-500/20 text-blue-200 hover:bg-blue-500/20"
                      : "border-blue-400/20 hover:bg-blue-400/10"
                  )}
                >
                  {expandedMessage === message.id ? "Show Less" : "Show More"}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ScrollArea>
  );
};