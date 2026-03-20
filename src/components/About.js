function About() {
  return (
    <section id="about" className="about">
      <div className="container flex items-center about-inner-wrap">
        <div className="flex-1">
          <img className="about-me-img" src="/images/man1.jpeg" alt="" />
        </div>

        <div className="flex-1 right">
          <div className="about-text-card">
          <h1>About <span>Me</span></h1>
          <h3>Hello! I’m Subhrant Mishra.</h3>
          <p>I’m a B.Tech student pursuing my 
            degree in Computer Science and Engineering 
            at UNITED UNIVERSITY. I have a keen interest 
            in technology, innovation, and building real-world 
            solutions that make a meaningful impact.</p>
            
            <p>Over the past few years, I’ve gained hands-on experience through
               academic projects, personal experiments, and collaborative work in
                areas like IoT systems, web development, and embedded programming.
                 I enjoy working with technologies such as Arduino, Java, Python, HTML/CSS, and MySQL.</p>

            <p>I believe in continuous learning and am always exploring new skills, tools, and trends in 
              the tech world. Whether it’s designing an interactive user interface or building 
              a hardware-based automation system, I enjoy challenges that push me to 
              think critically and creatively.</p>
            </div>

          <div className="social">
            <a href="https://www.linkedin.com/in/subhrant-mishra-a11bb2325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="/images/link.png" alt="" /></a>
            <a href="https://twitter.com/subhrantmishra"><img src="/images/twitter.png" alt="" /></a>
            <a href="https://www.instagram.com/subhrant_mis083?igsh=bmhpdHRvbGU5NG52"><img src="/images/instagram.png" alt="" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;