
import { Trophy, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface GameResultsProps {
  score: number;
  onPlayAgain: () => void;
}

const GameResults = ({ score, onPlayAgain }: GameResultsProps) => {
  // Calculate rating and badge based on score
  let rating;
  let badge;
  
  if (score >= 50) {
    rating = "Master Defender";
    badge = (
      <div className="relative">
        <div className="absolute -top-2 -right-2">
          <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-bounce-subtle" />
        </div>
        <Trophy className="w-24 h-24 text-court-gold fill-court-gold/20" />
      </div>
    );
  } else if (score >= 35) {
    rating = "Skilled Advocate";
    badge = <Trophy className="w-20 h-20 text-court-primary fill-court-primary/10" />;
  } else {
    rating = "Rising Advocate";
    badge = <Trophy className="w-16 h-16 text-court-secondary fill-court-secondary/5" />;
  }
  
  // Generate feedback based on score
  const getFeedback = () => {
    if (score >= 50) {
      return "Outstanding performance! Your arguments were persuasive and well-timed. You showed excellent courtroom strategy.";
    } else if (score >= 35) {
      return "Good work! You made several strong arguments and handled objections well. With more practice, you'll be unbeatable.";
    } else {
      return "You've got potential! Keep working on your argument choices and timing. Practice makes perfect in the courtroom.";
    }
  };
  
  return (
    <div className="animate-fade-in flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Trial Results
      </h2>
      
      <Card className="max-w-2xl w-full bg-white/90 backdrop-blur-sm shadow-xl border-court-primary/20 animate-scale-in">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center p-4">
            {badge}
            
            <h3 className="text-2xl font-bold mt-6 mb-2 bg-gradient-to-r from-court-primary to-court-accent text-transparent bg-clip-text">
              {rating}
            </h3>
            
            <p className="text-3xl font-bold mb-4">
              Score: {score}
            </p>
            
            <div className="my-4 w-full h-px bg-gradient-to-r from-transparent via-court-primary/30 to-transparent" />
            
            <p className="text-lg mb-6">
              {getFeedback()}
            </p>
            
            <Button
              onClick={onPlayAgain}
              className="bg-court-primary hover:bg-court-primary/80 text-white px-8 py-6 text-lg gap-2 rounded-full"
            >
              Play Again <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GameResults;
