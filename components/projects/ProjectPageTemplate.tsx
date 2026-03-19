import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ArrowLeftIcon, ExternalLinkIcon } from "lucide-react";

export type ProjectPageTemplateProps = {
  project: Project;
};

export function ProjectPageTemplate({ project }: ProjectPageTemplateProps) {
  return (
    <article className="py-10 mx-auto max-w-3xl">
      <header className="mb-10">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
            {project.label}
          </span>
          {project.year && (
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              {project.year}
            </span>
          )}
        </div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
          {project.summary}
        </p>

        <div className="my-6 border-t border-neutral-200 dark:border-neutral-800"></div>
        {(project.role || (project.stack && project.stack.length > 0)) && (
          <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
            {project.role && (
              <div>
                <dt className="font-medium text-neutral-900 dark:text-neutral-100">
                  Role
                </dt>
                <dd className="mt-1 text-neutral-600 dark:text-neutral-400">
                  {project.role}
                </dd>
              </div>
            )}
            {project.stack && project.stack.length > 0 && (
              <div>
                <dt className="font-medium text-neutral-900 dark:text-neutral-100">
                  Stack
                </dt>
                <dd className="mt-1 text-neutral-600 dark:text-neutral-400">
                  {project.stack.join(" · ")}
                </dd>
              </div>
            )}
            {project.tools && project.tools.length > 0 && (
              <div>
                <dt className="font-medium text-neutral-900 dark:text-neutral-100">
                  Tools
                </dt>
                <dd className="mt-1 text-neutral-600 dark:text-neutral-400">
                  {project.tools.join(" · ")}
                </dd>
              </div>
            )}
            {project.architecture && (
              <div>
                <dt className="font-medium text-neutral-900 dark:text-neutral-100">
                  Architecture
                </dt>
                <dd className="mt-1 text-neutral-600 dark:text-neutral-400">
                  {project.architecture}
                </dd>
              </div>
            )}
          </dl>
        )}
        {project.links && project.links.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  {...(l.external !== false
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
                >
                  {l.label}
                  {l.external !== false && (
                    <ExternalLinkIcon className="h-3.5 w-3.5 opacity-70" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>
      <div
        className="mb-10 max-h-[min(85vh,56rem)] w-full overflow-auto rounded-xl border border-neutral-200/80 bg-neutral-100 shadow-inner dark:border-neutral-800 dark:bg-neutral-900"
        tabIndex={0}
        role="region"
        aria-label={`${project.title} screenshot — scroll to view full image`}
      >
        <Image
          src={project.coverImage}
          alt={project.title}
          width={1600}
          height={2400}
          className="h-auto w-full min-w-0"
          sizes="(max-width: 48rem) 100vw, 48rem"
          priority
        />
      </div>
      <h2 className="text-2xl font-bold tracking-tight mb-2">
        Project Details
      </h2>
      <div className="space-y-4">
        {project.goals && project.goals.length > 0 && (
          <div>
            <dt className="font-medium text-neutral-900 dark:text-neutral-100">
              Goals
            </dt>
            <dd className="mt-1 text-neutral-600 dark:text-neutral-400">
              <ul className="list-disc list-inside space-y-2">
                {project.goals.map((goal, i) => (
                  <li key={i} className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {goal}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        )}
      </div>
      <div className="my-6 border-t border-neutral-200 dark:border-neutral-800"></div>
      <div className="space-y-4">
        {project.projectBody.map((paragraph, i) => (
          <p
            key={i}
            className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300"
          >
            {paragraph}
          </p>
        ))}
      </div>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
      >
        <ArrowLeftIcon className="h-4 w-4" aria-hidden />
        Back to home
      </Link>
    </article>
  );
}
