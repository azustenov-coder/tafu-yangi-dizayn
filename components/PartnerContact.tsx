
import React from 'react';
import { Link } from 'react-router-dom';

const PartnerContact: React.FC = () => {
    return (
        <div className="bg-[#f8fafc] min-h-screen py-10">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-[13px] text-slate-400 mb-12 font-bold">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    <span className="text-slate-900">Aloqa</span>
                </div>

                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Keling, birgalikda yangi <br /> marralarni zabt etamiz
                    </h1>
                    <p className="text-slate-500 max-w-xl mx-auto font-bold text-lg leading-relaxed">
                        Sizning g'oyalaringiz va takliflaringiz biz uchun muhim. Hamkorlikning har qanday shakliga tayyormiz.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start mb-24">
                    {/* Contact Info Side */}
                    <div className="lg:w-5/12 space-y-8">
                        {/* Hamkorlik bo'limi */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all border-l-[6px] border-l-blue-600">
                            <h2 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
                                Hamkorlik bo'limi
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-center gap-5 group">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900">+998 (71) 200 05 40</div>
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">TELEFON</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 group">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900">info@utas.uz</div>
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">EMAIL</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ilmiy bo'lim */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all border-l-[6px] border-l-blue-400">
                            <h2 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
                                Ilmiy bo'lim
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-center gap-5 group">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-400 rounded-2xl flex items-center justify-center group-hover:bg-blue-400 group-hover:text-white transition-all">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900">+998 (71) 200 05 40</div>
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">TELEFON</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 group">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-400 rounded-2xl flex items-center justify-center group-hover:bg-blue-400 group-hover:text-white transition-all">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900">info@utas.uz</div>
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">EMAIL</div>
                                    </div>
                                </div>
                                <div className="pt-6 border-t border-slate-50 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                        <span className="material-symbols-outlined">person</span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900">Saitov Elyor Baxriddinovich</div>
                                        <div className="text-[10px] font-bold text-slate-400">Menejer</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:w-7/12">
                        <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-blue-900/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
                            
                            <h2 className="text-3xl font-black text-slate-900 mb-2 relative z-10">Hamkorlik so'rovi</h2>
                            <p className="text-slate-400 font-bold text-sm mb-12 relative z-10 italic">Ma'lumotlaringizni qoldiring va biz sizga tez orada bog'lanamiz.</p>
                            
                            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">To'liq ismingiz</label>
                                        <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all font-bold placeholder:text-slate-300" placeholder="Ism familiya..." />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Tashkilot nomi</label>
                                        <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all font-bold placeholder:text-slate-300" placeholder="Tashkilot..." />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Elektron pochta manzili</label>
                                    <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all font-bold placeholder:text-slate-300" placeholder="example@gmail.com" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">TAKRIFINGIZ MATNI</label>
                                    <textarea className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-6 outline-none focus:border-blue-500 transition-all font-bold placeholder:text-slate-300 min-h-[180px] resize-none" placeholder="Loyihangiz haqida qisqacha yozing..."></textarea>
                                </div>
                                <button className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-600/20 active:scale-[0.98]">
                                    So'rovni yuborish <span className="material-symbols-outlined">trending_flat</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Badges */}
                <div className="flex flex-wrap justify-center gap-12 pt-16 border-t border-slate-100">
                    <div className="flex items-center gap-4 group">
                        <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                            <span className="material-symbols-outlined text-2xl">public</span>
                        </div>
                        <div className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Xalqaro tarmoq</div>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                            <span className="material-symbols-outlined text-2xl">speed</span>
                        </div>
                        <div className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Tezkor aloqa</div>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                            <span className="material-symbols-outlined text-2xl">verified_user</span>
                        </div>
                        <div className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Ishonchli hamkorlik</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerContact;
