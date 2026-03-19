
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

interface Partner {
    id: number;
    name: string;
    location: string;
    contact: string;
    type: 'Mahalliy tashkilot' | 'Xorijiy tashkilot';
    typeColor: string;
}

const Partners: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState<'all' | 'local' | 'foreign'>('all');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const partnersData: Partner[] = [
        { id: 1, name: "O'zbekiston Respublikasi Toshkent Temurbeklar maktabi", location: "---", contact: "---", type: "Mahalliy tashkilot", typeColor: "text-blue-600 bg-blue-50" },
        { id: 2, name: "O'zbekiston Respublikasi 194-sonli umumiy o'rta ta'lim maktabi", location: "---", contact: "---", type: "Mahalliy tashkilot", typeColor: "text-blue-600 bg-blue-50" },
        { id: 3, name: "O'zbekiston Respublikasi Oila va xotin-qizlar qo'mitasi", location: "---", contact: "---", type: "Mahalliy tashkilot", typeColor: "text-blue-600 bg-blue-50" },
        { id: 4, name: "Profi Universiteti", location: "---", contact: "---", type: "Mahalliy tashkilot", typeColor: "text-blue-600 bg-blue-50" },
        { id: 5, name: "Федерация Триатлона Узбекистана", location: "---", contact: "---", type: "Mahalliy tashkilot", typeColor: "text-blue-600 bg-blue-50" },
        { id: 6, name: "Tashkent International University", location: "---", contact: "---", type: "Mahalliy tashkilot", typeColor: "text-blue-600 bg-blue-50" },
        { id: 7, name: "University of Business and Science", location: "---", contact: "---", type: "Mahalliy tashkilot", typeColor: "text-blue-600 bg-blue-50" },
        { id: 8, name: "Namangan Davlat pedagogika instituti", location: "---", contact: "---", type: "Mahalliy tashkilot", typeColor: "text-blue-600 bg-blue-50" },
        { id: 9, name: "O'zbekiston Respublikasi Maktabgacha va maktab ta'lim vazirligi", location: "---", contact: "---", type: "Mahalliy tashkilot", typeColor: "text-blue-600 bg-blue-50" },
        { id: 10, name: "T.N.Qori Niyoziy nomidagi O'zbekiston pedagogika fanlari Ilmiy tadqiqot instituti", location: "---", contact: "---", type: "Mahalliy tashkilot", typeColor: "text-blue-600 bg-blue-50" },
        { id: 11, name: "Университет дружбы народов имени академика А.Куатбека (Kazaxstan)", location: "---", contact: "---", type: "Xorijiy tashkilot", typeColor: "text-purple-600 bg-purple-50" },
        { id: 12, name: "Estonian entrepreneurship university of applied sciences (Estonia)", location: "---", contact: "---", type: "Xorijiy tashkilot", typeColor: "text-purple-600 bg-purple-50" },
        { id: 13, name: "Sungkonghoe University (Republic of Korea)", location: "---", contact: "---", type: "Xorijiy tashkilot", typeColor: "text-purple-600 bg-purple-50" },
        { id: 14, name: "Zhejiang University of Finance and Economics (China)", location: "---", contact: "---", type: "Xorijiy tashkilot", typeColor: "text-purple-600 bg-purple-50" },
        { id: 15, name: "University Pancasakti Tegal (India)", location: "---", contact: "---", type: "Xorijiy tashkilot", typeColor: "text-purple-600 bg-purple-50" },
        { id: 16, name: "Kyrgyz economic univesity named after M.Riskulbekov(Kirgizstan)", location: "---", contact: "---", type: "Xorijiy tashkilot", typeColor: "text-purple-600 bg-purple-50" },
        { id: 17, name: "Vikas College of Pharmaceutical Sciences (India)", location: "---", contact: "---", type: "Xorijiy tashkilot", typeColor: "text-purple-600 bg-purple-50" },
        { id: 18, name: "VEDZEME University of Applied Sciences (Latvia)", location: "---", contact: "---", type: "Xorijiy tashkilot", typeColor: "text-purple-600 bg-purple-50" },
        { id: 19, name: "Riseba University of Applied Sciences (Latvia)", location: "---", contact: "---", type: "Xorijiy tashkilot", typeColor: "text-purple-600 bg-purple-50" },
        { id: 20, name: "UNIKA University of Karabuk (Turkey)", location: "---", contact: "---", type: "Xorijiy tashkilot", typeColor: "text-purple-600 bg-purple-50" },
    ];

    const filteredPartners = useMemo(() => {
        return partnersData.filter(p => {
            const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesFilter = filter === 'all' || 
                                (filter === 'local' && p.type === 'Mahalliy tashkilot') || 
                                (filter === 'foreign' && p.type === 'Xorijiy tashkilot');
            return matchesSearch && matchesFilter;
        });
    }, [searchQuery, filter]);

    const totalPages = Math.ceil(filteredPartners.length / itemsPerPage);
    const paginatedPartners = filteredPartners.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="bg-[#f8fafc] min-h-screen py-8">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-[13px] text-slate-400 mb-10 font-bold">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    <span className="text-slate-900">Hamkorlar</span>
                </div>

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-black text-slate-900 mb-6">Hamkorlar</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto font-bold text-sm leading-relaxed">
                        Bizning akademik dasturlarimizni, tadqiqot tashabbuslarimizni va jamoatchilikni jalb qilishni yaxshilash uchun turli tashkilotlar bilan hamkorlik qilamiz.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex justify-center gap-4 mb-10">
                    <button 
                        onClick={() => { setFilter('all'); setCurrentPage(1); }}
                        className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${filter === 'all' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400'}`}
                    >
                        Barchasi
                    </button>
                    <button 
                        onClick={() => { setFilter('local'); setCurrentPage(1); }}
                        className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${filter === 'local' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400'}`}
                    >
                        {filter === 'local' && <span className="material-symbols-outlined text-sm">home</span>}
                        Mahalliy
                    </button>
                    <button 
                        onClick={() => { setFilter('foreign'); setCurrentPage(1); }}
                        className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${filter === 'foreign' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400'}`}
                    >
                        {filter === 'foreign' && <span className="material-symbols-outlined text-sm">public</span>}
                        Xorijiy
                    </button>
                </div>

                {/* Search & Table Card */}
                <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden p-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
                        <div className="relative w-full md:w-96">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                            <input 
                                type="text" 
                                placeholder="Qidirish..." 
                                value={searchQuery}
                                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                                className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-11 pr-4 py-3 text-sm font-bold outline-none focus:border-blue-500 transition-all placeholder:text-slate-300"
                            />
                        </div>
                        <div className="text-right text-xs font-black text-slate-400 uppercase tracking-widest">
                            Jami: <span className="text-slate-900 ml-1">{filteredPartners.length}</span>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="border-b border-slate-100">
                                <tr>
                                    <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest w-16">#</th>
                                    <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">Tashkilot</th>
                                    <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">Manzil</th>
                                    <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">Aloqa</th>
                                    <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">Turi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {paginatedPartners.map((partner, idx) => (
                                    <tr key={partner.id} className="hover:bg-slate-50 transition-colors group">
                                        <td className="px-6 py-6 text-sm font-bold text-slate-400">{(currentPage - 1) * itemsPerPage + idx + 1}</td>
                                        <td className="px-6 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                    <span className="material-symbols-outlined text-lg">corporate_fare</span>
                                                </div>
                                                <span className="text-sm font-bold text-slate-800 leading-tight">{partner.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6 font-bold text-slate-400">
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[16px]">location_on</span>
                                                <span className="text-[12px]">{partner.location}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6 font-bold text-slate-400">
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[16px]">call</span>
                                                <span className="text-[12px]">{partner.contact}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <span className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest ${partner.typeColor}`}>
                                                {partner.type}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="mt-10 pt-6 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-xs font-bold text-slate-400">
                            Ko'rsatilmoqda <span className="text-slate-900">{(currentPage - 1) * itemsPerPage + 1} dan {Math.min(currentPage * itemsPerPage, filteredPartners.length)} gacha</span> {filteredPartners.length} natijalar
                        </div>
                        <div className="flex items-center gap-2">
                            <button 
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                                className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:border-blue-500 hover:text-blue-600 disabled:opacity-50 transition-all"
                            >
                                <span className="material-symbols-outlined text-lg">chevron_left</span>
                            </button>
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-9 h-9 rounded-lg text-sm font-bold transition-all ${currentPage === i + 1 ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-400 hover:text-blue-600 hover:bg-slate-50'}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button 
                                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                disabled={currentPage === totalPages}
                                className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:border-blue-500 hover:text-blue-600 disabled:opacity-50 transition-all"
                            >
                                <span className="material-symbols-outlined text-lg">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
