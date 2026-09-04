import "./TopBar.css";

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-container">

        <div className="top-contact">
          <span>📞 +255 XXX XXX XXX</span>
          <span>✉️ info@sunnyprint.co.tz</span>
          <span>📍 Dar es Salaam, Tanzania</span>
        </div>

        <div className="top-social">
          <span>Follow us:</span>
          <span>Facebook</span>
          <span>Instagram</span>
          <span>LinkedIn</span>
        </div>

      </div>
    </div>
  );
}

export default TopBar;