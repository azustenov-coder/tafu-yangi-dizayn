import React from 'react';
import { Link } from 'react-router-dom';

const ZakovatClub: React.FC = () => {
    const galleryImages = [
        '/zakovat/slide1.png',
        '/zakovat/slide2.png',
        '/zakovat/slide3.png',
        '/zakovat/tournament.png'
    ];

    const sections = [
        {
            title: 'Turnirlar va intellektual janglar',
            desc: "Har hafta universitetimizda 'Zakovat', 'Breyn-ring' va 'Shaxsiy o'yin' turnirlari o'tkaziladi. Bu yerda siz o'z bilimingizni sinovdan o'tkazishingiz va eng kuchli jamoalar bilan bellashishingiz mumkin.",
            image: '/zakovat/tournament.png',
            items: ['Haftalik Zakovat o\'yinlari', 'Fakultetlararo kubok', 'Breyn-ring turniri', 'Intellektual marafonlar']
        },
        {
            title: 'Jamoaviy tayyorgarlik va treninglar',
            desc: "Bizning klubimizda nafaqat o'yinlar, balki mahorat darslari ham o'tkaziladi. Kuchli ekspertlar jamoalar bilan ishlash, mantiqiy savollarni tahlil qilish va tezkor fikrlash bo'yicha o'z tajribalari bilan o'rtoqlashadilar.",
            image: '/zakovat/teamwork.png',
            items: ['Mantiqiy darslar', 'Savollar tahlili', 'Jamoaviy psixologiya', 'Ekspertlar bilan uchrashuv']
        },
        {
            title: 'Yutuqlar va g\'oliblik nashidasi',
            desc: "TAFU Zakovat jamoasi shahar va respublika miqyosidagi turnirlarda munosib ishtirok etib kelmoqda. Bizning maqsadimiz - intellektual yoshlar jamiyatini shakllantirish va yuksak natijalarga erishish.",
            image: '/zakovat/awards.png',
            items: ['Respublika bosqichi g\'oliblari', 'Oltin boyqush sohiblari', 'Eng yaxshi bilimdon unvoni', 'Diplom va qimmatbaho sovg\'alar']
        }
    ];

    return (
        <div className="bg-white min-h-screen overflow-hidden text-slate-900">
            <style>
                {`
                    @keyframes slideScroll {
                        0%, 20% { transform: translateX(0); }
                        25%, 45% { transform: translateX(-100%); }
                        50%, 70% { transform: translateX(-200%); }
                        75%, 95% { transform: translateX(-300%); }
                        100% { transform: translateX(0); }
                    }
                    .animate-slide-pause {
                        display: flex;
                        animation: slideScroll 16s cubic-bezier(0.85, 0, 0.15, 1) infinite;
                    }
                `}
            </style>

            {/* Header Section */}
            <div className="bg-[#eff8ff] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 font-medium">
                        <Link to="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <Link to="/extracurricular" className="hover:text-blue-600 transition-colors">Darsdan tashqari faoliyat</Link>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-blue-600 font-bold">Zakovat intellektual klubi</span>
                    </div>

                    <div className="text-left">
                        <h1 className="text-6xl font-black text-slate-900 mb-6 uppercase tracking-tight">Zakovat klubi</h1>
                        <p className="text-slate-500 text-xl max-w-2xl font-medium">
                            Bilim va mantiq olamiga xush kelibsiz. Eng kuchli bilimdonlar safida bo'ling!
                        </p>
                    </div>
                </div>
            </div>

            {/* Hero Banner with Circuit/Brain Theme */}
            <div className="h-[450px] w-full relative overflow-hidden">
                <img 
                    src="/zakovat/hero.png" 
                    className="w-full h-full object-cover"
                    alt="Zakovat Hero"
                />
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                        ZAKOVAT TAFU
                    </h2>
                    <div className="h-1.5 w-32 bg-blue-600 rounded-full mb-6"></div>
                    <p className="text-white/80 text-2xl font-bold italic tracking-wide uppercase">
                        Mantiq, Bilim va Tezkorlik
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Intro */}
                <div className="max-w-4xl mx-auto text-center mb-32">
                    <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-wide">Intellektual salohiyat maskani</h2>
                    <p className="text-slate-600 text-xl leading-relaxed font-medium italic border-l-4 border-blue-600 pl-8 text-left">
                        Bizning klubimiz talabalarning mantiqiy fikrlashini charxlash, ularning intellektual darajasini oshirish va jamoada ishlash qobiliyatini rivojlantirishga xizmat qiladi. 'Zakovat' - bu shunchaki o'yin emas, bu hayot tarzi.
                    </p>
                </div>

                {/* Horizontal Auto-Sliding Gallery */}
                <div className="mb-40">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">Klub hayotidan lavhalar</h2>
                        <div className="flex gap-3">
                            <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                            <div className="w-4 h-4 rounded-full bg-slate-200"></div>
                            <div className="w-4 h-4 rounded-full bg-slate-200"></div>
                        </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-slate-100 aspect-[21/9] border border-slate-200">
                        <div className="animate-slide-pause h-full">
                            {galleryImages.map((img, i) => (
                                <div key={i} className="min-w-full h-full flex-shrink-0 relative">
                                    <img src={img} className="w-full h-full object-cover" alt={`Slide ${i}`} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Sections */}
                <div className="space-y-48">
                    {sections.map((section, idx) => (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-20 group`}>
                            <div className="flex-1 w-full relative">
                                <div className="absolute -inset-6 bg-blue-600/5 rounded-[3.5rem] blur-3xl group-hover:bg-blue-600/10 transition-all duration-500"></div>
                                <div className="relative overflow-hidden rounded-[3rem] shadow-2xl aspect-[4/3] border border-slate-100">
                                    <img 
                                        src={section.image} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                                        alt={section.title} 
                                    />
                                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-500"></div>
                                </div>
                            </div>
                            <div className="flex-1 space-y-10">
                                <div className="inline-block px-6 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-black uppercase tracking-widest mb-2">
                                    {idx === 0 ? 'Musobaqa' : idx === 1 ? 'Tayyorgarlik' : 'Natija'}
                                </div>
                                <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                                    {section.title}
                                </h3>
                                <p className="text-slate-500 text-xl leading-relaxed font-medium">
                                    {section.desc}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {section.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 text-slate-800 font-bold bg-white p-5 rounded-2xl border-2 border-slate-50 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group/item">
                                            <span className="material-symbols-outlined text-blue-600 text-2xl group-hover/item:scale-125 transition-transform">emoji_objects</span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action with Brain Theme */}
                <div className="mt-56 bg-slate-900 rounded-[5rem] p-20 text-center text-white relative overflow-hidden group border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
                    <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full group-hover:bg-blue-600/30 transition-all duration-700"></div>
                    <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full group-hover:bg-cyan-600/20 transition-all duration-700"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-600 rounded-3xl mb-10 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                            <span className="material-symbols-outlined text-5xl">psychology</span>
                        </div>
                        <h2 className="text-6xl font-black mb-8 uppercase tracking-tight leading-none">Bilimingizni sinab ko'ring!</h2>
                        <p className="text-white/70 mb-14 text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
                            Sizda mantiqiy fikrlash va keng dunyoqarash bormi? Jamoamizga qo'shiling va haqiqiy bilimdon ekanligingizni isbotlang!
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <button className="bg-blue-600 text-white px-16 py-6 rounded-3xl font-black text-xl hover:bg-white hover:text-blue-600 transition-all shadow-2xl hover:-translate-y-2 active:scale-95 uppercase tracking-[0.2em]">
                                A'zo bo'lish
                            </button>
                            <div className="flex items-center gap-5 text-white/50 font-bold px-10 py-6 border-2 border-white/5 rounded-3xl backdrop-blur-md">
                                <span className="material-symbols-outlined text-3xl">mail</span>
                                zakovat@tafu.uz
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ZakovatClub;
