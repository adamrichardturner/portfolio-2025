import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-white"
    >
      <h1 className="mb-6 text-3xl font-bold">About Me</h1>
      <p className="text-lg">
        This is the about section. Replace this text with your personal
        information.
      </p>
    </motion.div>
  );
};

export default About;
