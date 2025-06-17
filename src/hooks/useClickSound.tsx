import { useEffect, useRef } from "react"

export default function useClickSound() {
  // Point to the file in /public
  const audioRef = useRef<HTMLAudioElement>(
    typeof Audio !== "undefined" 
      ? new Audio("/sounds/clicking.mp3") 
      : null
  )

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // reset to start, then play
    const handleClick = () => {
      audio.currentTime = 0
      audio.play().catch(() => {
        // Safari / mobile may block autoplay; ignore errors
      })
    }

    // Listen to all clicks on the document
    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return null
}
