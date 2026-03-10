"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MidCTASection() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 text-center max-w-4xl">

                <div className="mb-10">
                    <h2 className="text-xl md:text-2xl text-slate-400 font-medium tracking-widest uppercase mb-1">
                        Economize com
                    </h2>
                    <h3 className="text-4xl md:text-5xl text-slate-800 font-black uppercase">
                        Energia Solar
                    </h3>
                    <p className="text-slate-600 mt-4 text-lg">
                        Preencha o formulário abaixo e receba seu orçamento sob medida para sua residência.
                    </p>
                </div>

                <div className="max-w-xl mx-auto">
                    <form className="space-y-4">
                        <Input
                            placeholder="Nome"
                            className="bg-white border-slate-300 py-6 text-slate-800 focus-visible:ring-2 focus-visible:ring-[#D51119] rounded-sm"
                        />
                        <Input
                            type="email"
                            placeholder="E-mail principal"
                            className="bg-white border-slate-300 py-6 text-slate-800 focus-visible:ring-2 focus-visible:ring-[#D51119] rounded-sm"
                        />
                        <Input
                            type="tel"
                            placeholder="Celular / WhatsApp"
                            className="bg-white border-slate-300 py-6 text-slate-800 focus-visible:ring-2 focus-visible:ring-[#D51119] rounded-sm"
                        />
                        <Input
                            type="number"
                            placeholder="Valor da Conta de Luz"
                            className="bg-white border-slate-300 py-6 text-slate-800 focus-visible:ring-2 focus-visible:ring-[#D51119] rounded-sm"
                        />

                        <div className="pt-2">
                            <Button className="w-full py-7 text-lg font-black bg-[#D51119] hover:bg-[#b30e15] text-white rounded-sm uppercase tracking-wider shadow-xl hover:-translate-y-1 transition-transform border-b-4 border-[#800a0f]">
                                Quero Economizar
                            </Button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
}
