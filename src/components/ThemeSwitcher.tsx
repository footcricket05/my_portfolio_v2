import { Sun, Moon, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeSwitcherProps {
  currentTheme: 'light' | 'dark' | 'dim';
  onThemeChange: (theme: 'light' | 'dark' | 'dim') => void;
}

export const ThemeSwitcher = ({ currentTheme, onThemeChange }: ThemeSwitcherProps) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-gray-800 rounded-full p-2 shadow-lg">
      <div className="flex space-x-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onThemeChange('light')}
          className={`p-2 rounded-full ${currentTheme === 'light' ? 'bg-indigo-500 text-white' : 'text-gray-400'}`}
        >
          <Sun size={20} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onThemeChange('dark')}
          className={`p-2 rounded-full ${currentTheme === 'dark' ? 'bg-indigo-500 text-white' : 'text-gray-400'}`}
        >
          <Moon size={20} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onThemeChange('dim')}
          className={`p-2 rounded-full ${currentTheme === 'dim' ? 'bg-indigo-500 text-white' : 'text-gray-400'}`}
        >
          <Monitor size={20} />
        </motion.button>
      </div>
    </div>
  );
};