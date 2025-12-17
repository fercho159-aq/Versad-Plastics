import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const navLinks = [
  { name: 'Nosotros', href: '#about' },
  { name: 'Servicios', href: '#services' },
  { name: 'Infraestructura', href: '#infrastructure' },
  { name: 'Clientes', href: '#clients' },
  { name: 'Contacto', href: '#contact' },
];

const socialLinks = [
  { name: 'Facebook', icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=61584751973959&locale=es_LA' },
  { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/versad_plastics/' },
  { name: 'TikTok', icon: FaTiktok, href: 'https://www.tiktok.com/@versadplastics' },
  { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.link/5zjyy9' },
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
              Moldeo por inyección de plásticos con más de 8 años de experiencia.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Versad Plastics. Todos los derechos reservados.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary">Enlaces Rápidos</h4>
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
            <h4 className="font-semibold text-primary">Síguenos</h4>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} aria-label={social.name} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
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
