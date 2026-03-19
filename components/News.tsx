import React from 'react';
import { Link } from 'react-router-dom';
import { NewsItem } from '../types';

const News: React.FC = () => {
    const allNews: NewsItem[] = [
        {
            id: '1',
            title: "Tanlov e'lon qilindi",
            date: '2025 M12 2, Seshanba',
            summary: "2025-yil 2-3 dekabr kunlari universitetda tanlov bo'lib o'tadi...",
            image: 'https://picsum.photos/seed/news_contest/600/400'
        },
        {
            id: '2',
            title: 'Universitetimiz xalqaro reytinglarda',
            date: '2025 M12 3, Chorshanba',
            summary: "Toshkent Amaliy Fanlar Universiteti Nature Index bo'yicha O'zbekistondagi universitetlar orasida 5-o...",
            image: 'https://picsum.photos/seed/news_ranking/600/400'
        },
        {
            id: '3',
            title: 'UTAS hamkorlikni rivojlanmoqda',
            date: '2025 M12 4, Payshanba',
            summary: "Toshkent Amaliy Fanlar Universiteti va Turin Politeknik Universiteti o'zaro hamkorlik memorandumi...",
            image: 'https://picsum.photos/seed/news_collab/600/400'
        },
        {
            id: '4',
            title: "Yangi o'quv yili uchun qabul boshlandi",
            date: '2025 M12 5, Juma',
            summary: "Universitetimizda 2025-2026 o'quv yili uchun qabul jarayonlari rasman boshlandi. Batafsil ma'lumot...",
            image: 'https://picsum.photos/seed/news_admission/600/400'
        },
        {
            id: '5',
            title: "Xalqaro ilmiy konferensiya",
            date: '2025 M12 10, Chorshanba',
            summary: "Iqtisodiyot va IT sohasidagi eng so'nggi tadqiqotlarga bag'ishlangan xalqaro konferensiya bo'lib o'tadi.",
            image: 'https://picsum.photos/seed/news_conf/600/400'
        },
        {
            id: '6',
            title: "Talabalar turar joyi yangilandi",
            date: '2025 M12 12, Juma',
            summary: "Talabalar uchun yangi va zamonaviy jihozlangan turar joy binosi foydalanishga topshirildi.",
            image: 'https://picsum.photos/seed/news_dorm/600/400'
        }
    ];

    return (
        <div className="bg-[#eff8ff] min-h-screen pt-8 pb-20">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-sm mb-12 font-medium">
                    <Link to="/" className="text-slate-400 hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <span className="text-blue-600 font-bold">Barcha yangiliklar</span>
                </div>

                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">Yangiliklar</h1>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl">
                        Universitetimiz hayotidagi eng so'nggi voqealar, e'lonlar va ilmiy yutuqlardan xabardor bo'ling.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allNews.map((item) => (
                        <div key={item.id} className="group bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full overflow-hidden">
                            <div className="relative overflow-hidden aspect-[4/3]">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                {item.id === '1' && (
                                    <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center p-6 text-center backdrop-blur-sm">
                                        <h3 className="text-white text-2xl font-black uppercase leading-tight tracking-widest">DIQQAT TANLOV</h3>
                                    </div>
                                )}
                            </div>
                            <div className="p-10 flex flex-col flex-grow">
                                <div className="flex items-center text-slate-400 text-xs mb-4 font-bold uppercase tracking-wider">
                                    <span className="material-symbols-outlined text-sm mr-2 text-blue-600">calendar_today</span>
                                    {item.date}
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-8 flex-grow font-medium">
                                    {item.summary}
                                </p>
                                <Link to={`/news/${item.id}`} className="flex items-center text-blue-600 font-black text-xs uppercase tracking-widest group/link mt-auto">
                                    Batafsil
                                    <span className="material-symbols-outlined ml-2 text-lg group-hover/link:translate-x-2 transition-transform">east</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default News;
