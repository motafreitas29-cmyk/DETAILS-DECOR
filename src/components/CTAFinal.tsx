import { MessageCircle, Calendar, CheckCircle2 } from 'lucide-react';
import { WA_LINK } from '../App';

export default function CTAFinal() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#C8A96A] to-[#a8894a]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-white/70 text-xs font-bold tracking-[0.3em] uppercase mb-4">Sem custo · Sem compromisso</p>
        <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6">
          Agende sua visita técnica gratuita agora
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Nossa equipe vai até você, mede, orienta e apresenta o orçamento na hora.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          {['Visita gratuita e sem compromisso', 'Orçamento na hora', 'Instalação profissional incluída'].map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-2 text-white/90 text-sm">
              <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-[#C8A96A] font-black py-5 px-10 rounded-full text-xl hover:bg-[#1a1a1a] hover:text-white transition-all shadow-2xl hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-6 h-6" />
          AGENDAR PELO WHATSAPP
        </a>

        <p className="text-white/50 text-xs mt-5">Respondemos em menos de 1 hora · Seg a Sáb</p>
      </div>
    </section>
  );
}
