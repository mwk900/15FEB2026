import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import portfolio from '@/data/portfolio.json';
import type { BlogPost } from '@/utils/types';
import SeoHead from '@/components/SeoHead';

type Props = { post: BlogPost };

export default function BlogPostPage({ post }: Props) {
  return (
    <>
      <SeoHead
        title={`${post.title} | [YOUR_NAME]`}
        description={post.excerpt}
        url={`${portfolio.site.url}/blog/${post.slug}`}
        image={portfolio.personal.image}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          datePublished: post.date,
          author: { '@type': 'Person', name: portfolio.personal.name },
          description: post.excerpt
        }}
      />
      <main id="main-content" className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-sm text-textSecondary">{post.date} • {post.readTime}</p>
        <h1 className="mt-2 text-4xl font-bold">{post.title}</h1>
        <article className="mt-6 max-w-none">
          <p>{post.content}</p>
        </article>
        <div className="mt-8 flex gap-4">
          <a href="https://twitter.com/intent/tweet" className="text-accent">Share on Twitter</a>
          <a href="https://www.linkedin.com/sharing/share-offsite/" className="text-accent">Share on LinkedIn</a>
        </div>
        <Link href="/blog" className="mt-8 inline-block text-accent hover:underline">← Back to blog</Link>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: portfolio.blogPosts.map((post) => ({ params: { slug: post.slug } })),
  fallback: false
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = portfolio.blogPosts.find((entry) => entry.slug === params?.slug) as BlogPost;
  return { props: { post } };
};
