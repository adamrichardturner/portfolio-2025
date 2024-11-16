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
      <ul className="flex flex-row items-center space-x-2 text-4xl">
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
        <li className="h-[34.17px] w-[34.17px] rounded bg-white">
          <a
            href="https://adamrichardturner.medium.com/"
            target="_blank"
            aria-label="Medium"
          >
            <FaMedium className="h-[34.17px] w-[34.17px] rounded p-1.5 text-black transition-shadow hover:md:shadow-md hover:md:shadow-secondary" />
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
