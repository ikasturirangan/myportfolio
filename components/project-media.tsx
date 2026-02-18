'use client'

import { XIcon } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'

type ProjectMediaProps = {
  src: string
  alt: string
}

export function ProjectMedia({ src, alt }: ProjectMediaProps) {
  const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(src)
  const cardClasses = isVideo
    ? 'aspect-video w-full cursor-zoom-in rounded-xl'
    : 'aspect-video w-full cursor-zoom-in rounded-xl object-cover'
  const modalClasses = isVideo
    ? 'aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]'
    : 'aspect-video h-[50vh] w-full rounded-xl object-cover md:h-[70vh]'

  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        {isVideo ? (
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className={cardClasses}
          />
        ) : (
          <img src={src} alt={alt} loading="lazy" className={cardClasses} />
        )}
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          {isVideo ? (
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className={modalClasses}
            />
          ) : (
            <img src={src} alt={alt} loading="lazy" className={modalClasses} />
          )}
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
