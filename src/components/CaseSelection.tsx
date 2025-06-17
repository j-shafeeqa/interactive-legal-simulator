// src/components/CaseSelection.tsx

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cases } from '@/lib/cases'

interface CaseSelectionProps {
  onCaseSelected: (caseId: string) => void
}

export default function CaseSelection({ onCaseSelected }: CaseSelectionProps) {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="flex flex-col items-center animate-fade-in">
      <h2 className="text-3xl font-bold mb-8">Select a Case</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {cases.map((c) => {
          const isActive = c.id === selected
          return (
            <Card
              key={c.id}
              onClick={() => setSelected(c.id)}
              className={`
                cursor-pointer transform transition duration-200
                ${isActive 
                  ? 'scale-100 shadow-2xl border-court-primary' 
                  : 'hover:scale-[1.02] hover:shadow-lg border-transparent'}
                border-2 rounded-xl bg-white overflow-hidden
              `}
            >
              {/* gradient header bar */}
              <div
                className={`
                  h-1 w-full
                  ${isActive 
                    ? 'bg-gradient-to-r from-court-primary to-court-accent'
                    : 'bg-gray-200'}
                `}
              />

              <CardContent className="p-6 flex flex-col h-full">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug">
                  {c.title}
                </h3>

                {/* Intro text */}
                <p className="text-sm text-gray-600 flex-grow leading-relaxed whitespace-pre-wrap">
                  {c.introductionText}
                </p>

                {/* Selected badge */}
                {isActive && (
                  <span className="mt-6 inline-block px-3 py-1 text-xs font-medium text-white bg-court-primary rounded-full">
                    Selected
                  </span>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Centered Continue button */}
      <div className="w-full flex justify-center mt-10">
        <Button
          onClick={() => selected && onCaseSelected(selected)}
          disabled={!selected}
          className="
            inline-flex items-center gap-2
            px-8 py-3 rounded-full
            bg-gradient-to-r from-court-primary to-court-accent
            text-white font-semibold
            disabled:opacity-50 disabled:cursor-not-allowed
            transition hover:opacity-90
          "
        >
          Continue
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}


