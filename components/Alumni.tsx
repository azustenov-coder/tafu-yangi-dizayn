import React from 'react';
import { Link } from 'react-router-dom';

const Alumni: React.FC = () => {
    return (
        <div className="bg-[#eff8ff] min-h-screen pt-8">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-sm mb-12 font-medium">
                    <Link to="/" className="text-slate-400 hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <Link to="/partnerships" className="text-slate-800 hover:text-blue-600 transition-colors">Hamkorlik</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <span className="text-blue-600 font-bold">Alumni (Bitiruvchilar)</span>
                </div>

                {/* Hero Section */}
                <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-xl shadow-blue-900/5 relative overflow-hidden mb-24">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 translate-x-1/2"></div>

                    <div className="relative z-10 max-w-3xl">
                        <span className="inline-block bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.4em] px-5 py-2.5 rounded-full mb-8">
                            Universitet Faxri
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                            Bitiruvchilar — Bizning <span className="text-blue-600">Muvaffaqiyatimiz</span>
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed mb-12 font-medium">
                            Universitetimizni tamomlagan har bir talaba bizning katta oilamizning ajralmas qismidir. Biz bitiruvchilarimiz bilan faxrlanamiz va ular bilan doimiy aloqani saqlab qolamiz.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#1a3d6b] text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 flex items-center gap-2">
                                Ro'yxatdan o'tish
                                <span className="material-symbols-outlined text-xl">person_add</span>
                            </button>
                            <button className="bg-white text-slate-700 px-10 py-5 rounded-2xl font-bold border border-slate-200 hover:bg-slate-50 transition-all">
                                Tadbirlar taqvimi
                            </button>
                        </div>
                    </div>
                </div>

                {/* Statistics Grid */}
                <div className="grid md:grid-cols-4 gap-8 mb-32">
                    {[
                        { label: 'Bitiruvchilar', value: '5,000+', icon: 'groups' },
                        { label: 'Karyera o\'sishi', value: '92%', icon: 'trending_up' },
                        { label: 'Prezident stipendiatlari', value: '45', icon: 'military_tech' },
                        { label: 'Xalqaro kompaniyalarda', value: '300+', icon: 'public' }
                    ].map((stat) => (
                        <div key={stat.label} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm text-center group hover:-translate-y-2 transition-all">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
                            </div>
                            <div className="text-3xl font-black text-slate-900 mb-2">{stat.value}</div>
                            <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Alumni Stories Segment */}
                <div className="mb-32">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Muvaffaqiyat hikoyalari</h2>
                            <p className="text-slate-500 font-medium">Bitiruvchilarimizning hayot yo'li va erishgan yutuqlari</p>
                        </div>
                        <Link to="/alumni-stories" className="text-blue-600 font-black flex items-center gap-2 hover:translate-x-1 transition-transform">
                            Barcha hikoyalar <span className="material-symbols-outlined">east</span>
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Story Card 1 */}
                        <div className="bg-white rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-sm border border-slate-100">
                            <div className="md:w-1/2">
                                <img src="https://images.unsplash.com/photo-1544717297-fa95b3ee51f3?w=500&auto=format&fit=crop" className="w-full h-full object-cover" alt="Alumni" />
                            </div>
                            <div className="md:w-1/2 p-10">
                                <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-4 block">2020-yil bitiruvchisi</span>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">Azizov Bekzod</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium italic">
                                    "Universitetimizda olgan bilimlarim va u yerdagi muhit mening Google kompaniyasiga ishga kirishimda poydevor bo'ldi."
                                </p>
                                <div className="text-sm font-bold text-slate-900">Lead Engineer at Google</div>
                            </div>
                        </div>
                        {/* Story Card 2 */}
                        <div className="bg-white rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-sm border border-slate-100">
                            <div className="md:w-1/2">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop" className="w-full h-full object-cover" alt="Alumni" />
                            </div>
                            <div className="md:w-1/2 p-10">
                                <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-4 block">2018-yil bitiruvchisi</span>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">Karimova Nilufar</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium italic">
                                    "Iqtisodiyot fakultetida olingan bilimlar bugun o'z xususiy konsalting korxonamni rivojlantirishda yordam bermoqda."
                                </p>
                                <div className="text-sm font-bold text-slate-900">CEO of 'Global Consulting'</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Alumni;
