"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import AnimatedSection from "@/components/AnimatedSection";
import portfolioData from "@/data/portfolio.json";

export default function BlogPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const posts = portfolioData.blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Header */}
      <AnimatedSection>
        <div className="mb-12">
          <h1
            className={`text-3xl md:text-4xl font-bold mb-2 ${
              isDark ? "text-dark-text" : "text-light-text"
            }`}
          >
            Blog
          </h1>
          <div
            className={`h-1 w-16 rounded mb-4 ${
              isDark ? "bg-dark-accent" : "bg-light-accent"
            }`}
          />
          <p
            className={`text-lg max-w-2xl ${
              isDark ? "text-dark-text2" : "text-light-text2"
            }`}
          >
            Thoughts, learnings, and insights from my journey in tech.
          </p>
        </div>
      </AnimatedSection>

      {/* Blog Posts */}
      <div className="flex flex-col gap-6">
        {posts.map((post, index) => (
          <AnimatedSection key={post.slug} delay={index * 0.1}>
            <Link href={`/blog/${post.slug}`}>
              <motion.article
                whileHover={{ x: 4 }}
                className={`group p-6 rounded-xl border transition-all ${
                  isDark
                    ? "bg-dark-bg2 border-dark-border hover:border-dark-accent/50"
                    : "bg-light-bg2 border-light-border hover:border-light-accent/50"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
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
                    className={`text-xs ${
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
                    className={`text-xs ${
                      isDark ? "text-dark-text2" : "text-light-text2"
                    }`}
                  >
                    &middot; {post.readTime}
                  </span>
                </div>

                <h2
                  className={`text-xl font-semibold mb-2 transition-colors ${
                    isDark
                      ? "text-dark-text group-hover:text-dark-accent"
                      : "text-light-text group-hover:text-light-accent"
                  }`}
                >
                  {post.title}
                </h2>

                <p
                  className={`text-sm ${
                    isDark ? "text-dark-text2" : "text-light-text2"
                  }`}
                >
                  {post.excerpt}
                </p>

                <span
                  className={`inline-block mt-4 text-sm font-medium transition-colors ${
                    isDark
                      ? "text-dark-accent group-hover:text-dark-accent/80"
                      : "text-light-accent group-hover:text-light-accent/80"
                  }`}
                >
                  Read more &rarr;
                </span>
              </motion.article>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
