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
      case 'About':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.25, ease: 'easeIn' }}
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
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <Home />
          </motion.div>
        );
    }
  };

  const renderedComponent = renderContent();

  return (
    <div className="hero flex min-h-svh flex-col">
      <header className="w-full">
        <Navigation
          selectedLink={selectedLink}
          setSelectedLink={setSelectedLink}
        />
      </header>
      <main className="flex flex-1 items-center justify-center p-4 md:-mt-[32px]">
        <div className="w-full max-w-4xl">
          <AnimatePresence mode="wait">{renderedComponent}</AnimatePresence>
        </div>
      </main>
      <footer className="w-full text-center">
        <span className="flex h-[40px] items-center justify-center text-center text-xs text-white">
          &copy; {new Date().getFullYear()} Adam Richard Turner
        </span>
      </footer>
    </div>
  );
}
