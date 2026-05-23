import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vantagens from './components/Vantagens';
import Produtos from './components/Produtos';
import Galeria from './components/Galeria';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const WA_LINK = "https://api.whatsapp.com/send/?phone=559185889882&text=Ol%C3%A1%2C+quero+um+or%C3%A7amento+de+cortinas+e+persianas%21";

export { WA_LINK };

export default function App() {
  return (
    <div className="bg-[#FAFAF7] text-[#1a1a1a]">
      <Navbar />
      <Hero />
      <Vantagens />
      <Produtos />
      <Galeria />
      <FAQ />
      <Footer />
    </div>
  );
}
