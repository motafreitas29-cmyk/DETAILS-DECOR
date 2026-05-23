import { MessageCircle, Star, Shield, Clock } from 'lucide-react';
import { WA_LINK } from '../App';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/9e0c4c31-1c4f-4af1-adc5-a255429af516/1778931454417_bjx5ty_c4f17d53-aba7-4536-9a7d-d1c370bbec37.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">

        {/* Badge urgência */}
        <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/40 text-green-300 text-xs font-bold px-4 py-2 rounded-full mb-6 animate-pulse">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          VISITAS DISPONÍVEIS ESTA SEMANA — AGENDE AGORA
        </div>

        <p className="text-[#C8A96A] text-sm font-semibold tracking-[0.3em] uppercase mb-4">Especialistas em Decoração · Belém e Região</p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
          Transforme seu ambiente com<br />
          <span className="text-[#C8A96A]">cortinas sob medida</span>
        </h1>

        <p className="text-white/85 text-lg sm:text-xl leading-relaxed mb-4 max-w-2xl mx-auto">
          Visita técnica <strong className="text-white">gratuita e sem compromisso</strong> — medimos, consultamos e instalamos tudo para você.
        </p>

        <p className="text-white/60 text-sm mb-10">Mais de <strong className="text-[#C8A96A]">20 anos</strong> transformando ambientes em São Paulo</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-500 text-white font-black py-5 px-10 rounded-full text-lg hover:bg-green-600 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(34,197,94,0.4)]"
          >
            <MessageCircle className="w-6 h-6" />
            AGENDAR VISITA GRÁTIS
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold py-5 px-8 rounded-full text-base hover:bg-white/20 transition-all backdrop-blur"
          >
            VER CATÁLOGO →
          </a>
        </div>

        {/* Social proof bar */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-white/70">
            <Star className="w-4 h-4 text-[#C8A96A] fill-[#C8A96A]" />
            <span><strong className="text-white">+500</strong> clientes satisfeitos</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <Shield className="w-4 h-4 text-[#C8A96A]" />
            <span><strong className="text-white">Garantia</strong> no serviço</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <Clock className="w-4 h-4 text-[#C8A96A]" />
            <span>Atendimento <strong className="text-white">rápido</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
