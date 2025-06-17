
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DifficultySelectionProps {
  onDifficultySelected: (difficulty: string) => void;
}

const DifficultySelection = ({ onDifficultySelected }: DifficultySelectionProps) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const difficulties = [
    {
      level: "easy",
      title: "Easy",
      description: "Simple arguments, generous time limits, and helpful hints.",
      timeLimit: "90 seconds"
    },
    {
      level: "medium",
      title: "Medium",
      description: "Balanced arguments, moderate time limits, occasional hints.",
      timeLimit: "60 seconds"
    },
    {
      level: "hard",
      title: "Hard",
      description: "Complex arguments, strict time limits, minimal assistance.",
      timeLimit: "30 seconds"
    }
  ];

  const handleDifficultySelect = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
  };

  const handleContinue = () => {
    if (selectedDifficulty) {
      onDifficultySelected(selectedDifficulty);
    }
  };

  return (
    <div className="animate-fade-in flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Select Difficulty Level
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {difficulties.map((difficulty) => (
          <button
            key={difficulty.level}
            onClick={() => handleDifficultySelect(difficulty.level)}
            className={`difficulty-btn ${difficulty.level} ${
              selectedDifficulty === difficulty.level ? "selected" : ""
            }`}
          >
            <span className="text-xl font-bold">{difficulty.title}</span>
            <span className="text-sm text-center">{difficulty.description}</span>
            <span className="mt-2 text-xs font-semibold">
              Time Limit: {difficulty.timeLimit}
            </span>
          </button>
        ))}
      </div>

      <Button
        onClick={handleContinue}
        disabled={!selectedDifficulty}
        className="mt-8 bg-court-primary hover:bg-court-primary/80 text-white px-8 py-6 text-lg gap-2 rounded-full"
      >
        Begin Trial <ArrowRight className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default DifficultySelection;
