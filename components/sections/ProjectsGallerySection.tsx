"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

export default function ProjectsGallerySection() {
    const images = [
        { src: "/portfolio/f88c44_00a5185617d44dcbbaebd4ea017ad7aaf003.avif", alt: "Instalação em telhado cerâmico" },
        { src: "/portfolio/f88c44_2438b3dbd2234db287287157717be0f7~mv2.avif", alt: "Inversores Inntag" },
        { src: "/portfolio/f88c44_4184778ccaf3490697491f7459a6a4a5~mv2.avif", alt: "Detalhe da fixação dos painéis" },
        { src: "/portfolio/f88c44_ab93b8653a0f43e98fa6a253d8249bcc~mv2.avif", alt: "Casa de alto padrão com energia solar" },
        { src: "/portfolio/f88c44_5e91cba94e524fc386f02c8c5afdb7ae~mv2.avif", alt: "Painéis solares ao pôr do sol" },
        { src: "/portfolio/f88c44_df600b3c082140e9bee09acca63427ec~mv2.avif", alt: "Equipe técnica durante instalação" },
        { src: "/portfolio/f88c44_4327fc0122e74205b94d6c6e76ff044e~mv2 (1).png", alt: "Estrutura fotovoltaica" },
        { src: "/portfolio/f88c44_7b596169b5e8464a9ff1338faea94e13~mv2.png", alt: "Instalação rápida e limpa" },
        { src: "/portfolio/f88c44_8e90452fda0f45bc9a7029d99bfb4fd4~mv2 (1).avif", alt: "Painéis de alta performance" },
    ];

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="relative py-24 overflow-hidden border-t-8 border-[#D51119]">
            {/* Background Image Setup */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/placas_solares.jpg"
                    alt="Energia solar fundo"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#3E2723]/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Upward pointing triangle (divider from white section above) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[30px] border-t-white z-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-xl md:text-2xl text-slate-300 font-medium tracking-widest uppercase mb-1">
                        Conheça Nossos
                    </h2>
                    <h3 className="text-4xl md:text-5xl text-[#D51119] font-black uppercase" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                        Projetos
                    </h3>
                    <p className="text-slate-200 mt-4 text-lg">
                        Clique nas imagens para ampliar.
                    </p>
                </div>
            </div>

            {/* Gallery Layout (Mobile: Horizontal Scroll, Desktop: Grid) */}
            <div className="relative z-10 w-full mb-16 px-4 max-w-7xl mx-auto overflow-x-auto hide-scrollbar">
                <div className="flex w-max md:w-full md:grid md:grid-cols-3 gap-4 mx-auto pb-4 md:pb-0 hide-scrollbar snap-x snap-mandatory">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => setSelectedImage(img.src)}
                            className="relative w-[85vw] md:w-full h-[60vw] md:h-64 lg:h-72 rounded-sm overflow-hidden group cursor-pointer shadow-xl border border-white/10 shrink-0 snap-center"
                        >
                            <div className="absolute inset-0 bg-slate-900 flex items-center justify-center -z-10">
                                <span className="text-slate-600">Carregando...</span>
                            </div>
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 font-bold uppercase tracking-widest transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">Ampliar</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center">
                    <button
                        onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-12 py-5 bg-[#333333] hover:bg-[#222222] text-white font-black text-lg uppercase rounded-sm shadow-2xl transition-all border-b-4 border-[#9a0c12] hover:-translate-y-1 relative overflow-hidden group inline-block cursor-pointer"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                        <span className="relative z-10">Quero Economizar</span>
                    </button>
                    <p className="text-xs text-[#D51119] mt-3 font-bold uppercase tracking-wider">Fale com um especialista</p>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
                    >
                        <button
                            className="absolute top-6 right-6 text-white hover:text-[#D51119] transition-colors focus:outline-none"
                            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                        >
                            <X className="w-10 h-10" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-7xl max-h-[90vh] w-full h-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Projeto Ampliado"
                                fill
                                className="object-contain"
                                quality={100}
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
