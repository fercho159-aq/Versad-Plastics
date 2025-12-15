import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Target, Eye } from 'lucide-react';

const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-team');

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Más de 15 Años Impulsando la Industria</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
            En Versad Plastics, combinamos experiencia y tecnología para ofrecer soluciones de moldeo por inyección que superan las expectativas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <Target className="h-6 w-6"/>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Nuestra Misión</h3>
                  <p className="text-foreground/80">
                    Encontrar la solución a medida de los clientes, garantizando proyectos de moldeo de plástico con éxito y brindando el mejor servicio.
                  </p>
                </div>
              </div>
            </Card>
             <Card className="p-6">
              <div className="flex items-start gap-4">
                 <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <Eye className="h-6 w-6"/>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Nuestra Visión</h3>
                  <p className="text-foreground/80">
                    Ser una empresa líder en el sector de inyección de plástico a nivel nacional de forma competitiva y ser reconocidos por la excelencia en la calidad del producto y/o servicio.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="order-1 md:order-2">
            {aboutImage && (
              <Card className="overflow-hidden rounded-lg shadow-xl">
                 <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    data-ai-hint={aboutImage.imageHint}
                  />
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
