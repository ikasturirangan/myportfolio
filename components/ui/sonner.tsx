'use client'

import * as React from 'react'
import { Toaster as Sonner } from 'sonner'
import { cn } from '@/lib/utils'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ className, toastOptions, ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="system"
      position="bottom-right"
      richColors
      closeButton
      className={cn('toaster group', className)}
      toastOptions={{
        classNames: {
          toast:
            'group toast rounded-xl border border-zinc-200/70 bg-white text-zinc-900 shadow-lg dark:border-zinc-800/60 dark:bg-zinc-950 dark:text-zinc-50',
          title: 'text-sm font-medium',
          description: 'text-xs text-zinc-500 dark:text-zinc-400',
          actionButton:
            'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200',
          cancelButton:
            'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800',
        },
        ...toastOptions,
      }}
      {...props}
    />
  )
}

export { Toaster }
