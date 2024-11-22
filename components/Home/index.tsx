import Image from 'next/image';
import SocialLinks from '../SocialLinks';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
        <h1 className="mb-4 font-inter text-2xl font-bold leading-none text-foreground sm:mb-0 sm:text-3xl">
          Adam Richard Turner
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="space-y-4">
          {/* Mobile Image */}
          <div className="relative h-[270px] w-full sm:hidden">
            {isLoading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
                <Image
                  src="/Spinner.svg"
                  alt="Loading..."
                  width={40}
                  height={40}
                  priority={true}
                />
              </div>
            )}
            <Image
              src="/adam-fountain.jpg"
              alt="Adam Richard Turner"
              fill
              className="rounded-lg object-cover object-left drop-shadow-md"
              priority={true}
              loading="eager"
              onLoad={() => setIsLoading(false)}
            />
          </div>

          <div className="space-y-4 font-inter text-primary">
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

            <div className="pt-0 sm:pt-8">
              <h3 className="hidden pb-2 text-[12px] sm:block">
                Reach out to me via any of the below{' '}
              </h3>
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="relative mt-4 hidden h-[236px] w-full sm:block">
          <div className="w-full overflow-hidden rounded-lg">
            {isLoading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-black">
                <Image
                  src="/Spinner.svg"
                  alt="Loading..."
                  width={40}
                  height={40}
                  priority={true}
                />
              </div>
            )}
            <Image
              src="/adam-fountain.jpg"
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
