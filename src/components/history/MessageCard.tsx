import { Message } from "@/types/message";
import { motion } from "framer-motion";
import { AlertTriangle, RotateCw, MessageSquare, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface MessageCardProps {
  message: Message;
  restoringId: number | null;
  onRestore: (messageId: number) => void;
  onCopy: (text: string) => void;
}

export const MessageCard = ({ message, restoringId, onRestore, onCopy }: MessageCardProps) => {
  const severity = message.filterResult?.severity || "low";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        className={cn(
          "overflow-hidden border-l-4 transition-all duration-200 hover:shadow-md bg-background/50 backdrop-blur-md hover:bg-background/80",
          severity === 'high' 
            ? "border-l-red-500" 
            : severity === 'medium'
            ? "border-l-yellow-500"
            : "border-l-blue-500"
        )}
      >
        <CardContent className="p-4">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-200/70">
                  {format(new Date(message.timestamp), "PPpp")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {severity !== "low" && (
                  <Badge 
                    variant={
                      severity === 'high' 
                        ? 'destructive'
                        : severity === 'medium'
                        ? 'warning'
                        : 'default'
                    }
                    className="capitalize bg-background/50 backdrop-blur-sm"
                  >
                    {severity}
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onCopy(message.text)}
                  className="h-7 hover:bg-blue-500/20 text-blue-300"
                >
                  Copy
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className={cn(
                "p-2 rounded-full",
                message.sender === "user" 
                  ? "bg-purple-500/20" 
                  : "bg-blue-500/20"
              )}>
                <MessageSquare className={cn(
                  "w-4 h-4",
                  message.sender === "user"
                    ? "text-purple-400"
                    : "text-blue-400"
                )} />
              </div>
              
              <div className="flex-1">
                {message.isHidden ? (
                  <div className="flex items-center space-x-2 text-red-400">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="italic">Message hidden due to harmful content</span>
                  </div>
                ) : (
                  <p className="text-foreground/90">{message.text}</p>
                )}
              </div>
            </div>

            {message.filterResult?.categories && message.filterResult.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {message.filterResult.categories.map((category, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="text-xs bg-blue-950/50 text-blue-200 border-blue-500/30"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            )}

            {message.isHidden && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-end mt-2"
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onRestore(message.id)}
                  disabled={restoringId === message.id}
                  className="group relative overflow-hidden hover:bg-blue-500/20 transition-colors border-blue-500/30 text-blue-300"
                >
                  <motion.div
                    animate={restoringId === message.id ? { rotate: 360 } : {}}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="mr-2"
                  >
                    <RotateCw className="w-4 h-4" />
                  </motion.div>
                  <span>{restoringId === message.id ? "Restoring..." : "Restore Message"}</span>
                  <ChevronRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};