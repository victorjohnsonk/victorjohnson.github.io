// src/lib/projects.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDir = path.join(process.cwd(), 'src', 'projects');

export function getProjectSlugs() {
  return fs
    .readdirSync(projectsDir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export async function getProjectBySlug(slug) {
  const fullPath = path.join(projectsDir, `${slug}.mdx`);
  const file = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(file);

  const frontmatter = {
    title: data.title ?? slug,
    date: data.date ?? null,
    thumbnail: data.thumbnail ?? null,
    stack: Array.isArray(data.stack) ? data.stack : [],
    github: data.github ?? null,
    demo: data.demo ?? null,
    summary: data.summary ?? '',
    isArchived: data.isArchived ?? false,
    isFeatured: data.isFeatured ?? false, // ✅ added this line
    slug,
  };

  // ✅ Return raw content string (not serialized)
  return { frontmatter, mdxSource: content };
}

export function getAllProjects() {
  if (!fs.existsSync(projectsDir)) return [];
  const slugs = getProjectSlugs();
  const projects = slugs.map((slug) => getProjectBySlugSync(slug).frontmatter);
  return projects.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getProjectBySlugSync(slug) {
  const fullPath = path.join(projectsDir, `${slug}.mdx`);
  const file = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(file);

  const frontmatter = {
    title: data.title ?? slug,
    date: data.date ?? null,
    thumbnail: data.thumbnail ?? null,
    stack: Array.isArray(data.stack) ? data.stack : [],
    github: data.github ?? null,
    demo: data.demo ?? null,
    summary: data.summary ?? '',
    isArchived: data.isArchived ?? false,
    isFeatured: data.isFeatured ?? false, // ✅ added this line
    slug,
  };

  return { frontmatter };
}
