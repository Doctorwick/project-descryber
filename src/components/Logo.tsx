
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ 
          scale: 1.05,
          filter: "brightness(1.2)",
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
        className="relative w-6 h-6"
      >
        <Shield className="w-full h-full text-cyber-blue" />
      </motion.div>
      
      <motion.span 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-lg font-bold font-orbitron text-white"
      >
        Descryber
      </motion.span>
    </div>
  );
};
