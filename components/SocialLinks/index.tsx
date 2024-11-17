import {
  FaSquareGithub,
  FaSquareEnvelope,
  FaSquareXTwitter,
  FaLinkedin,
  FaSquareYoutube,
  FaMedium,
} from 'react-icons/fa6';

const SocialLinks = () => {
  return (
    <>
      <ul className="flex flex-row items-center space-x-2 text-2xl text-white sm:text-4xl">
        <li>
          <a
            href="https://github.com/adamrichardturner/"
            target="_blank"
            aria-label="GitHub"
          >
            <FaSquareGithub className="rounded transition-shadow hover:md:shadow-md hover:md:shadow-secondary" />
          </a>
        </li>
        <li>
          <a
            href="mailto:hello@adamrichardturner.dev"
            target="_blank"
            aria-label="Email"
          >
            <FaSquareEnvelope className="rounded transition-shadow hover:md:shadow-md hover:md:shadow-secondary" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/devadam88"
            target="_blank"
            aria-label="X Twitter"
          >
            <FaSquareXTwitter className="rounded transition-shadow hover:md:shadow-md hover:md:shadow-secondary" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/adamrichardturner88/"
            target="_blank"
            aria-label="Linkedin"
          >
            <FaLinkedin className="rounded transition-shadow hover:md:shadow-md hover:md:shadow-secondary" />
          </a>
        </li>
        <li className="h-[21.88px] w-[21.88px] rounded bg-white sm:h-[34.17px] sm:w-[34.17px]">
          <a
            href="https://adamrichardturner.medium.com/"
            target="_blank"
            aria-label="Medium"
          >
            <FaMedium className="h-[21.88px] w-[21.88px] rounded p-1.5 text-black transition-shadow sm:h-[34.17px] sm:w-[34.17px] hover:md:shadow-md hover:md:shadow-secondary" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@adamrichardturner"
            target="_blank"
            aria-label="YouTube"
          >
            <FaSquareYoutube className="rounded transition-shadow hover:md:shadow-md hover:md:shadow-secondary" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialLinks;
