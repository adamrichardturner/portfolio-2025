import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { useState, useEffect } from 'react';
import projectsData from '@/utils/projectsData.json';
import ProjectCard from './ProjectCard';
import { Project } from '@/types/project';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = projectsData.projects as Project[];
  const [isDragging, setIsDragging] = useState(false);
  const DRAG_THRESHOLD = 50;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    setIsDragging(false);

    const dragDistance = info.offset.x;
    const dragVelocity = info.velocity.x;

    if (
      Math.abs(dragDistance) > DRAG_THRESHOLD ||
      Math.abs(dragVelocity) > 500
    ) {
      if (dragDistance > 0 && currentIndex > 0) {
        handlePrevious();
      } else if (dragDistance < 0 && currentIndex < projects.length - 1) {
        handleNext();
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-white"
    >
      <div className="mb-6">
        <h2 className="mb-0 text-3xl font-bold leading-none">Projects</h2>
        <span className="text-sm text-gray-400">
          A curated selection of some of my favourite projects
        </span>
      </div>

      <div className="relative h-full overflow-hidden rounded-lg border border-gray-700 bg-black md:h-[360px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="p-6"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              touchAction: 'pan-y pinch-zoom',
            }}
          >
            <ProjectCard
              project={projects[currentIndex]}
              isDragging={isDragging}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-4">
          <div className="ml-14 mt-4 hidden w-full items-center justify-start gap-4 md:flex">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="rounded-full bg-gray-800/50 p-1 text-white transition-all hover:bg-gray-700/50 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Previous project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === projects.length - 1}
              className="rounded-full bg-gray-800/50 p-1 text-white transition-all hover:bg-gray-700/50 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Next project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div className="flex gap-2 pt-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
