import { ShieldCheck, Target, Users, Wrench, Award } from "lucide-react";

export default function TrustBar() {
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
            text: "Mais de 17.000 usuários atendidos"
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

    return (
        <section className="bg-[#D51119]/5 border-y border-slate-200 py-6">
            <div className="container mx-auto px-4">
                {/* Mobile: horizontal scroll. Desktop: flex wrap / grid */}
                <div className="flex overflow-x-auto pb-4 md:pb-0 hide-scrollbar gap-8 md:gap-4 md:flex-wrap md:justify-center lg:justify-between items-center whitespace-nowrap">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <div className="p-2 bg-white rounded-full shadow-sm border border-slate-100">
                                {item.icon}
                            </div>
                            <span className="text-sm md:text-base font-medium text-slate-700">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
