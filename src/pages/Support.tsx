import { Navbar } from "@/components/Navbar";
import { ResourceDirectory } from "@/components/support/ResourceDirectory";
import { motion } from "framer-motion";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 pt-24 pb-12"
      >
        <ResourceDirectory />
      </motion.div>
    </div>
  );
};

export default Support;