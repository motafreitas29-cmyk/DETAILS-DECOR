import { MessageCircle } from 'lucide-react';
import { WA_LINK } from '../App';

const fotos = [
  'https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/9e0c4c31-1c4f-4af1-adc5-a255429af516/1778931454417_bjx5ty_c4f17d53-aba7-4536-9a7d-d1c370bbec37.png',
  'https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/9e0c4c31-1c4f-4af1-adc5-a255429af516/1778931865775_7gacvq_29e63079-a1ff-4a72-af30-1fe0ebb7e501.png',
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-20 px-4 bg-[#FAFAF7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#C8A96A] text-xs font-bold tracking-[0.3em] uppercase mb-3">Nossos Projetos</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">Ambientes transformados</h2>
          <p className="text-[#777] mt-3 text-base max-w-xl mx-auto">
            Cada projeto é único e personalizado para o seu espaço, estilo e necessidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {fotos.map((src, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden shadow-lg aspect-video cursor-pointer">
              <img src={src} alt={`Projeto ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-[#1a1a1a] font-bold py-3 px-6 rounded-full text-sm hover:bg-[#C8A96A] hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Quero um assim
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#C8A96A] text-[#C8A96A] font-bold py-4 px-8 rounded-full hover:bg-[#C8A96A] hover:text-white transition-all"
          >
            Ver mais projetos no WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
