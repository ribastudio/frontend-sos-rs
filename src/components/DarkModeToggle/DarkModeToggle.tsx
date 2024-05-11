import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle = () => {
  const [currentTheme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    applyTheme();
  }, [currentTheme]);

  function getInitialTheme() {
    let userTheme = null;
    let systemTheme = true;
    if (typeof window !== 'undefined' && window.localStorage) {
      userTheme = localStorage.getItem('theme');
      systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    return userTheme || (systemTheme ? 'dark' : 'light');
  }

  function applyTheme() {
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  function toggleTheme() {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <>
      {currentTheme === 'dark' ? (
        <Sun 
        className='dark:stroke-red-300 hover:stroke-white'
          width='1.875rem' 
          height='1.875rem' 
          onClick={toggleTheme} 
        />
      ) : (
        <Moon
          className='stroke-zinc-300 hover:stroke-zinc-100'
          width='1.875rem' 
          height='1.875rem' 
          onClick={toggleTheme} 
        />
      )}
    </>
  );
}

export { DarkModeToggle as DarkmodeToggle };