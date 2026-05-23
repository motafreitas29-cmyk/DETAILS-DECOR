import { Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { WA_LINK } from '../App';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          <div>
            <img
              src="https://detailsdecor.com.br/wp-content/uploads/2020/09/details-decor-logo-cortinas-persianas.png"
              alt="Details Decor"
              className="h-12 object-contain mb-4 brightness-0 invert"
            />
            <p className="text-[#999] text-sm leading-relaxed">
              Especialistas em cortinas e persianas personalizadas com mais de 20 anos de experiência.
            </p>
          </div>

          <div>
            <h4 className="text-[#C8A96A] font-bold text-sm uppercase tracking-widest mb-4">Contato</h4>
            <div className="space-y-3">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#999] hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4 text-[#C8A96A]" />
                (91) 8588-9882
              </a>
              <div className="flex items-center gap-2 text-[#999] text-sm">
                <MapPin className="w-4 h-4 text-[#C8A96A]" />
                Belém — PA
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[#C8A96A] font-bold text-sm uppercase tracking-widest mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C8A96A] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C8A96A] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#666]">
          <p>Todos os direitos reservados — Details Decor 2024</p>
          <p>CNPJ: 37.150.734/0001-48</p>
        </div>
      </div>
    </footer>
  );
}
