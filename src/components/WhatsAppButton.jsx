import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

 const WhatsAppButton = () => {
  const phoneNumber = "+254718058146"; // Replace with your WhatsApp number
  const message = "Hello! I'm visiting your portfolio site."; // Replace with your custom message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <FontAwesomeIcon icon={faWhatsapp} size="4x" />
</a>  );
};

export default WhatsAppButton;
