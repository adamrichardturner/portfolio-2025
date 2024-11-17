import Image from 'next/image';
import SocialLinks from '../SocialLinks';
import { useState } from 'react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex w-full flex-1 flex-row-reverse items-start justify-between">
      <div className="flex h-full items-start justify-start">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center rounded-full bg-black lg:block">
            <Image
              src="/Spinner.svg"
              alt="Loading..."
              width={40}
              height={40}
              className="animate-spin"
              priority={true}
            />
          </div>
        )}
        <Image
          src="/adam-thumb.png"
          width={200}
          height={200}
          alt="Adam Richard Turner"
          className="hidden scale-x-[-1] rounded-lg lg:block"
          priority={true}
          loading="eager"
          quality={100}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="flex h-full flex-1 flex-col items-start space-y-4 text-gray-300">
        <div className="mb-6 flex flex-row items-center justify-start space-x-0 md:space-x-3">
          <h1 className="font-inter text-3xl font-bold leading-none text-white">
            Adam Richard Turner
          </h1>
        </div>
        <div className="max-w-[600px] space-y-4 font-inter">
          <p className="text-sm lg:max-w-full">
            <span className="font-bold text-white">Software Engineer</span>{' '}
            based in London, focused on crafting high-quality Front End UI for
            web applications using TypeScript and a variety of other tools.
          </p>
          <h3 className="text-[12px]">
            Reach out to me via any of the below{' '}
            <span className="font-semibold text-white">
              [Not looking for work]
            </span>
          </h3>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Home;
