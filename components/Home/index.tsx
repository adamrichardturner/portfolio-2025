import Image from 'next/image';
import SocialLinks from '../SocialLinks';
import { useState } from 'react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex h-full flex-row items-center justify-center md:space-x-4">
      <div className="relative">
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
          width={300}
          height={300}
          alt="Adam Richard Turner"
          className="hidden rounded-full lg:block"
          priority={true}
          loading="eager"
          quality={100}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="space-y-4 text-white">
        <div className="flex flex-row items-center justify-start space-x-0 md:space-x-3">
          <h1 className="font-inter text-4xl font-semibold leading-none md:text-6xl">
            Adam Richard Turner
          </h1>
        </div>
        <div className="space-y-4 font-inter">
          <p className="max-w-[600px] text-sm lg:max-w-full">
            <span className="font-bold text-secondary">Software Engineer</span>{' '}
            based in London, focused on crafting high-quality Front End UI for
            web applications using TypeScript and a variety of other tools.
          </p>
          <h3 className="text-[12px]">
            Reach out to me via any of the below [Not looking for work]
          </h3>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Home;
