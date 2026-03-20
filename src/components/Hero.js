import TextType from "./TextType";

function Hero() {
  return (
    <div className="container">
      <div className="hero flex items-center justify-between">
        
        <div className="left flex-1 flex justify-center">
          <img src="/images/man0.png" alt="" />
        </div>

        <div className="right flex-1">
          
          {/* ✅ Animated Name */}
          <h1 className="hero-title">
           <TextType
            text={["Subhrant Mishra"]}
            typingSpeed={120}
            deletingSpeed={50}   // 👈 thoda delete speed add karo
            loop={true}          // 🔥 ye important hai
            showCursor
            />
          </h1>
          <h6>I’m a <span>Student</span></h6>
          <p>
           I am a B.Tech student pursuing Computer Science Engineering at United University, 
           with a strong passion for technology, innovation, and problem-solving. I am 
           focused on developing real-world solutions through practical projects and 
           collaborative work. I have experience working with C, Python, Java, and Web 
           Development technologies, and I continuously strive to expand my technical 
           expertise by learning emerging tools and technologies that create meaningful impact.
          </p>

          <a 
          href="/images/Subhrant_s_Resume (2).pdf" 
          className="btn btn-secondary"
          download
          >
            DOWNLOAD CV
          </a>

        </div>
      </div>
    </div>
  );
}

export default Hero;