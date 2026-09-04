import "./Home.css";
function Home() {
  return (
    <main className="home">

      
    {/* HERO SECTION */}
<section className="hero">

  <div className="hero-content">

    <p className="hero-small-text">
      SUNNY PRINT (T) LTD
    </p>

    <h1>
      Printing That Makes
      <span>Your Brand Stand Out.</span>
    </h1>

    <p className="hero-description">
      Professional printing, packaging and branding solutions
      designed to bring your ideas to life with quality,
      precision and reliability.
    </p>

    <div className="hero-buttons">

      <a href="/contact" className="primary-btn">
        Get a Quote
        <span>→</span>
      </a>

      <a href="/services" className="hero-secondary-btn">
        Explore Services
        <span>→</span>
      </a>

    </div>

    <div className="hero-trust">

      <span>QUALITY PRINTING</span>
      <span>RELIABLE SERVICE</span>
      <span>PROFESSIONAL RESULTS</span>

    </div>

  </div>


  {/* HERO VISUAL */}
  <div className="hero-image">

    <div className="hero-visual">

      <div className="visual-card visual-card-one">
        PRINT
      </div>

      <div className="visual-card visual-card-two">
        BRAND
      </div>

      <div className="visual-card visual-card-three">
        CREATE
      </div>

      <div className="visual-orange-shape"></div>

      <div className="hero-stamp">
        <span>SP</span>
        SUNNY PRINT
      </div>

    </div>

  </div>

</section>


      {/* WHO WE ARE */}
      <section className="about-preview">

        <div className="about-preview-image">

          <div className="about-image-box">

            <div className="about-image-label">
              SUNNY PRINT
            </div>

            <div className="about-image-text">
              QUALITY
              <br />
              IN EVERY
              <br />
              IMPRESSION.
            </div>

          </div>

        </div>


        <div className="about-preview-content">

          <p className="about-eyebrow">
            WHO WE ARE
          </p>

          <h2>
            Printing with purpose.
            <br />
            <span>Quality you can see.</span>
          </h2>

          <p className="about-description">
            Sunny Print (T) Ltd is a professional printing company
            committed to providing high-quality printing, packaging
            and branding solutions for businesses, organizations
            and individuals.
          </p>

          <p className="about-description">
            We combine modern printing technology, skilled expertise
            and attention to detail to deliver products that represent
            our customers and their brands with confidence.
          </p>


          <div className="about-highlights">

            <div className="about-highlight">

              <strong>01</strong>

              <div>
                <h3>Quality First</h3>

                <p>
                  Every project receives careful attention to detail.
                </p>
              </div>

            </div>


            <div className="about-highlight">

              <strong>02</strong>

              <div>
                <h3>Reliable Service</h3>

                <p>
                  Professional support from concept to finished product.
                </p>
              </div>

            </div>

          </div>


          <a href="/about" className="about-link">
            Discover Sunny Print
            <span>→</span>
          </a>

        </div>

      </section>


      {/* PRODUCTS & SERVICES */}
      <section className="services-section">

        <div className="services-header">

          <div>

            <p className="services-eyebrow">
              WHAT WE DO
            </p>

            <h2>
              Printing solutions<br />
              <span>built for your brand.</span>
            </h2>

          </div>

          <p className="services-intro">
            From business stationery to packaging and large-format
            printing, we provide professional solutions designed to
            make your brand stand out.
          </p>

        </div>


        <div className="services-grid">

          {/* SERVICE 01 */}
          <div className="service-card service-card-featured">

            <div className="service-image">
              <img
                src="/images/business-printing.jpg"
                alt="Commercial printing"
              />
            </div>

            <div className="service-number">
              01
            </div>

            <div className="service-content">

              <p className="service-category">
                COMMERCIAL
              </p>

              <h3>
                Commercial<br />
                Printing
              </h3>

              <p>
                Professional printing for business documents,
                stationery, brochures, reports and more.
              </p>

              <a href="/services" className="service-link">
                Explore service <span>→</span>
              </a>

            </div>

          </div>


          {/* SERVICE 02 */}
          <div className="service-card">

            <div className="service-image">
              <img
                src="/images/packaging.jpg"
                alt="Packaging printing"
              />
            </div>

            <div className="service-number">
              02
            </div>

            <div className="service-content">

              <p className="service-category">
                PACKAGING
              </p>

              <h3>
                Packaging
              </h3>

              <p>
                Packaging solutions that protect your products
                while presenting your brand professionally.
              </p>

              <a href="/services" className="service-link">
                Explore service <span>→</span>
              </a>

            </div>

          </div>


          {/* SERVICE 03 */}
          <div className="service-card">

            <div className="service-image">
              <img
                src="/images/tshirt-mug-printing.jpg"
                alt="Branded T-shirts and mugs"
              />
            </div>

            <div className="service-number">
              03
            </div>

            <div className="service-content">

              <p className="service-category">
                BRANDING
              </p>

              <h3>
                Branding
              </h3>

              <p>
                Build a stronger visual identity with professional
                branded materials for your business.
              </p>

              <a href="/services" className="service-link">
                Explore service <span>→</span>
              </a>

            </div>

          </div>


          {/* SERVICE 04 */}
          <div className="service-card">

            <div className="service-image">
              <img
                src="/images/large-format.jpg"
                alt="Banners and signage"
              />
            </div>

            <div className="service-number">
              04
            </div>

            <div className="service-content">

              <p className="service-category">
                LARGE FORMAT
              </p>

              <h3>
                Banners &<br />
                Signage
              </h3>

              <p>
                Eye-catching banners, posters and signage
                that get your message noticed.
              </p>

              <a href="/services" className="service-link">
                Explore service <span>→</span>
              </a>

            </div>

          </div>

        </div>


        <div className="services-footer">

          <p>
            Need something specific?
          </p>

          <a href="/services" className="primary-btn">
            View All Products & Services
          </a>

        </div>

      </section>


      {/* WHY SUNNY PRINT */}
      <section className="why-section">

        <div className="why-content">

          <div className="why-header">

            <div>

              <p className="why-eyebrow">
                WHY SUNNY PRINT
              </p>

              <h2>
                More than printing.
                <br />
                <span>We deliver confidence.</span>
              </h2>

            </div>

            <p className="why-intro">
              We combine quality workmanship, reliable service and
              professional production to help our customers present
              their brands with confidence.
            </p>

          </div>


          <div className="advantages">

            {/* 01 */}
            <div className="advantage-card">

              <span className="advantage-number">
                01
              </span>

              <div>
                <h3>
                  Quality
                </h3>

                <p>
                  Sharp, professional results with attention to detail
                  at every stage of production.
                </p>
              </div>

            </div>


            {/* 02 */}
            <div className="advantage-card">

              <span className="advantage-number">
                02
              </span>

              <div>
                <h3>
                  Reliability
                </h3>

                <p>
                  Dependable service and consistent delivery for
                  projects of different sizes.
                </p>
              </div>

            </div>


            {/* 03 */}
            <div className="advantage-card">

              <span className="advantage-number">
                03
              </span>

              <div>
                <h3>
                  Modern Technology
                </h3>

                <p>
                  Professional production capabilities that help us
                  achieve accurate and consistent results.
                </p>
              </div>

            </div>


            {/* 04 */}
            <div className="advantage-card">

              <span className="advantage-number">
                04
              </span>

              <div>
                <h3>
                  Customer Focus
                </h3>

                <p>
                  We listen to your needs and develop solutions that
                  fit your project and your brand.
                </p>
              </div>

            </div>

          </div>


          <div className="why-bottom">

            <p>
              Your brand deserves to be represented professionally.
            </p>

            <a href="/about" className="why-link">
              Our Story
              <span>→</span>
            </a>

          </div>

        </div>

      </section>


      {/* HAPPY CLIENTS */}
  {/* HAPPY CLIENTS */}
<section className="clients-section">

  <div className="clients-header">

    <p className="clients-eyebrow">
      TRUSTED PARTNERS
    </p>

    <h2>
      Trusted by businesses
      <br />
      <span>that value quality.</span>
    </h2>

    <p className="clients-description">
      We are proud to work with businesses, organizations and
      institutions that trust Sunny Print with their printing
      and branding needs.
    </p>

  </div>


  {/* MOVING CLIENT LOGOS */}

  <div className="client-logo-track">

    {/* FIRST SET */}

    <div className="client-logo">
      <img src="/images/tbc-logo.jpg" alt="Tanzania Broadcasting Corporation" />
    </div>

    <div className="client-logo">
      <img src="/images/tpa-logo.png" alt="Tanzania Ports Authority" />
    </div>

    <div className="client-logo">
      <img src="/images/psssf-logo.jpeg" alt="PSSSF" />
    </div>

    <div className="client-logo">
      <img src="/images/tpb bank-logo.png" alt="TPB Bank" />
    </div>

    <div className="client-logo">
      <img src="/images/azania-bank-logo.jpeg" alt="Azania Bank" />
    </div>

    <div className="client-logo">
      <img src="/images/coca-cola-logo.webp" alt="Coca-Cola" />
    </div>


    {/* SECOND SET */}

    <div className="client-logo">
      <img src="/images/tbc-logo.jpg" alt="Tanzania Broadcasting Corporation" />
    </div>

    <div className="client-logo">
      <img src="/images/tpa-logo.png" alt="Tanzania Ports Authority" />
    </div>

    <div className="client-logo">
      <img src="/images/psssf-logo.jpeg" alt="PSSSF" />
    </div>

    <div className="client-logo">
      <img src="/images/tpb bank-logo.png" alt="TPB Bank" />
    </div>

    <div className="client-logo">
      <img src="/images/azania-bank-logo.jpeg" alt="Azania Bank" />
    </div>

    <div className="client-logo">
      <img src="/images/coca-cola-logo.webp" alt="Coca-Cola" />
    </div>

  </div>


  <div className="clients-bottom">

    <p>
      Your business could be next.
    </p>

    <a href="/contact" className="clients-link">
      Work With Us
      <span>→</span>
    </a>

  </div>

</section>


      {/* CALL TO ACTION */}
<section className="cta-section">

  <div className="cta-content">

    <p className="cta-eyebrow">
      LET'S WORK TOGETHER
    </p>

    <h2>
      Have a project
      <br />
      <span>in mind?</span>
    </h2>

    <p className="cta-description">
      From business printing to branding and large-format
      projects, we're ready to turn your ideas into
      high-quality printed results.
    </p>

  </div>

  <div className="cta-actions">

    <a href="/contact" className="primary-btn">
      Request a Quote
      <span>→</span>
    </a>

    <a href="/contact" className="cta-contact-link">
      Contact Sunny Print
      <span>→</span>
    </a>

  </div>

</section>

    </main>
  );
}

export default Home;
