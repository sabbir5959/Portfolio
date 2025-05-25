'use client';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeChanger = ({ className }: { className?: string }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevents hydration mismatch

  function handleClick() {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <div
      className={cn('cursor-pointer transition-all duration-200', className)}
      onClick={handleClick}
      title="Toggle Theme"
    >
      {resolvedTheme === 'light' ? (
        <Sun className="text-black dark:text-white w-5 h-5" />
      ) : (
        <Moon className="text-black dark:text-white w-5 h-5" />
      )}
    </div>
  );
};

export default ThemeChanger;
