'use client'
import { TextMorph } from '@/components/ui/text-morph'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { useEffect, useState } from 'react'
import { CopyIcon } from '@radix-ui/react-icons'

function CopyButton() {
  const [text, setText] = useState('Copy')
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  useEffect(() => {
    setTimeout(() => {
      setText('Copy')
    }, 2000)
  }, [text])

  return (
    <button
      onClick={() => {
        setText('Copied')
        navigator.clipboard.writeText(currentUrl)
      }}
      className="font-base flex items-center gap-1 text-center text-sm text-zinc-500 transition-colors dark:text-zinc-400 max-w-[calc(100vw-2rem)] truncate whitespace-nowrap overflow-hidden"
      type="button"
    >
      <CopyIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      <TextMorph>{text}</TextMorph>
      <span>URL</span>
    </button>
  )
}

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-gray-300 dark:bg-zinc-600"
        springOptions={{
          bounce: 0,
        }}
      />

      <div className="pointer-events-none fixed left-1/2 top-20 z-30 flex w-full max-w-screen-sm -translate-x-1/2 justify-end px-4">
        <div className="pointer-events-auto">
          <CopyButton />
        </div>
      </div>
      <main className="prose prose-gray mt-24 pb-16 prose-h4:prose-base prose-p:my-4 prose-p:leading-relaxed dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-10 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium">
        {children}
      </main>
    </>
  )
}
