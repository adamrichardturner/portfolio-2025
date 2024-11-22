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
            I have a strong passion for{' '}
            <span className="font-semibold text-foreground">
              Front End Development
            </span>
            .
          </p>
          <p className="max-w-[500px] text-[14px]">
            In addition to this, I enjoy working across the stack to deliver
            end-to-end features and projects.
          </p>
          <p className="max-w-[500px] text-[14px]">
            I work for a high-performing start-up in London which specialises in
            cutting-edge mobile technology for the eCommerce sector.
          </p>
          <p className="max-w-[500px] text-[14px]">
            Outside of work, I have a love for reading, staying fit, and caring
            for my tropical fish.
          </p>
        </div>

        <div className="relative hidden h-[236px] w-full sm:block">
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            {isLoading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <ImageLoader />
              </div>
            )}
            <Image
              src="/adam-chinatown.jpg"
              alt="Adam Turner in Chinatown"
              fill
              className="rounded-lg object-cover drop-shadow-xl"
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
