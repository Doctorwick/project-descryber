import { Button } from "@/components/ui/button";
import { Shield, MessageSquare, Users, Database, Settings, ArrowRight, Sparkles, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 overflow-hidden">
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
            <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse-slow" />
          </div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 mx-auto w-24 h-24"
          >
            <div className="relative w-full h-full">
              <Shield className="w-full h-full text-purple-500" />
              <Sparkles className="absolute inset-0 m-auto w-12 h-12 text-purple-200 animate-pulse-slow" />
            </div>
          </motion.div>

          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold text-gradient">
            Your Safe Space Online
          </h1>
          <p className="mb-8 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stay protected and express yourself freely! Descryber's got your back with 
            smart AI that keeps the trolls away. 🛡️✨
          </p>
          <Link to="/simulation">
            <Button 
              className="button-gradient px-6 sm:px-8 py-6 text-lg rounded-2xl 
                group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Try It Now!
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
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
          How We Keep You Safe ✨
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-purple-500" />}
            title="Smart Protection"
            description="Our AI catches toxic messages before they reach you, keeping your space positive and safe! 🛡️"
            delay={0.1}
          />
          <FeatureCard
            icon={<MessageSquare className="w-8 h-8 text-purple-500" />}
            title="Express Yourself"
            description="Chat freely knowing you're protected. Be yourself without worrying about trolls! 💬"
            delay={0.2}
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 text-purple-500" />}
            title="Community Love"
            description="Join a supportive community that's got your back. You're never alone here! 💜"
            delay={0.3}
          />
          <FeatureCard
            icon={<Star className="w-8 h-8 text-purple-500" />}
            title="Always Available"
            description="24/7 protection that never sleeps. We're here whenever you need us! ⭐"
            delay={0.4}
          />
          <FeatureCard
            icon={<Heart className="w-8 h-8 text-purple-500" />}
            title="Your Privacy First"
            description="Your data stays yours. We protect your privacy like it's our own! 🔒"
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
              Why We Created Descryber 💭
            </h2>
            <div className="glass p-8 rounded-2xl">
              <p className="text-gray-600 leading-relaxed text-lg">
                It all started when Aaron, just like you, faced online harassment at 14. 
                The trolls thought they could get away with it by deleting evidence - but 
                that's when we decided enough was enough! Now we're here to make sure 
                no one else goes through what Aaron did. We've got your back, always! 💪
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
            Coming to Your Favorite Apps Soon! 📱
          </h2>
          <p className="mb-8 text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're on your phone or computer, Descryber will be there to protect 
            you. Stay tuned for more awesome updates! ✨
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
      className="glass p-6 rounded-2xl hover-card"
    >
      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gradient">{title}</h3>
      <p className="text-gray-600 text-lg">{description}</p>
    </motion.div>
  );
}