import { Award, MapPin, Wrench, Zap } from 'lucide-react';

const items = [
  {
    icon: Award,
    title: 'Mais de 20 anos de experiência',
    desc: 'Atuação especializada em cortinas e persianas com foco absoluto em qualidade e satisfação do cliente.',
  },
  {
    icon: MapPin,
    title: 'Atendemos Toda São Paulo',
    desc: 'Itaim Bibi, Vila Olímpia, Brooklin, Vila Madalena, Jardim Europa, Vila Nova Conceição, Jardim América, Pinheiros, Vila Mariana, Faria Lima e mais.',
  },
  {
    icon: Wrench,
    title: 'Instalação Profissional',
    desc: 'Equipe especializada que realiza o atendimento diretamente no seu domicílio ou escritório com total cuidado.',
  },
  {
    icon: Zap,
    title: 'Motorização e Automação',
    desc: 'Soluções motorizadas e automatizadas de última geração para máxima praticidade e sofisticação no seu espaço.',
  },
];

export default function Vantagens() {
  return (
    <section id="vantagens" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#C8A96A] text-xs font-bold tracking-[0.3em] uppercase mb-3">Excelência Garantida</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">Por que escolher a Details Decor?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-[#C8A96A]/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#C8A96A]/20 transition-colors">
                <item.icon className="w-8 h-8 text-[#C8A96A]" />
              </div>
              <h3 className="font-bold text-[#1a1a1a] text-base mb-3">{item.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
