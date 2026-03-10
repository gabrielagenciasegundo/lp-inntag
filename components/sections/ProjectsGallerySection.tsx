"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectsGallerySection() {
    const images = [
        { src: "/portfolio/f88c44_00a5185617d44dcbbaebd4ea017ad7aaf003.avif", alt: "Instalação em telhado cerâmico" },
        { src: "/portfolio/f88c44_2438b3dbd2234db287287157717be0f7~mv2.avif", alt: "Inversores Inntag" },
        { src: "/portfolio/f88c44_4184778ccaf3490697491f7459a6a4a5~mv2.avif", alt: "Detalhe da fixação dos painéis" },
        { src: "/portfolio/f88c44_ab93b8653a0f43e98fa6a253d8249bcc~mv2.avif", alt: "Casa de alto padrão com energia solar" },
        { src: "/portfolio/f88c44_5e91cba94e524fc386f02c8c5afdb7ae~mv2.avif", alt: "Painéis solares ao pôr do sol" },
        { src: "/portfolio/f88c44_df600b3c082140e9bee09acca63427ec~mv2.avif", alt: "Equipe técnica durante instalação" },
    ];

    return (
        <section className="relative py-24 overflow-hidden mt-12 border-t-4 border-[#D51119]">
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
                        Veja as nossas instalações
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative rounded overflow-hidden aspect-[4/3] group shadow-lg border-2 border-white/10`}
                        >
                            <div className="absolute inset-0 bg-slate-800 flex items-center justify-center -z-10">
                                <span className="text-slate-500">Foto {i + 1}</span>
                            </div>
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-10 py-5 bg-[#333333] hover:bg-[#444444] text-white font-bold text-lg uppercase rounded-sm shadow-2xl transition-transform border-b-4 border-[#1a1a1a] hover:-translate-y-1">
                        Quero Economizar
                    </button>
                    <p className="text-xs text-[#D51119] mt-3 font-bold uppercase tracking-wider">Fale com um especialista</p>
                </div>
            </div>
        </section>
    );
}
