import Link from 'next/link';
import { Facebook, Instagram, Factory } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Nosotros', href: '#about' },
  { name: 'Servicios', href: '#services' },
  { name: 'Infraestructura', href: '#infrastructure' },
  { name: 'Contacto', href: '#contact' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { 
    name: 'TikTok', 
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M16.49 3.994c-1.33.1-2.58.6-3.69 1.4v6.25c0 .02.01.04.01.06.07-.02.14-.04.2-.06A6.19 6.19 0 0 1 16.5 9.5a6.5 6.5 0 1 1-6.5-6.5v6.25c0 .02.01.04.01.06.07-.02.14-.04.2-.06a6.19 6.19 0 0 1 3.5-1.15V3.994z" />
      </svg>
    ), 
    href: '#' 
  },
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
             <div className="flex items-center gap-2 mb-2">
                <Factory className="h-7 w-7 text-primary" />
                <h3 className="text-xl font-bold text-primary">Versad Plastics</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Moldeo por inyección de plásticos con más de 15 años de experiencia.
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
