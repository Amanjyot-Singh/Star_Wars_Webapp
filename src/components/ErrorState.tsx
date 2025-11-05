import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorState = ({ message = "Failed to load characters", onRetry }: ErrorStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Alert variant="destructive" className="max-w-md">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
      {onRetry && (
        <Button onClick={onRetry} className="mt-4" variant="outline">
          Try Again
        </Button>
      )}
    </div>
  );
};
