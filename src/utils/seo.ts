const defaultImage = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80';

export const buildPageTitle = (name: string, title: string, page?: string): string => {
  if (!page || page === 'Home') return `${name} - ${title} | Portfolio`;
  return `${page} | ${name} - ${title}`;
};

export const buildMetaDescription = (name: string, title: string): string =>
  `${name} is a ${title} building thoughtful digital products with a professional, human-centered approach.`;

export const buildOgImage = (image?: string): string => image || defaultImage;
