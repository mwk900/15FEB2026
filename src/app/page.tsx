"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import AnimatedSection from "@/components/AnimatedSection";
import portfolioData from "@/data/portfolio.json";

const featuredProjects = portfolioData.projects.filter((p) => p.featured);

const serviceIcons: Record<string, React.ReactNode> = {
  globe: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  ),
  target: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
  ),
  refresh: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
  ),
  support: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  ),
};

const trustBullets = [
  { title: "Mobile-first, tested layouts", description: "Every site is built and tested on real devices to ensure a smooth experience for all visitors." },
  { title: "Clear communication", description: "No jargon, no disappearing acts. You'll always know what's happening and what comes next." },
  { title: "Fast turnaround vs agencies", description: "Most projects are delivered in days, not weeks. You'll see a working demo within 48 hours." },
  { title: "Transparent scope & revisions", description: "You'll know exactly what's included upfront. No surprise invoices, no hidden costs." },
  { title: "Performance-minded", description: "Fast-loading sites that rank better in search and give visitors a better experience." },
];

export default function HomePage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p
              className={`text-sm font-medium uppercase tracking-widest mb-4 ${
                isDark ? "text-dark-accent" : "text-light-accent"
              }`}
            >
              Web Design for Local Businesses
            </p>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${
                isDark ? "text-dark-text" : "text-light-text"
              }`}
            >
              Fast, clean websites that help local businesses{" "}
              <span className={isDark ? "text-dark-accent" : "text-light-accent"}>
                get more enquiries.
              </span>
            </h1>
            <p
              className={`text-lg md:text-xl mb-8 max-w-2xl ${
                isDark ? "text-dark-text2" : "text-light-text2"
              }`}
            >
              {portfolioData.personal.bio}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium text-base transition-all hover:scale-[1.02] ${
                  isDark
                    ? "bg-dark-accent text-dark-bg hover:bg-dark-accent/90"
                    : "bg-light-accent text-white hover:bg-light-accent/90"
                }`}
              >
                Start a Project
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link
                href="/portfolio"
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium text-base border transition-all hover:scale-[1.02] ${
                  isDark
                    ? "border-dark-border text-dark-text hover:border-dark-accent hover:text-dark-accent"
                    : "border-light-border text-light-text hover:border-light-accent hover:text-light-accent"
                }`}
              >
                See Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-20 ${isDark ? "bg-dark-bg2" : "bg-light-bg2"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? "text-dark-text" : "text-light-text"}`}>
                What I Build
              </h2>
              <div className={`h-1 w-16 rounded mx-auto mb-4 ${isDark ? "bg-dark-accent" : "bg-light-accent"}`} />
              <p className={`text-lg max-w-xl mx-auto ${isDark ? "text-dark-text2" : "text-light-text2"}`}>
                Websites designed to bring in customers — not just look pretty on a screen.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div
                  className={`h-full p-6 rounded-xl border transition-all hover:scale-[1.02] ${
                    isDark
                      ? "bg-dark-bg border-dark-border hover:border-dark-accent/40"
                      : "bg-light-bg border-light-border hover:border-light-accent/40"
                  }`}
                >
                  <div className={`mb-4 ${isDark ? "text-dark-accent" : "text-light-accent"}`}>
                    {serviceIcons[service.icon] || serviceIcons.globe}
                  </div>
                  <h3 className={`text-base font-semibold mb-2 ${isDark ? "text-dark-text" : "text-light-text"}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-dark-text2" : "text-light-text2"}`}>
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className={`text-2xl md:text-3xl font-bold ${isDark ? "text-dark-text" : "text-light-text"}`}>
                  Recent Projects
                </h2>
                <div className={`mt-2 h-1 w-16 rounded ${isDark ? "bg-dark-accent" : "bg-light-accent"}`} />
              </div>
              <Link
                href="/portfolio"
                className={`text-sm font-medium transition-colors ${isDark ? "text-dark-accent hover:text-dark-accent/80" : "text-light-accent hover:text-light-accent/80"}`}
              >
                View All &rarr;
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`group h-full rounded-xl overflow-hidden border transition-shadow flex flex-col ${
                    isDark
                      ? "bg-dark-bg2 border-dark-border hover:shadow-lg hover:shadow-dark-accent/5"
                      : "bg-light-bg2 border-light-border hover:shadow-lg hover:shadow-black/5"
                  }`}
                >
                  <div className={`aspect-video relative overflow-hidden ${isDark ? "bg-dark-bg" : "bg-light-bg"}`}>
                    <div className={`w-full h-full flex items-center justify-center ${isDark ? "text-dark-text2" : "text-light-text2"}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-30 group-hover:scale-110 transition-transform"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className={`text-lg font-semibold mb-2 ${isDark ? "text-dark-text" : "text-light-text"}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm mb-4 flex-1 ${isDark ? "text-dark-text2" : "text-light-text2"}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className={`text-xs px-2 py-1 rounded-full ${isDark ? "bg-dark-bg text-dark-text2 border border-dark-border" : "bg-light-bg text-light-text2 border border-light-border"}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.url && project.url !== "#" && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${isDark ? "text-dark-accent hover:text-dark-accent/80" : "text-light-accent hover:text-light-accent/80"}`}
                      >
                        View Live Demo
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-20 ${isDark ? "bg-dark-bg2" : "bg-light-bg2"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? "text-dark-text" : "text-light-text"}`}>
                How It Works
              </h2>
              <div className={`h-1 w-16 rounded mx-auto mb-4 ${isDark ? "bg-dark-accent" : "bg-light-accent"}`} />
              <p className={`text-lg max-w-xl mx-auto ${isDark ? "text-dark-text2" : "text-light-text2"}`}>
                A simple, transparent process from first call to live website.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
            {portfolioData.process.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.08}>
                <div className={`relative h-full p-5 rounded-xl border ${isDark ? "bg-dark-bg border-dark-border" : "bg-light-bg border-light-border"}`}>
                  <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold mb-3 ${isDark ? "bg-dark-accent/15 text-dark-accent" : "bg-light-accent/15 text-light-accent"}`}>
                    {step.step}
                  </div>
                  <h3 className={`text-sm font-semibold mb-1 ${isDark ? "text-dark-text" : "text-light-text"}`}>
                    {step.title}
                  </h3>
                  <p className={`text-xs leading-relaxed mb-2 ${isDark ? "text-dark-text2" : "text-light-text2"}`}>
                    {step.description}
                  </p>
                  <span className={`text-xs font-medium ${isDark ? "text-dark-accent" : "text-light-accent"}`}>
                    {step.timeline}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <p className={`text-center text-sm ${isDark ? "text-dark-text2" : "text-light-text2"}`}>
              Most small business sites are delivered in 3&ndash;7 days depending on feedback and scope.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust / Why Choose Me */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? "text-dark-text" : "text-light-text"}`}>
                Why Work With Me
              </h2>
              <div className={`h-1 w-16 rounded mx-auto ${isDark ? "bg-dark-accent" : "bg-light-accent"}`} />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustBullets.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.08}>
                <div className={`h-full p-6 rounded-xl border ${isDark ? "bg-dark-bg2 border-dark-border" : "bg-light-bg2 border-light-border"}`}>
                  <div className={`flex items-center gap-3 mb-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={isDark ? "text-dark-accent" : "text-light-accent"}><polyline points="20 6 9 17 4 12"/></svg>
                    <h3 className={`text-sm font-semibold ${isDark ? "text-dark-text" : "text-light-text"}`}>
                      {item.title}
                    </h3>
                  </div>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-dark-text2" : "text-light-text2"}`}>
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection>
        <section className={`py-20 ${isDark ? "bg-dark-accent/10" : "bg-light-accent/10"}`}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? "text-dark-text" : "text-light-text"}`}>
              Ready to get your business online?
            </h2>
            <p className={`text-lg mb-8 ${isDark ? "text-dark-text2" : "text-light-text2"}`}>
              Tell me about your business and what you need. I&apos;ll get back to you
              with a clear plan and honest quote — no obligations.
            </p>
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium text-lg transition-all hover:scale-[1.02] ${isDark ? "bg-dark-accent text-dark-bg hover:bg-dark-accent/90" : "bg-light-accent text-white hover:bg-light-accent/90"}`}
            >
              Get a Quote
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
