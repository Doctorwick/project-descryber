import { Button } from "@/components/ui/button";
import { Shield, MessageSquare, Users, Star, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-16 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse-slow" />
          </div>

          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold text-gradient">
            Your Space, Your Rules
          </h1>
          <p className="mb-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Let Descryber be your digital guardian, keeping your online space safe and drama-free.
          </p>
          <Link to="/simulation">
            <Button 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 
                px-6 sm:px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 
                transition-all duration-300 border border-blue-400/20"
            >
              Try It Now
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gradient"
        >
          How We Keep Your Space Safe
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-blue-400" />}
            title="Smart Protection"
            description="Our AI catches toxic content before it reaches you, keeping your space positive"
            delay={0.1}
          />
          <FeatureCard
            icon={<MessageSquare className="w-8 h-8 text-blue-400" />}
            title="Express Yourself"
            description="Chat freely without worrying about negativity"
            delay={0.2}
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 text-blue-400" />}
            title="Community"
            description="Join a space that values respect and authenticity"
            delay={0.3}
          />
          <FeatureCard
            icon={<Star className="w-8 h-8 text-blue-400" />}
            title="Always Available"
            description="24/7 protection that never sleeps"
            delay={0.4}
          />
          <FeatureCard
            icon={<Lock className="w-8 h-8 text-blue-400" />}
            title="Privacy First"
            description="Your space, your rules - we protect your privacy"
            delay={0.5}
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-gradient">
              The Story Behind Descryber
            </h2>
            <div className="glass p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <p className="text-muted-foreground leading-relaxed text-lg">
                It started when Aaron was dealing with online drama at 14. 
                Now we're here ensuring you can be yourself online without the stress. 
                Your voice matters, and we've got your back.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="container mx-auto px-4 py-20 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h2 className="text-3xl font-bold mb-6 text-gradient">
            Coming to Your Favorite Apps Soon
          </h2>
          <p className="mb-8 text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're on your phone or laptop, Descryber will be there to keep 
            your space safe. Stay tuned for more updates.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-500/10"
    >
      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gradient">
        {title}
      </h3>
      <p className="text-muted-foreground text-lg">{description}</p>
    </motion.div>
  );
}