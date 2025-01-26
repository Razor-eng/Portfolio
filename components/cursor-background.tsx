"use client"

import React, { useState, useEffect, useCallback } from "react"

export default function LightCursorBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const updateMousePosition = useCallback((e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
    }, [])

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition)
        return () => window.removeEventListener("mousemove", updateMousePosition)
    }, [updateMousePosition])

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div
                className="w-full h-full transition-opacity duration-300 ease-in-out opacity-60 dark:opacity-40"
                style={{
                    background: `
            radial-gradient(
              800px circle at ${mousePosition.x}px ${mousePosition.y}px,
              var(--primary-glow),
              transparent 40%
            ),
            radial-gradient(
              600px circle at ${mousePosition.x}px ${mousePosition.y}px,
              var(--secondary-glow),
              transparent 40%
            ),
            radial-gradient(
              400px circle at ${mousePosition.x}px ${mousePosition.y}px,
              var(--tertiary-glow),
              transparent 40%
            )
          `,
                }}
            />
        </div>
    )
}

