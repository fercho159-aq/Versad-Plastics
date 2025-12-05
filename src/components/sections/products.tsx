import { Layers, Boxes, FlaskConical, Recycle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const products = [
  {
    icon: Layers,
    title: 'Custom Polymer Formulations',
    description: 'Tailor-made polymer blends designed to meet your specific performance and application requirements.',
  },
  {
    icon: Boxes,
    title: 'High-Density Polyethylene (HDPE)',
    description: 'Durable and versatile HDPE for packaging, piping, and industrial components.',
  },
  {
    icon: FlaskConical,
    title: 'Specialty Chemical Additives',
    description: 'Enhance your materials with our range of performance-boosting additives and colorants.',
  },
  {
    icon: Recycle,
    title: 'Eco-Friendly Bioplastics',
    description: 'Sustainable and biodegradable plastic solutions to support your environmental goals.',
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Products & Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                From custom formulations to sustainable materials, we provide a wide range of plastic solutions.
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
