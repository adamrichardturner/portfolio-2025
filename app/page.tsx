'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import LoadingDots from '@/components/LoadingDots';

const Home = dynamic(() => import('@/components/Home'), {
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <LoadingDots />
    </div>
  ),
  ssr: true,
});

const About = dynamic(() => import('@/components/About'), {
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <LoadingDots />
    </div>
  ),
  ssr: true,
});

const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <LoadingDots />
    </div>
  ),
  ssr: false,
});

export default function Page() {
  const [selectedLink, setSelectedLink] = useState('Home');

  const renderContent = () => {
    switch (selectedLink) {
      case 'About Me':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeIn' }}
            className="h-full pb-4"
          >
            <About />
          </motion.div>
        );
      case 'Projects':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeIn' }}
            className="h-full pb-4"
          >
            <Projects />
          </motion.div>
        );
      default:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="h-full pb-4"
          >
            <Home />
          </motion.div>
        );
    }
  };

  const renderedComponent = renderContent();

  return (
    <div className="hero flex min-h-svh flex-col">
      <main className="flex flex-1 items-center justify-center p-4">
        <div className="h-[618px] w-full max-w-4xl sm:h-[380px]">
          <header className="mb-0 w-full pb-6">
            <Navigation
              selectedLink={selectedLink}
              setSelectedLink={setSelectedLink}
            />
          </header>
          <AnimatePresence>{renderedComponent}</AnimatePresence>
        </div>
      </main>
    </div>
  );
}
