// src/pages/Index.tsx

import { useState } from "react"
import useClickSound from "@/hooks/useClickSound"
import GameTitle from "@/components/GameTitle"
import CaseSelection from "@/components/CaseSelection"
import RoleSelection from "@/components/RoleSelection"
import CaseIntroduction from "@/components/CaseIntroduction"
import Courtroom from "@/components/Courtroom"
import GameResults from "@/components/GameResults"
import { cases } from "@/lib/cases"

type Step = "case" | "role" | "intro" | "court" | "results"

export default function Index() {
  // start click‑sound hook
  useClickSound()

  const [step, setStep] = useState<Step>("case")
  const [caseId, setCaseId] = useState<string>("")
  const [role, setRole] = useState<"prosecutor" | "defence" | null>(null)
  const [score, setScore] = useState<number>(0)

  const selectedCase = cases.find((c) => c.id === caseId)!

  return (
    <div className="courtroom-bg min-h-screen p-4 md:p-8">
      <div className="container mx-auto">
        <GameTitle />

        {step === "case" && (
          <CaseSelection
            onCaseSelected={(id) => {
              setCaseId(id)
              setStep("role")
            }}
          />
        )}

        {step === "role" && (
          <RoleSelection
            onRoleSelected={(r) => {
              setRole(r as any)
              setStep("intro")
            }}
          />
        )}

        {step === "intro" && role && (
          <CaseIntroduction
            caseData={selectedCase}
            selectedRole={role}
            onBack={() => setStep("role")}
            onContinue={() => setStep("court")}
          />
        )}

        {step === "court" && role && (
          <Courtroom
            role={role}
            caseData={selectedCase}
            onComplete={(s) => {
              setScore(s)
              setStep("results")
            }}
          />
        )}

        {step === "results" && (
          <GameResults score={score} onPlayAgain={() => window.location.reload()} />
        )}
      </div>
    </div>
  )
}
