
import "./Services.css";

function Services() {
  return (
    <main className="services-page">

      {/* HERO */}
      <section className="services-hero">

        <div className="services-hero-content">
          <p className="services-eyebrow">
            WHAT WE DO
          </p>

          <h1>
            Printing that makes
            <br />
            <span>your brand visible.</span>
          </h1>

          <p>
            From everyday business printing to large-format
            projects and promotional materials, we provide
            practical printing solutions for businesses,
            organizations and institutions.
          </p>
        </div>

      </section>


      {/* FEATURED SERVICES */}
      <section className="featured-services">

        <div className="services-heading">

          <div>
            <p>OUR SERVICES</p>

            <h2>
              Built for business.
              <br />
              <span>Made to stand out.</span>
            </h2>
          </div>

          <p className="heading-description">
            Professional printing solutions designed around
            the way your business communicates.
          </p>

        </div>


        <div className="featured-grid">

          <article className="featured-card">

            <div className="featured-image">
              <img
                src="/images/business-printing.jpg"
                alt="Business printing"
              />
            </div>

            <div className="featured-content">
              <span>01</span>
              <h3>Business Printing</h3>

              <p>
                Business cards, letterheads, envelopes,
                company profiles and certificates.
              </p>

              <a href="/contact">
                Learn More →
              </a>
            </div>

          </article>


          <article className="featured-card featured-card-large">

            <div className="featured-image">
              <img
                src="/images/large-format.jpg"
                alt="Large format printing"
              />
            </div>

            <div className="featured-content">
              <span>02</span>
              <h3>Large Format Printing</h3>

              <p>
                Banners, posters, roll-up banners and
                signage designed to get attention.
              </p>

              <a href="/contact">
                Learn More →
              </a>
            </div>

          </article>


          <article className="featured-card">

            <div className="featured-image">
              <img
                src="/images/promotional.jpg"
                alt="Promotional printing"
              />
            </div>

            <div className="featured-content">
              <span>03</span>
              <h3>Branding &amp; Promotional</h3>

              <p>
                T-shirts, bags, mugs and other practical
                promotional materials.
              </p>

              <a href="/contact">
                Learn More →
              </a>
            </div>

          </article>

        </div>

      </section>


      {/* PRODUCTS */}
      <div className="products-grid">

  <div className="product-item">
    <div className="product-image">
      <img src="/images/business-cards.jpg" alt="Business Cards" />
    </div>
    <span>01</span>
    <h3>Business Cards</h3>
    <p>Professional cards for your business identity.</p>
  </div>

  <div className="product-item">
    <div className="product-image">
      <img src="/images/flyers-brochures.jpg" alt="Flyers and Brochures" />
    </div>
    <span>02</span>
    <h3>Flyers &amp; Brochures</h3>
    <p>Marketing materials for promotions and communication.</p>
  </div>

  <div className="product-item">
    <div className="product-image">
      <img src="/images/posters.jpg" alt="Posters" />
    </div>
    <span>03</span>
    <h3>Posters</h3>
    <p>Clear and attractive promotional posters.</p>
  </div>

  <div className="product-item">
    <div className="product-image">
      <img src="/images/receipt-books.jpg" alt="Receipt and Invoice Books" />
    </div>
    <span>04</span>
    <h3>Receipt &amp; Invoice Books</h3>
    <p>Practical printed books for everyday business use.</p>
  </div>

  <div className="product-item">
    <div className="product-image">
      <img src="/images/stickers-labels.jpg" alt="Stickers and Labels" />
    </div>
    <span>05</span>
    <h3>Stickers &amp; Labels</h3>
    <p>Product labels and stickers for branding and packaging.</p>
  </div>

  <div className="product-item">
    <div className="product-image">
      <img src="/images/calendars-notebooks.jpg" alt="Calendars and Notebooks" />
    </div>
    <span>06</span>
    <h3>Calendars &amp; Notebooks</h3>
    <p>Useful printed materials for businesses and organizations.</p>
  </div>

</div>


      {/* WHY US */}
      <section className="services-why">

        <div className="why-title">
          <p>WHY SUNNY PRINT</p>

          <h2>
            Printing you can
            <br />
            <span>depend on.</span>
          </h2>
        </div>


        <div className="why-list">

          <div>
            <span>01</span>
            <h3>Quality</h3>
            <p>
              We focus on clean, professional results
              and attention to detail.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Reliability</h3>
            <p>
              We work to deliver consistent service
              and dependable production.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Professional Service</h3>
            <p>
              We listen to your requirements and help
              you find the right printing solution.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="services-cta">

        <div>
          <p>READY TO PRINT?</p>

          <h2>
            Let's bring your
            <br />
            <span>ideas to life.</span>
          </h2>
        </div>

        <a href="/contact">
          Contact Us →
        </a>

      </section>

    </main>
  );
}

export default Services;
