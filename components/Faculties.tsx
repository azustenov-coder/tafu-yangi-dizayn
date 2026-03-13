
import React from 'react';
import { Link } from 'react-router-dom';

const Faculties: React.FC = () => {
    const faculties = [
        {
            id: '1',
            title: 'Pedagogika va psixologiya',
            desc: "Zamonaviy ta'lim metodikalari, shaxsiy rivojlanish va texnika konsalting yuqori malakali kadrlarni tayyorlash maskani.",
            icon: 'school',
            color: 'bg-indigo-50 text-indigo-600'
        },
        {
            id: '2',
            title: 'Iqtisodiyot',
            desc: "Global moliya bozori, iqtisodiyot va strate menejment boyicha fundamental bilim va amaliy ko'rinishda shakllantiriladi.",
            icon: 'trending_up',
            color: 'bg-emerald-50 text-emerald-600'
        },
        {
            id: '3',
            title: 'Tarix va filologiya',
            desc: "Madaniy meros tadqiq etish, tilshunoslik va adabiyotshunoslikning fundamental masalalarini o'rganuvchi fakultet.",
            icon: 'menu_book',
            color: 'bg-amber-50 text-amber-600'
        },
        {
            id: '4',
            title: 'Axborot texnologiyalari',
            desc: "Dasturiy injiniring, kiberxavfsizlik va sun'iy intellekt yig'ish innovatsion yechimlar hamda hisoblash transformatsiya markazi.",
            icon: 'memory',
            color: 'bg-blue-50 text-blue-600'
        }
    ];

    return (
        <div className="py-8 bg-[#eff8ff] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <Link to="/faculties" className="hover:text-blue-600 transition-colors">Universitet haqida</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-blue-600 font-bold">Fakultet va kafedralar</span>
                </div>

                <h1 className="text-4xl font-black text-slate-900 text-center mb-16">
                    Universitet fakultetlari
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {faculties.map((faculty, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-xl transition-all duration-300 group">
                            <div className="p-8 flex-grow">
                                <div className={`w-12 h-12 ${faculty.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <span className="material-symbols-outlined text-2xl">{faculty.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{faculty.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {faculty.desc}
                                </p>
                            </div>
                            <div className="px-8 py-5 border-t border-slate-50 mt-auto">
                                <Link to={`/program/${faculty.id}`} className="text-blue-600 text-sm font-bold flex items-center gap-2 group/link">
                                    Batafsil ma'lumot
                                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Faculties;
