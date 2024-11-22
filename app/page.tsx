'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import LoadingDots from '@/components/LoadingDots';

const Home = dynamic(() => import('@/components/Home'), {
  loading: () => <LoadingDots />,
  ssr: true,
});

const About = dynamic(() => import('@/components/About'), {
  loading: () => <LoadingDots />,
  ssr: true,
});

const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <LoadingDots />,
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
            className="h-[618px]"
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
            className="h-[618px]"
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
          >
            <Home />
          </motion.div>
        );
    }
  };

  const renderedComponent = renderContent();

  return (
    <div className="container flex min-h-svh flex-col">
      <main className="flex flex-1 flex-col items-center justify-center">
        <header className="mb-0 w-full pb-6">
          <Navigation
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
        </header>
        <div className="h-[618px] w-full sm:h-[380px]">
          <AnimatePresence>{renderedComponent}</AnimatePresence>
        </div>
      </main>
    </div>
  );
}
