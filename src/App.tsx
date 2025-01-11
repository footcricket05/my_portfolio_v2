import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { ThemeCustomizer } from './components/ThemeCustomizer';
import { NeuralBackground } from './components/NeuralBackground';
import './styles/theme.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark' | 'dim'>('dark');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg' | 'xl'>('base');
  const [accentColor, setAccentColor] = useState<'indigo' | 'blue' | 'purple' | 'pink' | 'green'>('indigo');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`theme-${theme} text-size-${fontSize}`} 
      data-accent={accentColor}
      style={{ 
        backgroundColor: 'var(--bg-primary)', 
        color: 'var(--text-primary)',
        minHeight: '100vh'
      }}
    >
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && (
        <>
          <NeuralBackground />
          <Navbar />
          <ThemeCustomizer
            currentTheme={theme}
            onThemeChange={setTheme}
            currentFontSize={fontSize}
            onFontSizeChange={setFontSize}
            currentAccentColor={accentColor}
            onAccentColorChange={setAccentColor}
          />
          <main>
            <Hero githubUrl="https://github.com/footcricket05" linkedinUrl="https://www.linkedin.com/in/shaurya-srinet" />
            <About />
            <Experience />
            <Projects />
            <Reviews />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;