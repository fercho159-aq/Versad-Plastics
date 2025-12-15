import { Layers, Boxes, FlaskConical, Recycle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const products = [
  {
    icon: Layers,
    title: 'Formulaciones de Polímeros a Medida',
    description: 'Mezclas de polímeros personalizadas diseñadas para cumplir con sus requisitos específicos de rendimiento y aplicación.',
  },
  {
    icon: Boxes,
    title: 'Polietileno de Alta Densidad (HDPE)',
    description: 'HDPE duradero y versátil para embalajes, tuberías y componentes industriales.',
  },
  {
    icon: FlaskConical,
    title: 'Aditivos Químicos Especializados',
    description: 'Mejore sus materiales con nuestra gama de aditivos y colorantes que aumentan el rendimiento.',
  },
  {
    icon: Recycle,
    title: 'Bioplásticos Ecológicos',
    description: 'Soluciones plásticas sostenibles y biodegradables para apoyar sus objetivos medioambientales.',
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Nuestros Productos y Servicios</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                Desde formulaciones personalizadas hasta materiales sostenibles, ofrecemos una amplia gama de soluciones plásticas.
            </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.title} className="flex flex-col">
              <CardHeader className="items-center text-center">
                <div className="bg-primary/10 text-primary rounded-full p-4 mb-4">
                    <product.icon className="h-8 w-8" />
                </div>
                <CardTitle>{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground flex-grow">
                <p>{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
