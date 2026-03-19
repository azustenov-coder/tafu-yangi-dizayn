import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MuseumTour: React.FC = () => {
    const [activeExhibit, setActiveExhibit] = useState(0);

    const exhibits = [
        {
            title: "Ilk tashkil etilgan bino",
            year: "1992",
            desc: "Universitetning birinchi binosi o'z davrining eng ko'zga ko'ringan me'moriy loyihalaridan biri bo'lgan.",
            image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "Ilmiy kashfiyotlar zali",
            year: "2005",
            desc: "Bu yerda universitetimiz olimlari tomonidan qilingan eng muhim kashfiyotlar va patentlar jamlangan.",
            image: "https://images.unsplash.com/photo-1518384401463-d3876063c195?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "Xalqaro hamkorlik burchagi",
            year: "2015",
            desc: "Dunyoning 50 dan ortiq davlatlari bilan tuzilgan hamkorlik shartnomalari va suvenirlar ko'rgazmasi.",
            image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-[#eff8ff] min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-sm mb-12 font-medium">
                    <Link to="/" className="text-slate-400 hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <Link to="/about" className="text-slate-400 hover:text-blue-600 transition-colors">Universitet haqida</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <span className="text-blue-600 font-bold">Muzey sayohati</span>
                </div>

                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Virtual Sayohat</span>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">Universitet Muzeyi</h1>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={() => setActiveExhibit((prev) => (prev - 1 + exhibits.length) % exhibits.length)} className="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:border-blue-600 hover:text-blue-600 transition-all">
                            <span className="material-symbols-outlined">west</span>
                        </button>
                        <button onClick={() => setActiveExhibit((prev) => (prev + 1) % exhibits.length)} className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-600/30 hover:bg-blue-700 transition-all">
                            <span className="material-symbols-outlined">east</span>
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl h-[500px] group">
                            <img
                                src={exhibits[activeExhibit].image}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                alt={exhibits[activeExhibit].title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-12 left-12">
                                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-black mb-4 inline-block">{exhibits[activeExhibit].year} yil</span>
                                <h3 className="text-3xl font-black text-white">{exhibits[activeExhibit].title}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-12">
                        {exhibits.map((ex, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActiveExhibit(idx)}
                                className={`cursor-pointer transition-all duration-500 p-8 rounded-[2.5rem] border ${idx === activeExhibit ? 'bg-white border-blue-200 shadow-xl scale-105' : 'bg-white/50 border-transparent hover:bg-white hover:border-slate-100'}`}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black ${idx === activeExhibit ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                                        0{idx + 1}
                                    </div>
                                    <span className="text-sm font-bold text-slate-400">{ex.year}</span>
                                </div>
                                <h4 className={`text-xl font-black mb-3 transition-colors ${idx === activeExhibit ? 'text-slate-900' : 'text-slate-400'}`}>{ex.title}</h4>
                                {idx === activeExhibit && (
                                    <p className="text-slate-500 font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-500">
                                        {ex.desc}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <h2 className="text-3xl font-black text-slate-900 mb-8">Eksponatlar Galereyasi</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="aspect-square bg-white p-2 rounded-3xl shadow-sm border border-slate-100 hover:scale-105 transition-all cursor-pointer">
                                <img src={`https://picsum.photos/seed/museum_${i}/400/400`} className="w-full h-full object-cover rounded-2xl" alt="Exhibit" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MuseumTour;
