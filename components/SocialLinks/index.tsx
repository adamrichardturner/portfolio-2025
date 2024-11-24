import {
  FaSquareGithub,
  FaSquareEnvelope,
  FaSquareXTwitter,
  FaSquareYoutube,
  FaLinkedin,
} from 'react-icons/fa6';
import { FaMedium } from 'react-icons/fa6';

const SocialLinks = () => {
  return (
    <>
      <ul className="flex flex-row items-center space-x-2 text-4xl [&_svg]:block [&_svg]:leading-none">
        <li className="relative h-[34.17px] w-[34.17px] rounded bg-primary hover:drop-shadow-lg">
          <a
            href="mailto:hello@adamrichardturner.dev"
            target="_blank"
            aria-label="Email"
          >
            <FaSquareEnvelope className="absolute h-[34.17px] w-[34.17px] rounded text-lightBackground transition-all hover:text-contrast" />
          </a>
        </li>
        <li className="relative h-[34.17px] w-[34.17px] rounded bg-primary hover:drop-shadow-lg">
          <a
            href="https://github.com/adamrichardturner/"
            target="_blank"
            aria-label="GitHub"
          >
            <FaSquareGithub className="absolute h-[34.17px] w-[34.17px] rounded text-lightBackground transition-all hover:text-contrast" />
          </a>
        </li>
        <li className="relative h-[34.17px] w-[34.17px] rounded bg-primary hover:drop-shadow-lg">
          <a
            href="https://twitter.com/devadam88"
            target="_blank"
            aria-label="X Twitter"
          >
            <FaSquareXTwitter className="absolute h-[34.17px] w-[34.17px] rounded text-lightBackground transition-all hover:text-contrast" />
          </a>
        </li>
        <li className="relative h-[34.17px] w-[34.17px] rounded bg-primary hover:drop-shadow-lg">
          <a
            href="https://www.linkedin.com/in/adamrichardturner88/"
            target="_blank"
            aria-label="Linkedin"
          >
            <FaLinkedin className="absolute h-[34.17px] w-[34.17px] rounded text-lightBackground transition-all hover:text-contrast" />
          </a>
        </li>
        <li className="relative h-[34.17px] w-[34.17px] rounded bg-primary hover:drop-shadow-lg">
          <a
            href="https://www.youtube.com/@adamrichardturner"
            target="_blank"
            aria-label="YouTube"
          >
            <FaSquareYoutube className="absolute h-[34.17px] w-[34.17px] rounded text-lightBackground transition-all hover:text-contrast" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialLinks;
