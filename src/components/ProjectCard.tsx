import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Project } from '@/utils/types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      className="overflow-hidden rounded-xl border border-borderColor bg-bgSecondary shadow-sm"
    >
      <div className="relative h-48">
        <Image src={project.image} alt={`${project.title} project preview`} fill className="object-cover" />
      </div>
      <div className="space-y-3 p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-textSecondary">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-borderColor px-2 py-1 text-xs text-textSecondary">
              {tech}
            </span>
          ))}
        </div>
        <a className="text-accent hover:underline" href={project.link} target="_blank" rel="noreferrer">
          View Project
        </a>
      </div>
    </motion.article>
  );
}
