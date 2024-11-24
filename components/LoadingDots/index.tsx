import { motion } from 'framer-motion';

const LoadingDots = () => (
  <div className="flex h-full w-full items-center justify-center space-x-2">
    <motion.div
      className="h-2 w-2 rounded-full bg-primary"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
    <motion.div
      className="h-2 w-2 rounded-full bg-primary"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 1,
        delay: 0.2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
    <motion.div
      className="h-2 w-2 rounded-full bg-primary"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 1,
        delay: 0.4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  </div>
);

export default LoadingDots;
