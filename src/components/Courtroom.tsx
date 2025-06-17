// src/components/Courtroom.tsx

import { useState, useEffect } from "react"
import {
  Book,
  Gavel,
  ThumbsUp,
  ThumbsDown,
  Clock,
  Lightbulb,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/components/ui/sonner"
import type { CaseData, Stage, ArgOption } from "@/lib/cases"

interface CourtroomProps {
  role: "prosecutor" | "defence"
  caseData: CaseData
  onComplete: (score: number) => void
}

export default function Courtroom({
  role,
  caseData,
  onComplete,
}: CourtroomProps) {
  const TIME_LIMIT = 180 // 3 minutes per MCQ

  const [stageIndex, setStageIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT)
  const [isObjecting, setIsObjecting] = useState(false)
  const [selectedArg, setSelectedArg] = useState<number | null>(null)

  const stages: Stage[] =
    role === "prosecutor"
      ? caseData.prosecutorStages
      : caseData.defenderStages

  // Kick off a countdown on each new stage
  useEffect(() => {
    setTimeLeft(TIME_LIMIT)
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer)
          nextStage()
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [stageIndex])

  const current = stages[stageIndex]

  function object() {
    setIsObjecting(true)
    const delta = Math.random() > 0.5 ? 10 : -5
    setScore((s) => s + delta)
    delta > 0
      ? toast.success(`Objection sustained! +${delta} points`)
      : toast.error(`Objection overruled! ${delta} points`)
    setTimeout(() => setIsObjecting(false), 1500)
  }

  function pick(i: number) {
    if (selectedArg != null) return
    setSelectedArg(i)
    const opt: ArgOption = current.arguments[i]
    const pts = opt.quality === "good" ? 15 : opt.quality === "medium" ? 8 : 3
    setScore((s) => s + pts)
    toast(opt.feedback, {
      position: "bottom-center",
      icon:
        opt.quality === "good"
          ? <ThumbsUp />
          : opt.quality === "poor"
          ? <ThumbsDown />
          : undefined,
    })
    setTimeout(nextStage, 2000)
  }

  function nextStage() {
    setSelectedArg(null)
    if (stageIndex < stages.length - 1) {
      setStageIndex((i) => i + 1)
    } else {
      onComplete(score)
    }
  }

  return (
    <div className="animate-fade-in flex flex-col items-center space-y-6">
      {/* Case info */}
      <Card className="w-full max-w-3xl bg-white/90 backdrop-blur-sm shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <Book className="w-6 h-6 text-court-primary" />
            <h3 className="text-xl font-semibold">{caseData.title}</h3>
          </div>
          <p className="mt-2 text-gray-700 leading-relaxed whitespace-pre-line">
            {caseData.introductionText}
          </p>
        </CardContent>
      </Card>

      {/* Stage header */}
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Gavel
              className={
                isObjecting
                  ? "animate-gavel-slam text-court-accent"
                  : "text-court-primary"
              }
            />
            <h2 className="text-2xl font-bold">{current.stage}</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <span className="font-mono font-bold">{timeLeft}s</span>
            </div>
            <span className="font-bold">Score: {score}</span>
          </div>
        </div>

        {/* ← Here’s the key part → */}
        <Progress
          value={(timeLeft / TIME_LIMIT) * 100}
          className="h-3 w-full bg-gray-200 rounded-full mb-6"
        />
        {/* The built-in indicator will fill with court-primary and shrink as timeLeft decreases */}

        {/* Question card */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-lg font-medium mb-4">{current.prompt}</p>

            {current.hint && (
              <div className="
                mb-4 flex items-center gap-2
                bg-court-primary/10 text-court-primary
                px-3 py-1 rounded-lg text-sm font-medium
              ">
                <Lightbulb className="w-4 h-4" />
                <span>{current.hint}</span>
              </div>
            )}

            <div className="flex justify-end">
              <Button variant="outline" onClick={object} disabled={isObjecting}>
                Objection!
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Answer options */}
        <div className="grid gap-4 w-full max-w-4xl">
          {current.arguments.map((arg, idx) => (
            <button
              key={idx}
              onClick={() => pick(idx)}
              disabled={selectedArg != null}
              className={`p-4 text-left rounded-lg border bg-white transition
                ${selectedArg === idx ? "ring-2 ring-court-primary" : "hover:shadow-md"}
              `}
            >
              <p className="text-lg">{arg.text}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

