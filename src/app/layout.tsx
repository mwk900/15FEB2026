import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import portfolioData from "@/data/portfolio.json";

const name =
  portfolioData.personal.name === "[YOUR_NAME]"
    ? "Portfolio"
    : portfolioData.personal.name;

export const metadata: Metadata = {
  title: {
    default: `${name} — ${portfolioData.personal.title === "[YOUR_TITLE]" ? "Professional Portfolio" : portfolioData.personal.title}`,
    template: `%s | ${name}`,
  },
  description:
    portfolioData.personal.bio === "[YOUR_BIO]"
      ? "A professional portfolio showcasing my work, skills, and experience."
      : portfolioData.personal.bio,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: name,
    title: `${name} — Professional Portfolio`,
    description: "A professional portfolio showcasing my work, skills, and experience.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${name} — Professional Portfolio`,
    description: "A professional portfolio showcasing my work, skills, and experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: name,
              description: "Professional portfolio website",
              url: "https://example.com",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: name,
              jobTitle:
                portfolioData.personal.title === "[YOUR_TITLE]"
                  ? "Professional"
                  : portfolioData.personal.title,
              url: "https://example.com",
            }),
          }}
        />
      </head>
      <body
        className="antialiased dark"
      >
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
