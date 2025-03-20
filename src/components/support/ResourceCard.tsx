
import { motion } from "framer-motion";
import { ExternalLink, LifeBuoy, HelpCircle, MessageSquare, Heart, Sparkles, BookOpen } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ResourceCardProps {
  resource: {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
  };
}

export const ResourceCard = ({ resource }: ResourceCardProps) => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "crisis":
        return <LifeBuoy className="h-5 w-5 text-cyber-blue" />;
      case "mental":
        return <Heart className="h-5 w-5 text-cyber-blue" />;
      case "communication":
        return <MessageSquare className="h-5 w-5 text-cyber-blue" />;
      case "addiction":
        return <BookOpen className="h-5 w-5 text-cyber-blue" />;
      default:
        return <Sparkles className="h-5 w-5 text-cyber-blue" />;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Card className="bg-background/90 backdrop-blur-sm border-deep-blue/20 hover:shadow-xl hover:shadow-cyber-blue/5 transition-all duration-300">
          <CardHeader className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {getCategoryIcon(resource.category)}
                <span className="text-sm font-medium text-cyber-blue capitalize font-archivo">
                  {resource.category}
                </span>
              </div>
              <ExternalLink className="h-4 w-4 text-cyber-blue" />
            </div>
            <CardTitle className="text-lg font-bold text-deep-blue font-orbitron">
              {resource.name}
            </CardTitle>
            <CardDescription className="text-sm text-gray-500 mt-1 font-archivo">
              {resource.description}
            </CardDescription>
          </CardHeader>
        </Card>
      </a>
    </motion.div>
  );
};
