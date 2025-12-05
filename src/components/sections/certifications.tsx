import { Award, ShieldCheck, Scale, TrendingUp, CheckCircle, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const certifications = [
  {
    icon: ShieldCheck,
    title: 'ISO 9001:2015',
    description: 'Recognized for our commitment to quality management systems and continuous improvement.',
  },
  {
    icon: Award,
    title: 'Plastics Industry Award',
    description: 'Winner of the "Supplier Partnership" award for excellence in client collaboration.',
  },
  {
    icon: Scale,
    title: 'Compliance Standards',
    description: 'Adherence to RoHS and REACH regulations for environmental and health safety.',
  },
];

const kpis = [
    {
      icon: TrendingUp,
      value: '20+',
      label: 'Years of Industry Leadership',
    },
    {
      icon: CheckCircle,
      value: '99.8%',
      label: 'Product Quality Rate',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Satisfied Global Clients',
    },
  ];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Trust and Excellence, Certified</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                Our dedication to quality is backed by industry-recognized certifications and a proven track record.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert) => (
            <Card key={cert.title} className="text-center bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit">
                    <cert.icon className="h-8 w-8" />
                </div>
                <CardTitle className="mt-4">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {kpis.map((kpi) => (
                <div key={kpi.label} className="p-6 bg-secondary rounded-lg">
                    <kpi.icon className="h-10 w-10 mx-auto text-accent mb-4"/>
                    <p className="text-4xl font-bold text-primary">{kpi.value}</p>
                    <p className="text-muted-foreground mt-2">{kpi.label}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
