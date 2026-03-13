import React from 'react';
import { Link } from 'react-router-dom';

const ResearchGrants: React.FC = () => {
    const [activeFilter, setActiveFilter] = React.useState('Barchasi');

    const grants = [
        { title: 'Yilning eng yaxshi yosh olimi', date: '2025-12-20 gacha', amount: '20 000 000 so\'m', type: 'Tanlov', category: 'Yosh olimlar' },
        { title: 'Innovatsion g\'oyalar va startaplar', date: '2025-01-15 gacha', amount: '50 000 000 so\'m', type: 'Grant', category: 'Talabalar uchun' },
        { title: 'Xalqaro ilmiy stajirovka - Germaniya', date: '2025-02-01 gacha', amount: 'To\'liq moliyalashtiriladi', type: 'Stajirovka', category: 'Xalqaro grantlar' },
        { title: 'Rektoratning maxsus tadqiqot granti', date: '2025-03-15 gacha', amount: '15 000 000 so\'m', type: 'Grant', category: 'Yosh olimlar' },
        { title: 'Davlat innovatsiya loyihasi kashfiyoti', date: '2025-05-10 gacha', amount: '120 000 000 so\'m', type: 'Loyiha', category: 'Davlat loyihalari' }
    ];

    const handleApplyGrant = (title?: string) => {
        if (title) {
            alert(`"${title}" tanlovi uchun arizangiz qabul qilindi. Siz bilan yo'riqnoma bo'yicha bog'lanamiz!`);
        } else {
            alert("Sizning loyiha bo'yicha murojaatingiz qabul qilindi. Tez orada mutaxassislarimiz bog'lanishadi!");
        }
    };

    const filteredGrants = activeFilter === 'Barchasi'
        ? grants
        : grants.filter(g => g.category === activeFilter);

    return (
        <div className="bg-[#eff8ff] min-h-screen pt-8">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-sm mb-12 font-medium">
                    <Link to="/" className="text-slate-400 hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <Link to="/research" className="text-slate-400 hover:text-blue-600 transition-colors">Fan va ilmiy faoliyat</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <span className="text-blue-600 font-bold">Tanlov va grantlar</span>
                </div>

                <div className="max-w-3xl mb-24">
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                        Ilmiy Izlanishlar va <span className="text-blue-600">Grantlar</span> Dasturi
                    </h1>
                    <p className="text-xl text-slate-500 leading-relaxed font-medium">
                        Bizning universitet ilmiy tadqiqotlarni qo'llab-quvvatlash uchun turli grantlar va tanlovlar e'lon qiladi. Talabalar va yosh olimlar uchun ajoyib imkoniyatlar dunyosi.
                    </p>
                </div>

                {/* Grants Filter Labels */}
                <div className="flex flex-wrap gap-3 mb-12">
                    {['Barchasi', 'Talabalar uchun', 'Yosh olimlar', 'Xalqaro grantlar', 'Davlat loyihalari'].map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setActiveFilter(tag)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeFilter === tag ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-white text-slate-500 border border-slate-200 hover:border-blue-300 hover:text-blue-600'}`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Grants List */}
                <div className="grid lg:grid-cols-2 gap-8 mb-32">
                    {filteredGrants.map((grant) => (
                        <div key={grant.title} className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all group flex flex-col md:flex-row gap-8 items-start animate-in fade-in zoom-in duration-300">
                            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                                <span className="material-symbols-outlined text-4xl">rewarded_ads</span>
                            </div>
                            <div className="flex-grow">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{grant.type}</span>
                                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">schedule</span> {grant.date}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">{grant.title}</h3>
                                <div className="flex items-center justify-between mt-8 border-t border-slate-50 pt-6">
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Mablag' miqdori</div>
                                        <div className="text-lg font-black text-blue-600">{grant.amount}</div>
                                    </div>
                                    <button
                                        onClick={() => handleApplyGrant(grant.title)}
                                        className="bg-slate-900 text-white px-8 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-colors"
                                    >
                                        Topshirish
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {filteredGrants.length === 0 && (
                        <div className="col-span-full py-20 text-center bg-white rounded-[3rem] border border-dashed border-slate-200">
                            <p className="text-slate-400 font-medium text-lg">Ushbu turkumda hozircha grantlar mavjud emas.</p>
                        </div>
                    )}
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[4rem] p-16 text-center text-white mb-32 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    </div>
                    <h2 className="text-4xl font-black mb-8 relative z-10">O'z loyihangizga egamisiz?</h2>
                    <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto font-medium relative z-10">
                        Biz har doim yangi va innovatsion g'oyalarni qo'llab-quvvatlashga tayyormiz. Grant olish uchun arizangizni hoziroq onlayn tarzda qoldiring.
                    </p>
                    <button
                        onClick={() => handleApplyGrant()}
                        className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-all relative z-10 shadow-2xl"
                    >
                        Ariza topshirish
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ResearchGrants;
