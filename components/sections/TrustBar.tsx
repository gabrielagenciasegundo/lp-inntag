"use client";

import { useEffect, useState, useRef } from "react";
import { ShieldCheck, Target, Users, Wrench, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TrustBar() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        {
            icon: <Award className="w-5 h-5 text-[#D51119]" />,
            text: "Mais de 16 anos de experiência"
        },
        {
            icon: <Target className="w-5 h-5 text-[#D51119]" />,
            text: "Mais de 1000 projetos executados"
        },
        {
            icon: <Users className="w-5 h-5 text-[#D51119]" />,
            text: "Mais de 17.000 clientes atendidos"
        },
        {
            icon: <ShieldCheck className="w-5 h-5 text-[#D51119]" />,
            text: "Atendimento especializado"
        },
        {
            icon: <Wrench className="w-5 h-5 text-[#D51119]" />,
            text: "Projeto personalizado"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, 3500);
        return () => clearInterval(timer);
    }, [items.length]);

    return (
        <section className="bg-[#D51119]/5 border-y border-slate-200 py-6 overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Desktop Layout: Escada Rolante (Marquee Infinito) */}
                <div className="hidden md:flex relative items-center max-w-full overflow-hidden">
                    {/* Shadow edges for gradient fade effect (opcional, mas fica bonito) */}
                    <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l  z-10 pointer-events-none"></div>

                    <div
                        className="flex flex-nowrap items-center gap-10 lg:gap-14 py-2 w-max animate-[marquee_25s_linear_infinite]"
                        style={{ paddingLeft: '20px' }}
                    >
                        {/* Renderiza a array 2 vezes para o loop contínuo perfeito */}
                        {[...items, ...items].map((item, index) => (
                            <div key={index} className="flex items-center gap-3 shrink-0">
                                <div className="p-2 bg-white rounded-full shadow-sm border border-slate-100">
                                    {item.icon}
                                </div>
                                <span className="text-base font-semibold text-slate-700 whitespace-nowrap">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Layout: Carrossel Automático */}
                <div className="md:hidden flex justify-center items-center relative w-full h-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.4 }}
                            className="absolute flex items-center justify-center gap-3 w-full"
                        >
                            <div className="p-2 bg-white rounded-full shadow-sm border border-slate-100 shrink-0">
                                {items[currentIndex].icon}
                            </div>
                            <span className="text-sm font-medium text-slate-700 text-center max-w-[250px] leading-tight">
                                {items[currentIndex].text}
                            </span>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
