import { Phone, Mail, MapPin } from 'lucide-react';
import { ContactForm } from './contact-form';
import Map from './map';

const contactDetails = [
  {
    icon: MapPin,
    text: '123 Innovation Drive, Tech Park, NY 10001',
  },
  {
    icon: Phone,
    text: '(123) 456-7890',
  },
  {
    icon: Mail,
    text: 'contact@versadplastics.com',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Get In Touch</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                We're here to help. Contact us for a quote, or to learn more about our products and services.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Contact Us</h3>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Our Location</h3>
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
