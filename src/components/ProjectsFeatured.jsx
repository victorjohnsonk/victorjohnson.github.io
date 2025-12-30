import { getAllProjects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';

export const metadata = {
  title: 'Featured Projects',
  description: 'Highlighted projects and case studies.',
};

export default async function ProjectsFeatured() {
  const projects = getAllProjects() || [];

  // ✅ Filter only featured projects
  const featuredProjects = projects.filter((p) => p.isFeatured === true);

  // ✅ Limit to 5 (adjustable)
  const visibleProjects = featuredProjects.slice(0, 5);

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 border-l-4 border-lime-400 pl-4 mb-12">
        Featured Projects
      </h1>

      {visibleProjects.length === 0 ? (
        <p className="text-zinc-400">No featured projects available right now.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* ✅ Use the same ProjectCard for consistent styling */}
          {visibleProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}

          {/* 🧩 View All Projects Card */}
          <Link
            href="/projects/"
            className="group flex flex-col items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 text-center shadow-sm transition hover:border-lime-400 hover:shadow-md"
          >
            <span className="mb-2 text-lg font-semibold text-lime-400 group-hover:underline">
              View All Projects →
            </span>
            <p className="text-sm text-zinc-400 max-w-xs">
              Explore the complete list of case studies and experiments.
            </p>
          </Link>
        </div>
      )}
    </section>
  );
}
