"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import AnimatedSection from "@/components/AnimatedSection";
import portfolioData from "@/data/portfolio.json";

const categories = [
  "All",
  ...Array.from(new Set(portfolioData.projects.map((p) => p.category))),
];

export default function PortfolioPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeFilter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <AnimatedSection>
        <div className="mb-12">
          <h1
            className={`text-3xl md:text-4xl font-bold mb-2 ${
              isDark ? "text-dark-text" : "text-light-text"
            }`}
          >
            Portfolio
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
            A selection of projects I&apos;ve worked on. Each one represents a
            unique challenge and learning experience.
          </p>
        </div>
      </AnimatedSection>

      {/* Filters */}
      <AnimatedSection delay={0.1}>
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeFilter === category
                  ? isDark
                    ? "bg-dark-accent text-dark-bg"
                    : "bg-light-accent text-white"
                  : isDark
                  ? "bg-dark-bg2 text-dark-text2 border border-dark-border hover:border-dark-accent hover:text-dark-accent"
                  : "bg-light-bg2 text-light-text2 border border-light-border hover:border-light-accent hover:text-light-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </AnimatedSection>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ y: -6 }}
                className={`group h-full rounded-xl overflow-hidden border transition-shadow ${
                  isDark
                    ? "bg-dark-bg2 border-dark-border hover:shadow-lg hover:shadow-dark-accent/5"
                    : "bg-light-bg2 border-light-border hover:shadow-lg hover:shadow-black/5"
                }`}
              >
                {/* Image placeholder */}
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
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
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
                  <div className="flex flex-wrap gap-2 mb-4">
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
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                        isDark
                          ? "text-dark-accent hover:text-dark-accent/80"
                          : "text-light-accent hover:text-light-accent/80"
                      }`}
                    >
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
