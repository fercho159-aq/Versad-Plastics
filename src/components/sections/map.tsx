import React from 'react';

const Map = () => {
  // A generic location is used. Replace with the actual business address in a real-world scenario.
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.693994793836!2d-74.00834288459427!3d40.71426897933166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda23d%3A0x1a718641957c5a7!2sNew%20York%20City%20Hall!5e0!3m2!1sen!2sus!4v1622558882835!5m2!1sen!2sus";

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
