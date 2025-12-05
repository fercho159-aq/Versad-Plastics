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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Versad Plastics</h2>
            <div className="space-y-6 text-foreground/80">
              <p>
                At Versad Plastics, our mission is to deliver innovative, high-quality plastic solutions that empower industries and drive progress. We are committed to sustainability, reliability, and unparalleled customer service, ensuring that every product we create meets the highest standards of excellence.
              </p>
              <p>
                Founded over two decades ago, Versad Plastics began as a small operation with a big vision. Through continuous innovation and a dedication to our core values of integrity, quality, and partnership, we have grown into a trusted leader in the plastics industry, serving clients across the globe.
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
