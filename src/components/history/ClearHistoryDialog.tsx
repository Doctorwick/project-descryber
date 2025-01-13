import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";

interface ClearHistoryDialogProps {
  onClear: () => void;
}

export const ClearHistoryDialog = ({ onClear }: ClearHistoryDialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button 
          variant="destructive" 
          className="hover:scale-105 transition-transform flex items-center gap-2"
        >
          <Trash2 className="w-4 h-4" />
          Clear History
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="glass border border-purple-100/20">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete your entire message history. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="hover:bg-gray-100 transition-colors">Cancel</AlertDialogCancel>
          <AlertDialogAction 
            onClick={onClear}
            className="bg-red-500 hover:bg-red-600 transition-colors"
          >
            Delete Everything
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};