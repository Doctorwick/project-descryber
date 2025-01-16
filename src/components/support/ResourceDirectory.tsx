import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, Info, Sparkles, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ResourceCard } from "./ResourceCard";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

type Resource = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  priority: number;
};

export const ResourceDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: resources = [], isLoading } = useQuery({
    queryKey: ["resources"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("support_resources")
        .select("*")
        .eq("active", true)
        .order("priority", { ascending: true });

      if (error) throw error;
      return data as Resource[];
    },
  });

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(resources.map((r) => r.category)));

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          We've Got Your Back!
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Life can be tough sometimes, but you're not alone. Find support, advice, and resources that actually get you.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass p-6 rounded-2xl mb-8 space-y-6 border border-blue-100/50"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search for anything you need help with..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 text-lg border-blue-100 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
          />
        </div>

        <div>
          <h3 className="text-sm font-medium text-blue-700 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Quick Filters
          </h3>
          <div className="flex gap-2 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                !selectedCategory
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                  : "bg-white border border-blue-100 text-gray-700 hover:bg-blue-50"
              }`}
            >
              All Resources
            </motion.button>
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm capitalize transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                    : "bg-white border border-blue-100 text-gray-700 hover:bg-blue-50"
                }`}
              >
                {category.replace("-", " ")}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-48 bg-blue-50 rounded-2xl animate-pulse"
            />
          ))}
        </div>
      ) : filteredResources.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Heart className="h-12 w-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-700">Nothing found yet</h3>
          <p className="text-gray-500">Try searching for something else or check out all resources</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ResourceCard resource={resource} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
