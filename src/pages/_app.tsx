import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import portfolio from '@/data/portfolio.json';
import '@/styles/globals.css';
import { applyTheme, getInitialTheme, THEME_KEY, Theme } from '@/utils/theme';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyTheme(next);
    window.localStorage.setItem(THEME_KEY, next);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header name={portfolio.personal.name} theme={theme} onToggleTheme={toggleTheme} />
      <Component {...pageProps} />
      <Footer />
      <ScrollToTop />
    </>
  );
}
