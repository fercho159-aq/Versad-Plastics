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
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M16.5 5.5a4.5 4.5 0 1 0 0 9h-4.5V5.5" />
        <path d="M12 14.5a4.5 4.5 0 1 0 0-9V20" />
      </svg>
    ),
    href: '#',
  },
  {
    name: 'WhatsApp',
    icon: (props: LucideProps) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
      >
        <path d="M16.75 13.96c.25.13.43.2.5.28.08.08.13.18.15.25.03.08.03.18 0 .28-.03.1-.08.18-.15.25-.08.08-.18.13-.28.15-.1.03-.2.03-.3 0-.1-.03-.2-.08-.3-.15s-.18-.15-.28-.25c-.1-.1-.2-.2-.3-.3s-.2-.2-.3-.3c-.1-.1-.23-.2-.35-.3-.13-.1-.25-.2-.38-.28s-.25-.15-.38-.23c-.12-.08-.25-.13-.38-.18s-.25-.1-.38-.13c-.12-.03-.25-.03-.38-.03s-.25.03-.38.05c-.12.03-.25.05-.38.08s-.25.08-.38.13c-.12.05-.25.1-.38.15s-.25.13-.38.18c-.12.05-.25.1-.38.15-.12.05-.25.1-.38.15s-.25.1-.38.15c-.12.05-.25.1-.38.15-.25.1-.5.2-.75.3s-.5.2-.75.3c-1.25.5-2.5 1-3.75 1.5-1 .38-1.88.63-2.63.75-.12.03-.25.03-.38 0s-.25-.05-.38-.08c-.12-.03-.25-.08-.38-.13s-.25-.13-.38-.18c-.12-.05-.25-.1-.38-.15-.12-.05-.25-.1-.38-.15-.12-.05-.25-.1-.38-.15s-.25-.1-.38-.15c-.12-.05-.25-.1-.38-.15s-.25-.1-.38-.15c-.12-.05-.25-.1-.38-.15s-.25-.1-.38-.15c-.12-.05-.25-.1-.38-.15-.12-.05-.25-.1-.38-.15-.12-.05-.25-.1-.38-.15-.12-.05-.25-.1-.38-.15s-.25-.1-.38-.15c-.12-.05-.25-.1-.38-.15s-.25-.1-.38-.15c-.12-.05-.25-.1-.38-.15s-.25-.1-.38-.15c-.12-.05-.25-.1-.38-.15s-.25-.1-.38-.15c-.12-.05-.25-.1-.38-.15s-.25-.1-.38-.15c-.12-.05-.25-.1-.38-.15s-.25-.1-.38-.15c-.12-.05-.25-.1-.38-.15s-.25-.1-.38-.15c-.12-.05-.25-.1-.38-.15s-.25-.1-.38-.15c-.12-.05-.25-.1-.38-.15s-.25-.1-.38-.15c-.12-.05-.25-.1-.38-.15s-.25-.1-.38-.15c-.12-.05-.25-.1-.38-.15s-.25-.1-.38-.15c-.12-.05-.25-.1-.38-.15s-.25-.1-.38-.15c-.12-.05-.25-.1-.38-.1_e." />
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
