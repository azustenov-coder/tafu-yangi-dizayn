
import React from 'react';
import { Link } from 'react-router-dom';

const Internships: React.FC = () => {
    const opportunities = [
        {
            company: 'O\'zbekiston Milliy Banki',
            role: 'Moliya va audit stajori',
            period: '3 oy',
            type: 'Haq to\'lanadigan',
            icon: 'account_balance'
        },
        {
            company: 'EPAM Systems',
            role: 'Junior Software Engineer',
            period: '6 oy',
            type: 'Haq to\'lanadigan',
            icon: 'code'
        },
        {
            company: 'Korzinka.uz',
            role: 'Marketing va Menejment',
            period: '2 oy',
            type: 'O\'quv amaliyoti',
            icon: 'shopping_cart'
        },
        {
            company: 'Artel',
            role: 'Muhandis-texnolog',
            period: '4 oy',
            type: 'Haq to\'lanadigan',
            icon: 'precision_manufacturing'
        }
    ];

    const handleApply = (role: string, company: string) => {
        alert(`${company} dagi "${role}" lavozimiga ariza topshirish uchun formani to'ldiring. Tez orada siz bilan bog'lanamiz!`);
    };

    return (
        <div className="py-8 bg-[#eff8ff] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-slate-400">Talabalarga</span>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-blue-600 font-bold">Amaliyot va stajirovkalar</span>
                </div>

                <div className="text-center mb-16">
                    <h1 className="text-4xl font-black text-slate-900 mb-6 font-display uppercase tracking-tight">Amaliyot va stajirovkalar</h1>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                        Nazariy bilimlarni amaliyotda mustahkamlang. Bizning hamkorlarimiz sizga keng imkoniyatlar eshigini ochadi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {opportunities.map((opp, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex items-center gap-6">
                            <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:rotate-6 transition-transform shadow-lg">
                                <span className="material-symbols-outlined text-4xl">{opp.icon}</span>
                            </div>
                            <div className="flex-grow">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest">{opp.type}</span>
                                    <span className="text-xs font-bold text-slate-400">{opp.period}</span>
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-1">{opp.role}</h3>
                                <p className="text-slate-500 font-bold text-sm tracking-tight">{opp.company}</p>
                                <button
                                    onClick={() => handleApply(opp.role, opp.company)}
                                    className="mt-4 text-sm font-black text-blue-600 flex items-center gap-2 hover:gap-3 transition-all"
                                >
                                    Ariza topshirish <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Grid */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <Link to="/partnerships" className="bg-blue-600 text-white p-10 rounded-[2.5rem] shadow-xl shadow-blue-600/20 hover:-translate-y-2 transition-transform">
                        <span className="material-symbols-outlined text-4xl mb-4">handshake</span>
                        <h3 className="text-xl font-bold mb-2">50+ Hamkorlar</h3>
                        <p className="text-blue-100 text-sm font-medium">Yirik davlat va xususiy tashkilotlar bilan doimiy aloqa.</p>
                    </Link>
                    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                        <span className="material-symbols-outlined text-4xl mb-4 text-blue-600">trending_up</span>
                        <h3 className="text-xl font-bold mb-2 text-slate-900">70% Ishga joylashish</h3>
                        <p className="text-slate-400 text-sm font-medium">Stajyorlarimizning aksariyati amaliyotdan so'ng ishga qabul qilinadi.</p>
                    </div>
                    <Link to="/career-center" className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:-translate-y-2 hover:border-blue-200 transition-all">
                        <span className="material-symbols-outlined text-4xl mb-4 text-blue-600">description</span>
                        <h3 className="text-xl font-bold mb-2 text-slate-900">Career Center</h3>
                        <p className="text-slate-400 text-sm font-medium">Rezume yozish va suhbatdan o'tishda professional yordam.</p>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Internships;
