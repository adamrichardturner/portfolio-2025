import { Project } from '@/types/project';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui/button';

interface ProjectCardProps {
  project: Project;
  isDragging: boolean;
}

const ProjectCard = ({ project, isDragging }: ProjectCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="grid grid-cols-1 gap-6 p-1 pb-4 md:grid-cols-2 md:p-4">
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
          loading="eager"
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="mb-2 text-xl font-bold">{project.title}</h2>
          <p className="text-sm leading-tight text-gray-400">
            {project.description}
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-0">
          <span className="m-0 pb-1 text-xs text-white">Skills</span>
          <div className="mt-0 flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-gray-800 px-3 py-1 text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => isDragging && e.preventDefault()}
            className="flex items-center gap-2"
          >
            <Button
              variant="outline"
              className="w-[76px] border-none bg-slate-100 text-sm text-black hover:bg-white"
            >
              GitHub
            </Button>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => isDragging && e.preventDefault()}
            className="flex items-center gap-2 text-gray-400 transition hover:text-white"
          >
            <Button
              variant="outline"
              className="w-[76px] border-none bg-secondary text-sm text-white hover:bg-lightSecondary hover:text-white"
            >
              Live
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
