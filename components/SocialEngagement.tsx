import React from 'react';
import { Link } from 'react-router-dom';

const SocialEngagement: React.FC = () => {
    const galleryImages = [
        '/culture/slide1.png',
        '/culture/slide2.png',
        '/culture/slide3.png',
        '/culture/events.png'
    ];

    const sections = [
        {
            title: 'Madaniy tadbirlar',
            desc: "Universitetimizda 'Talant-shou', 'Madaniyatlar festivali' va turli xil konsert dasturlari muntazam ravishda o'tkazilib turiladi. Ushbu tadbirlar talabalarning ijodiy qobiliyatlarini namoyon etishlari uchun ajoyib imkoniyatdir.",
            image: '/culture/events.png',
            items: ['Talant-shou', 'Milliy qadriyatlar kuni', 'Vatanparvarlik qo\'shiqlari festivali', 'She\'rxonlik kechalari']
        },
        {
            title: 'Qiziqishlar bo\'yicha to\'garaklar',
            desc: "40 dan ortiq talabalar klublari va to'garaklari faoliyat ko'rsatmoqda. Siz o'z qiziqishingizga mos klubni topishingiz yoki yangisini yaratishingiz mumkin.",
            image: '/culture/clubs.png',
            items: ['Musiqa va ashula', 'Raqs va xoreografiya', 'Teatr studiyasi', 'Tasviriy san\'at', 'Foto va video san\'ati']
        },
        {
            title: 'Volontyorlik',
            desc: "Biz jamiyat rivojiga hissa qo'shishni va ijtimoiy mas'uliyatni qadrlaymiz. Talabalarimiz turli xayriya aktsiyalari va ekologik loyihalarda faol ishtirok etishadi.",
            image: '/culture/social.png',
            items: ['Xayriya marafonlari', 'Yashil makon loyihasi', 'Bolalar uylariga tashrif', 'Keksalar holidan xabar olish']
        }
    ];

    return (
        <div className="bg-white min-h-screen overflow-hidden">
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
                        <span className="text-blue-600 font-bold">Madaniyat va san'at</span>
                    </div>

                    <div className="text-left">
                        <h1 className="text-6xl font-black text-slate-900 mb-6 uppercase tracking-tight">Madaniyat va san'at</h1>
                        <p className="text-slate-500 text-xl max-w-2xl font-medium">
                            Ijodiy salohiyatingizni namoyon eting va universitetimizning madaniy hayotida faol ishtirok eting.
                        </p>
                    </div>
                </div>
            </div>

            {/* Hero Banner */}
            <div className="h-[400px] w-full relative overflow-hidden">
                <img 
                    src="/culture/hero.png" 
                    className="w-full h-full object-cover"
                    alt="Culture Hero"
                />
                <div className="absolute inset-0 bg-blue-900/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-widest text-center px-4 drop-shadow-2xl">
                        KREATIV MUHIT VA IJOD
                    </h2>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Intro */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-wide">Madaniyat va ijod markazi</h2>
                    <p className="text-slate-600 text-xl leading-relaxed font-medium italic border-l-4 border-blue-600 pl-8 text-left">
                        TAFU Madaniyat va ijod markazi talabalarning darsdan bo'sh vaqtlarini mazmunli o'tkazish, ularning madaniy saviyasini oshirish va yashirin talantlarini yuzaga chiqarish maqsadida tashkil etilgan.
                    </p>
                </div>

                {/* Horizontal Auto-Sliding Gallery */}
                <div className="mb-32">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Tadbirlar galereyasi</h2>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                            <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                            <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                        </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-[3rem] shadow-2xl bg-slate-100 aspect-[21/9]">
                        <div className="animate-slide-pause h-full">
                            {galleryImages.map((img, i) => (
                                <div key={i} className="min-w-full h-full flex-shrink-0">
                                    <img src={img} className="w-full h-full object-cover" alt={`Slide ${i}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Sections */}
                <div className="space-y-40">
                    {sections.map((section, idx) => (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 group`}>
                            <div className="flex-1 w-full relative">
                                <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] blur-2xl group-hover:bg-blue-600/10 transition-colors"></div>
                                <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[4/3]">
                                    <img 
                                        src={section.image} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                        alt={section.title} 
                                    />
                                </div>
                            </div>
                            <div className="flex-1 space-y-8">
                                <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                                    {section.title}
                                </h3>
                                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                    {section.desc}
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-bold bg-slate-50 p-4 rounded-2xl border border-slate-100 group-hover:border-blue-100 transition-all">
                                            <span className="material-symbols-outlined text-blue-600 text-xl">check_circle</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-48 bg-slate-900 rounded-[4rem] p-16 text-center text-white relative overflow-hidden group border border-white/5">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full group-hover:bg-blue-600/30 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/10 blur-[100px] rounded-full group-hover:bg-cyan-600/20 transition-colors"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-5xl font-black mb-8 uppercase tracking-tight">Bizga qo'shiling!</h2>
                        <p className="text-white/70 mb-12 text-xl font-medium leading-relaxed">
                            Sizda yangi g'oya yoki loyiha bormi? Yoki mavjud klublarimizga a'zo bo'lmoqchimisiz? Biz sizni kutib qolamiz!
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black hover:bg-white hover:text-blue-600 transition-all shadow-2xl hover:-translate-y-1 active:scale-95 uppercase tracking-widest">
                                Ro'yxatdan o'tish
                            </button>
                            <div className="flex items-center gap-4 text-white/60 font-bold px-8 py-5 border border-white/10 rounded-2xl">
                                <span className="material-symbols-outlined">call</span>
                                +998 71 200 00 00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialEngagement;
