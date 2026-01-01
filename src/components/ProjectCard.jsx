// src/components/ProjectCard.jsx
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi2';

export default function ProjectCard({ project }) {
  const { slug, title, thumbnail, stack = [], date, github, demo, summary } = project;

  return (
    <article className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 shadow-sm transition hover:shadow-md hover:border-lime-400">
      {thumbnail && (
        <div className="mb-3 overflow-hidden rounded-md">
          <Image
            src={thumbnail}
            alt={title}
            width={1200}
            height={630}
            className="h-auto w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
            priority={false}
          />
        </div>
      )}

      <h3 className="mb-1 text-lg font-semibold text-white">
        <Link href={`/projects/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>

      {date && (
  <div className="mb-2 text-sm text-zinc-400">
    {new Date(date).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    })}
  </div>
)}

      {summary && <p className="mb-3 text-sm text-zinc-300">{summary}</p>}

      {/* 🧠 Tech stack (inline text style) */}
      {stack.length > 0 && (
        <div className="mt-3 text-sm text-lime-700">
          <span className="font-semibold text-lime-500"></span>{' '}
          {stack.join(' • ')}
        </div>
      )}

      {/* 🧠 Inline links with icons */}
      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
        

        {/* GitHub */}
        {github && github.trim() !== '' && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-white hover:underline"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </a>
        )}

        {/* Live Demo */}
        {demo && demo.trim() !== '' && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-white hover:underline"
          >
            Live Demo
          </a>
        )}

        {/* Read More */}
        <Link
          href={`/projects/${slug}`}
          className="inline-flex items-center gap-1 hover:text-white hover:underline"
        >
          Read more
           <HiArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
