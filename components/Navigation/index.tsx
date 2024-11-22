import { motion } from 'framer-motion';
import { ModeToggle } from '@/components/ModeToggle';

interface NavigationProps {
  selectedLink: string;
  setSelectedLink: (link: string) => void;
}

const Navigation = ({ selectedLink, setSelectedLink }: NavigationProps) => {
  const links = ['Home', 'About Me', 'Projects'];

  return (
    <nav className="flex h-full flex-row items-center justify-between">
      <div className="drop-shadow-white sm:gap-6.5 flex flex-row items-center justify-start gap-6 rounded-md bg-muted px-6 py-2 drop-shadow-sm">
        {links.map((link) => (
          <motion.button
            key={link}
            onClick={() => setSelectedLink(link)}
            className="sm:text-md relative text-[14px]"
          >
            <span
              className={`transition-colors duration-200 ease-in-out ${
                selectedLink === link
                  ? 'font-[600] text-card-foreground'
                  : 'text-primary'
              } `}
            >
              {link}
            </span>
            {selectedLink === link && (
              <motion.div
                className="absolute bottom-0 h-[1px] bg-card-foreground"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              />
            )}
          </motion.button>
        ))}
      </div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navigation;
