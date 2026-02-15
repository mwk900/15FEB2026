import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import type { Theme } from '@/utils/theme';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

type Props = {
  name: string;
  theme: Theme;
  onToggleTheme: () => void;
};

export default function Header({ name, theme, onToggleTheme }: Props) {
  const [shadow, setShadow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShadow(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-borderColor bg-bgPrimary/95 backdrop-blur ${shadow ? 'shadow-elevated' : ''}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3" aria-label="Main navigation">
        <Link href="/" className="font-semibold text-accent">{name}</Link>

        <button
          className="rounded border border-borderColor px-3 py-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          ☰
        </button>

        <div className={`${open ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-3 border-b border-borderColor bg-bgPrimary p-4 md:static md:flex md:w-auto md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-textSecondary hover:text-textPrimary"
              onClick={() => setOpen(false)}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </nav>
    </header>
  );
}
