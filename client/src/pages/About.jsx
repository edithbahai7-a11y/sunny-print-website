import "./About.css";

function About() {
  return (
    <main className="about-page">

      <section className="about-hero">
        <div className="about-hero-content">

          <p className="about-eyebrow">
            ABOUT SUNNY PRINT
          </p>

          <h1>
            We turn ideas into
            <br />
            <span>printed experiences.</span>
          </h1>

          <p className="about-hero-text">
            Sunny Print (T) Ltd is a limited liability company
            incorporated under Cap. 212, providing professional
            printing and branding solutions for businesses,
            organizations and institutions.
          </p>

        </div>
      </section>

      <section className="about-story">

        <div className="about-section-label">
          <span>01</span>
          OUR STORY
        </div>

        <div className="about-story-content">

          <h2>
            Printing that helps
            <br />
            <span>businesses stand out.</span>
          </h2>

          <p>
            Sunny Print (T) Ltd is committed to providing reliable,
            high-quality printing solutions tailored to the needs
            of our customers.
          </p>

          <p>
            We work with businesses, organizations and institutions
            to transform ideas into professional printed materials
            that communicate clearly and represent their brands
            with confidence.
          </p>

        </div>

      </section>

      <section className="about-values">

        <div className="value-card">

          <span>02</span>

          <h2>Our Vision</h2>

          <p>
            To be a trusted and recognized printing partner,
            delivering quality solutions that help our customers
            communicate, promote and grow.
          </p>

        </div>

        <div className="value-card value-card-orange">

          <span>03</span>

          <h2>Our Mission</h2>

          <p>
            To provide professional, reliable and innovative
            printing solutions while maintaining high standards
            of quality and customer service.
          </p>

        </div>

      </section>
      


      {/* WHAT SETS US APART */}
      <section className="about-strengths">

        <div className="about-strengths-heading">

          <p>WHAT SETS US APART</p>

          <h2>
            Built around
            <br />
            <span>your success.</span>
          </h2>

        </div>


        <div className="strength-list">

          <div className="strength-item">
            <span>01</span>

            <div>
              <h3>Quality</h3>

              <p>
                We pay attention to detail and strive for
                professional results in every project.
              </p>
            </div>
          </div>


          <div className="strength-item">
            <span>02</span>

            <div>
              <h3>Reliability</h3>

              <p>
                Our customers can depend on us for consistent
                service and professional production.
              </p>
            </div>
          </div>


          <div className="strength-item">
            <span>03</span>

            <div>
              <h3>Professionalism</h3>

              <p>
                We approach every project with care,
                responsibility and attention to customer needs.
              </p>
            </div>
          </div>


          <div className="strength-item">
            <span>04</span>

            <div>
              <h3>Customer Focus</h3>

              <p>
                We listen to our customers and work to provide
                solutions that fit their specific requirements.
              </p>
            </div>
          </div>

        </div>

      </section>



      {/* COMPANY INFORMATION */}
      <section className="about-company">

        <div>

          <p className="about-company-label">
            SUNNY PRINT (T) LTD
          </p>

          <h2>
            A printing partner
            <br />
            you can <span>trust.</span>
          </h2>

        </div>


        <div className="about-company-text">

          <p>
            As a Tanzanian printing company, we are focused on
            delivering solutions that meet the professional
            standards expected by modern businesses and
            organizations.
          </p>

          <a href="/contact" className="about-contact-link">
            Work With Us
            <span>→</span>
          </a>

        </div>

      </section>


      {/* CALL TO ACTION */}
      <section className="about-cta">

        <div>

          <p>HAVE A PROJECT IN MIND?</p>

          <h2>
            Let's create something
            <br />
            <span>great together.</span>
          </h2>

        </div>

        <a href="/contact">
          Contact Us
          <span>→</span>
        </a>

      </section>


    </main>
  );
}

export default About;

  