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
      <ul className="flex flex-row items-center space-x-2 text-4xl [&_svg]:block [&_svg]:leading-none">
        <li>
          <a
            href="mailto:hello@adamrichardturner.dev"
            target="_blank"
            aria-label="Email"
          >
            <FaSquareEnvelope className="align-top text-primary transition-shadow hover:text-popover-foreground hover:shadow-md" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/adamrichardturner/"
            target="_blank"
            aria-label="GitHub"
          >
            <FaSquareGithub className="align-top text-primary transition-shadow hover:text-popover-foreground hover:shadow-md" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/devadam88"
            target="_blank"
            aria-label="X Twitter"
          >
            <FaSquareXTwitter className="align-top text-primary transition-shadow hover:text-popover-foreground hover:shadow-md" />
          </a>
        </li>
        <li className="border-none">
          <a
            href="https://www.linkedin.com/in/adamrichardturner88/"
            target="_blank"
            aria-label="Linkedin"
          >
            <FaLinkedin className="align-top text-primary transition-shadow hover:text-popover-foreground hover:shadow-md" />
          </a>
        </li>
        <li className="h-[34.17px] w-[34.17px] rounded bg-primary">
          <a
            href="https://adamrichardturner.medium.com/"
            target="_blank"
            aria-label="Medium"
          >
            <FaMedium className="h-[34.17px] w-[34.17px] rounded p-1.5 text-card shadow-xl transition-shadow hover:bg-popover-foreground hover:md:shadow-md" />
          </a>
        </li>
        <li className="border-none">
          <a
            href="https://www.youtube.com/@adamrichardturner"
            target="_blank"
            aria-label="YouTube"
          >
            <FaSquareYoutube className="border-none align-top text-primary transition-shadow hover:text-popover-foreground hover:md:shadow-md" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialLinks;
