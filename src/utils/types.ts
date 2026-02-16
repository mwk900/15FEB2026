export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  link: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
};
