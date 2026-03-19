
import React from 'react';
import { Link } from 'react-router-dom';

const Achievements: React.FC = () => {
    const stats = [
        { label: "Xalqaro reyting", value: "TOP 1000", sub: "QS World Rankings (Target)", icon: "trending_up" },
        { label: "Ilmiy maqolalar", value: "500+", sub: "Scopus & Web of Science", icon: "menu_book" },
        { label: "Ixtirolar (Patent)", value: "45+", sub: "Intellectual Property", icon: "psychology" }
    ];

    const milestones = [
        {
            year: "2024",
            title: "Xalqaro Akkreditatsiya",
            desc: "Universitet ta'lim dasturlari xalqaro akkreditatsiyadan muvaffaqiyatli o'tdi va global tan olindi.",
            icon: "verified",
            category: "Ta'lim"
        },
        {
            year: "2023",
            title: "Eng yaxshi innovatsion OTM",
            desc: "O'zbekiston miqyosida yilning eng yaxshi innovatsion loyihalar markazi deb e'tirof etildi.",
            icon: "lightbulb",
            category: "Innovatsiya"
        },
        {
            year: "2022",
            title: "Smart Campus joriy etilishi",
            desc: "To'liq raqamlashgan universitet boshqaruv tizimi va 5G laboratoriyalari ishga tushirildi.",
            icon: "sensors",
            category: "Infratuzilma"
        }
    ];

    return (
        <div className="bg-[#eff8ff] min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-sm mb-16 font-medium">
                    <Link to="/" className="text-slate-400 hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <span className="text-slate-400">Fan va ilmiy faoliyat</span>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <span className="text-blue-600 font-bold">Yutuqlar</span>
                </div>

                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tight">
                        Muvaffaqiyatlar va <span className="text-blue-600">Yutuqlar</span>
                    </h1>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed italic">
                        "Kelajakni bugun yaratamiz" — Universitetimizning global miqyosdagi e'tirofi va ilmiy yutuqlari xronikasi.
                    </p>
                </div>

                {/* Main Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
                            </div>
                            <div className="text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
                            <div className="text-sm font-black text-blue-600 uppercase tracking-widest mb-1">{stat.label}</div>
                            <div className="text-xs text-slate-400 font-medium">{stat.sub}</div>
                        </div>
                    ))}
                </div>

                {/* Timeline Section */}
                <div className="relative mb-32">
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2 hidden md:block"></div>
                    
                    <div className="space-y-24 relative">
                        {milestones.map((item, idx) => (
                            <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                <div className="flex-1 w-full">
                                    <div className={`bg-white p-12 rounded-[4rem] shadow-sm border border-slate-100 relative group hover:shadow-2xl transition-all ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-[#eff8ff] z-10 hidden md:block ${idx % 2 === 0 ? '-right-[11px]' : '-left-[11px]'}`}></div>
                                        <div className="text-blue-600 font-black text-xs uppercase tracking-[0.2em] mb-4">{item.category}</div>
                                        <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">{item.title}</h3>
                                        <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-32 h-32 bg-slate-900 rounded-[2.5rem] flex flex-col items-center justify-center text-white shadow-2xl relative z-10">
                                    <div className="text-xs font-bold opacity-50 uppercase mb-1">Year</div>
                                    <div className="text-3xl font-black">{item.year}</div>
                                </div>
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-blue-600 rounded-[4rem] p-12 md:p-24 text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                        </svg>
                    </div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight uppercase tracking-tight">Birgalikda yangi marralarni zabt etamiz</h2>
                        <p className="text-blue-100 text-xl mb-12 font-medium">Bizning ilmiy kengashimizga qo'shiling yoki tadqiqotlarimizda ishtirok eting.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link to="/contact" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black hover:bg-slate-900 hover:text-white transition-all shadow-xl shadow-blue-900/20 active:scale-95">
                                Biz bilan bog'laning
                            </Link>
                            <Link to="/research" className="text-white border-2 border-white/30 hover:border-white px-10 py-5 rounded-2xl font-black transition-all">
                                Tadqiqotlar bilan tanishish
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
