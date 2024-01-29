
import styles from './App.module.css';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Experience from './components/experience/Experience'
import Project from './components/project/Project';
import Contact from './components/contact/Contact';

function App() {

  return (
   <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
   </div>
  )
}

export default App;
