import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  hasNext: boolean;
  hasPrevious: boolean;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, hasNext, hasPrevious, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!hasPrevious}
        variant="outline"
        size="lg"
        className="gap-2"
      >
        <ChevronLeft size={20} />
        Previous
      </Button>
      
      <span className="text-lg font-semibold text-primary">
        Page {currentPage}
      </span>
      
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasNext}
        variant="outline"
        size="lg"
        className="gap-2"
      >
        Next
        <ChevronRight size={20} />
      </Button>
    </div>
  );
};
