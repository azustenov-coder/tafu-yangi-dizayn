
import React from 'react';
import { Link } from 'react-router-dom';

const Extracurricular: React.FC = () => {
    const activities = [
        {
            title: 'Sport klublari',
            desc: "Futbol, voleybol, basketbol va shaxmat bo'yicha muntazam mashg'ulotlar va universitetlararo musobaqalar.",
            icon: 'sports_soccer',
            color: 'bg-orange-50 text-orange-600',
            path: '/sports-clubs'
        },
        {
            title: 'Madaniyat va san\'at',
            desc: "Musiqa, raqs va teatr to'garaklari. Universitet tadbirlari va bayram dasturlarida ishtirok etish imkoniyati.",
            icon: 'palette',
            color: 'bg-pink-50 text-pink-600',
            path: '/social-engagement'
        },
        {
            title: 'Zakovat intellektual klubi',
            desc: "Mantiqiy fikrlashni rivojlantiruvchi o'yinlar, turnirlar va intellektual bellashuvlar.",
            icon: 'psychology',
            color: 'bg-purple-50 text-purple-600',
            path: '/zakovat'
        },
        {
            title: 'Volontyorlik markazi',
            desc: "Ijtimoiy loyihalar, xayriya tadbirlari va jamoat ishlarida faol ishtirok etish.",
            icon: 'volunteer_activism',
            color: 'bg-red-50 text-red-600',
            path: '#'
        }
    ];

    return (
        <div className="py-8 bg-[#eff8ff] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-slate-800">Talabalarga</span>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-blue-600 font-bold">Darsdan tashqari faoliyat</span>
                </div>

                <div className="text-center mb-16">
                    <h1 className="text-4xl font-black text-slate-900 mb-6">Darsdan tashqari faoliyat</h1>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                        Universitet hayoti faqat darslardan iborat emas. Bizda o'z qobiliyatingizni namoyon etishingiz uchun barcha sharoitlar mavjud.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {activities.map((act, idx) => (
                        <Link key={idx} to={act.path} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex items-start gap-6 group no-underline">
                            <div className={`w-16 h-16 ${act.color} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                <span className="material-symbols-outlined text-3xl">{act.icon}</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{act.title}</h3>
                                <p className="text-slate-500 leading-relaxed font-medium text-sm">
                                    {act.desc}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-20 bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-black mb-6">Bizga qo'shiling!</h2>
                        <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg">
                            Siz ham universitet hayotini yanada qiziqarli qilishni xohlaysizmi? Unda hoziroq ariza topshiring!
                        </p>
                        <button className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all shadow-xl">
                            Ro'yxatdan o'tish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extracurricular;
