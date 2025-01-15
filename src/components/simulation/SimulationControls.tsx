import { Button } from "@/components/ui/button";
import { Play, Pause, StopCircle } from "lucide-react";
import { motion } from "framer-motion";

interface SimulationControlsProps {
  isActive: boolean;
  isPaused: boolean;
  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
}

export const SimulationControls = ({
  isActive,
  isPaused,
  onStart,
  onPause,
  onStop
}: SimulationControlsProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto"
    >
      {!isActive ? (
        <Button 
          onClick={onStart}
          className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 hover:border-blue-500/50
            transition-all duration-300 shadow hover:shadow-lg gap-2 h-10 sm:h-11 px-4 sm:px-6 
            text-sm sm:text-base font-medium w-full sm:w-auto rounded-xl"
        >
          <Play className="w-4 h-4 sm:w-5 sm:h-5" />
          Start Simulation
        </Button>
      ) : (
        <>
          <Button 
            onClick={onPause}
            className={`transition-all duration-300 shadow hover:shadow-lg gap-2 h-10 sm:h-11 
              px-4 sm:px-6 text-sm sm:text-base font-medium w-full sm:w-auto rounded-xl
              border border-yellow-500/30 hover:border-yellow-500/50 ${
              isPaused 
                ? 'bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300' 
                : 'bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300'
            }`}
          >
            <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
            {isPaused ? 'Resume' : 'Pause'}
          </Button>
          <Button 
            onClick={onStop}
            className="bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30 hover:border-red-500/50
              transition-all duration-300 shadow hover:shadow-lg gap-2 h-10 sm:h-11 px-4 sm:px-6 
              text-sm sm:text-base font-medium w-full sm:w-auto rounded-xl"
          >
            <StopCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            Stop
          </Button>
        </>
      )}
    </motion.div>
  );
};