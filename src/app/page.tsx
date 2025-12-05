import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Products from '@/components/sections/products';
import Certifications from '@/components/sections/certifications';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Products />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
