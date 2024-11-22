'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  const isDark = theme === 'dark';

  return (
    <div className="h-full bg-transparent">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="m-0 flex bg-muted p-0 text-lg outline-1 outline-primary hover:bg-mutedLighter"
      >
        <Sun
          className={`h-[3rem] w-[3rem] transition-all ${
            isDark ? 'scale-100' : 'scale-0'
          } absolute text-white`}
        />
        <Moon
          className={`h-[3rem] w-[3rem] transition-all ${
            isDark ? 'scale-0' : 'scale-100'
          } text-primary`}
        />
      </Button>
    </div>
  );
}
