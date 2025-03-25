
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { useToast } from "@/components/ui/use-toast";
import { MessageList } from "@/components/simulation/MessageList";
import { MessageInput } from "@/components/simulation/MessageInput";
import { SimulationControls } from "@/components/simulation/SimulationControls";
import { SimulationHeader } from "@/components/simulation/SimulationHeader";
import { analyzeMessage } from "@/utils/messageFilter";
import { storeMessage } from "@/utils/messageStorage";
import { Message } from "@/types/message";
import { useSimulationStore } from "@/store/simulationStore";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export default function Simulation() {
  const [input, setInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();
  const { 
    isActive, 
    isPaused, 
    messages, 
    setIsActive, 
    setIsPaused, 
    setMessages, 
    reset 
  } = useSimulationStore();

  const handleSend = async () => {
    if (!input.trim() || !isActive || isPaused || isAnalyzing) return;

    try {
      setIsAnalyzing(true);
      
      // Add user message immediately for responsive UI
      const pendingMessageId = Date.now();
      const userMessage: Message = {
        id: pendingMessageId,
        text: input,
        sender: "user",
        timestamp: new Date().toISOString()
      };
      
      setMessages([...messages, userMessage]);
      setInput("");
      
      // Analyze the message
      const filterResult = await analyzeMessage(input).catch(error => {
        console.error("Error analyzing message:", error);
        // Provide fallback analysis if the advanced analyzer fails
        return {
          isHarmful: /\b(fuck|shit|ass|bitch|cunt|nigger|faggot)\b/i.test(input),
          categories: [],
          severity: "medium",
          confidence: 0.5,
          bypassAttempted: false
        };
      });
      
      // Update the message with filter results
      const updatedUserMessage: Message = {
        ...userMessage,
        isHidden: filterResult.isHarmful,
        filterResult
      };
      
      // Update the message in the state
      setMessages(prev => prev.map(msg => 
        msg.id === pendingMessageId ? updatedUserMessage : msg
      ));
      
      // Store the message
      await storeMessage(updatedUserMessage);

      if (filterResult.isHarmful) {
        toast({
          title: "Message Hidden",
          description: (
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-destructive" />
              <span>
                Message contained {filterResult.categories.join(", ") || "harmful"} content 
                with {filterResult.severity} severity.
              </span>
            </div>
          ),
          variant: "destructive"
        });
      }

      // Add bot response
      setTimeout(async () => {
        const botMessage: Message = {
          id: Date.now() + 1,
          text: filterResult.isHarmful 
            ? `I noticed that message might contain ${filterResult.categories.join(" and ") || "harmful content"}. Let's keep our conversation respectful.`
            : "Message received! Keep testing our filter system.",
          sender: "bot",
          timestamp: new Date().toISOString()
        };
        setMessages(prevMessages => [...prevMessages, botMessage]);
        await storeMessage(botMessage);
      }, 1000);
    } catch (error) {
      console.error("Error handling message:", error);
      toast({
        title: "Error Processing Message",
        description: "There was a problem processing your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    toast({
      title: "Simulation Started",
      description: "You can now send messages to test the filter.",
    });
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
    toast({
      title: isPaused ? "Simulation Resumed" : "Simulation Paused",
      description: isPaused ? "You can continue sending messages." : "Message sending is paused.",
    });
  };

  const handleStop = () => {
    reset();
    toast({
      title: "Simulation Ended",
      description: "All messages have been saved. Start a new session to continue testing.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 pt-24"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="glass rounded-2xl shadow-xl border border-white/10 
              hover:shadow-2xl transition-shadow duration-300"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <SimulationHeader />
                <SimulationControls
                  isActive={isActive}
                  isPaused={isPaused}
                  onStart={handleStart}
                  onPause={handlePause}
                  onStop={handleStop}
                />
              </div>
              <MessageList messages={messages} />
              <MessageInput
                input={input}
                setInput={setInput}
                handleSend={handleSend}
                isDisabled={!isActive || isPaused}
                isLoading={isAnalyzing}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
