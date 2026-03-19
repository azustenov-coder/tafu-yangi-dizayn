import React from 'react';
import { Link } from 'react-router-dom';

const Centers: React.FC = () => {
    const centers = [
        { title: 'Axborot texnologiyalari markazi', icon: 'computer', desc: 'Universitetning barcha IT infratuzilmasini boshqarish va rivojlantirish markazi.' },
        { title: 'Ilmiy-tadqiqot markazi', icon: 'science', desc: 'Olimlar va talabalarning ilmiy loyihalarini muvofiqlashtiruvchi asosiy markaz.' },
        { title: 'Xalqaro hamkorlik bo\'limi', icon: 'public', desc: 'Xorijiy universitetlar va xalqaro tashkilotlar bilan aloqalarni rivojlantirish.' },
        { title: 'Ma\'naviyat va ma\'rifat bo\'limi', icon: 'auto_awesome', desc: 'Talabalarning madaniy va ma\'naviy hordig\'ini tashkil etish.' },
    ];

    return (
        <div className="py-8 bg-[#eff8ff] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <Link to="/about" className="hover:text-blue-600 transition-colors">Universitet haqida</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <Link to="/infrastructure" className="hover:text-blue-600 transition-colors">Infratuzilma</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-blue-600 font-bold">Markazlar va bo'limlar</span>
                </div>

                <h1 className="text-4xl font-black text-slate-900 text-center mb-16">Markazlar va bo'limlar</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {centers.map((center, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <span className="material-symbols-outlined text-3xl">{center.icon}</span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">{center.title}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">{center.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Centers;
