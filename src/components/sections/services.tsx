import { Home, Car, Lamp, Package, Wrench, Truck, Cog } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const sectors = [
  { icon: Home, name: 'Hogar' },
  { icon: Lamp, name: 'Electrodomésticos' },
  { icon: Car, name: 'Automotriz' },
  { icon: Package, name: 'Organización' },
];

const molds = [
    'Colada fría', 'Colada caliente', 'Hidráulico', 'Neumático',
    '1 cavidad', 'Multi cavidad', 'Procesos sobre moldeo'
];

const resins = [
    'Polipropileno', 'Polietileno', 'PVC Rígido', 'PVC Flexible',
    'Poliestireno', 'Policarbonato', 'Nylon', 'ABS', 'Santoprene', 'Saoeprene'
];

const additionalServices = [
    {
      icon: Wrench,
      title: 'Mantenimiento de Moldes',
      description: 'Incluye cambio y fabricación de piezas en correctivos y preventivos.'
    },
    {
      icon: Truck,
      title: 'Servicios Logísticos',
      description: 'Ejecutados por unidades externas para una entrega eficiente.'
    },
    {
      icon: Cog,
      title: 'Armado de Producto',
      description: 'Entregamos tu producto listo para el mercado (Producto Terminado).'
    }
]

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Nuestra Oferta de Servicio Integral</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                Fortalecemos tu cadena de suministro con una amplia gama de materiales, procesos y servicios de valor agregado.
            </p>
        </div>

        <Tabs defaultValue="sectors" className="w-full">
            <TabsList className="grid max-w-lg mx-auto w-full grid-cols-2 md:grid-cols-3 mb-8">
                <TabsTrigger value="sectors">Sectores</TabsTrigger>
                <TabsTrigger value="materials">Materiales</TabsTrigger>
                <TabsTrigger value="additional">Servicios Adicionales</TabsTrigger>
            </TabsList>

            <TabsContent value="sectors">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center md:text-left">Atendemos Diversas Industrias</CardTitle>
                    </CardHeader>
                    <CardContent className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sectors.map((sector) => (
                        <div key={sector.name} className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                            <sector.icon className="h-8 w-8 text-accent" />
                            <span className="font-semibold text-primary">{sector.name}</span>
                        </div>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="materials">
                <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Tipos de Moldes</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                           {molds.map(mold => <p key={mold} className="text-muted-foreground">{mold}</p>)}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Tipos de Resinas</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            {resins.map(resin => <p key={resin} className="text-muted-foreground">{resin}</p>)}
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>

             <TabsContent value="additional">
                <div className="grid md:grid-cols-3 gap-8">
                   {additionalServices.map(service => (
                     <Card key={service.title} className="text-center">
                        <CardHeader>
                             <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit mb-4">
                                <service.icon className="h-8 w-8" />
                            </div>
                            <CardTitle>{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{service.description}</p>
                        </CardContent>
                     </Card>
                   ))}
                </div>
            </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
