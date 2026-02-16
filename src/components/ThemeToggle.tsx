import { useMemo } from 'react';
import { motion } from 'framer-motion';
import type { Theme } from '@/utils/theme';

type Props = {
  theme: Theme;
  onToggle: () => void;
};

export default function ThemeToggle({ theme, onToggle }: Props) {
  const isDark = useMemo(() => theme === 'dark', [theme]);

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-full border border-borderColor bg-bgSecondary px-3 py-2 text-textPrimary hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? '☀️' : '🌙'}
      </motion.span>
    </motion.button>
  );
}
