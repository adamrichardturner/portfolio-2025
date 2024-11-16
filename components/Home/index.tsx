import Image from 'next/image';
import SocialLinks from '../SocialLinks';

const Home = () => {
  return (
    <div className="flex flex-row items-center justify-center space-x-4">
      <div>
        <Image
          src="/adam-thumb.png"
          width={300}
          height={300}
          alt="Adam Richard Turner"
          className="hidden rounded-full lg:block"
        />
      </div>
      <div className="space-y-4 text-white">
        <div className="flex flex-row items-center justify-start space-x-3">
          <h1 className="font-inter text-4xl font-semibold leading-none md:text-6xl">
            Adam Richard Turner
          </h1>
        </div>
        <div className="space-y-4 font-inter">
          <p className="text-base">
            <span className="font-bold text-secondary">Software Engineer</span>{' '}
            based in London, focused on crafting high-quality Front End UI for
            web applications using TypeScript and a variety of other tools.
          </p>
          <h3 className="text-xs">
            Reach out to me via any of the below [Not looking for work]
          </h3>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Home;
