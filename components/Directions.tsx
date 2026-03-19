
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Directions: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Bakalavriat');

    const directions = [
        {
            id: '1',
            title: 'Pedagogika va psixologiya',
            desc: "Zamonaviy ta'lim metodikalari, shaxsiy va texnik yordam ko'rsatish yuqori malakali pedagoglar tayyorlash.",
            count: "6 yo'nalish",
            icon: 'school'
        },
        {
            id: '2',
            title: 'Iqtisodiyot',
            desc: "Global moliya bozori, iqtisodiy iqtisodiyot va strategik menejment bo'yicha fundamental bilimlar...",
            count: "8 yo'nalish",
            icon: 'trending_up'
        },
        {
            id: '3',
            title: 'Tarix va filologiya',
            desc: "Madaniy meros tadqiq etish, tilshunoslik va adabiyotshunoslikdan foydalanish masalalarini o'rganish...",
            count: "4 yo'nalish",
            icon: 'menu_book'
        },
        {
            id: '4',
            title: 'Axborot texnologiyalari',
            desc: "Dasturiy injiniring, kiberxavfsizlik va sun'iy intellektni yig'ishda novatsion echimlar ...",
            count: "4 yo'nalish",
            icon: 'memory'
        }
    ];

    return (
        <div className="py-20 bg-[#eff8ff] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
                    <Link to="/" className="hover:text-blue-600 transition-colors text-slate-400">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-sm text-slate-300">chevron_right</span>
                    <span className="text-slate-800">Abituriyentlarga</span>
                    <span className="material-symbols-outlined text-sm text-slate-300">chevron_right</span>
                    <span className="text-blue-600 font-bold">Ta'lim yo'nalishlari</span>
                </div>

                {/* Educational Directions */}
                <div className="mb-32">
                    <h2 className="text-3xl font-black text-[#1a3d6b] mb-12">Ta'lim yo'nalishlari</h2>

                    <div className="flex flex-wrap gap-8 border-b border-slate-200/60 mb-12 overflow-x-auto pb-0.5">
                        {['Bakalavriat', 'Magistratura'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-5 font-bold text-sm transition-all relative ${activeTab === tab ? 'text-[#1a3d6b]' : 'text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full"></div>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {directions.map((dir, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-50 flex flex-col hover:shadow-xl transition-all duration-500 group">
                                <div className="w-14 h-14 bg-blue-50/80 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-symbols-outlined text-blue-600 text-3xl">{dir.icon}</span>
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 mb-5 leading-tight">{dir.title}</h4>
                                <p className="text-slate-400 text-[15px] mb-12 flex-grow leading-relaxed font-medium">
                                    {dir.desc}
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-slate-300 text-[13px] font-bold">{dir.count}</span>
                                    <Link
                                        to={`/program/${dir.id}`}
                                        className="bg-blue-50 text-blue-600 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                    >
                                        Ko'rish
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Directions;
