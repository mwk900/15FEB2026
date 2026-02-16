import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  url: string;
  image?: string;
  schema?: Record<string, unknown>;
};

export default function SeoHead({ title, description, url, image = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80', schema }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {schema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /> : null}
    </Head>
  );
}
