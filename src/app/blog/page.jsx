import { HiArrowUpRight } from "react-icons/hi2";
import { parseStringPromise } from "xml2js";

export const dynamic = "error";

async function getAtomPosts() {
  const res = await fetch("https://opendata.blog/atom.xml");

  if (!res.ok) {
    return [];
  }

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
      entry.link?.["@_href"] ||
      (typeof entry.link === "string" ? entry.link : "#");

    return {
      title: entry.title || "Untitled",
      link,
      updated: entry.updated || "",
      content: entry.content?._ || entry.content || "",
    };
  });
}

function estimateReadTime(html = "") {
  const text = html.replace(/<[^>]*>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export default async function BlogPage() {
  const posts = await getAtomPosts();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-12 border-l-4 border-lime-400 pl-4 text-3xl font-semibold tracking-tight text-zinc-100">
        Blog
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => {
          const readTime = estimateReadTime(post.content);

          return (
            <article
              key={index}
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 transition hover:border-lime-400"
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

              <div className="mb-2 text-sm text-zinc-400">
                {post.updated && (
                  <time dateTime={post.updated}>
                    {new Date(post.updated).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                )}
                {" • "}
                {readTime}
              </div>

              <a
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white"
              >
                Read article <HiArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          );
        })}
      </div>
    </main>
  );
}
