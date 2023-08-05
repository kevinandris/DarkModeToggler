import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import useLocalStorage from 'use-local-storage';

function App() {

  const [theme, setTheme] = useLocalStorage("theme", "light")

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
  };
  
  return (
    <div className="main">
        <Header myTheme={theme} onToggleTheme={toggleTheme}/>
        <Hero />
        <Footer />
    </div>
  );
}

export default App;
