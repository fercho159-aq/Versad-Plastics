import { Phone, Mail, MapPin } from 'lucide-react';
import { ContactForm } from './contact-form';
import Map from './map';

const contactDetails = [
  {
    icon: MapPin,
    text: '123 Calle Innovación, Parque Tecnológico, 20000',
  },
  {
    icon: Phone,
    text: '(123) 456-7890',
  },
  {
    icon: Mail,
    text: 'contacto@versadplastics.com',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Ponte en Contacto</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                Estamos aquí para ayudarte. Contáctanos para una cotización o para saber más sobre nuestros productos y servicios.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Envíanos un Mensaje</h3>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Nuestra Ubicación</h3>
              <ul className="space-y-4 text-foreground">
                {contactDetails.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <detail.icon className="h-6 w-6 text-accent mt-1 mr-4 shrink-0" />
                    <span>{detail.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-full h-[400px] rounded-lg overflow-hidden shadow-lg'>
                <Map />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
