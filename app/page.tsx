'use client';

import dynamic from 'next/dynamic';
import { useState, Suspense, useCallback, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import LoadingDots from '@/components/LoadingDots';
import { useRouter, useSearchParams } from 'next/navigation';
import { displayToUrlMap, urlToDisplayMap } from '@/utils/navigation';

const Home = dynamic(() => import('@/components/Home'), {
  ssr: true,
});

const About = dynamic(() => import('@/components/About'), {
  ssr: true,
});

const Projects = dynamic(() => import('@/components/Projects'), {
  ssr: true,
});

const validUrls = Object.values(displayToUrlMap);

function PageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedLink, setSelectedLink] = useState(() => {
    const page = searchParams.get('page');
    if (page && validUrls.includes(page)) {
      return urlToDisplayMap[page];
    }
    return 'Home';
  });

  const handleLinkChange = (link: string) => {
    setSelectedLink(link);
    const urlParam = displayToUrlMap[link];
    router.push(`?page=${urlParam}`);
  };

  const renderContent = useCallback(() => {
    switch (selectedLink) {
      case 'About Me':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeIn' }}
            className="h-full w-full"
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
            className="h-full w-full"
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
            className="h-full w-full"
          >
            <Home />
          </motion.div>
        );
    }
  }, [selectedLink]);

  const selectedComponent = useMemo(() => renderContent(), [renderContent]);

  return (
    <div className="my-10 flex w-full flex-col sm:h-[460px] sm:py-0">
      <main className="flex flex-1 flex-col">
        <header className="w-full pb-6">
          <Navigation
            selectedLink={selectedLink}
            setSelectedLink={handleLinkChange}
          />
        </header>
        <div className="w-full">
          <AnimatePresence>{selectedComponent}</AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<LoadingDots />}>
      <PageContent />
    </Suspense>
  );
}
