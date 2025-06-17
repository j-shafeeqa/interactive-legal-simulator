// src/components/RoleSelection.tsx

import { useState } from "react"
import { User, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Role {
  id: "prosecutor" | "defence"
  title: string
  description: string
  icon: JSX.Element
  borderClass: string
  topBarClass: string
  iconBgClass: string
}

const roles: Role[] = [
  {
    id: "prosecutor",
    title: "Prosecutor",
    description:
      "Represent the law and seek justice by proving violations of legal regulations.",
    icon: <User className="w-8 h-8 text-court-accent" />,
    borderClass: "border-court-accent",
    topBarClass: "bg-court-accent",
    iconBgClass: "bg-court-accent/20",
  },
  {
    id: "defence",
    title: "Defence Lawyer",
    description:
      "Protect the rights of the accused and ensure fair application of the law.",
    icon: <Users className="w-8 h-8 text-court-primary" />,
    borderClass: "border-court-primary",
    topBarClass: "bg-court-primary",
    iconBgClass: "bg-court-primary/20",
  },
]

interface RoleSelectionProps {
  onRoleSelected: (role: "prosecutor" | "defence") => void
}

export default function RoleSelection({ onRoleSelected }: RoleSelectionProps) {
  const [selectedRole, setSelectedRole] = useState<"prosecutor" | "defence" | null>(null)

  return (
    <div className="flex flex-col items-center animate-fade-in">
      <h2 className="text-3xl font-bold mb-8">Choose Your Role</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-10">
        {roles.map((role) => {
          const isActive = selectedRole === role.id
          return (
            <div
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`
                relative cursor-pointer rounded-2xl bg-white p-6 transform transition
                ${isActive
                  ? `${role.borderClass} shadow-lg scale-105`
                  : "border border-transparent hover:shadow-md"}
              `}
            >
              {/* Top accent bar */}
              <div
                className={`
                  absolute top-0 left-0 h-1 w-full
                  ${isActive ? role.topBarClass : "bg-gray-200"}
                `}
              />

              {/* Icon */}
              <div
                className={`
                  ${role.iconBgClass}
                  w-16 h-16 rounded-full flex items-center justify-center mb-4
                `}
              >
                {role.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
              <p className="text-sm text-gray-600">{role.description}</p>
            </div>
          )
        })}
      </div>

      {/* Continue Button */}
      <div className="w-full flex justify-center">
        <Button
          onClick={() => selectedRole && onRoleSelected(selectedRole)}
          disabled={!selectedRole}
          className="
            inline-flex items-center gap-2
            px-8 py-3 rounded-full
            bg-gradient-to-r from-court-primary to-court-accent
            text-white font-semibold
            disabled:opacity-50 disabled:cursor-not-allowed
            hover:opacity-90 transition
          "
        >
          Continue
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

