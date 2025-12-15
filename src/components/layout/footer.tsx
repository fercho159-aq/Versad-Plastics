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
        fill="currentColor"
        {...props}
      >
        <path d="M19.05 4.94A10 10 0 0 0 12 2a10 10 0 0 0-9.94 11.05c0 1.79.46 3.53 1.34 5.09l-1.4 5.02 5.14-1.37a10 10 0 0 0 4.86 1.25h.01a10 10 0 0 0 10-10c0-2.76-1.12-5.26-2.95-7.06zm-7.06 15.01c-1.63 0-3.2-.4-4.57-1.16l-.33-.19-3.41.9 1.02-3.32-.21-.34a8 8 0 0 1-1.22-4.91 8 8 0 0 1 8-8 8 8 0 0 1 5.66 13.66A8 8 0 0 1 12 19.95zm5.45-6.03c-.28-.14-1.65-.82-1.9-.91s-.44-.14-.62.14-.72.91-.88 1.1s-.32.21-.6.07c-.28-.14-1.18-.43-2.25-1.39s-1.72-2.12-1.92-2.48-.02-.28.12-.42c.13-.13.28-.34.42-.51s.19-.28.28-.47.05-.37-.02-.51c-.07-.14-.62-1.5-.85-2.05s-.45-.46-.62-.46h-.52c-.19 0-.5.23-.5.5 0 .28.19.57.19.57s.72 2.91 1.73 4.09c1.01 1.18 2.37 1.87 3.69 2.22.84.22 1.6.17 2.2-.09.6-.26 1.02-.75 1.16-1.43s.14-1.27.1-1.42c-.05-.15-.19-.24-.43-.38z" />
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
