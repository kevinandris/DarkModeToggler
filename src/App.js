// ! PARENT CLASS of Footer, Header, and Hero.js
import { useState, useEffect } from 'react';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import useLocalStorage from 'use-local-storage';

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light")
  const [switchButton, setSwitchButton] = useState(false)

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme);
    setSwitchButton(!switchButton)
  };

  // to keep the button on the right when it is on dark mode
  useEffect(() => {
    if (theme === "dark") {
      setSwitchButton(true)
    }
  }, [theme]);
  
  return (
    <div className="main">
        <Header myTheme={theme} onToggleTheme={toggleTheme} onSwitch={switchButton}/>
        <Hero  myTheme={theme}/>
        <Footer myTheme={theme}/>
    </div>
  );
}

export default App;
