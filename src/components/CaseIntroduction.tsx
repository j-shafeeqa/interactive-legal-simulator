// src/components/CaseIntroduction.tsx

import { useState } from "react"
import { ArrowLeft, ArrowRight, Book, User, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { CaseData } from "@/lib/cases"

interface CaseIntroductionProps {
  caseData: CaseData
  selectedRole: "prosecutor" | "defence"
  onContinue: () => void
  onBack: () => void
}

export default function CaseIntroduction({
  caseData,
  selectedRole,
  onContinue,
  onBack,
}: CaseIntroductionProps) {
  const [slide, setSlide] = useState(0)

  const slides = [
    {
      icon: <Book className="w-12 h-12 text-court-primary" />,
      title: caseData.title,
      content: caseData.introductionText,
    },
    {
      icon:
        selectedRole === "prosecutor" ? (
          <User className="w-12 h-12 text-court-accent" />
        ) : (
          <Users className="w-12 h-12 text-court-primary" />
        ),
      title:
        selectedRole === "prosecutor"
          ? "Your Role: Prosecutor"
          : "Your Role: Defender",
      content:
        selectedRole === "prosecutor"
          ? caseData.prosecutorOverview
          : caseData.defenderOverview,
    },
  ]

  const isLast = slide === slides.length - 1

  const next = () => (isLast ? onContinue() : setSlide((s) => s + 1))
  const prev = () => (slide === 0 ? onBack() : setSlide((s) => s - 1))

  return (
    <div className="flex flex-col items-center space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold">Case Introduction</h2>

      <Card className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <CardContent className="p-8">
          {/* Icon + Title */}
          <div className="flex items-center gap-4 mb-6">
            {slides[slide].icon}
            <h3 className="text-2xl font-semibold text-gray-900">
              {slides[slide].title}
            </h3>
          </div>

          {/* Content */}
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {slides[slide].content}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-between">
            <Button
              variant="outline"
              onClick={prev}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full transition hover:bg-gray-100"
            >
              <ArrowLeft className="w-4 h-4" />{" "}
              {slide === 0 ? "Back" : "Previous"}
            </Button>

            <Button
              onClick={next}
              className="
                inline-flex items-center gap-2
                px-6 py-2 rounded-full
                bg-gradient-to-r from-court-primary to-court-accent
                text-white font-semibold
                hover:opacity-90 transition
              "
            >
              {isLast ? "Let’s Get Started" : "Next"}{" "}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Slide indicators */}
      <div className="flex gap-2">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`
              block h-2 w-8 rounded-full transition
              ${idx === slide
                ? "bg-court-primary"
                : "bg-gray-300 hover:bg-gray-400"}
            `}
          />
        ))}
      </div>
    </div>
  )
}
