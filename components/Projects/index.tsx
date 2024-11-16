import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-white"
    >
      <h1 className="mb-6 text-3xl font-bold">My Projects</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Add your project cards here */}
        <div className="rounded-lg border border-gray-700 p-4">
          <h2 className="mb-2 text-xl font-semibold">Project 1</h2>
          <p>Project description goes here</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
