import { WA_LINK } from '../App';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/9e0c4c31-1c4f-4af1-adc5-a255429af516/1778931454417_bjx5ty_c4f17d53-aba7-4536-9a7d-d1c370bbec37.png')` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="text-[#C8A96A] text-sm font-semibold tracking-[0.3em] uppercase mb-4">Especialistas em Decoração</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
          Elegância em cada detalhe
        </h1>
        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
          Cortinas e persianas personalizadas que transformam ambientes com sofisticação, privacidade e conforto.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C8A96A] text-white font-bold py-4 px-8 rounded-full text-base hover:bg-[#b8954f] transition-all shadow-lg"
          >
            FALAR COM ESPECIALISTA
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 border border-white/40 text-white font-bold py-4 px-8 rounded-full text-base hover:bg-white/20 transition-all backdrop-blur"
          >
            VER CATÁLOGO
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
