import { WA_LINK } from '../App';

const produtos = [
  { emoji: '🪟', name: 'Cortinas de Tecido', desc: 'Tecidos nacionais e importados — dezenas de cores, texturas e acabamentos sob medida.' },
  { emoji: '⚡', name: 'Persianas Motorizadas', desc: 'Controle com um toque. Praticidade e sofisticação para o seu espaço.' },
  { emoji: '🌙', name: 'Blackout Premium', desc: 'Bloqueio total de luz para dormitórios, home theater e salas de reunião.' },
  { emoji: '☀️', name: 'Telas Solares', desc: 'Proteção UV sem perder a vista. Ideal para sacadas, salas e escritórios.' },
];

export default function Produtos() {
  return (
    <section id="produtos" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#C8A96A] text-xs font-bold tracking-[0.3em] uppercase mb-3">Soluções Completas</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">Para cada ambiente, o produto certo</h2>
          <p className="text-[#777] mt-3 max-w-xl mx-auto text-base">
            Consultoria personalizada para encontrar a solução ideal para luminosidade, privacidade e estética.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {produtos.map((p, i) => (
            <a
              key={i}
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#FAFAF7] border border-[#C8A96A]/20 rounded-3xl p-6 hover:border-[#C8A96A] hover:shadow-lg transition-all cursor-pointer"
            >
              <p className="text-4xl mb-4">{p.emoji}</p>
              <h3 className="font-black text-[#1a1a1a] text-base mb-2">{p.name}</h3>
              <p className="text-[#888] text-sm leading-relaxed mb-4">{p.desc}</p>
              <p className="text-[#C8A96A] text-xs font-bold group-hover:underline">Pedir orçamento →</p>
            </a>
          ))}
        </div>

        <div className="bg-[#C8A96A] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-black mb-2">Não sabe qual escolher?</h3>
            <p className="text-white/80 text-base">Nossa equipe te orienta gratuitamente — sem compromisso.</p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-white text-[#C8A96A] font-black py-4 px-8 rounded-full hover:bg-[#1a1a1a] hover:text-white transition-all whitespace-nowrap"
          >
            FALAR COM ESPECIALISTA
          </a>
        </div>
      </div>
    </section>
  );
}
