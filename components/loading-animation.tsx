"use client"

import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 animate-gradient">
      <div className="text-center space-y-6">
        <div className="relative">
          <Sparkles className="h-16 w-16 text-white animate-float mx-auto" />
          <div className="absolute inset-0 h-16 w-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white animate-pulse">ClearView Pro</h2>
          <div className="flex space-x-1 justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce stagger-1"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce stagger-2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
