'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import LoadingDots from '@/components/LoadingDots';
import { useRouter, useSearchParams } from 'next/navigation';
import { displayToUrlMap, urlToDisplayMap } from '@/utils/navigation';

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

const validUrls = Object.values(displayToUrlMap);

function PageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedLink, setSelectedLink] = useState('Home');

  useEffect(() => {
    const page = searchParams.get('page');
    if (page && validUrls.includes(page)) {
      setSelectedLink(urlToDisplayMap[page]);
    }
  }, [searchParams]);

  const handleLinkChange = (link: string) => {
    setSelectedLink(link);
    const urlParam = displayToUrlMap[link];
    router.push(`?page=${urlParam}`);
  };

  const renderContent = () => {
    switch (selectedLink) {
      case 'About Me':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeIn' }}
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

  return (
    <div className="container flex h-svh flex-col overflow-hidden py-4 portrait:overflow-hidden landscape:overflow-auto">
      <main className="flex flex-1 flex-col items-center justify-center">
        <header className="mb-0 w-full pb-6">
          <Navigation
            selectedLink={selectedLink}
            setSelectedLink={handleLinkChange}
          />
        </header>
        <div className="h-[438px] w-full sm:h-[380px]">
          <AnimatePresence>{renderContent()}</AnimatePresence>
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
