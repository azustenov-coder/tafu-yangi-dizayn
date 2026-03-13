import React from 'react';
import { Link } from 'react-router-dom';

const HistoryArchive: React.FC = () => {
    const documents = [
        { id: '1', title: 'Universitet nizomi (1992)', date: '19.08.1992', type: 'PDF', size: '2.4 MB' },
        { id: '2', title: 'Birinchi bitiruvchilar albomi', date: '25.06.1996', type: 'IMG', size: '15.8 MB' },
        { id: '3', title: "Ilk ilmiy kengash bayonnomasi", date: '04.09.1992', type: 'PDF', size: '1.1 MB' },
        { id: '4', title: "Tarixiy bino loyihasi", date: '12.02.1991', type: 'DWG', size: '8.5 MB' },
    ];

    const handleDownload = (title: string) => {
        alert(`${title} yuklanmoqda...`);
        // In a real app: window.location.href = `/api/download?id=${id}`;
    };

    return (
        <div className="bg-[#eff8ff] min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-sm mb-12 font-medium">
                    <Link to="/" className="text-slate-400 hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <Link to="/about" className="text-slate-400 hover:text-blue-600 transition-colors">Universitet haqida</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <span className="text-blue-600 font-bold">Arxiv materiallari</span>
                </div>

                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Tarixiy Arxiv</h1>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl">
                        Universitetimizning boy tarixiga oid hujjatlar, fotosuratlar va noyob qo'lyozmalar to'plami.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {documents.map((doc) => (
                        <div key={doc.id} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all group flex items-center gap-6">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">description</span>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{doc.title}</h3>
                                <div className="flex items-center gap-4 text-sm text-slate-400 font-bold uppercase tracking-widest">
                                    <span>{doc.date}</span>
                                    <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                                    <span>{doc.type}</span>
                                    <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                                    <span>{doc.size}</span>
                                </div>
                            </div>
                            <button
                                onClick={() => handleDownload(doc.title)}
                                className="w-12 h-12 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all active:scale-95"
                                title="Yuklab olish"
                            >
                                <span className="material-symbols-outlined">download</span>
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-12 bg-white rounded-[3rem] border border-blue-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-full bg-[#eff8ff] -skew-x-12 translate-x-1/2"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-4">Noyob suratlar qidiryapsizmi?</h2>
                            <p className="text-slate-500 font-medium">Bizning fotoarxivimizda 10,000 dan ortiq tarixiy lahzalar muhrlangan.</p>
                        </div>
                        <Link to="/photo-archive" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all whitespace-nowrap">
                            FOTOARXIVGA O'TISH
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryArchive;
