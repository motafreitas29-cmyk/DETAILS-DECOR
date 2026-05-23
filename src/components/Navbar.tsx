import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { WA_LINK } from '../App';

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Vantagens', href: '#vantagens' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Dúvidas', href: '#duvidas' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur shadow-sm border-b border-[#C8A96A]/15">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#inicio">
          <img
            src="https://detailsdecor.com.br/wp-content/uploads/2020/09/details-decor-logo-cortinas-persianas.png"
            alt="Details Decor"
            className="h-10 object-contain"
          />
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-[#555] hover:text-[#C8A96A] transition-colors">{l.label}</a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-green-600 transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            AGENDAR VISITA
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[#C8A96A]/20 px-4 py-4 space-y-3">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-[#555] py-2">{l.label}</a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white text-sm font-bold px-5 py-3 rounded-full"
          >
            <MessageCircle className="w-4 h-4" />
            AGENDAR VISITA GRÁTIS
          </a>
        </div>
      )}
    </nav>
  );
}
