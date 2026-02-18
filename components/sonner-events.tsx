'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { toast } from 'sonner'

const ACK_KEY = 'vault-acknowledged'
let hasShownWelcomeInMemory = false

export function SonnerEvents() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/') {
      return
    }

    const hasShownWelcomeInSession = () => {
      if (hasShownWelcomeInMemory) {
        return true
      }

      try {
        const hasShown = sessionStorage.getItem(ACK_KEY) === 'true'
        hasShownWelcomeInMemory = hasShown
        return hasShown
      } catch {
        return false
      }
    }

    const markWelcomeAsShown = () => {
      hasShownWelcomeInMemory = true

      try {
        sessionStorage.setItem(ACK_KEY, 'true')
      } catch {
        // Fallback to in-memory state if storage is unavailable.
      }
    }

    if (!hasShownWelcomeInSession()) {
      toast('Thanks for stopping by', {
        description: 'Welcome to the vault.',
      })
      markWelcomeAsShown()
    }

    const handleOnline = () =>
      toast.success('Back online', {
        description: 'Your connection is restored.',
      })
    const handleOffline = () =>
      toast.error('You are offline', {
        description: 'Some content may be unavailable.',
      })

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    if (!navigator.onLine) {
      handleOffline()
    }

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [pathname])

  return null
}
