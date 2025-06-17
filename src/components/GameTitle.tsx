
import { Gavel } from "lucide-react";

const GameTitle = () => {
  return (
    <div className="text-center mb-8 mt-6">
      <div className="flex items-center justify-center gap-2 animate-fade-in">
        <Gavel className="w-10 h-10 text-court-primary" />
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-court-primary to-court-accent text-transparent bg-clip-text">
          Virtual Courtroom Simulation
        </h1>
        <Gavel className="w-10 h-10 text-court-accent" />
      </div>
      <p className="text-lg md:text-xl text-muted-foreground mt-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        Step into the shoes of a legal professional and argue your case!
      </p>
    </div>
  );
};

export default GameTitle;
