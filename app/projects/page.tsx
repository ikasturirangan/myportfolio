import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { ProjectMedia } from '@/components/project-media'
import { PROJECTS } from '../data'

export const metadata = {
  title: 'Projects',
}

export default function ProjectsPage() {
  return (
    <main className="space-y-10 sm:space-y-12">
      <section className="space-y-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <h1 className="text-2xl font-medium text-zinc-900 dark:text-zinc-50">
            Projects
          </h1>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to home</span>
          </Link>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400">
          A selection of multi-domain work focused on fast iteration, rigorous
          testing, and real-world impact.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-10">
        {PROJECTS.map((project) => (
          <div key={project.id} className="space-y-3">
            {project.video ? (
              <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                <ProjectMedia
                  src={project.video}
                  alt={project.mediaAlt ?? project.name}
                />
              </div>
            ) : null}
            <div className="space-y-2.5 px-1">
              {project.link ? (
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                </a>
              ) : (
                <div className="font-base inline-block font-[450] text-zinc-900 dark:text-zinc-50">
                  {project.name}
                </div>
              )}
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
