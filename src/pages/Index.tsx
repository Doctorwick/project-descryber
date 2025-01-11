import { Button } from "@/components/ui/button";
import { Shield, MessageSquare, Users, Sparkles, Heart, Star, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 overflow-hidden">
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
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E5DEFF] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse-slow" />
          </div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 mx-auto w-24 h-24"
          >
            <div className="relative w-full h-full animate-float">
              <Shield className="w-full h-full text-[#8B5CF6]" />
              <Sparkles className="absolute inset-0 m-auto w-12 h-12 text-[#E5DEFF]" />
            </div>
          </motion.div>

          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
            Your Space, Your Rules
          </h1>
          <p className="mb-8 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Take control of your digital space with Descryber. Advanced protection that keeps 
            your conversations authentic and drama-free.
          </p>
          <Link to="/simulation">
            <Button 
              className="bg-[#8B5CF6] hover:bg-[#7C3AED] px-6 sm:px-8 py-6 text-lg rounded-2xl 
                shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 
                group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Try It Now
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
          className="text-3xl font-bold text-center mb-12 text-gray-900"
        >
          Protecting Your Digital Space
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-[#8B5CF6]" />}
            title="Smart Protection"
            description="AI-powered filtering that catches toxic content before it reaches you"
            delay={0.1}
          />
          <FeatureCard
            icon={<MessageSquare className="w-8 h-8 text-[#8B5CF6]" />}
            title="Express Yourself"
            description="Chat freely without worrying about negativity or harassment"
            delay={0.2}
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 text-[#8B5CF6]" />}
            title="Community Focus"
            description="Join a community that values respect and authenticity"
            delay={0.3}
          />
          <FeatureCard
            icon={<Star className="w-8 h-8 text-[#8B5CF6]" />}
            title="Always Available"
            description="24/7 protection that never sleeps, always ready when you need it"
            delay={0.4}
          />
          <FeatureCard
            icon={<Heart className="w-8 h-8 text-[#8B5CF6]" />}
            title="Privacy First"
            description="Your privacy is our priority - your space, your rules"
            delay={0.5}
          />
          <FeatureCard
            icon={<Sparkles className="w-8 h-8 text-[#8B5CF6]" />}
            title="Clean Environment"
            description="Maintain a positive space for genuine connections"
            delay={0.6}
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
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              The Story Behind Descryber
            </h2>
            <div className="glass p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <p className="text-gray-600 leading-relaxed text-lg">
                Born from personal experience with online harassment, Descryber was created 
                to ensure everyone has the power to control their digital environment. We believe 
                in making the internet a better place, one conversation at a time.
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
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Coming to Your Favorite Platforms
          </h2>
          <p className="mb-8 text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're on mobile or desktop, Descryber will be there to keep 
            your space safe. Stay tuned for updates.
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
      className="glass p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-purple-100/20"
    >
      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}