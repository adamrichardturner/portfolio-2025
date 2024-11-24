import { Project } from '@/types/project';
import Image from 'next/image';
import { Button } from '../ui/button';
import { FaGithub, FaLink } from 'react-icons/fa';
import ImageLoader from '../ImageLoader';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
  isDragging: boolean;
}

const ProjectCard = ({ project, isDragging }: ProjectCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="grid grid-cols-1 gap-6 p-1 pb-4 md:grid-cols-2">
      <div className="relative aspect-video h-full w-full overflow-hidden rounded-lg bg-lightBackground drop-shadow-xl">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <ImageLoader />
          </div>
        )}
        <a href={project.live} target="_blank" rel="noopener noreferrer">
          <div className="relative h-full w-full rounded-lg bg-lightBackground">
            <Image
              src={project.media}
              alt={project.title}
              fill
              className="rounded-lg object-cover drop-shadow-md"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={project.isPriority ?? true}
              loading="eager"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </a>
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="mb-2 text-xl font-bold text-foreground">
            {project.title}
          </h2>
          <p className="text-sm leading-tight text-primary">
            {project.description}
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-0">
          <span className="m-0 pb-1 text-[10px] text-primary">Tech Stack</span>
          <div className="mt-0 flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-gray-800 px-3 py-1 text-[10px]"
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
              className="h-[36px] w-[82px] border-none bg-gray-200 text-sm text-darkBackground hover:bg-gray-100 hover:text-black"
            >
              <FaGithub size={8} /> GitHub
            </Button>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => isDragging && e.preventDefault()}
            className="flex items-center gap-2 text-gray-200 transition hover:text-white"
          >
            <Button
              variant="outline"
              className="flex h-[36px] w-[82px] items-center justify-center border-none bg-[#42674f] text-sm text-justWhite hover:bg-lightSecondary hover:text-whitest"
            >
              <FaLink size={8} className="pr-1" />
              Live
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
