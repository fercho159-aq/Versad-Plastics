import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Gem, UserCheck, Lightbulb, Award, Leaf, Users, TrendingUp } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-team');

const values = [
  {
    icon: Gem,
    title: 'Integridad',
    description: 'Nos comprometemos con integridad y transparencia en todas nuestras relaciones y operaciones.',
  },
  {
    icon: UserCheck,
    title: 'Responsabilidad',
    description: 'Nos comprometemos a ser responsables de nuestras acciones y decisiones.',
  },
  {
    icon: Lightbulb,
    title: 'Innovación',
    description: 'Nos esforzamos por innovar y mejorar continuamente nuestros procesos.',
  },
  {
    icon: Award,
    title: 'Calidad',
    description: 'Nos comprometemos a entregar productos de alta calidad que superen las expectativas de nuestros clientes.',
  },
  {
    icon: Leaf,
    title: 'Sostenibilidad',
    description: 'Nos esforzamos por minimizar nuestro impacto ambiental y promover practicas sostenibles en nuestra operación.',
  },
  {
    icon: Users,
    title: 'Trabajo en equipo',
    description: 'Nos esforzamos por trabajar en equipo y colaborar con nuestros clientes, proveedores y empleados para lograr nuestros objetivos.',
  },
  {
    icon: TrendingUp,
    title: 'Mejora continua',
    description: 'Nos comprometemos a mejorar continuamente nuestros procesos y productos para satisfacer las necesidades de nuestros clientes.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Más de 8 Años Impulsando la Industria</h2>
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
                    En Versad Plastics nos comprometemos a fabricar productos de plástico de alta calidad que superen las expectativas de nuestros clientes en términos de funcionalidad y durabilidad. Buscando siempre la mejora continua.
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
                    Ser reconocidos como líderes en la industria de la inyección de plástico, por nuestra innovación, calidad y compromiso con la sostenibilidad. Brindando siempre el mejor servicio a nuestros clientes.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="order-1 md:order-2">
            {aboutImage && (
              <Card className="overflow-hidden rounded-lg shadow-xl">
                 <Image
                    src="/images/production-of-plastic-cans-2021-08-26-15-33-16-utc.jpg"
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

        <div className="mt-24">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-primary">Nuestros Valores</h3>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                    Los principios que guían cada una de nuestras acciones y decisiones.
                </p>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {values.map((value) => (
                  <CarouselItem key={value.title} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="p-1 h-full">
                      <Card className="text-center bg-card hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit mb-4">
                                <value.icon className="h-8 w-8" />
                            </div>
                            <CardTitle className="text-lg">{value.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground text-sm">{value.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
        </div>
      </div>
    </section>
  );
};

export default About;
