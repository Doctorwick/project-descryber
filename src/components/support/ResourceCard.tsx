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
        return <LifeBuoy className="h-5 w-5 text-red-400" />;
      case "mental":
        return <Heart className="h-5 w-5 text-pink-400" />;
      case "communication":
        return <MessageSquare className="h-5 w-5 text-purple-400" />;
      default:
        return <Sparkles className="h-5 w-5 text-orange-400" />;
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
        <Card className="bg-white/90 backdrop-blur-sm border-purple-100 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300">
          <CardHeader className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {getCategoryIcon(resource.category)}
                <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent capitalize">
                  {resource.category}
                </span>
              </div>
              <ExternalLink className="h-4 w-4 text-purple-400" />
            </div>
            <CardTitle className="text-lg font-bold bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
              {resource.name}
            </CardTitle>
            <CardDescription className="text-sm text-gray-600 mt-1">
              {resource.description}
            </CardDescription>
          </CardHeader>
        </Card>
      </a>
    </motion.div>
  );
};