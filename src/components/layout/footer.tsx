import Link from 'next/link';
import { Facebook, Instagram, LucideProps } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';

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
    icon: (props: LucideProps) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M12.52.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.65 4.24 1.72v4.03c-1.44-.05-2.89-.46-4.22-1.1-.02-.01-.03-.02-.05-.03-.01.02-.02.03-.02.04.04 1.58.04 3.16.04 4.75 0 1.66-1.34 3-3 3H7.5c-1.66 0-3-1.34-3-3V7.22c0-1.66 1.34-3 3-3h1.52c1.15.01 2.3-.01 3.45-.02z" />
      </svg>
    ),
    href: '#',
  },
  {
    name: 'WhatsApp',
    icon: (props: LucideProps) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    href: 'https://wa.link/5zjyy9',
  },
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
             <div className="flex items-center gap-2 mb-2">
                <Logo className="text-xl" />
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
                <Link key={social.name} href={social.href} aria-label={social.name} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-accent/20">
                    <social.icon className="h-6 w-6" />
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