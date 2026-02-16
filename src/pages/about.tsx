import Image from 'next/image';
import Link from 'next/link';
import portfolio from '@/data/portfolio.json';
import { buildPageTitle } from '@/utils/seo';
import SeoHead from '@/components/SeoHead';

export default function AboutPage() {
  const { personal, skills, social } = portfolio;
  return (
    <>
      <SeoHead
        title={buildPageTitle(personal.name, personal.title, 'About')}
        description={`Learn more about ${personal.name}, ${personal.title}.`}
        url={`${portfolio.site.url}/about`}
        image={personal.image}
      />
      <main id="main-content" className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="mb-8 text-4xl font-bold">About Me</h1>
        <section className="grid gap-8 md:grid-cols-[240px_1fr]">
          <div className="relative h-60 w-full overflow-hidden rounded-xl border border-borderColor">
            <Image src={personal.image} alt="Profile portrait" fill className="object-cover" />
          </div>
          <div className="space-y-4">
            <p className="text-lg">
              Hi, I’m {personal.name}. I’m a {personal.title} passionate about creating useful, human-centered digital products.
            </p>
            <p className="text-textSecondary">
              Replace this paragraph with your journey, growth moments, and what motivates your craft.
            </p>
            <Link href="/contact" className="text-accent hover:underline">Let’s connect →</Link>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold">Key Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-borderColor bg-bgSecondary px-4 py-2 text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold">Social</h2>
          <div className="flex gap-6 text-textSecondary">
            <a href={social.github} className="hover:text-accent">GitHub</a>
            <a href={social.linkedin} className="hover:text-accent">LinkedIn</a>
            <a href={social.twitter} className="hover:text-accent">Twitter</a>
          </div>
        </section>
      </main>
    </>
  );
}
