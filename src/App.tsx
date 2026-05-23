import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vantagens from './components/Vantagens';
import Produtos from './components/Produtos';
import Galeria from './components/Galeria';
import Depoimentos from './components/Depoimentos';
import FAQ from './components/FAQ';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export const WA_LINK = "https://api.whatsapp.com/send/?phone=559185889882&text=Ol%C3%A1%2C+quero+agendar+uma+visita+t%C3%A9cnica+gratuita%21";

export default function App() {
  return (
    <div className="bg-[#FAFAF7] text-[#1a1a1a]">
      <Navbar />
      <Hero />
      <Vantagens />
      <Produtos />
      <Galeria />
      <Depoimentos />
      <FAQ />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
