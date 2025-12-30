// src/app/projects/page.js
import { getAllProjects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

export const metadata = {
  title: 'Projects',
  description: 'Selected projects, experiments, and case studies.',
};

export default async function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 border-l-4 border-lime-400 pl-4 mb-12">
        Projects
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </main>
  );
}
