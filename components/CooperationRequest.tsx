import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CooperationRequest: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');
        setTimeout(() => setFormStatus('success'), 1500);
    };

    if (formStatus === 'success') {
        return (
            <div className="bg-[#eff8ff] min-h-screen flex items-center justify-center p-4">
                <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-blue-900/10 text-center max-w-2xl border border-slate-100">
                    <div className="w-24 h-24 bg-green-50 text-green-500 rounded-3xl flex items-center justify-center mx-auto mb-8 animate-bounce">
                        <span className="material-symbols-outlined text-5xl">check_circle</span>
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 mb-6">Murojaatingiz qabul qilindi!</h2>
                    <p className="text-slate-500 text-lg mb-10 font-medium">Tez orada bizning biznes-menedjerlarimiz siz bilan bog'lanishadi. Hamkorlik uchun rahmat!</p>
                    <Link to="/business-relations" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 inline-block">
                        Ortga qaytish
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#eff8ff] min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-sm mb-12 font-medium justify-center">
                    <Link to="/" className="text-slate-400 hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <Link to="/business-relations" className="text-slate-400 hover:text-blue-600 transition-colors">Biznes bilan aloqalar</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <span className="text-blue-600 font-bold">Hamkorlik so'rovi</span>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-[4rem] shadow-2xl shadow-blue-900/5 overflow-hidden border border-slate-100 flex flex-col md:flex-row">
                        <div className="md:w-1/3 bg-[#1a3d6b] p-12 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-full h-full bg-white/5 -skew-x-12 translate-x-1/2"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl font-black mb-6">Biz bilan bog'laning</h2>
                                <p className="text-blue-100 mb-12 font-medium">Universitetimiz bilan hamkorlik qilish orqali siz eng iqtidorli talabalarga va innovatsion resurslarga ega bo'lasiz.</p>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                                            <span className="material-symbols-outlined text-lg">mail</span>
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase font-black tracking-widest text-blue-300">Email</div>
                                            <div className="text-sm font-bold">business@utas.uz</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                                            <span className="material-symbols-outlined text-lg">call</span>
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase font-black tracking-widest text-blue-300">Telefon</div>
                                            <div className="text-sm font-bold">+998 71 200 00 00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-2/3 p-12 md:p-16">
                            <h1 className="text-3xl font-black text-slate-900 mb-8">Hamkorlik So'rovi</h1>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Kompaniya nomi</label>
                                        <input required type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:bg-white focus:border-blue-600 outline-none transition-all" placeholder="Artel Group" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Mas'ul shaxs</label>
                                        <input required type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:bg-white focus:border-blue-600 outline-none transition-all" placeholder="F.I.Sh" />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Telefon raqam</label>
                                        <input required type="tel" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:bg-white focus:border-blue-600 outline-none transition-all" placeholder="+998 90..." />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Yo'nalish</label>
                                        <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:bg-white focus:border-blue-600 outline-none transition-all">
                                            <option>Amaliyot va stajirovka</option>
                                            <option>Ilmiy-tadqiqot (R&D)</option>
                                            <option>Xodimlarni tayyorlash</option>
                                            <option>Boshqa</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Xabar matni</label>
                                    <textarea rows={4} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:bg-white focus:border-blue-600 outline-none transition-all resize-none" placeholder="Hamkorlik bo'yicha taklifingiz..."></textarea>
                                </div>
                                <button
                                    disabled={formStatus === 'sending'}
                                    className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3"
                                >
                                    {formStatus === 'sending' ? (
                                        <>Yuborilmoqda...</>
                                    ) : (
                                        <>SO'ROVNI YUBORISH <span className="material-symbols-outlined">send</span></>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CooperationRequest;
