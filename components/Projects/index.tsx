import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { useState, useEffect } from 'react';
import projectsData from '@/utils/projectsData.json';
import ProjectCard from './ProjectCard';
import { Project } from '@/types/project';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = projectsData.projects as Project[];
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const DRAG_THRESHOLD = 50; // Minimum drag distance to trigger slide change

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(timer);
  }, [projects.length]);

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

    // Change slide if drag distance exceeds threshold or if flick velocity is high
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
      <h1 className="mb-6 text-3xl font-bold">My Projects</h1>
      <div className="relative h-full overflow-hidden rounded-lg border border-gray-700 md:h-[340px]">
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

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition ${
                index === currentIndex ? 'bg-white' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
