import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Sun, Moon, Monitor, Type } from 'lucide-react';

interface ThemeCustomizerProps {
  currentTheme: 'light' | 'dark' | 'dim';
  onThemeChange: (theme: 'light' | 'dark' | 'dim') => void;
  currentFontSize: 'sm' | 'base' | 'lg' | 'xl';
  onFontSizeChange: (size: 'sm' | 'base' | 'lg' | 'xl') => void;
  currentAccentColor: 'indigo' | 'blue' | 'purple' | 'pink' | 'green';
  onAccentColorChange: (color: 'indigo' | 'blue' | 'purple' | 'pink' | 'green') => void;
}

const colorMap = {
  indigo: '#6366f1',
  blue: '#3b82f6',
  purple: '#8b5cf6',
  pink: '#ec4899',
  green: '#10b981',
};

export const ThemeCustomizer = ({
  currentTheme,
  onThemeChange,
  currentFontSize,
  onFontSizeChange,
  currentAccentColor,
  onAccentColorChange,
}: ThemeCustomizerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const fontSizes = ['sm', 'base', 'lg', 'xl'] as const;
  const colors = ['indigo', 'blue', 'purple', 'pink', 'green'] as const;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[var(--bg-secondary)] p-3 rounded-full shadow-lg text-[var(--text-primary)]"
      >
        <Settings size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 bg-[var(--bg-secondary)] rounded-lg shadow-xl p-6 w-72"
          >
            <div className="space-y-6">
              {/* Theme */}
              <div>
                <h3 className="text-[var(--text-primary)] font-semibold mb-3">Theme</h3>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => onThemeChange('light')}
                    className={`p-3 rounded-lg flex flex-col items-center gap-2 ${
                      currentTheme === 'light' ? 'bg-[var(--accent)]' : 'bg-[var(--bg-primary)]'
                    } text-[var(--text-primary)]`}
                  >
                    <Sun size={20} />
                    <span className="text-sm">Light</span>
                  </button>
                  <button
                    onClick={() => onThemeChange('dark')}
                    className={`p-3 rounded-lg flex flex-col items-center gap-2 ${
                      currentTheme === 'dark' ? 'bg-[var(--accent)]' : 'bg-[var(--bg-primary)]'
                    } text-[var(--text-primary)]`}
                  >
                    <Moon size={20} />
                    <span className="text-sm">Dark</span>
                  </button>
                  <button
                    onClick={() => onThemeChange('dim')}
                    className={`p-3 rounded-lg flex flex-col items-center gap-2 ${
                      currentTheme === 'dim' ? 'bg-[var(--accent)]' : 'bg-[var(--bg-primary)]'
                    } text-[var(--text-primary)]`}
                  >
                    <Monitor size={20} />
                    <span className="text-sm">Dim</span>
                  </button>
                </div>
              </div>

              {/* Font Size */}
              <div>
                <h3 className="text-[var(--text-primary)] font-semibold mb-3">Font Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {fontSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => onFontSizeChange(size)}
                      className={`p-3 rounded-lg flex items-center justify-center ${
                        currentFontSize === size ? 'bg-[var(--accent)]' : 'bg-[var(--bg-primary)]'
                      } text-[var(--text-primary)]`}
                    >
                      <Type size={size === 'sm' ? 14 : size === 'lg' ? 22 : size === 'xl' ? 26 : 18} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Accent Color */}
              <div>
                <h3 className="text-[var(--text-primary)] font-semibold mb-3">Accent Color</h3>
                <div className="grid grid-cols-5 gap-3">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => onAccentColorChange(color)}
                      className="group relative"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl transition-transform ${
                          currentAccentColor === color ? 'scale-90' : 'scale-100'
                        } group-hover:scale-95`}
                        style={{ backgroundColor: colorMap[color] }}
                      />
                      {currentAccentColor === color && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};