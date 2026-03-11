"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function ReviewsSection() {
    const widgetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (widgetRef.current && widgetRef.current.childElementCount === 0) {
            const script = document.createElement("script");
            script.src = "https://cdn.trustindex.io/loader.js?ab44a9f665a9837257465e63f53";
            script.async = true;
            script.defer = true;
            widgetRef.current.appendChild(script);
        }
    }, []);

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Image Setup */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/nuno-marques-0GbrjL3vZF4-unsplash.webp"
                    alt="Energia solar fundo"
                    className="w-full h-full object-cover object-bottom"
                />
                <div className="absolute inset-0 bg-[#3E2723]/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Upward pointing triangle (divider from white section above) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[30px] border-t-white z-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-xl md:text-2xl text-slate-300 font-medium tracking-widest mb-1">
                        Feedback de
                    </h2>
                    <h3 className="text-4xl md:text-5xl text-[#D51119] font-black capitalize" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                        Nossos Clientes
                    </h3>
                </div>
                <div ref={widgetRef} className="w-full max-w-6xl mx-auto min-h-[300px] flex justify-center items-center">
                    {/* Trustindex script will be injected here via useEffect */}
                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-12 py-5 bg-[#333333] hover:bg-[#222222] text-white font-black text-lg uppercase rounded-sm shadow-2xl transition-all border-b-4 border-[#9a0c12] hover:-translate-y-1 relative overflow-hidden group cursor-pointer"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                        <span className="relative z-10">Quero Economizar</span>
                    </button>
                    <p className="text-xs text-[#D51119] mt-3 font-bold uppercase tracking-wider">Orçamento rápido e gratuito</p>
                </div>
            </div>
        </section>
    );
}
