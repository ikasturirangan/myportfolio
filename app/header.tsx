'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogContainer,
  MorphingDialogClose,
  MorphingDialogImage,
} from '@/components/ui/morphing-dialog'
import { XIcon } from 'lucide-react'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <MorphingDialog>
          <MorphingDialogTrigger>
            <div className="relative h-10 w-10 shrink-0 cursor-zoom-in overflow-hidden rounded-full ring-1 ring-zinc-200 dark:ring-zinc-800">
              <Image
                src="/avatar.jpeg"
                alt="Avatar"
                fill
                sizes="40px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent className="relative w-[min(90vw,720px)] max-h-[90vh] rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
              <div className="flex items-center justify-center">
                <MorphingDialogImage
                  src="/avatar.jpeg"
                  alt="Avatar large"
                  style={{ maxWidth: '100%', height: 'auto', display: 'block', borderRadius: 12 }}
                />
              </div>
            </MorphingDialogContent>
            <MorphingDialogClose className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1">
              <XIcon className="h-5 w-5 text-zinc-500" />
            </MorphingDialogClose>
          </MorphingDialogContainer>
        </MorphingDialog>

        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Kasturirangan Iyengar
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Design Engineer | Product Lead | Mechanical Engineer
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
