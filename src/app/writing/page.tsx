import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Writing by Covi Franklin on AI governance, humanitarian technology, and policy research.",
};

export default function Writing() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <div className="animate-fade-in">
        <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight mb-3">
          Writing
        </h1>
        <p className="text-sm opacity-60 mb-12">
          On AI governance, institutional design, and lessons from the field.
        </p>
      </div>

      <div className="animate-fade-in-delay space-y-8">
        {posts.length === 0 ? (
          <p className="opacity-50 text-sm">No posts yet. Check back soon.</p>
        ) : (
          posts.map((post) => (
            <article
              key={post.slug}
              className="group border-b border-charcoal-700/20 pb-8 last:border-0"
            >
              <Link href={`/writing/${post.slug}`} className="block">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-teal/10 border border-teal/15 text-teal rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-serif text-xl font-semibold mb-2 group-hover:text-teal transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm opacity-70 mb-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs opacity-50">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>&middot;</span>
                  <span>{post.readingTime}</span>
                </div>
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
