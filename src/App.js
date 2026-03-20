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
      ></div>
        <Galaxy 
          mouseInteraction
          mouseRepulsion
          density={20}        // smoother
          glowIntensity={0.1}
          speed={0.1}
        />

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