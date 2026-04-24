'use client';

import { useEffect, useState } from 'react';
import Button from './button/button';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'light';
    setTheme(stored);
    document.documentElement.setAttribute('data-theme', stored);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return <Button size="small" variant="secondary" onClick={toggleTheme}>{`${theme === 'light' ? 'Dark' : 'Light'} theme`}</Button>;
}