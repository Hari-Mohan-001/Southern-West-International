"use client";


import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {

  const phoneNumber = "919037396016";
  const message = encodeURIComponent(
    "Hi Southern West International, I would like to know more about studying abroad."
  );

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="whatsapp-wrapper">

      {/* <div className="whatsapp-tooltip">
        Chat with us
      </div> */}

      <div className="whatsapp-btn" onClick={openWhatsApp}>
        
         <FaWhatsapp size={32} color="white" />
      </div>

    </div>
  );
};

export default Whatsapp;