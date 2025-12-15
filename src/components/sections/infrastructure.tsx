import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const machines = [
  { ton: '270 T', grams: '780 gm', bars: '620 x 560 mm', opening: '200 mm a 600 mm' },
  { ton: '265 T', grams: '710 gm', bars: '585 x 565 mm', opening: '200 mm a 600 mm' },
  { ton: '218 T', grams: '518 gm', bars: '510 x 510 mm', opening: '200 mm a 530 mm' },
  { ton: '168 T', grams: '361 gm', bars: '467 x 467 mm', opening: '170 mm a 400 mm' },
]

const Infrastructure = () => {
  return (
    <section id="infrastructure" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Nuestra Infraestructura</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                Contamos con maquinaria de vanguardia para producciones por lote, en masa o por proyecto, con una capacidad de 10,000 a 60,000 piezas mensuales por máquina.
            </p>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-lg">
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[150px]">Máquina de Inyección</TableHead>
                <TableHead>Gramos de Inyección</TableHead>
                <TableHead>Distancia entre barras</TableHead>
                <TableHead className="text-right">Apertura altura</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {machines.map((machine) => (
                <TableRow key={machine.ton}>
                    <TableCell className="font-medium text-primary">{machine.ton}</TableCell>
                    <TableCell>{machine.grams}</TableCell>
                    <TableCell>{machine.bars}</TableCell>
                    <TableCell className="text-right">{machine.opening}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
