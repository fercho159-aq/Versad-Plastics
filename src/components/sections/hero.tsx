import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center text-white">
        {heroImage && (
            <Image
                src="/images/Injection_molding.jpg"
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg text-white">
          Versad Plastics: Moldeo por Inyección de Plásticos
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90 drop-shadow-md">
         Ofrecemos un servicio integral con tiempos de respuesta rápidos, costos de producción reducidos y soluciones innovadoras para nuestros aliados comerciales.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="shadow-lg">
            <Link href="#services">Nuestros Servicios</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary-foreground shadow-lg">
            <Link href="https://wa.link/5zjyy9" target="_blank">Solicitar Cotización</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
