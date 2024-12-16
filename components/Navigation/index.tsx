'use client';

import { motion } from 'framer-motion';
import { ModeToggle } from '@/components/ModeToggle';
import { useTheme } from 'next-themes';
import { Button } from '../ui/button';

interface NavigationProps {
  selectedLink: string;
  setSelectedLink: (link: string) => void;
}

const Navigation = ({ selectedLink, setSelectedLink }: NavigationProps) => {
  const { theme, setTheme } = useTheme();
  const links = ['Home', 'About Me', 'Projects'];

  return (
    <nav className="flex h-full flex-row items-center justify-between">
      <div className="sm:gap-6.5 sm:text-md flex flex-row items-center justify-start gap-4 rounded-md bg-muted px-4 py-2.5 text-xs drop-shadow-sm">
        {links.map((link) => (
          <motion.div key={link} className="relative">
            <Button
              variant="ghost"
              onClick={() => setSelectedLink(link)}
              className={`sm:text-md h-[20px] p-0 text-[12px] transition-colors hover:bg-transparent ${
                selectedLink === link
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {link}
            </Button>
            {selectedLink === link && (
              <motion.div
                className="absolute -bottom-[2px] h-[1.25px] w-full bg-primary"
                layoutId="activeSection"
              />
            )}
          </motion.div>
        ))}
      </div>
      <div>
        <ModeToggle theme={theme} setTheme={setTheme} />
      </div>
    </nav>
  );
};
export default Navigation;
