import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Results: React.FC = () => {
    const [id, setId] = useState('');
    const [result, setResult] = useState<any>(null);

    const handleCheck = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock result check
        if (id === '2025001') {
            setResult({ name: 'Saidmuhammadalixon', score: 178.5, status: 'Tavsiya etildi (Grant)' });
        } else {
            alert('ID raqami topilmadi. Masalan: 2025001');
        }
    };

    return (
        <div className="py-20 bg-[#eff8ff] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <Link to="/admissions" className="hover:text-blue-600 transition-colors">Abituriyentlarga</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-blue-600 font-bold">Imtihon natijalari</span>
                </div>

                <div className="max-w-2xl mx-auto">
                    <h1 className="text-4xl font-black text-slate-900 text-center mb-12">Natijalarni tekshirish</h1>

                    <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100 mb-12 text-center">
                        <p className="text-slate-500 font-medium mb-10 text-lg">
                            Imtihon natijangizni bilish uchun sizga berilgan maxsus ID raqamni kiriting.
                        </p>
                        <form onSubmit={handleCheck} className="space-y-6">
                            <input
                                type="text"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                placeholder="ID raqamni kiriting (masalan: 2025001)"
                                className="w-full px-8 py-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:bg-white transition-all text-center text-xl font-bold placeholder:font-medium placeholder:text-slate-300"
                            />
                            <button className="w-full bg-[#1a3d6b] text-white font-black py-6 rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/10 uppercase tracking-widest text-sm">
                                Natijani ko'rish
                            </button>
                        </form>
                    </div>

                    {result && (
                        <div className="bg-emerald-50 border-2 border-emerald-100 rounded-[3rem] p-12 text-center animate-in fade-in slide-in-from-bottom-5 duration-500">
                            <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-500/30">
                                <span className="material-symbols-outlined text-4xl">emoji_events</span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2">{result.name}</h3>
                            <div className="text-4xl font-black text-emerald-600 mb-6">{result.score} ball</div>
                            <div className="inline-block px-8 py-4 bg-white border border-emerald-200 rounded-full text-emerald-700 font-black text-lg shadow-sm">
                                {result.status}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Results;
