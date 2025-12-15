import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Soluciones Plásticas Innovadoras en las que Puede Confiar
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90 drop-shadow-md">
          Ofreciendo calidad superior y fiabilidad para industrias de todo el mundo. Su éxito es nuestro compromiso.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="shadow-lg">
            <Link href="#products">Explorar Productos</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary shadow-lg">
            <Link href="#contact">Solicitar Cotización</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
