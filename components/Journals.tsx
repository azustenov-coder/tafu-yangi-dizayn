import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Journals: React.FC = () => {
    const { category } = useParams<{ category?: string }>();

    const getCategoryName = () => {
        if (category === 'international') return 'Xalqaro ilmiy faoliyat';
        if (category === 'local') return 'Mahalliy ilmiy faoliyat';
        return 'Ilmiy faoliyat';
    };

    // Nashrlar va yutuqlar ma'lumotlari
    const publications = [
        {
            type: 'SCOPUS / Q1',
            tagBg: 'bg-blue-50',
            tagColor: 'text-blue-600',
            title: 'International Smart City Infrastructure: Optimization of Traffic Flows',
            author: 'Mualliflar: R. Bekov, M. Nurmetov. 2024',
            icon: 'description',
            iconBg: 'bg-blue-50',
            iconColor: 'text-blue-500',
            category: 'international'
        },
        {
            type: 'MUKOFOT',
            tagBg: 'bg-orange-50',
            tagColor: 'text-orange-600',
            title: '"Yilning eng yaxshi innovatsion loyihasi" g\'olibi',
            author: "IT-yo'nalishidagi tadqiqotlar uchun.",
            icon: 'military_tech',
            iconBg: 'bg-orange-50',
            iconColor: 'text-orange-500',
            category: 'local'
        }
    ];

    // Konferensiyalar ma'lumotlari
    const conferences = [
        {
            day: '15',
            month: 'MAY',
            title: 'Raqamli iqtisodiyot: Muammo va yechimlar (Respublika miqyosida)',
            location: 'Majlislar zali (B bino)',
            time: '10:00',
            slug: 'digital-economy',
            category: 'local'
        },
        {
            day: '02',
            month: 'IYUN',
            title: 'Applied Science 2024: International Symposium',
            location: 'Online (Zoom/Meet)',
            time: '14:00',
            slug: 'applied-science',
            category: 'international'
        }
    ];

    // Jurnallar ma'lumotlari
    const journals = [
        {
            vol: 'Vol. 5',
            issue: '№ 2',
            title: 'Tashkent Journal of Applied Sciences',
            desc: 'Ko\'p tarmoqli ilmiy jurnal (OAK tizimidagi nashr)',
            frequency: 'Har chorakda nashr etiladi',
            category: 'local'
        },
        {
            vol: 'Vol. 2',
            issue: '№ 4',
            title: 'Modern Trends in Economics & Social Research',
            desc: 'Ijtimoiy-iqtisodiy yo\'nalishdagi xalqaro ilmiy jurnal',
            frequency: 'Yilda 2 marotaba nashr etiladi',
            category: 'international'
        }
    ];

    // Tanlangan toifaga qarab filtrlash
    const filteredPubs = category ? publications.filter(p => p.category === category) : publications;
    const filteredConfs = category ? conferences.filter(c => c.category === category) : conferences;
    const filteredJournals = category ? journals.filter(j => j.category === category) : journals;

    return (
        <div className="py-20 bg-[#eff8ff] min-h-screen">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-sm text-slate-300">chevron_right</span>
                    <Link to="/research" className="hover:text-blue-600 transition-colors">Fan va ilmiy faoliyat</Link>
                    <span className="material-symbols-outlined text-sm text-slate-300">chevron_right</span>
                    <span className="text-blue-600 font-bold">{getCategoryName()}</span>
                </div>

                {/* Page Title */}
                <div className="mb-16">
                    <h1 className="text-5xl font-black text-[#1a3d6b] mb-6 tracking-tight">{getCategoryName()}</h1>
                    <p className="max-w-3xl text-lg text-slate-500 leading-relaxed font-medium">
                        {category === 'international'
                            ? "Universitetimizning xalqaro miqyosdagi ilmiy nashrlari, konferensiyalari va hamkorlikdagi tadqiqot loyihalari."
                            : "O'zbekiston Respublikasi miqyosidagi ilmiy izlanishlar, OAK tasarrufidagi jurnallar va respublika ilmiy anjumanlari."}
                    </p>
                </div>

                {/* Nashrlar va yutuqlar Section */}
                <section className="mb-24">
                    <div className="flex items-end justify-between mb-10">
                        <div>
                            <h2 className="text-4xl font-black text-[#1a3d6b] mb-4">Nashrlar va yutuqlar</h2>
                            <div className="w-16 h-1.5 bg-blue-500 rounded-full"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredPubs.map((pub, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-xl transition-all duration-500 group flex items-start gap-8">
                                <div className={`w-16 h-16 ${pub.iconBg} rounded-2xl flex items-center justify-center shrink-0`}>
                                    <span className={`material-symbols-outlined text-3xl ${pub.iconColor}`}>{pub.icon}</span>
                                </div>
                                <div>
                                    <span className={`inline-block px-4 py-1.5 ${pub.tagBg} ${pub.tagColor} rounded-lg text-[10px] font-black tracking-wider mb-4`}>
                                        {pub.type}
                                    </span>
                                    <h3 className="text-xl font-black text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">{pub.title}</h3>
                                    <p className="text-slate-400 text-sm font-medium">{pub.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Ilmiy jurnallar Section */}
                <section className="mb-24">
                    <div className="flex items-end justify-between mb-10">
                        <div>
                            <h2 className="text-4xl font-black text-[#1a3d6b] mb-4">Ilmiy jurnallar</h2>
                            <div className="w-16 h-1.5 bg-blue-600 rounded-full"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filteredJournals.map((journal, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex items-center gap-10">
                                <div className="flex flex-col items-center justify-center w-24 h-24 bg-[#eff8ff] rounded-3xl shrink-0 border border-blue-100/50">
                                    <div className="text-xl font-black text-blue-600 leading-none">{journal.vol}</div>
                                    <div className="text-[12px] font-black text-slate-400 mt-1">{journal.issue}</div>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">{journal.title}</h3>
                                    <div className="space-y-2 text-slate-400">
                                        <div className="flex items-center gap-2 text-sm font-bold">
                                            <span className="material-symbols-outlined text-lg text-slate-300">description</span>
                                            {journal.desc}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-bold">
                                            <span className="material-symbols-outlined text-lg text-slate-300">event_repeat</span>
                                            {journal.frequency}
                                        </div>
                                    </div>
                                </div>
                                <button className="hidden sm:flex w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined">download</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </section>



                {/* Bo'sh holat uchun */}
                {filteredPubs.length === 0 && filteredJournals.length === 0 && filteredConfs.length === 0 && (
                    <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
                        <span className="material-symbols-outlined text-7xl text-slate-200 mb-6">science</span>
                        <h3 className="text-2xl font-black text-slate-400">Ma'lumotlar topilmadi</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Journals;
