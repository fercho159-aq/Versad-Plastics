import React from 'react';

const Map = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.940428336155!2d-99.16781482577604!3d19.62916693542287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f50a8a68393d%3A0xb842a5f4f89d31f9!2sC.%20Adolfo%20L%C3%B3pez%20Mateos%2085%2C%20San%20Juan%2C%2054900%20Tultitl%C3%A1n%20de%20Mariano%20Escobedo%2C%20M%C3%A9x.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1721940916053!5m2!1sen!2sus";

  return (
    <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de Versad Plastics"
        className="w-full h-full"
    ></iframe>
  );
};

export default Map;
