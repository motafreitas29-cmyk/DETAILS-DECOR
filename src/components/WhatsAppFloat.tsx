import { MessageCircle } from 'lucide-react';
import { WA_LINK } from '../App';

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white font-bold py-4 px-5 rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.5)] hover:bg-green-600 hover:scale-105 active:scale-95 transition-all"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline text-sm">Agendar visita grátis</span>
    </a>
  );
}
