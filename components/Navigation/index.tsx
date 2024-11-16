import { motion } from 'framer-motion';

interface NavigationProps {
  selectedLink: string;
  setSelectedLink: (link: string) => void;
}

const Navigation = ({ selectedLink, setSelectedLink }: NavigationProps) => {
  const links = ['Home', 'About', 'Projects'];

  return (
    <nav className="flex flex-row items-center justify-center gap-8 py-6">
      {links.map((link) => (
        <motion.button
          key={link}
          onClick={() => setSelectedLink(link)}
          className="text-md relative"
        >
          <span
            className={`transition-colors duration-200 ease-in-out ${
              selectedLink === link
                ? 'text-secondary'
                : 'text-white hover:text-secondary'
            } `}
          >
            {link}
          </span>
          {selectedLink === link && (
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-white"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            />
          )}
        </motion.button>
      ))}
    </nav>
  );
};

export default Navigation;
