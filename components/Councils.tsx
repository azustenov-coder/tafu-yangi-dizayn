import React from 'react';
import { Link } from 'react-router-dom';

const Councils: React.FC = () => {
    const councils = [
        { title: 'Universitet Ilmiy Kengashi', icon: 'gavel', desc: 'Universitetning strategik rivojlanish masalalari bo\'yicha oliy boshqaruv organi.' },
        { title: 'Vasiylik kengashi', icon: 'verified_user', desc: 'Universitetga homiylik va jamoatchilik nazoratini amalga oshiruvchi kengash.' },
        { title: 'Talabalar kengashi', icon: 'diversity_3', desc: 'Talabalar manfaatlarini himoya qilish va ijtimoiy tashabbuslarni qo\'llab-quvvatlash.' },
        { title: 'Ilmiy-uslubiy kengash', icon: 'auto_stories', desc: 'O\'quv jadvallari, dasturlar va metodik adabiyotlarni tasdiqlovchi organ.' },
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
                    <span className="text-blue-600 font-bold">Kengashlar</span>
                </div>

                <h1 className="text-4xl font-black text-slate-900 text-center mb-16">Kengashlar va jamoatchilik organlari</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {councils.map((council, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex gap-8 items-start">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">{council.icon}</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">{council.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{council.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Councils;
