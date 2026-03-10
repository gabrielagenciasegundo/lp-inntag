"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function ReviewsSection() {
    const reviews = [
        {
            name: "João Silva",
            date: "Há 1 mês",
            text: "Excelente atendimento da Inntag. O sistema solar foi instalado no prazo, equipe muito limpa e educada. Minha conta baixou muito. Super recomendo!",
            image: "/nuno-marques-0GbrjL3vZF4-unsplash.jpg"
        },
        {
            name: "Maria Fernanda",
            date: "Há 2 meses",
            text: "Fiquei impressionada com o profissionalismo. Fizeram um projeto ótimo pro meu telhado, e o retorno do investimento é real. Empresa muito séria.",
            image: "/mariana-proenca-GXiHwHkIdVs-unsplash.jpg"
        },
        {
            name: "Carlos Eduardo",
            date: "Há 3 semanas",
            text: "Pesquisei várias empresas antes de fechar com quem tinha mais estrutura. A Inntag não me decepcionou. Placas de ponta e perfeita instalação.",
            image: "https://ui-avatars.com/api/?name=Carlos+Eduardo&background=D51119&color=fff&size=150"
        }
    ];

    return (
        <section className="relative py-24 overflow-hidden mt-12">
            {/* Background Image Setup */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/placeholders/hero-bg.jpg"
                    alt="Energia solar fundo"
                    className="w-full h-full object-cover object-bottom"
                />
                <div className="absolute inset-0 bg-[#3E2723]/90 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Upward pointing triangle (divider from white section above) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[30px] border-t-white z-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-xl md:text-2xl text-slate-300 font-medium tracking-widest uppercase mb-1">
                        Feedback de
                    </h2>
                    <h3 className="text-4xl md:text-5xl text-[#D51119] font-black uppercase" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                        Nossos Clientes
                    </h3>
                </div>

                {/* Desktop Layout - 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.15 }}
                            className="bg-white p-8 rounded shadow-2xl flex flex-col items-center text-center relative mt-8 md:mt-0"
                        >
                            <div className="absolute -top-8 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md bg-slate-200">
                                <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                            </div>
                            <h4 className="font-bold text-slate-800 mt-6 text-lg">{review.name}</h4>
                            <div className="flex justify-center gap-1 my-3">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span className="text-xs text-slate-400 font-medium mb-4 block">{review.date}</span>
                            <p className="text-slate-600 leading-relaxed text-sm italic font-medium">
                                "{review.text}"
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-10 py-4 bg-[#333333] hover:bg-[#444444] text-white font-bold text-lg uppercase rounded-sm shadow-2xl border-b-4 border-[#1a1a1a] transition-transform hover:-translate-y-1">
                        Quero Economizar
                    </button>
                    <p className="text-xs text-[#D51119] mt-3 font-bold uppercase tracking-wider">Orçamento rápido e gratuito</p>
                </div>
            </div>
        </section>
    );
}
