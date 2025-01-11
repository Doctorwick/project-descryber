import { Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div 
      className="relative w-12 h-12 sm:w-14 sm:h-14"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Shield className="w-full h-full text-[#8B5CF6]" />
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-[#E5DEFF] animate-pulse-slow" />
      </motion.div>
    </motion.div>
  );
};