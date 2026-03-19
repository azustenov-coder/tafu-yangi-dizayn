import React from 'react';
import { Link } from 'react-router-dom';

const CareerCenter: React.FC = () => {
    return (
        <div className="bg-[#eff8ff] min-h-screen pt-8 underline-none">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-sm mb-12 font-medium">
                    <Link to="/" className="text-slate-400 hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <Link to="/partnerships" className="text-slate-800 hover:text-blue-600 transition-colors">Hamkorlik</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <span className="text-blue-600 font-bold">Karyera markazi</span>
                </div>

                {/* Header Content */}
                <div className="max-w-4xl mb-24">
                    <span className="inline-block bg-cyan-100 text-cyan-700 text-[10px] font-black uppercase tracking-[0.4em] px-4 py-2 rounded-full mb-6">
                        Muvaffaqiyatga Birinchi Qadam
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                        Kelajak Karyerangizni <span className="text-blue-600">Shu Yerda</span> Boshlang
                    </h1>
                    <p className="text-xl text-slate-500 leading-relaxed font-medium">
                        Karyera markazi talabalarga ish topish, rezyume yozish va suhbatdan o'tish ko'nikmalarini egallashda yordam beradi. Biz siz va ish beruvchilar o'rtasidagi ko'prik vazifasini o'taymiz.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                    {[
                        { title: 'Rezyume tayyorlash', desc: 'Sizni ishga taklif qilishlariga yordam beruvchi professional rezyume yaratish bo\'yicha maslahatlar.', icon: 'description' },
                        { title: 'Suhbatga tayyorlov', desc: 'Ish beruvchilar bilan suhbatdan muvaffaqiyatli o\'tish sirlari va treninglar.', icon: 'forum' },
                        { title: 'Vakansiyalar bazasi', desc: 'Hamkorlarimiz tomonidan taqdim etiladigan eng oxirgi va ishonchli ish o\'rinlari.', icon: 'search' },
                        { title: 'Karyera kuni', desc: 'Yirik kompaniyalar rahbarlari bilan bevosita uchrashuv va muloqot tadbirlari.', icon: 'event' }
                    ].map((service) => (
                        <div key={service.title} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group hover:-translate-y-2">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">{service.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Info Block */}
                <div className="bg-[#1a3d6b] rounded-[4rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 mb-32 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative z-10 max-w-xl">
                        <h2 className="text-4xl font-black mb-8 leading-tight">Yirik Kompaniyalarda Amaliyot O'tash Imkoniyati</h2>
                        <p className="text-blue-100 text-lg mb-10 leading-relaxed font-medium">
                            Bizning bitiruvchilarimizning 85% i o'qishni tamomlamasdanoq o'z yo'nalishlari bo'yicha ishga joylashishadi.
                        </p>
                        <button className="bg-white text-[#1a3d6b] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-50 transition-all flex items-center gap-3">
                            Vakansiyalarni ko'rish
                            <span className="material-symbols-outlined text-xl">navigate_next</span>
                        </button>
                    </div>
                    <div className="relative z-10 grid grid-cols-2 gap-4">
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 text-center">
                            <div className="text-4xl font-black mb-2">500+</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-blue-200">Vakansiyalar</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 text-center">
                            <div className="text-4xl font-black mb-2">200+</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-blue-200">Kompaniyalar</div>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="text-center pb-32">
                    <h2 className="text-4xl font-black text-slate-900 mb-8">Savollaringiz bormi?</h2>
                    <p className="text-slate-500 mb-12 max-w-xl mx-auto font-medium">Karyera markazi maslahatchilari sizga doimo yordam berishga tayyor. Hoziroq bog'laning!</p>
                    <div className="flex justify-center gap-6">
                        <a href="tel:+998711234567" className="flex items-center gap-3 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <span className="material-symbols-outlined text-blue-600">call</span>
                            <span className="font-bold text-slate-900">+998 71 123 45 67</span>
                        </a>
                        <a href="mailto:career@tasu.uz" className="flex items-center gap-3 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <span className="material-symbols-outlined text-blue-600">alternate_email</span>
                            <span className="font-bold text-slate-900">career@tasu.uz</span>
                        </a>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default CareerCenter;
