
import React from 'react';
import { Link } from 'react-router-dom';

const ScientificPartners: React.FC = () => {
    const researchAreas = [
        {
            title: "Xalqaro Tadqiqot Markazlari",
            desc: "Dunyoning yetakchi ilmiy markazlari bilan qo'shma laboratoriyalar va tadqiqot loyihalari.",
            icon: "biotech",
            partners: [
                { name: "CERN - Research Network", country: "Shveytsariya", focus: "Yadro fizikasi", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Logo_CERN.svg/1200px-Logo_CERN.svg.png" },
                { name: "Max Planck Society", country: "Germaniya", focus: "Fundamental fanlar", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Max_Planck_Society_logo.svg/1200px-Max_Planck_Society_logo.svg.png" },
                { name: "RIKEN Japan", country: "Yaponiya", focus: "Yuqori texnologiyalar", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/RIKEN_Logo.svg/1200px-RIKEN_Logo.svg.png" }
            ]
        },
        {
            title: "Akademik Nashriyot Hamkorlar",
            desc: "Ilmiy maqolalarni nashr etish va xalqaro indeksatsiya tizimlarida ko'rinishni oshirish.",
            icon: "menu_book",
            partners: [
                { name: "Elsevier / Scopus", country: "Global", focus: "Ma'lumotlar bazasi", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Elsevier_logo.svg/1200px-Elsevier_logo.svg.png" },
                { name: "Springer Nature", country: "Global", focus: "Ilmiy jurnallar", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Springer_Nature_Logo.svg/1200px-Springer_Nature_Logo.svg.png" }
            ]
        }
    ];

    const stats = [
        { label: "Qo'shma laboratoriyalar", value: "12", icon: "science" },
        { label: "H-indeks (O'rtacha)", value: "24", icon: "trending_up" },
        { label: "Ilmiy Grantlar", value: "45+", icon: "military_tech" },
        { label: "Xalqaro Patentlar", value: "18", icon: "psychology" }
    ];

    return (
        <div className="bg-[#f0f4f8] min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-16 font-medium">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-base">chevron_right</span>
                    <span className="text-slate-500">Fan va ilmiy faoliyat</span>
                    <span className="material-symbols-outlined text-base">chevron_right</span>
                    <span className="text-blue-600 font-bold">Ilmiy hamkorlar</span>
                </div>

                {/* Header Section */}
                <div className="relative mb-24">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight uppercase">
                            Global <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Ilmiy</span> Hamkorlik
                        </h1>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed italic">
                            Universitetimiz jahon miqyosidagi ilmiy tadqiqot institutlari va akademik muassasalar bilan fundamental va amaliy fanlar sohasida hamkorlikni kengaytirmoqda.
                        </p>
                    </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl transition-all">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
                            </div>
                            <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                            <div className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Research Areas & Partners */}
                <div className="space-y-32 mb-32">
                    {researchAreas.map((area, idx) => (
                        <div key={idx}>
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
                                <div className="p-4 bg-slate-900 text-white rounded-[1.5rem] shadow-xl">
                                    <span className="material-symbols-outlined text-3xl">{area.icon}</span>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">{area.title}</h2>
                                    <p className="text-slate-500 font-medium">{area.desc}</p>
                                </div>
                                <div className="hidden lg:block h-[1px] bg-slate-200 flex-grow ml-8"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {area.partners.map((partner, pIdx) => (
                                    <div key={pIdx} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <span className="material-symbols-outlined text-6xl">verified</span>
                                        </div>
                                        <div className="h-20 mb-8 flex items-center justify-start">
                                            <img 
                                                src={partner.logo} 
                                                alt={partner.name} 
                                                className="max-h-full max-w-[180px] object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=f8fafc&color=1e3a8a&bold=true`;
                                                }}
                                            />
                                        </div>
                                        <h3 className="text-xl font-black text-slate-900 mb-2 leading-tight">{partner.name}</h3>
                                        <div className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-widest mb-4">
                                            <span className="material-symbols-outlined text-sm">location_on</span>
                                            {partner.country}
                                        </div>
                                        <div className="pt-6 border-t border-slate-50">
                                            <div className="text-[10px] font-bold text-slate-400 uppercase mb-2">Asosiy yo'nalish:</div>
                                            <div className="text-sm font-bold text-slate-700">{partner.focus}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Research Quote / CTA */}
                <div className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden text-center md:text-left">
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute w-[800px] h-[800px] bg-white rounded-full -top-1/2 -right-1/4 blur-3xl"></div>
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight uppercase tracking-tight">Ilmiy salohiyatni birgalikda yuksaltiramiz</h2>
                            <p className="text-blue-100 text-lg font-medium leading-relaxed italic border-l-4 border-blue-400 pl-8">
                                "Bizning maqsadimiz — universitetimizni global ilmiy-tadqiqot markazi darajasiga ko'tarish va iqtidorli yoshlar uchun jahon eshiklarini ochishdir."
                            </p>
                        </div>
                        <div className="shrink-0">
                            <Link to="/contact" className="bg-white text-blue-700 px-12 py-6 rounded-2xl font-black hover:bg-slate-900 hover:text-white transition-all shadow-2xl active:scale-95 block">
                                Bizga qo'shiling
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScientificPartners;
