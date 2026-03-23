function Freelancer() {
  return (
    <>
      <section
        className="freelancer"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/camera.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 0",
          color: "#060606",
          textAlign: "center"
        }}
      >
        <div className="container">
          <h1>I Am Available For Freelancer</h1>
          <p>We provide high standard clean website for your business solutions</p>
          <a 
          href="/images/Subhrant_s_Resume (2).pdf" 
          className="btn btn-primary"
          download
          >
          DOWNLOAD CV
          </a> 
          </div>
      </section>
    </>
  );
}

export default Freelancer;
