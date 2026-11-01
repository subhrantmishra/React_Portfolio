import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Freelancer from "./components/Freelancer";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SplashCursor from "./components/SplashCursor";
import GreetingSlider from "./components/GreetingSlider";
import CustomCursor from "./components/CustomCursor";

const SHOW_GREETING = true; // 👈 false karo = welcome UI band, true karo = welcome UI on

function App() {
  const [loading, setLoading] = useState(SHOW_GREETING);

  useEffect(() => {
    if (!SHOW_GREETING) return;
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />  {/* ← Hamesha render hoga, loading ke bahar */}

      {loading ? (
        <GreetingSlider />
      ) : (
        <div style={{ position: "relative" }}>
          <SplashCursor />
          <Navbar />
          <About />
          <Services />
          <Freelancer />
          <Work />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
export default App;
