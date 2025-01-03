'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>My Barber Website</h1>
    </main>
  )
}