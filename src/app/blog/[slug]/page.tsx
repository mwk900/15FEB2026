import portfolioData from "@/data/portfolio.json";
import BlogPost from "@/components/BlogPost";

export function generateStaticParams() {
  return portfolioData.blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = portfolioData.blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  return <BlogPost slug={params.slug} />;
}
