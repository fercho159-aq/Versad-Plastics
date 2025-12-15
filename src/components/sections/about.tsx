import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-team');

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Acerca de Versad Plastics</h2>
            <div className="space-y-6 text-foreground/80">
              <p>
                En Versad Plastics, nuestra misión es ofrecer soluciones plásticas innovadoras y de alta calidad que potencien las industrias e impulsen el progreso. Estamos comprometidos con la sostenibilidad, la fiabilidad y un servicio al cliente sin igual, asegurando que cada producto que creamos cumpla con los más altos estándares de excelencia.
              </p>
              <p>
                Fundada hace más de dos décadas, Versad Plastics comenzó como una pequeña operación con una gran visión. A través de la innovación continua y la dedicación a nuestros valores fundamentales de integridad, calidad y asociación, hemos crecido hasta convertirnos en un líder de confianza en la industria del plástico, sirviendo a clientes de todo el mundo.
              </p>
            </div>
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
