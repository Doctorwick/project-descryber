import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

interface FilterControlsProps {
  filter: "all" | "harmful";
  setFilter: (value: "all" | "harmful") => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  sortOrder: "newest" | "oldest";
  setSortOrder: (value: "newest" | "oldest") => void;
}

export const FilterControls = ({
  filter,
  setFilter,
  searchTerm,
  setSearchTerm,
  sortOrder,
  setSortOrder,
}: FilterControlsProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between glass p-4 rounded-xl"
    >
      <div className="flex flex-1 gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-blue-400" />
          <Input
            placeholder="Search messages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 bg-background/70 border-blue-500/20 focus:border-blue-500/50 transition-colors"
          />
        </div>
        <Select
          value={filter}
          onValueChange={(value: "all" | "harmful") => setFilter(value)}
        >
          <SelectTrigger className="w-[140px] bg-background/70 border-blue-500/20 hover:border-blue-500/50 transition-colors">
            <SelectValue placeholder="Filter messages" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Messages</SelectItem>
            <SelectItem value="harmful">Harmful Only</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={sortOrder}
          onValueChange={(value: "newest" | "oldest") => setSortOrder(value)}
        >
          <SelectTrigger className="w-[140px] bg-background/70 border-blue-500/20 hover:border-blue-500/50 transition-colors">
            <SelectValue placeholder="Sort order" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </motion.div>
  );
};