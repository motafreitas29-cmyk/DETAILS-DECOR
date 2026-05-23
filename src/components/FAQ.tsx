import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { WA_LINK } from '../App';

const perguntas = [
  {
    q: 'Qual o valor de uma cortina ou persiana?',
    a: 'O valor varia conforme o tipo de produto, tecido, tamanho e acabamento. Realizamos uma visita técnica gratuita para medir e apresentar um orçamento personalizado sem compromisso.',
  },
  {
    q: 'Qual o prazo de entrega de um pedido?',
    a: 'O prazo médio é de 15 a 20 dias úteis após a confirmação do pedido, podendo variar conforme a disponibilidade do material escolhido.',
  },
  {
    q: 'Como tiro as medidas para fazer um orçamento?',
    a: 'Meça a largura e a altura da janela ou espaço onde deseja instalar. Nossa equipe também pode realizar uma visita técnica gratuita para garantir as medidas corretas.',
  },
  {
    q: 'Não sei as medidas da minha janela. Como realizo um orçamento?',
    a: 'Sem problema! Entre em contato pelo WhatsApp e agendamos uma visita técnica gratuita. Nossa equipe vai até você, mede o espaço e apresenta o orçamento na hora.',
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#C8A96A]/20 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#C8A96A]/5 transition-colors"
      >
        <span className="text-[#1a1a1a] font-semibold text-sm sm:text-base pr-4">{q}</span>
        {open ? <ChevronUp className="text-[#C8A96A] w-5 h-5 flex-shrink-0" /> : <ChevronDown className="text-[#C8A96A] w-5 h-5 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-5 text-[#666] text-sm leading-relaxed border-t border-[#C8A96A]/10 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="duvidas" className="py-20 px-4 bg-[#FAFAF7]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#C8A96A] text-xs font-bold tracking-[0.3em] uppercase mb-3">Dúvidas Frequentes</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">Tudo o que você precisa saber</h2>
        </div>

        <div className="space-y-3 mb-10">
          {perguntas.map((p, i) => <Item key={i} q={p.q} a={p.a} />)}
        </div>

        <div className="text-center">
          <p className="text-[#666] text-sm mb-4">Ainda tem dúvidas? Fale com nosso especialista.</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C8A96A] text-white font-bold py-4 px-10 rounded-full hover:bg-[#b8954f] transition-all"
          >
            FALAR COM ESPECIALISTA
          </a>
        </div>
      </div>
    </section>
  );
}
