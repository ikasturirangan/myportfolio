'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
  EDUCATION,
  ACTIVITIES,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

const hasProjectMedia = (
  project: (typeof PROJECTS)[number],
): project is (typeof PROJECTS)[number] & { video: string } =>
  Boolean(project.video)

const PROJECTS_WITH_MEDIA = PROJECTS.filter(hasProjectMedia)
const PROJECTS_MARQUEE = [...PROJECTS_WITH_MEDIA, ...PROJECTS_WITH_MEDIA]
const isVideoSrc = (src: string) => /\.(mp4|webm|ogg|mov)$/i.test(src)

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  const [showSplash, setShowSplash] = useState(true)
  const [lit, setLit] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setLit(true), 500)
    const t2 = setTimeout(() => setShowSplash(false), 2600)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])
  // ensure the document background is black while the splash is active
  useEffect(() => {
    if (showSplash) {
      const prevBodyBg = document.body.style.backgroundColor
      const prevHtmlBg = document.documentElement.style.backgroundColor
      document.body.style.backgroundColor = 'black'
      document.documentElement.style.backgroundColor = 'black'
      return () => {
        document.body.style.backgroundColor = prevBodyBg
        document.documentElement.style.backgroundColor = prevHtmlBg
      }
    }
  }, [showSplash])

  // while splash is active, render only the splash to fully hide page content
  if (showSplash) {
    return (
      <div className="fixed inset-0 z-[99999] bg-black flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, filter: 'brightness(0.2)' }}
          animate={lit ? { opacity: 1, filter: 'brightness(1)' } : {}}
          transition={{ duration: 0.9 }}
          className="text-white text-center font-extrabold"
         
        >
          <span className="lowercase">welcome to </span>
          <span className="uppercase">THE VAULT</span>
        </motion.h1>
      </div>
    )
  }

  return (
    <motion.main
      className="space-y-14 sm:space-y-16"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
      aria-hidden={showSplash}
    >
      

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
         Crafting seamless experiences at the intersection of hardware, software, and design.
         Turning ideas into products that work beautifully and create positive impact.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2.5">
          {WORK_EXPERIENCE.map((job) => {
            const content = (
              <>
                <Spotlight
                  className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                  size={64}
                />
                <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                  <div className="flex w-full flex-col gap-3">
                    <div className="flex w-full flex-col gap-1 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h4 className="font-normal text-zinc-900 dark:text-zinc-100">
                          {job.title}
                        </h4>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                          {job.company}
                        </p>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {job.start} - {job.end}
                      </p>
                    </div>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                      {job.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )

            return job.link ? (
              <a
                className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                key={job.id}
              >
                {content}
              </a>
            ) : (
              <div
                className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                key={job.id}
              >
                {content}
              </div>
            )
          })}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Education</h3>
        <div className="flex flex-col space-y-2.5">
          {EDUCATION.map((edu) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              key={edu.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="flex w-full flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-1">
                    <h4 className="font-normal text-zinc-900 dark:text-zinc-100">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {edu.institution}
                    </p>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 md:text-right">
                    {edu.start} - {edu.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      {PROJECTS_MARQUEE.length > 0 && (
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <h3 className="text-lg font-medium">Projects</h3>
            <Link
              href="/projects"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              View all projects
            </Link>
          </div>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Throughout the years, I have been able to contribute to projects in
            multiple domains, which has helped me gain confidence in solving
            problems with novel solutions.
          </p>
          <div className="relative -mx-4 mt-5 overflow-hidden py-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-zinc-950 dark:via-zinc-950/80" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-zinc-950 dark:via-zinc-950/80" />
            <div
              className="flex w-max animate-[project-marquee_35s_linear_infinite] items-center gap-4 motion-reduce:animate-none"
              aria-hidden="true"
            >
              {PROJECTS_MARQUEE.map((project, index) => {
                const src = project.video
                const alt = project.mediaAlt ?? project.name
                const isVideo = isVideoSrc(src)

                return (
                  <div
                    key={`${project.id}-${index}`}
                    className="h-20 w-32 overflow-hidden rounded-xl bg-zinc-100 ring-1 ring-zinc-200/60 dark:bg-zinc-900 dark:ring-zinc-800/60 sm:h-24 sm:w-40"
                  >
                    {isVideo ? (
                      <video
                        src={src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <img
                        src={src}
                        alt={alt}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </motion.section>
      )}

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-1">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-2.5"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      {ACTIVITIES.length > 0 && (
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h3 className="mb-3 text-lg font-medium">Activities</h3>
          <div className="flex flex-col space-y-1">
            <AnimatedBackground
              enableHover
              className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.2,
              }}
            >
              {ACTIVITIES.map((activity) => (
                <div
                  key={activity.id}
                  className="-mx-3 rounded-xl px-3 py-2.5"
                  data-id={activity.id}
                >
                  <h4 className="font-normal dark:text-zinc-100">
                    {activity.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {activity.description}
                  </p>
                </div>
              ))}
            </AnimatedBackground>
          </div>
        </motion.section>
      )}

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex flex-wrap items-center justify-start gap-2.5">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
