
import { motion } from "framer-motion";
import { Logo } from "../Logo";

export const SimulationHeader = () => {
  return (
    <motion.div 
      className="flex items-center gap-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-2 sm:p-2.5 bg-gradient-to-br from-cyber-blue to-deep-blue rounded-xl 
        shadow-inner group-hover:from-deep-blue group-hover:to-cyber-blue transition-colors duration-300">
        <Logo />
      </div>
      <div>
        <h1 className="text-xl sm:text-2xl font-bold font-orbitron text-gradient">
          Message Filter Demo
        </h1>
        <p className="text-sm sm:text-base font-archivo text-cyber-blue mt-1">
          Test our AI-powered content filtering system
        </p>
      </div>
    </motion.div>
  );
};
