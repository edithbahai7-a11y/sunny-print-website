import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* =========================================
          MAIN FOOTER
      ========================================= */}

      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">

         <Link to="/" className="footer-logo">
  <img
    src="/images/sunny-print-logo.png"
    alt="Sunny Print"
  />
</Link>

          <p>
            Professional printing and branding solutions
            built to help businesses communicate,
            promote and grow.
          </p>

          <Link
            to="/contact"
            className="footer-project-link"
          >
            Start a project
            <span>→</span>
          </Link>

        </div>


        {/* EXPLORE */}
        <div className="footer-links">

          <h3>EXPLORE</h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/services">
            Products &amp; Services
          </Link>

          <Link to="/contact">
            Contact Us
          </Link>

        </div>


        {/* SERVICES */}
        <div className="footer-services">

          <h3>SERVICES</h3>

          <p>Business Printing</p>
          <p>Large Format Printing</p>
          <p>Promotional Materials</p>
          <p>Branding &amp; Packaging</p>

        </div>


        {/* CONTACT */}
        <div className="footer-contact">

          <h3>GET IN TOUCH</h3>

          <p className="footer-label">
            MANAGING DIRECTOR
          </p>

          <a href="tel:+255621102102">
            +255 621 102 102
          </a>

          <p className="footer-label">
            GENERAL MANAGER
          </p>

          <a href="tel:+255785659990">
            +255 785 659 990
          </a>

          <a href="mailto:info@sunnyprint.co.tz">
            info@sunnyprint.co.tz
          </a>

          <a href="mailto:sales@sunnyprint.co.tz">
            sales@sunnyprint.co.tz
          </a>

        </div>

      </div>


      {/* =========================================
          LOCATION BAR
      ========================================= */}

      <div className="footer-location">

        <div className="footer-location-item">

          <span>LOCATION</span>

          <p>
            Ushirika Building, Plot No. 76 &amp; 77,
            Lumumba Street, Dar es Salaam, Tanzania
          </p>

        </div>


        <div className="footer-location-item">

          <span>POSTAL ADDRESS</span>

          <p>
            P.O. Box 11441, Dar es Salaam
          </p>

        </div>


        <div className="footer-location-item">

          <span>WEBSITE</span>

          <a
            href="https://www.sunnyprint.co.tz"
            target="_blank"
            rel="noreferrer"
          >
            www.sunnyprint.co.tz
          </a>

        </div>

      </div>


      {/* =========================================
          BOTTOM BAR
      ========================================= */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Sunny Print (T) Ltd.
          All Rights Reserved.
        </p>

        <p>
          Printing solutions you can trust.
        </p>

      </div>

    </footer>
  );
}

export default Footer;