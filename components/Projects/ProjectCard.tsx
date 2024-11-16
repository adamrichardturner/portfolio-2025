import { Project } from '@/types/project';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
  isDragging: boolean;
}

const ProjectCard = ({ project, isDragging }: ProjectCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
            <Image
              src="/Spinner.svg"
              alt="Loading..."
              width={40}
              height={40}
              className="animate-spin"
            />
          </div>
        )}
        <Image
          src={project.media}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={project.isPriority}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="mb-2 text-xl font-bold">{project.title}</h2>
          <p className="text-gray-400">{project.description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-gray-800 px-3 py-1 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => isDragging && e.preventDefault()}
            className="flex items-center gap-2 text-gray-400 transition hover:text-white"
          >
            GitHub →
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => isDragging && e.preventDefault()}
            className="flex items-center gap-2 text-gray-400 transition hover:text-white"
          >
            Live Demo →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
