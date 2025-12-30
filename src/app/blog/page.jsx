import Link from 'next/link';
import { parseStringPromise } from 'xml2js';
import { HiArrowUpRight } from 'react-icons/hi2';

export const revalidate = 3600; // Revalidate every hour

// 🧠 Helper: Estimate read time (200 wpm)
function estimateReadTime(html = '') {
  const text = html.replace(/<[^>]*>/g, ' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

// 🧠 Helper: Append UTM parameter to URL safely
function addUTM(url = '') {
  if (!url || url === '#') return '#';
  const hasQuery = url.includes('?');
  const separator = hasQuery ? '&' : '?';
  return `${url}${separator}utm_source=victorjohnson.online`;
}

// 🧠 Fetch & parse Atom feed
async function getAtomPosts() {
  const res = await fetch('https://opendata.blog/atom.xml', {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error('Failed to fetch Atom feed');
  const xml = await res.text();

  const parsed = await parseStringPromise(xml, {
    explicitArray: false,
    mergeAttrs: true,
  });

  const entries = parsed.feed?.entry || [];
  const normalized = Array.isArray(entries) ? entries : [entries];

  return normalized.map((entry) => {
    const link =
      entry.link?.href ||
      entry.link?.['@_href'] ||
      (typeof entry.link === 'string' ? entry.link : '#');

    return {
      title: entry.title || 'Untitled',
      link: addUTM(link),
      updated: entry.updated || '',
      content: entry.content?._ || entry.content || '',
    };
  });
}

// 🧠 Blog Page
export default async function BlogPage() {
  const posts = await getAtomPosts();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 border-l-4 border-lime-400 pl-4 mb-12">
        Blog
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => {
          const readTime = estimateReadTime(post.content);

          return (
            <article
              key={index}
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 shadow-sm transition hover:border-lime-400 hover:shadow-md"
            >
              <h3 className="mb-1 text-lg font-semibold text-white">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {post.title}
                </a>
              </h3>

              <div className="mb-2 flex items-center gap-2 text-sm text-zinc-400">
                {post.updated && (
                  <time dateTime={post.updated}>
                    {new Date(post.updated).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                )}
                <span>•</span>
                <span>{readTime}</span>
              </div>

              <div className="mt-3">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white hover:underline"
                >
                  Read article
                  <HiArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
