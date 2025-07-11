
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
        <div className="w-4 h-4" />
      </button>
    );
  }

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    if (theme === 'system') {
      return <Monitor className="w-4 h-4 text-blue-500" />;
    } else if (theme === 'dark') {
      return <Moon className="w-4 h-4 text-blue-400" />;
    } else {
      return <Sun className="w-4 h-4 text-yellow-500" />;
    }
  };

  const getTitle = () => {
    if (theme === 'system') {
      return `Системная тема (${systemTheme === 'dark' ? 'темная' : 'светлая'})`;
    } else if (theme === 'dark') {
      return 'Темная тема';
    } else {
      return 'Светлая тема';
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
      aria-label={getTitle()}
      title={getTitle()}
    >
      {getIcon()}
    </button>
  );
};

export default ThemeToggle;
