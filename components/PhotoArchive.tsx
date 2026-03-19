import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PhotoArchive: React.FC = () => {
    const categories = ['Barchasi', 'Binolar', 'Tadbirlar', 'Talabalar', 'Bitiruvchilar'];
    const [activeCategory, setActiveCategory] = useState('Barchasi');

    const photos = [
        { id: 1, category: 'Binolar', title: 'Ilk o\'quv binosi', year: '1992', url: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=600' },
        { id: 2, category: 'Tadbirlar', title: 'Talabalar bayrami', year: '1995', url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600' },
        { id: 3, category: 'Talabalar', title: 'Kutubxonadagi darslar', year: '1998', url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600' },
        { id: 4, category: 'Bitiruvchilar', title: 'Birinchi bitiruv marosimi', year: '1996', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600' },
        { id: 5, category: 'Binolar', title: 'Laboratoriya ochilishi', year: '2005', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600' },
        { id: 6, category: 'Tadbirlar', title: 'Sport musobaqalari', year: '2000', url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600' },
    ];

    const filteredPhotos = activeCategory === 'Barchasi'
        ? photos
        : photos.filter(p => p.category === activeCategory);

    return (
        <div className="bg-[#eff8ff] min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-sm mb-12 font-medium">
                    <Link to="/" className="text-slate-400 hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <Link to="/about" className="text-slate-400 hover:text-blue-600 transition-colors">Universitet haqida</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <Link to="/history-archive" className="text-slate-400 hover:text-blue-600 transition-colors">Arxiv materiallari</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <span className="text-blue-600 font-bold">Fotoarxiv</span>
                </div>

                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Fotoarxiv</h1>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl">
                        Universitetimiz tarixidagi eng muhim va unutilmas lahzalar muhrlangan fotojamlanmalar.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${activeCategory === cat ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Photo Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPhotos.map(photo => (
                        <div key={photo.id} className="group relative rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 aspect-[4/3] cursor-pointer">
                            <img
                                src={photo.url}
                                alt={photo.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <span className="text-blue-300 text-[10px] font-black uppercase tracking-widest mb-2">{photo.year} Yil</span>
                                <h3 className="text-white text-xl font-black">{photo.title}</h3>
                                <p className="text-blue-100/70 text-sm font-medium">{photo.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PhotoArchive;
