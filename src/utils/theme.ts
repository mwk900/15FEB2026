export type Theme = 'dark' | 'light';

export const THEME_KEY = 'portfolio-theme';

export const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem(THEME_KEY) as Theme | null;
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const applyTheme = (theme: Theme): void => {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', theme);
};
