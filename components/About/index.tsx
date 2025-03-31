import { motion } from 'framer-motion';
import Image from 'next/image';
import ImageLoader from '../ImageLoader';
import { useState } from 'react';

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-primary"
    >
      <div className="mb-0">
        <h2 className="pb-4 font-inter text-xl font-bold leading-none text-foreground sm:mb-0 sm:text-3xl">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="space-y-4 text-primary">
          <p className="max-w-[500px] text-[14px]">
            I'm passionate about{' '}
            <span className="font-semibold text-foreground">
              Front End Development
            </span>
            .
          </p>
          <p className="max-w-[500px] text-[14px]">
            I'm also skilled at building full-stack, end-to-end features.
          </p>
          <p className="max-w-[500px] text-[14px]">
            I work for a high-performing SaaS company in London called{' '}
            <a
              href="https://vennapps.com"
              className="font-semibold text-foreground"
              target="_blank"
            >
              Venn Apps
            </a>{' '}
            that specialises in cutting-edge mobile technology for the eCommerce
            sector.
          </p>
          <p className="max-w-[500px] text-[14px]">
            I am not looking for new opportunities, but I am always open to
            discussing potential collaborations and open source projects.
          </p>
        </div>

        <div className="relative hidden h-[236px] w-full drop-shadow-xl sm:block">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-transparent">
              <ImageLoader />
            </div>
          )}
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Image
              src="/adam-chinatown.jpg"
              alt="Adam Turner in Chinatown"
              fill
              className={`rounded-lg object-cover drop-shadow-md`}
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

export default About;
