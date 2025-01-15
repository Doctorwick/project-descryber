import { motion } from "framer-motion";
import { ExternalLink, LifeBuoy, HelpCircle, MessageSquare, Info, Heart, Sparkles } from "lucide-react";
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
        return <LifeBuoy className="h-5 w-5 text-blue-400" />;
      case "mental":
        return <Heart className="h-5 w-5 text-blue-400" />;
      case "communication":
        return <MessageSquare className="h-5 w-5 text-blue-400" />;
      default:
        return <Sparkles className="h-5 w-5 text-blue-400" />;
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
        <Card className="bg-background/90 backdrop-blur-sm border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
          <CardHeader className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {getCategoryIcon(resource.category)}
                <span className="text-sm font-medium text-blue-400 capitalize">
                  {resource.category}
                </span>
              </div>
              <ExternalLink className="h-4 w-4 text-blue-400" />
            </div>
            <CardTitle className="text-lg font-bold text-blue-300">
              {resource.name}
            </CardTitle>
            <CardDescription className="text-sm text-gray-400 mt-1">
              {resource.description}
            </CardDescription>
          </CardHeader>
        </Card>
      </a>
    </motion.div>
  );
};