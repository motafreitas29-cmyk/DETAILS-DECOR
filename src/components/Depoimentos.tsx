import { Star } from 'lucide-react';

const depoimentos = [
  { nome: 'Carla M.', bairro: 'Vila Olímpia', texto: 'Ficou lindo! A equipe foi super atenciosa, mediram tudo certinho e a instalação ficou impecável. Recomendo demais!', nota: 5 },
  { nome: 'Roberto S.', bairro: 'Itaim Bibi', texto: 'Meu apartamento ficou completamente diferente. As cortinas motorizadas foram a melhor escolha. Atendimento excelente.', nota: 5 },
  { nome: 'Ana P.', bairro: 'Jardins', texto: 'A visita técnica foi rápida e gratuita mesmo. O orçamento foi justo e o resultado final superou as expectativas.', nota: 5 },
];

export default function Depoimentos() {
  return (
    <section className="py-20 px-4 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#C8A96A] text-xs font-bold tracking-[0.3em] uppercase mb-3">Clientes Satisfeitos</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">O que dizem sobre nós</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {depoimentos.map((d, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(d.nota)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-[#C8A96A] fill-[#C8A96A]" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-5 italic">"{d.texto}"</p>
              <div>
                <p className="text-white font-bold text-sm">{d.nome}</p>
                <p className="text-[#C8A96A] text-xs">{d.bairro} · Belém — PA</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
