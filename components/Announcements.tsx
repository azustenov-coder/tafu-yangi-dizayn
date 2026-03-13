import React from 'react';
import { Link } from 'react-router-dom';

const Announcements: React.FC = () => {
    const announcements = [
        {
            id: '1',
            title: "Tanlov e'lon qilindi",
            date: 'Seshanba',
            summary: "2025-yil 2-3 dekabr kunlari universitetda tanlov bo'lib o'tadi. Barcha qiziquvchilar taklif etiladi.",
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
            isFeatured: true
        },
        {
            id: '2',
            title: 'Universitetimiz xalqaro reytinglarda',
            date: 'Chorshanba',
            summary: "Toshkent Amaliy Fanlar Universiteti Nature Index bo'yicha O'zbekistondagi universitetlar orasida 5-o'rinni egalladi.",
            image: 'https://picsum.photos/seed/ann_2/600/400'
        },
        {
            id: '3',
            title: 'UTAS hamkorlikni rivojlanmoqda',
            date: '2025 M12 4, Payshanba',
            summary: "Toshkent Amaliy Fanlar Universiteti va xorijiy hamkorlar o'rtasida yangi memorandumlar imzolandi.",
            image: 'https://picsum.photos/seed/ann_3/600/400'
        },
        {
            id: '4',
            title: "Yangi kutubxona resurslari",
            date: 'Shanba',
            summary: "Elektron kutubxonamiz bazasi 1000 dan ortiq yangi ilmiy adabiyotlar bilan boyitildi.",
            image: 'https://picsum.photos/seed/ann_4/600/400'
        }
    ];

    return (
        <div className="bg-[#eff8ff] min-h-screen pt-8 pb-20">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-sm mb-12 font-medium">
                    <Link to="/" className="text-slate-400 hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <span className="text-blue-600 font-bold">Barcha elektronlar</span>
                </div>

                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">Oxirgi elektronlar</h1>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl">
                        Universitetning barcha muhim e'lonlari va oxirgi elektron xabarlari jamlangan sahifa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {announcements.map((item) => (
                        <div key={item.id} className={`bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group ${item.isFeatured ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                            <div className="flex flex-col h-full">
                                <div className="relative h-64 overflow-hidden bg-blue-900">
                                    <img src={item.image} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${item.isFeatured ? 'opacity-70' : 'opacity-90'}`} alt="" />
                                    {item.isFeatured && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                                            <h3 className="text-white text-4xl font-black uppercase tracking-[0.1em] border-2 border-white/30 p-6 backdrop-blur-sm">
                                                DIQQAT<br />TANLOV
                                            </h3>
                                        </div>
                                    )}
                                </div>
                                <div className="p-10 flex flex-col flex-grow">
                                    <div className="text-cyan-500 text-xs font-black uppercase tracking-widest mb-4">
                                        {item.date}
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-medium">
                                        {item.summary}
                                    </p>
                                    <div className="flex items-center text-blue-600 font-black text-xs uppercase tracking-widest group/link">
                                        Davomini o'qish
                                        <span className="material-symbols-outlined ml-2 text-lg group-hover/link:translate-x-2 transition-transform">east</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Announcements;
