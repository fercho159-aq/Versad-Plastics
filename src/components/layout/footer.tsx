import Link from 'next/link';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Nosotros', href: '#about' },
  { name: 'Servicios', href: '#products' },
  { name: 'Certificaciones', href: '#certifications' },
  { name: 'Contacto', href: '#contact' },
];

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-primary">Versad Plastics</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Soluciones Plásticas Innovadoras en las que Puede Confiar.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Versad Plastics. Todos los derechos reservados.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-secondary-foreground">Enlaces Rápidos</h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-secondary-foreground">Síguenos</h4>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} aria-label={social.name}>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-accent/20">
                    <social.icon className="h-5 w-5" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
