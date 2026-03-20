function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h1 className="section-heading">Contact <span>Us</span></h1>

        <p>We provide high standard clean website for your business solutions</p>

        <div className="card-wrapper">
          <div className="card">
            <img src="/images/phone-2.png" alt="" />
            <h1>Call Us On</h1>
            <h6>+917652083093</h6>
          </div>

          <div className="card">
            <img src="/images/msg.png" alt="" />
            <h1>Email Us At</h1>
            <h6>subhrantmis278@gmail.com</h6>
          </div>

          <div className="card">
            <img src="/images/map.png" alt="" />
            <h1>Visit Home</h1>
            <h6>Shantipuram Prayagraj 211013 U.P India</h6>
          </div>
        </div>

        <form
          action="https://formsubmit.co/subhrantmis278@gmail.com"
          method="POST"
        >
          <div className="input-wrap">
            <input
              type="text"
              name="Name"
              required
              placeholder="Your Name *"
            />
            <input
              type="email"
              name="Email"
              required
              placeholder="Your Email *"
            />
          </div>

          <div className="input-wrap-2">
            <input
              type="text"
              name="Subject"
              required
              placeholder="Your Subject..."
            />
            <textarea
              name="Message"
              required
              cols="30"
              rows="10"
              placeholder="Your Message..."
            ></textarea>
          </div>

          <div className="btn-wrapper">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;