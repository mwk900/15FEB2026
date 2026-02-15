import Link from 'next/link';
import portfolio from '@/data/portfolio.json';
import { buildPageTitle } from '@/utils/seo';
import SeoHead from '@/components/SeoHead';

export default function BlogPage() {
  const { personal, blogPosts } = portfolio;
  return (
    <>
      <SeoHead
        title={buildPageTitle(personal.name, personal.title, 'Blog')}
        description={`Blog posts and insights from ${personal.name}.`}
        url={`${portfolio.site.url}/blog`}
        image={personal.image}
      />
      <main id="main-content" className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="mb-8 text-4xl font-bold">Blog & Insights</h1>
        <div className="space-y-4">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-xl border border-borderColor bg-bgSecondary p-5">
              <p className="text-xs text-textSecondary">{post.date} • {post.readTime}</p>
              <h2 className="mt-1 text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-textSecondary">{post.excerpt.slice(0, 150)}</p>
              <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-accent hover:underline">Read post</Link>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
