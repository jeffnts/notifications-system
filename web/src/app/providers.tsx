'use client'

import { SessionProvider } from 'next-auth/react'

import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/lib/queryClient'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  )
}

export default Providers
