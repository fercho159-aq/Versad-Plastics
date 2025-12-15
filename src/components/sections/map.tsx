import React from 'react';

const Map = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.969624564531!2d-99.17195412577618!3d19.62800313543665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f5a4a521453b%3A0x1d0f5e8f237c9de7!2sAdolfo%20L%C3%B3pez%20Mateos%2085%2C%20San%20Francisco%20Chilpan%2C%2054940%20Tultitl%C3%A1n!5e0!3m2!1sen!2smx!4v1721834954752!5m2!1sen!2smx";

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
