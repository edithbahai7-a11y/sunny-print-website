
import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">

      {/* CONTACT HERO */}
      <section className="contact-hero">

        <div>
          <p className="contact-eyebrow">
            GET IN TOUCH
          </p>

          <h1>
            Let's talk about
            <br />
            <span>your next project.</span>
          </h1>

          <p className="contact-hero-text">
            Whether you need commercial printing, branding materials,
            packaging or a custom printing solution, our team is ready
            to help.
          </p>
        </div>

      </section>


      {/* CONTACT DETAILS */}
      <section className="contact-details">

        <div className="contact-info">

          {/* MANAGING DIRECTOR */}
          <div className="contact-item">
            <span className="contact-number">01</span>

            <div>
              <p>MANAGING DIRECTOR</p>

              <h3>
                <a href="tel:+255621102102">
                  +255 621 102 102
                </a>
              </h3>

              <span>Call us for business enquiries</span>
            </div>
          </div>


          {/* GENERAL MANAGER */}
          <div className="contact-item">
            <span className="contact-number">02</span>

            <div>
              <p>GENERAL MANAGER</p>

              <h3>
                <a href="tel:+255785659990">
                  +255 785 659 990
                </a>
              </h3>

              <span>Call us for business enquiries</span>
            </div>
          </div>


          {/* EMAIL */}
          <div className="contact-item">
            <span className="contact-number">03</span>

            <div>
              <p>EMAIL US</p>

              <h3>
                <a href="mailto:sunnyprintltd@gmail.com">
                  sunnyprintltd@gmail.com
                </a>
              </h3>

              <span>
                info@sunnyprint.co.tz &nbsp; | &nbsp; sales@sunnyprint.co.tz
              </span>
            </div>
          </div>


          {/* LOCATION */}
          <div className="contact-item">
            <span className="contact-number">04</span>

            <div>
              <p>VISIT US</p>

              <h3>
                Ushirika Building
              </h3>

              <span>
                Plot No. 76 &amp; 77, Lumumba Street,
                <br />
                P.O. Box 11441, Dar es Salaam, Tanzania
              </span>
            </div>
          </div>


          {/* WEBSITE */}
          <div className="contact-item">
            <span className="contact-number">05</span>

            <div>
              <p>WEBSITE</p>

              <h3>
                <a
                  href="https://www.sunnyprint.co.tz"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.sunnyprint.co.tz
                </a>
              </h3>

              <span>Visit our website</span>
            </div>
          </div>

        </div>


        {/* CONTACT MESSAGE */}
        <div className="contact-message">

          <p className="contact-form-eyebrow">
            SUNNY PRINT (T) LTD
          </p>

          <h2>
            Professional printing.
            <br />
            <span>Professional service.</span>
          </h2>

          <p>
            Have a printing project in mind? Get in touch with our team
            and let us help you find the right printing solution for
            your business or organization.
          </p>
  
<div className="contact-actions">


  <a
    href="tel:+255621102102"
    className="contact-submit"
  >
    Call Us →
  </a>

  <a
    href="mailto:info@sunnyprint.co.tz"
    className="contact-email-button"
  >
    Email Us →
  </a>
</div>

</div>
      </section>
    </main>
  );
}

export default Contact;