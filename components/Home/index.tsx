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
        <h2 className="mb-4 font-inter text-3xl font-bold leading-none text-white md:mb-0">
          Adam Richard Turner
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-4">
          {/* Mobile Image */}
          <div className="relative h-[270px] w-full md:hidden">
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
              src="/adam-finland.jpg"
              alt="Adam Richard Turner"
              fill
              className="rounded-lg object-cover object-center"
              priority={true}
              loading="eager"
              onLoad={() => setIsLoading(false)}
            />
          </div>

          <div className="space-y-4 font-inter">
            <p className="max-w-[500px] pr-4 text-[14px] lg:max-w-full">
              <span className="font-bold text-white">Software Engineer</span> in
              London, specializing in high-quality Front End UI development,
              with versatile skills and flexibility to work across the stack
              with various technologies.
            </p>
            <p className="max-w-[500px] pr-4 text-[14px] lg:max-w-full">
              Expertise in React, Next.js, TypeScript, Node.js, and Express.
            </p>

            <div className="pt-8">
              <h3 className="pb-2 text-[12px]">
                Reach out to me via any of the below{' '}
              </h3>
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="relative mt-4 hidden h-[236px] w-full md:block">
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
              src="/adam-finland.jpg"
              alt="Adam Richard Turner"
              fill
              className="rounded-lg object-cover"
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
