'use client';

import Image from 'next/image';
import SocialLinks from '../SocialLinks';
import { motion } from 'framer-motion';
import ImageLoader from '../ImageLoader';
import { useState } from 'react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-gray-200"
    >
      <div className="mb-0">
        <h1 className="pb-4 font-inter text-xl font-bold leading-none text-foreground sm:mb-0 sm:text-3xl">
          Adam Richard Turner
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="flex flex-col justify-between space-y-4 font-inter text-primary">
          <div className="space-y-4">
            <p className="max-w-[500px] pr-4 text-[14px] lg:max-w-full">
              <span className="font-bold text-foreground">
                Software Engineer
              </span>{' '}
              in London, specialising in Front End development.
            </p>
            <p className="max-w-[500px] pr-4 text-[14px] lg:max-w-full">
              Experienced with a wide range of technologies and a passion for
              creating beautiful and performant user experiences.
            </p>
            <p className="max-w-[500px] pr-4 text-[14px] lg:max-w-full">
              Expertise in React, Next.js, TypeScript, Node.js, and Express,
              amongst many other tools and technologies.
            </p>
          </div>

          <div className="pt-0">
            <h3 className="pb-2 text-[12px]">
              Reach out to me via any of the below{' '}
            </h3>
            <SocialLinks />
          </div>
        </div>

        {/* Desktop Image */}
        <div className="relative hidden h-[236px] w-full sm:block">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-transparent">
              <ImageLoader />
            </div>
          )}
          <div className="relative h-full w-full overflow-hidden rounded-lg drop-shadow-xl">
            <Image
              src="/adam-park.jpg"
              alt="Adam Richard Turner"
              fill
              className="rounded-lg object-cover drop-shadow-md"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={true}
              loading="eager"
              quality={100}
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
