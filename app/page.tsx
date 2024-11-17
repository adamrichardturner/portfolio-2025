'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Home from '@/components/Home';

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
            className="h-full"
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
            className="h-full"
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
            className="items-between flex h-full flex-1"
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
        <div className="h-[570px] w-full max-w-4xl sm:h-[380px]">
          <header className="mb-0 w-full pb-6">
            <Navigation
              selectedLink={selectedLink}
              setSelectedLink={setSelectedLink}
            />
          </header>
          <AnimatePresence mode="wait">{renderedComponent}</AnimatePresence>
        </div>
      </main>
    </div>
  );
}
