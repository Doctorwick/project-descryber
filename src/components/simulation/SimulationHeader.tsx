import { Shield } from "lucide-react";
import { motion } from "framer-motion";

export const SimulationHeader = () => {
  return (
    <motion.div 
      className="flex items-center gap-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-2.5 sm:p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl 
        shadow-inner group-hover:from-purple-200 group-hover:to-purple-300 transition-colors duration-300">
        <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
      </div>
      <div>
        <h1 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
          from-purple-600 to-purple-800">
          Message Filter Demo
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-1">
          Test our AI-powered content filtering system
        </p>
      </div>
    </motion.div>
  );
};