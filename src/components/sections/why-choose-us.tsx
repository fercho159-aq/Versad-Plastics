import { Award, Check, DollarSign, FastForward, HeartHandshake, Zap, Activity, Repeat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: DollarSign,
    title: 'Costos Competitivos',
    description: 'Ofrecemos precios justos sin comprometer la calidad de nuestros productos.',
  },
  {
    icon: Award,
    title: 'Calidad Garantizada',
    description: 'Nos adherimos a los más altos estándares para entregar productos impecables.',
  },
  {
    icon: Zap,
    title: 'Eficiencia',
    description: 'Procesos optimizados para maximizar la productividad y reducir tiempos.',
  },
  {
    icon: FastForward,
    title: 'Respuesta Rápida',
    description: 'Atendemos tus necesidades con agilidad y prontitud.',
  },
  {
    icon: Activity,
    title: 'Mejora Continua',
    description: 'Siempre estamos innovando para ofrecerte las mejores soluciones.',
  },
  {
    icon: Repeat,
    title: 'Flexibilidad Productiva',
    description: 'Producción por lote, en masa o por proyecto según tus requerimientos.',
  },
  {
    icon: HeartHandshake,
    title: 'Optimización de Procesos',
    description: 'Analizamos y mejoramos constantemente para darte el mejor valor.',
  },
  {
    icon: Check,
    title: 'Expertos Técnicos',
    description: 'Personal altamente capacitado y especialista en cada pieza que producimos.',
  },
];


const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">¿Por Qué Elegirnos?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                Nos distinguimos por nuestra dedicación a la excelencia y el éxito de nuestros aliados comerciales.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center bg-card hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit mb-4">
                    <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
