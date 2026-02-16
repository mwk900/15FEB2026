import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import portfolioData from "@/data/portfolio.json";

const name = portfolioData.personal.name;
const title = portfolioData.personal.title;
const bio = portfolioData.personal.bio;
const siteUrl = "https://mwk000.netlify.app";

export const metadata: Metadata = {
  title: {
    default: `${name} — ${title}`,
    template: `%s | ${name}`,
  },
  description: bio,
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: name,
    title: `${name} — ${title}`,
    description: bio,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${name} — ${title}`,
    description: bio,
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
              "@type": "ProfessionalService",
              name: name,
              description: bio,
              url: siteUrl,
              serviceType: "Web Design and Development",
              areaServed: {
                "@type": "Place",
                name: "Local businesses",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Web Services",
                itemListElement: portfolioData.services.map((s, i) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: s.title,
                    description: s.description,
                  },
                  position: i + 1,
                })),
              },
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
              jobTitle: title,
              url: siteUrl,
              knowsAbout: portfolioData.skills,
            }),
          }}
        />
      </head>
      <body className="antialiased dark">
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
