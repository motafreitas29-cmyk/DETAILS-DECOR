import { WA_LINK } from '../App';
import { CheckCircle2 } from 'lucide-react';

const produtos = [
  { emoji: '🪟', name: 'Cortinas de Tecido', desc: 'Tecidos nacionais e importados em dezenas de cores e texturas.' },
  { emoji: '⚡', name: 'Persianas Motorizadas', desc: 'Controle com um toque — praticidade e tecnologia no seu ambiente.' },
  { emoji: '🌙', name: 'Blackouts Premium', desc: 'Bloqueio total de luz para dormitórios e salas de cinema.' },
  { emoji: '☀️', name: 'Telas Solares', desc: 'Proteção UV mantendo a vista e a ventilação natural do ambiente.' },
];

export default function Produtos() {
  return (
    <section id="produtos" className="py-20 px-4 bg-[#FAFAF7]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#C8A96A] text-xs font-bold tracking-[0.3em] uppercase mb-3">Nossos Produtos</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mb-5 leading-tight">
              Soluções customizadas para sua residência ou empresa
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-8">
              Projetos personalizados com consultoria completa sobre luminosidade, privacidade e estética — do projeto à instalação.
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {['Qualidade Premium', 'Tecidos nacionais e importados', 'Medição e instalação incluídas', 'Garantia no serviço'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C8A96A] flex-shrink-0" />
                  <span className="text-[#444] text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C8A96A] text-white font-bold py-4 px-8 rounded-full hover:bg-[#b8954f] transition-all"
            >
              CONHECER PRODUTOS
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {produtos.map((p, i) => (
              <div key={i} className="bg-white border border-[#C8A96A]/20 rounded-2xl p-5 hover:shadow-lg transition-shadow">
                <p className="text-3xl mb-3">{p.emoji}</p>
                <h3 className="font-bold text-[#1a1a1a] text-sm mb-2">{p.name}</h3>
                <p className="text-[#888] text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
