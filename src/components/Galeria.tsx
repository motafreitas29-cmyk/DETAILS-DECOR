import { WA_LINK } from '../App';

const fotos = [
  'https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/9e0c4c31-1c4f-4af1-adc5-a255429af516/1778931454417_bjx5ty_c4f17d53-aba7-4536-9a7d-d1c370bbec37.png',
  'https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/9e0c4c31-1c4f-4af1-adc5-a255429af516/1778931865775_7gacvq_29e63079-a1ff-4a72-af30-1fe0ebb7e501.png',
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#C8A96A] text-xs font-bold tracking-[0.3em] uppercase mb-3">Nosso Trabalho</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">Galeria de Projetos</h2>
          <p className="text-[#666] mt-3 text-base">Cada detalhe pensado para transformar seu ambiente.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {fotos.map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-md aspect-video">
              <img src={src} alt={`Projeto ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C8A96A] text-white font-bold py-4 px-10 rounded-full hover:bg-[#b8954f] transition-all"
          >
            VER MAIS PROJETOS
          </a>
        </div>
      </div>
    </section>
  );
}
