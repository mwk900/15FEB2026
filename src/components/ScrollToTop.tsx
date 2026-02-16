import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 rounded-full border border-borderColor bg-bgSecondary p-3 shadow-elevated"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </button>
  );
}
