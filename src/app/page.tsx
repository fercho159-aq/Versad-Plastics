import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import WhyChooseUs from '@/components/sections/why-choose-us';
import Services from '@/components/sections/services';
import Infrastructure from '@/components/sections/infrastructure';
import Clients from '@/components/sections/clients';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Infrastructure />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
