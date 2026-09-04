import "./WhatsAppButton.css";

function WhatsAppButton() {
  const phoneNumber = "255621102102";
  const message = "Welcome to Sunny Print! How may we help you?";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat with Sunny Print on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        className="whatsapp-icon"
        aria-hidden="true"
      >
        <path
          fill="white"
          d="M19.11 17.21c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.65.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49h-.55c-.19 0-.49.07-.75.36-.26.29-.98.96-.98 2.35s1 2.73 1.14 2.92c.14.19 1.96 3 4.75 4.2.66.28 1.18.45 1.58.57.66.21 1.26.18 1.73.11.53-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z"
        />

        <path
          fill="white"
          d="M16.01 4.01c-6.63 0-12 5.37-12 12 0 2.12.55 4.11 1.52 5.84L4 27.99l6.3-1.65a11.94 11.94 0 0 0 5.71 1.45h.01c6.62 0 11.99-5.38 11.99-12s-5.37-11.78-12-11.78zm0 21.73c-1.85 0-3.66-.5-5.24-1.44l-.38-.23-3.74.98 1-3.64-.25-.4a9.73 9.73 0 0 1-1.49-5.18c0-5.39 4.39-9.77 9.79-9.77 2.61 0 5.07 1.02 6.91 2.86a9.73 9.73 0 0 1 2.86 6.92c0 5.39-4.39 9.9-9.78 9.9z"
        />
      </svg>
    </a>
  );
}

export default WhatsAppButton;