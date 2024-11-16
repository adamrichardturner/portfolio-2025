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
      className="text-white"
    >
      <div className="mb-6">
        <h2 className="mb-0 text-3xl font-bold leading-none">About Me</h2>
        <span className="text-sm text-gray-400">Get to know me better</span>
      </div>

      <div className="grid h-full grid-cols-1 gap-8 md:h-[360px] md:grid-cols-2">
        <div className="space-y-4">
          <div className="relative h-[200px] w-full md:hidden">
            <Image
              src="/adam-fountain.png"
              alt="Adam Turner at a fountain"
              fill
              className="rounded-lg object-cover object-left"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              onLoad={() => setIsLoading(false)}
            />
          </div>
          <p className="text-sm text-gray-300">
            I'm a{' '}
            <span className="font-semibold text-white">
              Full Stack Software Engineer
            </span>{' '}
            with a strong passion for{' '}
            <span className="font-semibold text-white">
              Frontend Development
            </span>
            , currently{' '}
            <span className="font-semibold text-white">based in London</span>,
            where I work for a high-performing start-up specialising in
            cutting-edge mobile technology for the{' '}
            <span className="font-semibold text-white">eCommerce sector</span>.
          </p>
          <p className="text-sm text-gray-300">
            My role is diverse and dynamic. Primarily, I focus on developing a
            drag-and-drop CMS using{' '}
            <span className="font-semibold text-white">React</span> that enables
            clients to easily customize and manage native eCommerce mobile apps.
            Additionally, I build internal tools to streamline and support vital
            business operations.
          </p>
          <p className="text-sm text-gray-300">
            Outside of work, I have a love for reading, staying fit, and caring
            for my tropical fish.
          </p>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-secondary">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                'TypeScript',
                'React',
                'Next.js',
                'Node.js',
                'Tailwind CSS',
                'PostgreSQL',
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <div className="w-full overflow-hidden rounded-lg">
            {isLoading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-black">
                <Image
                  src="/Spinner.svg"
                  alt="Loading..."
                  width={40}
                  height={40}
                  className="animate-spin rounded-lg"
                />
              </div>
            )}
            <Image
              src="/adam-fountain.png"
              alt="Adam Turner at a fountain"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
