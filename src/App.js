import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Freelancer from "./components/Freelancer";
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Galaxy from "./components/Galaxy";
import SplashCursor from "./components/SplashCursor";

function App() {
  return (
    <div style={{ position: "relative" }}>

      {/* 🔥 Cursor Animation */}
      <SplashCursor />

      {/* 🔥 Background Animation */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1
        }}
      >
        <Galaxy 
          mouseInteraction={false}
          mouseRepulsion={false}
          density={0.4}
          glowIntensity={0.15}
          speed={0.08}
        />
      </div>

      {/* 🔥 Content */}
      <Navbar />
      <About />
      <Services />
      <Freelancer />
      <Work />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
