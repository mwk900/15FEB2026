import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import portfolio from '@/data/portfolio.json';
import { buildMetaDescription, buildPageTitle } from '@/utils/seo';
import ProjectCard from '@/components/ProjectCard';
import SeoHead from '@/components/SeoHead';

export default function HomePage() {
  const { personal, projects } = portfolio;
  return (
    <>
      <SeoHead
        title={buildPageTitle(personal.name, personal.title)}
        description={buildMetaDescription(personal.name, personal.title)}
        url={`${portfolio.site.url}/`}
        image={personal.image}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: personal.name,
          jobTitle: personal.title,
          url: portfolio.site.url,
          image: personal.image,
          sameAs: [portfolio.social.github, portfolio.social.linkedin, portfolio.social.twitter]
        }}
      />
      <main id="main-content" className="mx-auto max-w-6xl px-4 py-10">
        <section className="grid items-center gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-bold md:text-5xl">Hi, I'm {personal.name}</h1>
            <p className="mt-4 text-lg text-textSecondary">{personal.bio}</p>
            <div className="mt-6 flex gap-4">
              <Link className="rounded-lg bg-accent px-5 py-3 font-medium text-white" href="/portfolio">
                View My Work
              </Link>
              <Link className="rounded-lg border border-borderColor px-5 py-3" href="/contact">
                Get In Touch
              </Link>
            </div>
          </motion.div>
          <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-full border border-borderColor">
            <Image src={personal.image} alt="Professional profile headshot" fill className="object-cover" priority />
          </div>
        </section>

        <section className="mt-16 space-y-3 rounded-xl border border-borderColor bg-bgSecondary p-6">
          <h2 className="text-2xl font-semibold">Professional + Personality</h2>
          <p className="text-textSecondary">
            I combine thoughtful product thinking, clean engineering, and clear communication to build experiences people trust.
          </p>
        </section>

        <section className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <Link href="/portfolio" className="text-accent hover:underline">See all</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-xl bg-accent p-8 text-center text-white">
          <h2 className="text-2xl font-semibold">Ready to work together?</h2>
          <p className="mt-2">Let’s collaborate on something meaningful.</p>
          <Link href="/contact" className="mt-4 inline-block rounded-md bg-white px-5 py-2 font-medium text-slate-800">
            Contact Me
          </Link>
        </section>
      </main>
    </>
  );
}
