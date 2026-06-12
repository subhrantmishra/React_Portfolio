import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Freelancer from "./components/Freelancer";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SplashCursor from "./components/SplashCursor";
import GreetingSlider from "./components/GreetingSlider";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
