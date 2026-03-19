import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OnlineApplication: React.FC = () => {
    const [step, setStep] = useState(1);

    return (
        <div className="py-20 bg-[#eff8ff] min-h-screen">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <Link to="/admissions" className="hover:text-blue-600 transition-colors">Abituriyentlarga</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-blue-600 font-bold">Online ariza</span>
                </div>

                <div className="bg-white rounded-[3.5rem] shadow-xl border border-slate-100 overflow-hidden">
                    <div className="bg-[#1a3d6b] p-12 text-white">
                        <h1 className="text-3xl font-black mb-4">Talabalikka qabul uchun ariza</h1>
                        <p className="text-blue-100/70 font-medium">Barcha maydonlarni diqqat bilan to'ldiring. Hujjatlaringiz 24 soat ichida ko'rib chiqiladi.</p>

                        <div className="flex gap-4 mt-12">
                            {[1, 2, 3].map((s) => (
                                <div key={s} className="flex-1 h-2 rounded-full overflow-hidden bg-white/10">
                                    <div className={`h-full bg-white transition-all duration-700 ${step >= s ? 'w-full' : 'w-0'}`}></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-12 md:p-16">
                        {step === 1 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                <h2 className="text-2xl font-black text-slate-900">Shaxsiy ma'lumotlar</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-slate-400 mb-2 uppercase tracking-widest pl-2">Ism</label>
                                        <input type="text" className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:bg-white transition-all font-bold" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-slate-400 mb-2 uppercase tracking-widest pl-2">Familiya</label>
                                        <input type="text" className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:bg-white transition-all font-bold" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-xs font-black text-slate-400 mb-2 uppercase tracking-widest pl-2">Telefon raqami</label>
                                        <input type="tel" placeholder="+998" className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:bg-white transition-all font-bold" />
                                    </div>
                                </div>
                                <button onClick={() => setStep(2)} className="w-full bg-blue-600 text-white font-black py-6 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 uppercase tracking-widest text-sm">
                                    Keyingisi
                                </button>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                <h2 className="text-2xl font-black text-slate-900">Yo'nalishni tanlash</h2>
                                <div className="space-y-4">
                                    <label className="text-xs font-black text-slate-400 mb-2 uppercase tracking-widest pl-2">Ta'lim yo'nalishi</label>
                                    <select className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:bg-white transition-all font-bold appearance-none">
                                        <option>Axborot texnologiyalari (Dasturiy injiniring)</option>
                                        <option>Iqtisodiyot (Moliya)</option>
                                        <option>Pedagogika va psixologiya</option>
                                    </select>
                                </div>
                                <div className="flex gap-4">
                                    <button onClick={() => setStep(1)} className="flex-1 bg-slate-100 text-slate-600 font-black py-6 rounded-2xl hover:bg-slate-200 transition-all uppercase tracking-widest text-sm">
                                        Orqaga
                                    </button>
                                    <button onClick={() => setStep(3)} className="flex-[2] bg-blue-600 text-white font-black py-6 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 uppercase tracking-widest text-sm">
                                        Davom etish
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="text-center py-10 animate-in zoom-in duration-500">
                                <div className="w-24 h-24 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/30">
                                    <span className="material-symbols-outlined text-5xl font-black">done_all</span>
                                </div>
                                <h2 className="text-3xl font-black text-slate-900 mb-4">Ariza muvaffaqiyatli topshirildi!</h2>
                                <p className="text-slate-500 font-medium mb-10 max-w-sm mx-auto">
                                    Tez orada mutaxassislarimiz siz bilan bog'lanishadi. ID raqamingiz: <span className="text-blue-600 font-black">2025-APP-782</span>
                                </p>
                                <Link to="/admissions" className="inline-block bg-[#1a3d6b] text-white font-black px-12 py-6 rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/10 uppercase tracking-widest text-sm">
                                    Sahifaga qaytish
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnlineApplication;
