import { motion } from 'framer-motion';
import Image from 'next/image';
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
        <h2 className="mb-4 font-inter text-2xl font-bold leading-none text-foreground sm:mb-0 sm:text-3xl">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="space-y-4 text-primary">
          <div className="relative h-[270px] w-full sm:hidden">
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
              src="/adam-chinatown.jpg"
              alt="Adam Turner in Chinatown"
              fill
              className="rounded-lg object-cover object-left"
              loading="lazy"
              onLoad={() => setIsLoading(false)}
            />
          </div>
          <p className="max-w-[500px] text-[14px]">
            I have a strong passion for{' '}
            <span className="font-semibold text-foreground">
              Front End Development
            </span>
            . I also enjoy working across the stack to deliver end-to-end
            features and projects.
          </p>
          <p className="max-w-[500px] text-[14px]">
            I work for a high-performing start-up in London which specialises in
            cutting-edge mobile technology for the eCommerce sector.
          </p>
          <p className="max-w-[500px] text-[14px]">
            Outside of work, I have a love for reading, staying fit, and caring
            for my tropical fish.
          </p>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-primary">Key Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['TypeScript', 'React', 'Next', 'Express'].map((skill) => (
                <span
                  key={skill}
                  className="cursor-default rounded-full bg-gray-800 px-3 py-1 text-[10px] text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

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
