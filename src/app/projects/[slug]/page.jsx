// src/app/projects/[slug]/page.js
import Image from 'next/image';
import Link from 'next/link';
import { getAllProjects, getProjectBySlug } from '@/lib/projects';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { FaGithub, FaExclamationTriangle } from 'react-icons/fa';
import { HiArrowUpRight } from 'react-icons/hi2';

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }) {
  const { frontmatter, mdxSource } = await getProjectBySlug(params.slug);
  const {
    title,
    date,
    thumbnail,
    stack = [],
    github,
    demo,
    isArchived,
  } = frontmatter;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/projects" className="text-sm text-zinc-600 hover:underline">
        ← Back to projects
      </Link>

      <h1 className="mt-2 text-3xl font-bold text-white">{title}</h1>
      {date && <p className="mt-1 text-sm text-zinc-500">{date}</p>}

      {thumbnail && (
        <div className="mt-5 overflow-hidden rounded">
          <Image
            src={thumbnail}
            alt={title}
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      )}

      {/* 🧠 Tech stack */}
      {stack.length > 0 && (
        <div className="mt-6 text-sm text-lime-600">
          <span className="font-semibold text-lime-500">
            Technologies used:
          </span>{' '}
          {stack.join(' • ')}
        </div>
      )}

      {/* 🧠 Buttons with icons */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {/* GitHub (only if not blank) */}
        {github && github.trim() !== '' && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </a>
        )}

        {/* Live Demo (only if not blank) */}
        {demo && demo.trim() !== '' && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-0.5 rounded-md bg-lime-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-lime-400"
          >
            Live Demo
            <HiArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>

      {/* 🧠 Archived alert */}
      {isArchived && (
        <div className="mt-4 flex items-center gap-2 rounded-md border border-yellow-400 bg-yellow-100/20 px-4 py-2 text-sm text-yellow-300">
          <FaExclamationTriangle className="h-4 w-4 text-yellow-400" />
          <span>
            This project might be outdated as the repository is no longer
            maintained!
          </span>
        </div>
      )}

      {/* 🧠 Render compiled MDX safely on server */}
      <article className="prose prose-invert dark:prose-invert mt-8 max-w-none text-[#e5e5e5]">
        <MDXRemote
          source={mdxSource}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: 'one-dark-pro', // dark background-friendly
                    keepBackground: false,
                  },
                ],
              ],
            },
          }}
        />
      </article>
    </main>
  );
}
