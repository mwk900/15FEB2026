"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import AnimatedSection from "@/components/AnimatedSection";
import portfolioData from "@/data/portfolio.json";

export default function BlogPost({ slug }: { slug: string }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const post = portfolioData.blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1
          className={`text-3xl font-bold mb-4 ${
            isDark ? "text-dark-text" : "text-light-text"
          }`}
        >
          Post Not Found
        </h1>
        <p
          className={`mb-8 ${
            isDark ? "text-dark-text2" : "text-light-text2"
          }`}
        >
          The blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/blog"
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm ${
            isDark
              ? "bg-dark-accent text-dark-bg"
              : "bg-light-accent text-white"
          }`}
        >
          &larr; Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = portfolioData.blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  const shareText = `${post.title} by ${portfolioData.personal.name === "[YOUR_NAME]" ? "Portfolio" : portfolioData.personal.name}`;

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Back link */}
      <AnimatedSection>
        <Link
          href="/blog"
          className={`inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors ${
            isDark
              ? "text-dark-text2 hover:text-dark-accent"
              : "text-light-text2 hover:text-light-accent"
          }`}
        >
          &larr; Back to Blog
        </Link>
      </AnimatedSection>

      {/* Article Header */}
      <AnimatedSection delay={0.1}>
        <article>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  isDark
                    ? "bg-dark-accent/10 text-dark-accent"
                    : "bg-light-accent/10 text-light-accent"
                }`}
              >
                {post.category}
              </span>
              <span
                className={`text-sm ${
                  isDark ? "text-dark-text2" : "text-light-text2"
                }`}
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span
                className={`text-sm ${
                  isDark ? "text-dark-text2" : "text-light-text2"
                }`}
              >
                &middot; {post.readTime}
              </span>
            </div>

            <h1
              className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${
                isDark ? "text-dark-text" : "text-light-text"
              }`}
            >
              {post.title}
            </h1>

            <p
              className={`text-lg ${
                isDark ? "text-dark-text2" : "text-light-text2"
              }`}
            >
              {post.excerpt}
            </p>
          </div>

          {/* Content */}
          <div
            className={`prose prose-lg max-w-none ${
              isDark ? "prose-invert" : ""
            }`}
          >
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className={`text-2xl font-bold mt-10 mb-4 ${
                      isDark ? "text-dark-text" : "text-light-text"
                    }`}
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <p
                    key={i}
                    className={`font-semibold mb-4 ${
                      isDark ? "text-dark-text" : "text-light-text"
                    }`}
                  >
                    {paragraph.replace(/\*\*/g, "")}
                  </p>
                );
              }
              if (paragraph.startsWith("1. ") || paragraph.startsWith("- ")) {
                const items = paragraph.split("\n");
                const isOrdered = paragraph.startsWith("1. ");
                const Tag = isOrdered ? "ol" : "ul";
                return (
                  <Tag
                    key={i}
                    className={`mb-4 pl-6 ${isOrdered ? "list-decimal" : "list-disc"} ${
                      isDark ? "text-dark-text2" : "text-light-text2"
                    }`}
                  >
                    {items.map((item, j) => (
                      <li key={j} className="mb-1">
                        {item.replace(/^(\d+\.\s|-\s)/, "")}
                      </li>
                    ))}
                  </Tag>
                );
              }
              const parts = paragraph.split(/(\*\*[^*]+\*\*)/);
              return (
                <p
                  key={i}
                  className={`mb-4 leading-relaxed ${
                    isDark ? "text-dark-text2" : "text-light-text2"
                  }`}
                >
                  {parts.map((part, j) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong
                        key={j}
                        className={
                          isDark ? "text-dark-text" : "text-light-text"
                        }
                      >
                        {part.replace(/\*\*/g, "")}
                      </strong>
                    ) : (
                      <span key={j}>{part}</span>
                    )
                  )}
                </p>
              );
            })}
          </div>

          {/* Share Buttons */}
          <div
            className={`mt-12 pt-8 border-t ${
              isDark ? "border-dark-border" : "border-light-border"
            }`}
          >
            <h3
              className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                isDark ? "text-dark-text2" : "text-light-text2"
              }`}
            >
              Share this post
            </h3>
            <div className="flex gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all hover:scale-[1.02] ${
                  isDark
                    ? "border-dark-border text-dark-text2 hover:text-dark-accent hover:border-dark-accent"
                    : "border-light-border text-light-text2 hover:text-light-accent hover:border-light-accent"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all hover:scale-[1.02] ${
                  isDark
                    ? "border-dark-border text-dark-text2 hover:text-dark-accent hover:border-dark-accent"
                    : "border-light-border text-light-text2 hover:text-light-accent hover:border-light-accent"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </article>
      </AnimatedSection>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <AnimatedSection delay={0.2}>
          <div className="mt-16">
            <h3
              className={`text-xl font-bold mb-6 ${
                isDark ? "text-dark-text" : "text-light-text"
              }`}
            >
              Related Posts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`p-5 rounded-xl border transition-all ${
                      isDark
                        ? "bg-dark-bg2 border-dark-border hover:border-dark-accent/50"
                        : "bg-light-bg2 border-light-border hover:border-light-accent/50"
                    }`}
                  >
                    <span
                      className={`text-xs ${
                        isDark ? "text-dark-text2" : "text-light-text2"
                      }`}
                    >
                      {new Date(related.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <h4
                      className={`text-base font-semibold mt-1 ${
                        isDark ? "text-dark-text" : "text-light-text"
                      }`}
                    >
                      {related.title}
                    </h4>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}
    </div>
  );
}
