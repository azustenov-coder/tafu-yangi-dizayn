import React from 'react';
import { Link } from 'react-router-dom';

const Buildings: React.FC = () => {
    const buildings = [
        { title: 'Asosiy binosi (A korpus)', icon: 'domain', desc: 'Rektorat, ma\'muriyat va asosiy o\'quv auditoriyalari joylashgan bino.', image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800' },
        { title: 'O\'quv korpusi (B korpus)', icon: 'apartment', desc: 'Zamonaviy auditoriyalar, kompyuter laboratoriyalari va til o\'rganish xonalari.', image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dee7d?q=80&w=800' },
        { title: 'Talabalar turar joyi', icon: 'home', desc: '500 o\'rinli shinam va barcha sharoitlar bilan ta\'minlangan talabalar yotoqxonasi.', image: 'https://images.unsplash.com/photo-1555854817-30e7401a71ca?q=80&w=800' },
        { title: 'Sport majmuasi', icon: 'fitness_center', desc: 'Yopiq suzish havzasi, futbol va basketbol maydonlari, zamonaviy trenajyor zali.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800' },
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
                    <span className="text-blue-600 font-bold">Binolar</span>
                </div>

                <h1 className="text-4xl font-black text-slate-900 text-center mb-16">Binolar va korpuslar</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {buildings.map((building, idx) => (
                        <div key={idx} className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all group">
                            <div className="h-64 overflow-hidden">
                                <img src={building.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={building.title} />
                            </div>
                            <div className="p-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                                        <span className="material-symbols-outlined">{building.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900">{building.title}</h3>
                                </div>
                                <p className="text-slate-500 font-medium leading-relaxed">{building.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Buildings;
