import { Award, MapPin, Wrench, Zap } from 'lucide-react';
import { WA_LINK } from '../App';

const stats = [
  { num: '20+', label: 'Anos de experiência' },
  { num: '500+', label: 'Clientes atendidos' },
  { num: '100%', label: 'Instalação profissional' },
  { num: '0', label: 'Custo na visita técnica' },
];

const items = [
  { icon: Award, title: 'Mais de 20 anos de experiência', desc: 'Especialistas em cortinas e persianas com histórico comprovado de qualidade e satisfação.' },
  { icon: MapPin, title: 'Atendemos toda São Paulo', desc: 'Itaim Bibi, Vila Olímpia, Brooklin, Vila Madalena, Jardins, Pinheiros, Vila Mariana, Faria Lima e mais.' },
  { icon: Wrench, title: 'Instalação profissional incluída', desc: 'Nossa equipe vai até você, mede, instala e garante o acabamento perfeito no seu ambiente.' },
  { icon: Zap, title: 'Motorização e automação', desc: 'Controle suas cortinas com um toque. Soluções modernas para quem valoriza praticidade.' },
];

export default function Vantagens() {
  return (
    <section id="vantagens" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <div key={i} className="text-center bg-[#FAFAF7] border border-[#C8A96A]/20 rounded-2xl py-6 px-4">
              <p className="text-4xl font-black text-[#C8A96A] mb-1">{s.num}</p>
              <p className="text-[#666] text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="text-[#C8A96A] text-xs font-bold tracking-[0.3em] uppercase mb-3">Por que nos escolher</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">Excelência que você vê e sente</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {items.map((item, i) => (
            <div key={i} className="group text-center">
              <div className="w-16 h-16 bg-[#C8A96A]/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#C8A96A] transition-colors">
                <item.icon className="w-8 h-8 text-[#C8A96A] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-[#1a1a1a] text-base mb-3">{item.title}</h3>
              <p className="text-[#777] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA inline */}
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] rounded-3xl p-8 text-center">
          <p className="text-[#C8A96A] text-xs font-bold tracking-widest uppercase mb-2">Sem custo</p>
          <h3 className="text-white text-2xl sm:text-3xl font-black mb-3">Visita técnica 100% gratuita</h3>
          <p className="text-white/60 text-sm mb-6">Medimos, consultamos e apresentamos o orçamento — tudo sem compromisso.</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C8A96A] text-white font-black py-4 px-8 rounded-full hover:bg-[#b8954f] hover:scale-105 transition-all"
          >
            Agendar minha visita grátis →
          </a>
        </div>

      </div>
    </section>
  );
}
