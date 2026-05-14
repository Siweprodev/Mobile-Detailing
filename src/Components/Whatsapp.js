import "./Whatsapp.css";

function WhatsApp() {

  const phoneNumber = "+27720757744";

  const message =
    "Hi, I would like to book a car detailing service.";

  const whatsappLink =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      💬
    </a>
  );
}

export default WhatsApp;