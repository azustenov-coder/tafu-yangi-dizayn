import React from 'react';
import { Link } from 'react-router-dom';

const BusinessRelations: React.FC = () => {
    return (
        <div className="bg-[#eff8ff] min-h-screen pt-8">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-sm mb-12 font-medium">
                    <Link to="/" className="text-slate-400 hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <Link to="/partnerships" className="text-slate-800 hover:text-blue-600 transition-colors">Hamkorlik</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <span className="text-blue-600 font-bold">Biznes bilan aloqalar</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <span className="inline-block bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6">
                            Sanoat va Ta'lim Integratsiyasi
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                            Biznes va Sanoat bilan <span className="text-blue-600">Strategik</span> Hamkorlik
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed mb-10 font-medium">
                            Universitetimiz nazariya va amaliyotni birlashtirish orqali talabalarimizni zamonaviy mehnat bozoriga tayyorlaydi. Biz yetakchi korxonalar bilan innovatsion loyihalarni amalga oshiramiz.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/cooperation-request" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
                                Hamkorlikni boshlash
                            </Link>
                            <Link to="/partners-portfolio" className="bg-white text-slate-700 px-8 py-4 rounded-2xl font-bold border border-slate-200 hover:bg-slate-50 transition-all">
                                Portfolio ko'rish
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl skew-y-2">
                            <img
                                src="https://images.unsplash.com/photo-1522071823992-b48de4366861?q=80&w=1000&auto=format&fit=crop"
                                className="w-full h-full object-cover"
                                alt="Business meeting"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-50 hidden md:block animate-bounce-slow">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                    <span className="material-symbols-outlined">trending_up</span>
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-slate-900">150+</div>
                                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Hamkor korxonalar</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cooperation Types */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {[
                        { title: 'Kvadratik amaliyot', desc: 'Talabalarimiz real loyihalarda qatnashib, o\'z bilimlarini amaliyotda sinaydilar.', icon: 'work_history' },
                        { title: 'Dual ta\'lim', desc: 'Nazariy bilimlarni bevosita ish joyida amaliy ko\'nikmalar bilan birga o\'zlashtirish dasturi.', icon: 'hub' },
                        { title: 'Innovatsion Markazlar', desc: 'Kompaniyalar bilan hamkorlikda tashkil etilgan zamonaviy tadqiqot laboratoriyalari.', icon: 'science' }
                    ].map((item) => (
                        <div key={item.title} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Partners Logo Cloud (Mockup) */}
                <div className="bg-white rounded-[3rem] p-16 mb-32 border border-slate-100 text-center">
                    <h2 className="text-3xl font-black text-slate-900 mb-12">Bizning asosiy hamkorlarimiz</h2>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
                        <span className="text-4xl font-black text-slate-300">SAMSUNG</span>
                        <span className="text-4xl font-black text-slate-300">HUAWEI</span>
                        <span className="text-4xl font-black text-slate-300">ARTEL</span>
                        <span className="text-4xl font-black text-slate-300">AKFA</span>
                        <span className="text-4xl font-black text-slate-300">KORZINKA</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BusinessRelations;
