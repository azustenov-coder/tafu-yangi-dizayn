
import React from 'react';
import { Link } from 'react-router-dom';

const Infrastructure: React.FC = () => {
    const items = [
        { title: 'Rektorat', icon: 'corporate_fare', desc: 'Universitet boshqaruv apparati va ma\'muriy tuzilmalari.', path: '/rectorat' },
        { title: 'Markazlar va bo\'limlar', icon: 'hub', desc: 'Ilmiy-amaliy markazlar va asosiy funksional bo\'limlar.', path: '/centers' },
        { title: 'Fakultetlar', icon: 'school', desc: 'O\'quv-uslubiy va ilmiy faoliyat olib boruvchi asosiy tarkibiy birliklar.', path: '/faculties' },
        { title: 'Binolar', icon: 'apartment', desc: 'O\'quv korpuslari, laboratoriyalar va talabalar turar joylari.', path: '/buildings' },
        { title: 'Kengashlar', icon: 'groups', desc: 'Ilmiy kengash va boshqa jamoatchilik boshqaruv organlari.', path: '/councils' },
    ];

    return (
        <div className="py-8 bg-[#eff8ff] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <Link to="/about" className="hover:text-blue-600 transition-colors">Universitet haqida</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-blue-600 font-bold">Infratuzilma</span>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Infratuzilma</h1>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                            Bizning infratuzilmamiz talabalarning sifatli ta'lim olishi, ilmiy faoliyat bilan shug'ullanishi va har tomonlama rivojlanishi uchun qulay shart-sharoitlarni ta'minlaydi.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {items.map((item, idx) => (
                            <Link
                                key={idx}
                                to={item.path}
                                className="group bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                                    <p className="text-slate-400 text-sm font-medium">{item.desc}</p>
                                </div>

                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Decorative Section */}
                    <div className="mt-20 relative rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-blue-600/20">
                        <img
                            src="/images/university_building.png"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            alt="University of Tashkent"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                        <div className="relative p-10 md:p-20 text-center text-white">
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
                                <span className="material-symbols-outlined text-4xl">workspace_premium</span>
                            </div>
                            <h2 className="text-3xl font-black mb-6 tracking-tight">Zamonaviy va Innovatsion Muhit</h2>
                            <p className="text-blue-50/80 font-medium max-w-xl mx-auto text-lg leading-relaxed">
                                Biz talabalarimiz uchun doimo eng so'nggi texnologiyalar bilan jihozlangan laboratoriyalar va keng kutubxona tizimini rivojlantirib boramiz.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Infrastructure;
