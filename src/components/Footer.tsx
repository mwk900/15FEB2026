export default function Footer() {
  return (
    <footer className="border-t border-borderColor bg-bgSecondary">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-textSecondary">
        © {new Date().getFullYear()} [YOUR_NAME]. Built with Next.js + Tailwind CSS.
      </div>
    </footer>
  );
}
