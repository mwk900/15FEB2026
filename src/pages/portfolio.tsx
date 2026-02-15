import { useMemo, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import portfolio from '@/data/portfolio.json';
import { buildPageTitle } from '@/utils/seo';
import SeoHead from '@/components/SeoHead';

export default function PortfolioPage() {
  const { personal, projects } = portfolio;
  const categories = useMemo(() => ['All', ...new Set(projects.map((p) => p.category))], [projects]);
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((project) => project.category === active);

  return (
    <>
      <SeoHead
        title={buildPageTitle(personal.name, personal.title, 'Portfolio')}
        description={`Selected work by ${personal.name}.`}
        url={`${portfolio.site.url}/portfolio`}
        image={personal.image}
      />
      <main id="main-content" className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="mb-8 text-4xl font-bold">Portfolio</h1>
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`rounded-full border px-4 py-2 text-sm ${active === category ? 'border-accent text-accent' : 'border-borderColor text-textSecondary'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </>
  );
}
