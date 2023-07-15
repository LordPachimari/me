import type { Metadata } from "next";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function BlogPage() {
  // const allViews = await getViewsCount();

  return (
    <section>
      <h1 className="font-bold text-2xl mb-3 tracking-tighter">My blog</h1>
      <p className="text-slate-600 mb-8">
        This blog is meant to share my learning journey. I want to look back at
        it in 5 years and be proud of how I've grown over the years.
      </p>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 border-[1px] px-5 h-10 justify-center rounded-md border-slate-400"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col  ">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.title}
              </p>
              {/* <ViewCounter
                allViews={allViews}
                slug={post.slug}
                trackView={false}
              /> */}
            </div>
          </Link>
        ))}
    </section>
  );
}
