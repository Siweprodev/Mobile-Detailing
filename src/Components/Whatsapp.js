import "./Whatsapp.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsApp() {

  const phoneNumber = "+27720757744"; // Replace with your WhatsApp number

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
      <FaWhatsapp />
    </a>
  );
}

export default WhatsApp;