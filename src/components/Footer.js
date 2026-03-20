function Footer() {
  return (
    <footer>
      <img className="footer-logo" src="/images/logo-2.png" alt="" />

      {/* 🔥 Social Icons */}
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/subhrant-mishra-a11bb2325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <img src="/images/link.png" alt="LinkedIn" />
        </a>

        <a href="https://twitter.com/subhrantmishra" target="_blank" rel="noopener noreferrer">
          <img src="/images/twitter.png" alt="Twitter" />
        </a>

         <a href="https://www.instagram.com/subhrant_mis083?igsh=bmhpdHRvbGU5NG52" target="_blank" rel="noopener noreferrer">
          <img src="/images/instagram.png" alt="Instagram" />
        </a>
      </div>

      <div className="copyright">
        Copyright © 2025 Subhrant Mishra
      </div>

      
    </footer>
  );
}

export default Footer;