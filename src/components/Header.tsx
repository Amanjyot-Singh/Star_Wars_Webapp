import { Rocket } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <Rocket className="text-primary glow-primary" size={40} />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Star Wars Characters
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Explore the galaxy far, far away...
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
