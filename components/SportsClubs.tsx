
import React from 'react';
import { Link } from 'react-router-dom';

const SportsClubs: React.FC = () => {
    const sports = [
        { name: 'Voleybol', icon: 'volleyball', color: 'bg-blue-900', pseudo: 'VOLEYBOL' },
        { name: 'Badminton', icon: 'badminton', color: 'bg-orange-500', pseudo: 'BADMINTON' },
        { name: 'Fitnes', icon: 'fitness_center', color: 'bg-emerald-500', pseudo: 'FITNESS' },
        { name: 'Stol tennisi', icon: 'table_tennis', color: 'bg-blue-600', pseudo: 'TENNIS' },
        { name: 'Basketbol', icon: 'sports_basketball', color: 'bg-blue-800', pseudo: 'BASKETBAL' },
        { name: 'Trenajyor zali', icon: 'exercise', color: 'bg-green-600', pseudo: 'GYM' },
        { name: 'Mini-futbol', icon: 'sports_soccer', color: 'bg-amber-900', pseudo: 'FOOTBALL' },
        { name: 'Kurash', icon: 'sports_kabaddi', color: 'bg-slate-700', pseudo: 'KURASH' },
        { name: 'Shaxmat', icon: 'chess', color: 'bg-red-700', pseudo: 'CHESS' }
    ];

    return (
        <div className="bg-white min-h-screen">
            <style>
                {`
                .sports-card::before, .sports-card::after {
                    display: none !important;
                    content: none !important;
                }
                `}
            </style>
            
            <div className="bg-[#eff8ff] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 font-medium">
                        <Link to="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <Link to="/extracurricular" className="hover:text-blue-600 transition-colors">Darsdan tashqari faoliyat</Link>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-blue-600 font-bold">Sport klublari</span>
                    </div>

                    <h1 className="text-6xl font-black text-slate-900 mb-6 uppercase tracking-tight">Sport klublari</h1>
                    <p className="text-slate-500 text-xl max-w-2xl font-medium">
                        Universitetimizda sog'lom turmush tarzini shakllantirish va talabalar o'rtasida sportni ommalashtirish bizning ustuvor vazifamizdir.
                    </p>
                </div>
            </div>

            {/* Image Banner between header and content */}
            <div className="h-[300px] w-full relative overflow-hidden">
                <img 
                    src="/sports/hero.png" 
                    className="w-full h-full object-cover"
                    alt="Sports Banner"
                />
                <div className="absolute inset-0 bg-blue-900/20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Intro Section */}
                <div className="max-w-3xl mx-auto text-center mb-28">
                    <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-wide leading-tight">
                        TAFU SPORTIGA XUSH KELIBSIZ
                    </h2>
                    <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium italic border-l-4 border-blue-600 pl-8 text-left max-w-2xl mx-auto">
                        <p>
                            Universitetimizda sport faqat jismoniy tarbiya emas, balki talabalar hayotining muhim qismidir. Biz har bir talabaning salomatligi va jismoniy rivojlanishini qo'llab-quvvatlaymiz.
                        </p>
                    </div>
                </div>

                {/* Sports Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {sports.map((sport, idx) => (
                        <div key={idx} className={`${sport.color} p-10 rounded-[2.5rem] flex items-center gap-6 shadow-2xl hover:scale-[1.05] transition-all duration-500 cursor-pointer group relative overflow-hidden sports-card border border-white/10`}>
                            <div className="w-20 h-20 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 border border-white/20 relative z-20 group-hover:bg-white/25 transition-colors overflow-hidden">
                                <span className="material-symbols-outlined text-white text-5xl font-light scale-110 select-none pointer-events-none flex items-center justify-center w-full h-full" style={{ fontSize: '48px', lineHeight: '1' }}>
                                    {sport.icon}
                                </span>
                            </div>
                            <span className="text-white text-2xl font-black tracking-wide uppercase relative z-10 drop-shadow-lg">
                                {sport.name}
                            </span>
                            {/* Controlled decorative watermark */}
                            <div className="absolute -bottom-4 -right-4 text-white/10 text-7xl font-black italic tracking-tighter select-none pointer-events-none uppercase transition-opacity group-hover:opacity-20 z-0">
                                {sport.pseudo}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Feature Sections */}
                <div className="space-y-32">
                    {/* Section 1: Sports Activities */}
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Sport faoliyati</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                                Bizning sport klublarimiz nafaqat shug'ullanish joyi, balki do'stlar orttirish va jamoaviy ruhni shakllantirish maskanidir. Har yili universitetimizda turli fakultetlararo va universitetlararo musobaqalar o'tkaziladi.
                            </p>
                            <ul className="space-y-4">
                                {['Muntazam mashg\'ulotlar', 'Professional murabbiylar', 'Yillik turnirlar'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                                        <span className="material-symbols-outlined text-blue-600">check_circle</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl h-[400px]">
                            <img 
                                src="/sports/activities.png" 
                                className="w-full h-full object-cover"
                                alt="Sports Activities"
                            />
                        </div>
                    </div>

                    {/* Section 2: Facilities */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Zamonaviy sharoitlar</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                                Bizning sport majmuamiz eng so'nggi rusumdagi trenajyorlar va jihozlar bilan ta'minlangan. Talabalarimiz darsdan so'ng bo'sh vaqtlarini unumli va sog'lom o'tkazishlari uchun barcha qulayliklar yaratilgan.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: 'fitness_center', label: 'E-Gym' },
                                    { icon: 'shower', label: 'Dushxona' },
                                    { icon: 'medical_services', label: 'Tibbiy nuqta' },
                                    { icon: 'lock', label: 'Kiyim almashtirish' }
                                ].map((item, i) => (
                                    <div key={i} className="bg-slate-50 p-4 rounded-xl flex items-center gap-3">
                                        <span className="material-symbols-outlined text-blue-600">{item.icon}</span>
                                        <span className="font-bold text-slate-900">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl h-[400px]">
                            <img 
                                src="/sports/gym.png" 
                                className="w-full h-full object-cover"
                                alt="Fitness Center"
                            />
                        </div>
                    </div>
                </div>

                {/* Achievements Section */}
                <div className="mt-32 pt-20 border-t border-slate-100 text-center">
                    <h2 className="text-4xl font-black text-slate-900 mb-12 uppercase tracking-wide">
                        BIZNING YUTUQLARIMIZ
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { year: '2024', text: 'Universitetlararo futbol chempionati g\'olibi' },
                            { year: '2023', text: 'Voleybol bo\'yicha shahar birinchiligida 2-o\'rin' },
                            { year: '2024', text: 'Yilning eng faol sport universiteti nominatsiyasi' }
                        ].map((ach, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <span className="text-blue-600 text-4xl font-black block mb-4 italic">{ach.year}</span>
                                <p className="text-slate-700 font-bold leading-relaxed">{ach.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-900 py-20 text-center text-white mt-20">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-black mb-8 uppercase tracking-tight">Sog'lom hayot sari qadam qo'ying!</h2>
                    <p className="text-blue-100 text-xl mb-10 font-medium opacity-80">
                        Siz ham bizning sport jamoamizning bir qismiga aylanishingiz mumkin.
                    </p>
                    <button className="bg-blue-500 text-white px-12 py-5 rounded-full font-black text-lg hover:bg-blue-400 transition-all shadow-xl hover:-translate-y-1">
                        AZO BO'LISH
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SportsClubs;
