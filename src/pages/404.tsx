import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-4 text-textSecondary">The page you're looking for does not exist.</p>
      <Link href="/" className="mt-6 inline-block text-accent hover:underline">
        Go home
      </Link>
    </main>
  );
}
