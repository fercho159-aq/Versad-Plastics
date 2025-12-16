import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const clients = [
  { name: 'Walmart', logoUrl: '/images/clients/walmart.png' },
  { name: 'Koblenz', logoUrl: '/images/clients/koblenz.png' },
  { name: 'Chedraui', logoUrl: '/images/clients/chedraui.png' },
  { name: 'BBB', logoUrl: '/images/clients/bbb.png' },
  { name: 'Fuller', logoUrl: '/images/clients/fuller.png' },
  { name: 'AVON', logoUrl: '/images/clients/avon.png' },
  { name: 'JOI DOLLAR PLUS', logoUrl: '/images/clients/joi.png' },
  { name: 'PLASTICOS HER TAR', logoUrl: '/images/clients/her-tar.png' },
  { name: 'PORTA', logoUrl: '/images/clients/porta.png' },
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Nuestros Clientes</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                Estamos orgullosos de fabricar productos para cadenas de renombre.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {clients.map((client) => (
            <Card key={client.name} className="bg-card flex items-center justify-center p-6 h-32 hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-full h-full">
                    <Image
                        src={client.logoUrl}
                        alt={`Logo ${client.name}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                    />
                </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
