'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function ModeToggle({
  theme,
  setTheme,
}: {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
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
        {isDark ? (
          <Sun className={`h-[3rem] w-[3rem] text-primary transition-all`} />
        ) : (
          <Moon className={`h-[3rem] w-[3rem] text-primary transition-all`} />
        )}
      </Button>
    </div>
  );
}
