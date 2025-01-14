import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Pause, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface MessageInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
  isDisabled: boolean;
  isLoading?: boolean;
}

export const MessageInput = ({ 
  input, 
  setInput, 
  handleSend, 
  isDisabled,
  isLoading = false
}: MessageInputProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative w-full mt-6"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent -top-20 pointer-events-none" />
      <div className="relative flex flex-col sm:flex-row gap-2 sm:gap-3 bg-background/90 backdrop-blur-md p-3 sm:p-4 
        rounded-xl border border-blue-500/20 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative flex-1">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && !isDisabled && !isLoading && handleSend()}
            placeholder={isDisabled ? "Simulation is paused..." : "Type a message to test..."}
            className={cn(
              "flex-1 bg-background/90 backdrop-blur-sm border-blue-500/20 focus:border-blue-500/50",
              "transition-all duration-300 pr-10 h-11 sm:h-12 text-sm sm:text-base rounded-xl text-foreground",
              isDisabled && "opacity-50"
            )}
            disabled={isDisabled || isLoading}
          />
          {isDisabled && (
            <Pause className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-4 h-4" />
          )}
        </div>
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto"
        >
          <Button 
            onClick={handleSend} 
            className={cn(
              "bg-blue-500/20 hover:bg-blue-500/30 text-blue-300",
              "transition-all duration-300 w-full sm:w-auto gap-2 shadow-lg hover:shadow-xl rounded-xl",
              "h-11 sm:h-12 px-4 sm:px-6 text-sm sm:text-base font-medium relative overflow-hidden",
              "border border-blue-500/30 hover:border-blue-500/50"
            )}
            disabled={isDisabled || isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                <span className="hidden sm:inline">Processing...</span>
              </>
            ) : (
              <>
                <span className="hidden sm:inline">Send Message</span>
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};