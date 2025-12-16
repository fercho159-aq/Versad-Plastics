import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const clients = [
  { name: 'Walmart', logoUrl: '/images/1.png' },
  { name: 'Koblenz', logoUrl: '/images/2.png' },
  { name: 'Chedraui', logoUrl: '/images/5.png' },
  { name: 'BBB', logoUrl: '/images/3.png' },
  { name: 'Fuller', logoUrl: '/images/6.png' },
  { name: 'AVON', logoUrl: '/images/4.png' },
  { name: 'JOI DOLLAR PLUS', logoUrl: '/images/7.png' },
  { name: 'PLASTICOS HER TAR', logoUrl: '/images/8.png' },
  { name: 'PORTA', logoUrl: '/images/9.png' },
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
            <Card key={client.name} className={cn("bg-card flex items-center justify-center p-6 h-40 hover:shadow-lg transition-shadow duration-300", client.className)}>
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
