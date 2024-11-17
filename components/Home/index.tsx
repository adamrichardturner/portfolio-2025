import Image from 'next/image';
import SocialLinks from '../SocialLinks';
import { useState } from 'react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex w-full flex-1 flex-col items-start justify-between sm:flex-row">
      <div className="flex h-full w-full flex-1 flex-col items-start space-y-4 text-gray-300">
        <div className="mb-auto flex w-full flex-row items-center justify-start space-x-0 sm:space-x-3">
          <h1 className="font-inter text-2xl font-bold leading-none text-white sm:text-3xl">
            Adam Richard Turner
          </h1>
        </div>

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
          <div className="relative h-[270px] w-full sm:hidden">
            <Image
              src="/adam-thumb.png"
              alt="Adam Richard Turner"
              fill
              className="rounded-lg object-cover object-left [transform:scaleX(-1)]"
              priority={true}
              loading="eager"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>

        <div className="space-y-4 font-inter">
          <p className="max-w-[500px] pr-4 text-[14px] lg:max-w-full">
            <span className="font-bold text-white">Software Engineer</span>{' '}
            based in London, focused on crafting high-quality Front End UI for
            web applications using TypeScript and a variety of other tools.
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
      <div className="relative hidden sm:block">
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
          src="/adam-thumb.png"
          width={236}
          height={236}
          alt="Adam Richard Turner"
          className="rounded-lg [transform:scaleX(-1)]"
          priority={true}
          loading="eager"
          quality={100}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
};

export default Home;
