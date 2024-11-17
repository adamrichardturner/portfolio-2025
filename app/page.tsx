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
            transition={{ duration: 1.25, ease: 'easeIn' }}
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
            transition={{ duration: 1.25, ease: 'easeIn' }}
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
            transition={{ duration: 1.25, ease: 'easeInOut' }}
            className="h-full"
          >
            <Home />
          </motion.div>
        );
    }
  };

  const renderedComponent = renderContent();

  return (
    <div className="hero flex min-h-svh flex-col">
      <header className="h-[60px] w-full">
        <Navigation
          selectedLink={selectedLink}
          setSelectedLink={setSelectedLink}
        />
      </header>
      <main className="flex h-full flex-1 items-center justify-center p-4 md:pt-[60px]">
        <div className="min-h-[380px] w-full max-w-4xl md:h-[380px]">
          <AnimatePresence mode="wait">{renderedComponent}</AnimatePresence>
        </div>
      </main>
    </div>
  );
}
