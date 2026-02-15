"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import AnimatedSection from "@/components/AnimatedSection";
import portfolioData from "@/data/portfolio.json";

const featuredProjects = portfolioData.projects.filter((p) => p.featured);

export default function HomePage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p
              className={`text-sm font-medium uppercase tracking-widest mb-4 ${
                isDark ? "text-dark-accent" : "text-light-accent"
              }`}
            >
              Welcome to my portfolio
            </p>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${
                isDark ? "text-dark-text" : "text-light-text"
              }`}
            >
              Hi, I&apos;m{" "}
              <span
                className={
                  isDark ? "text-dark-accent" : "text-light-accent"
                }
              >
                {portfolioData.personal.name === "[YOUR_NAME]"
                  ? "a Creative Developer"
                  : portfolioData.personal.name}
              </span>
            </h1>
            <p
              className={`text-lg md:text-xl mb-8 max-w-lg ${
                isDark ? "text-dark-text2" : "text-light-text2"
              }`}
            >
              {portfolioData.personal.title === "[YOUR_TITLE]"
                ? "I build digital experiences that combine clean design with thoughtful engineering."
                : portfolioData.personal.title}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all hover:scale-[1.02] ${
                  isDark
                    ? "bg-dark-accent text-dark-bg hover:bg-dark-accent/90"
                    : "bg-light-accent text-white hover:bg-light-accent/90"
                }`}
              >
                View My Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium border transition-all hover:scale-[1.02] ${
                  isDark
                    ? "border-dark-border text-dark-text hover:border-dark-accent hover:text-dark-accent"
                    : "border-light-border text-light-text hover:border-light-accent hover:text-light-accent"
                }`}
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div
              className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${
                isDark ? "border-dark-accent/30" : "border-light-accent/30"
              }`}
            >
              <div
                className={`w-full h-full flex items-center justify-center text-6xl font-bold ${
                  isDark
                    ? "bg-dark-bg2 text-dark-accent"
                    : "bg-light-bg2 text-light-accent"
                }`}
              >
                {portfolioData.personal.name === "[YOUR_NAME]" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                ) : (
                  portfolioData.personal.name.charAt(0)
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Intro */}
      <AnimatedSection>
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2
              className={`text-2xl md:text-3xl font-bold mb-6 ${
                isDark ? "text-dark-text" : "text-light-text"
              }`}
            >
              {portfolioData.personal.bio === "[YOUR_BIO]"
                ? "Passionate about creating impactful digital experiences that solve real problems and delight users."
                : portfolioData.personal.bio}
            </h2>
            <p
              className={`text-lg ${
                isDark ? "text-dark-text2" : "text-light-text2"
              }`}
            >
              I combine technical expertise with creative thinking to deliver
              solutions that are both functional and beautiful. Every project is
              an opportunity to push boundaries and create something meaningful.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2
                  className={`text-2xl md:text-3xl font-bold ${
                    isDark ? "text-dark-text" : "text-light-text"
                  }`}
                >
                  Featured Work
                </h2>
                <div
                  className={`mt-2 h-1 w-16 rounded ${
                    isDark ? "bg-dark-accent" : "bg-light-accent"
                  }`}
                />
              </div>
              <Link
                href="/portfolio"
                className={`text-sm font-medium transition-colors ${
                  isDark
                    ? "text-dark-accent hover:text-dark-accent/80"
                    : "text-light-accent hover:text-light-accent/80"
                }`}
              >
                View All &rarr;
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 4).map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`group rounded-xl overflow-hidden border transition-shadow ${
                    isDark
                      ? "bg-dark-bg2 border-dark-border hover:shadow-lg hover:shadow-dark-accent/5"
                      : "bg-light-bg2 border-light-border hover:shadow-lg hover:shadow-black/5"
                  }`}
                >
                  <div
                    className={`aspect-video relative overflow-hidden ${
                      isDark ? "bg-dark-bg" : "bg-light-bg"
                    }`}
                  >
                    <div
                      className={`w-full h-full flex items-center justify-center ${
                        isDark ? "text-dark-text2" : "text-light-text2"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-30 group-hover:scale-110 transition-transform"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3
                      className={`text-lg font-semibold mb-2 ${
                        isDark ? "text-dark-text" : "text-light-text"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm mb-4 ${
                        isDark ? "text-dark-text2" : "text-light-text2"
                      }`}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs px-2 py-1 rounded-full ${
                            isDark
                              ? "bg-dark-bg text-dark-text2 border border-dark-border"
                              : "bg-light-bg text-light-text2 border border-light-border"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection>
        <section
          className={`py-20 ${
            isDark ? "bg-dark-accent/10" : "bg-light-accent/10"
          }`}
        >
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2
              className={`text-2xl md:text-3xl font-bold mb-4 ${
                isDark ? "text-dark-text" : "text-light-text"
              }`}
            >
              Ready to work together?
            </h2>
            <p
              className={`text-lg mb-8 ${
                isDark ? "text-dark-text2" : "text-light-text2"
              }`}
            >
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium text-lg transition-all hover:scale-[1.02] ${
                isDark
                  ? "bg-dark-accent text-dark-bg hover:bg-dark-accent/90"
                  : "bg-light-accent text-white hover:bg-light-accent/90"
              }`}
            >
              Let&apos;s Talk
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
