import ContactForm from '@/components/ContactForm';
import portfolio from '@/data/portfolio.json';
import { buildPageTitle } from '@/utils/seo';
import SeoHead from '@/components/SeoHead';

export default function ContactPage() {
  const { personal, social } = portfolio;
  return (
    <>
      <SeoHead
        title={buildPageTitle(personal.name, personal.title, 'Contact')}
        description={`Contact ${personal.name} for opportunities and collaboration.`}
        url={`${portfolio.site.url}/contact`}
        image={personal.image}
      />
      <main id="main-content" className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="mb-8 text-4xl font-bold">Contact</h1>
        <ContactForm />
        <div className="mx-auto mt-8 max-w-2xl space-y-2 text-textSecondary">
          <p>Email: {personal.email}</p>
          <p>
            Social: <a href={social.linkedin} className="text-accent">LinkedIn</a> ·{' '}
            <a href={social.github} className="text-accent">GitHub</a>
          </p>
        </div>
      </main>
    </>
  );
}
