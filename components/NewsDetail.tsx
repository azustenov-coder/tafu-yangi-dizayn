import React from 'react';
import { useParams, Link } from 'react-router-dom';

const NewsDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Mock data - in a real app this would come from an API based on id
    const newsData = {
        '1': {
            title: "Tanlov e'lon qilindi",
            date: '2025 M12 2, Seshanba',
            image: 'https://picsum.photos/seed/news_contest/1200/600',
            content: `
                <p>Toshkent Amaliy Fanlar Universiteti ma'muriyati talabalar va yosh tadqiqotchilar o'rtasida yangi innovatsion loyihalar tanlovini e'lon qiladi.</p>
                <p>Tanlovning asosiy maqsadi — talabalarning kreativ g'oyalarini qo'llab-quvvatlash va ularni sanoat bilan integratsiya qilishdir. G'oliblar universitet tomonidan maxsus grantlar va hamkorlik imkoniyatlari bilan taqdirlanadilar.</p>
                <p><strong>Tanlov shartlari:</strong></p>
                <ul>
                    <li>Loyiha innovatsion va dolzarb bo'lishi kerak;</li>
                    <li>Jamoada kamida 2 nafar talaba bo'lishi lozim;</li>
                    <li>Taqdimot materiallari 2-3 dekabr kunlari hakamlar hay'atiga topshirilishi kerak.</li>
                </ul>
                <p>Barcha qiziquvchilarni kutib qolamiz!</p>
            `
        },
        '2': {
            title: 'Universitetimiz xalqaro reytinglarda',
            date: '2025 M12 3, Chorshanba',
            image: 'https://picsum.photos/seed/news_ranking/1200/600',
            content: `
                <p>Toshkent Amaliy Fanlar Universiteti navbatdagi katta g'alabani qo'lga kiritdi. Nature Index xalqaro reyting agentligi tomonidan e'lon qilingan so'nggi ma'lumotlarga ko'ra, universitetimiz O'zbekistondagi oliy ta'lim muassasalari orasida kuchli 5-o'rinni egalladi.</p>
                <p>Bu natija universitetimizda olib borilayotgan yuqori sifatli ilmiy tadqiqotlar va xalqaro hamkorlikning samarasidir. Biz kelajakda yanada yuqori natijalarga erishishni maqsad qilganmiz.</p>
            `
        },
        '3': {
            title: 'UTAS hamkorlikni rivojlanmoqda',
            date: '2025 M12 4, Payshanba',
            image: 'https://picsum.photos/seed/news_collab/1200/600',
            content: `
                <p>UTAS va Turin Politeknik Universiteti oʻrtasida oʻzaro hamkorlik memorandumi imzolandi. Ushbu hujjat ikki oliygoh oʻrtasida talabalar almashinuvi, qoʻshma ilmiy loyihalar va akademik tajriba almashishni nazarda tutadi.</p>
                <p>Memorandum doirasida yaqin oylar ichida birinchi qo'shma konferensiya o'tkazilishi rejalashtirilgan.</p>
            `
        }
    };

    const newsItem = newsData[id as keyof typeof newsData] || newsData['1'];

    return (
        <div className="bg-[#eff8ff] min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-sm mb-12 font-medium">
                    <Link to="/" className="text-slate-400 hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <Link to="/news" className="text-slate-400 hover:text-blue-600 transition-colors">Yangiliklar</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <span className="text-blue-600 font-bold line-clamp-1">{newsItem.title}</span>
                </div>

                <article className="bg-white rounded-[4rem] overflow-hidden shadow-2xl shadow-blue-900/5 border border-slate-100">
                    <div className="relative h-[400px] flex items-end">
                        <img
                            src={newsItem.image}
                            className="absolute inset-0 w-full h-full object-cover"
                            alt={newsItem.title}
                        />
                        <div className="absolute inset-0 bg-blue-900/60"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>

                        <div className="relative z-10 p-12 md:p-16 w-full">
                            <div className="flex items-center text-blue-200 text-[10px] mb-6 font-black uppercase tracking-[0.3em] bg-white/10 backdrop-blur-md w-fit px-4 py-2 rounded-full border border-white/20">
                                <span className="material-symbols-outlined text-base mr-2">calendar_today</span>
                                {newsItem.date}
                            </div>

                            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
                                {newsItem.title}
                            </h1>
                        </div>
                    </div>

                    <div className="p-12 md:p-16">

                        <div
                            className="prose prose-blue max-w-none text-slate-600 text-lg leading-relaxed font-medium space-y-6"
                            dangerouslySetInnerHTML={{ __html: newsItem.content }}
                        />

                        <div className="mt-16 pt-10 border-t border-slate-100 flex justify-between items-center">
                            <div className="flex gap-4">
                                <button className="w-12 h-12 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                    <span className="material-symbols-outlined">share</span>
                                </button>
                                <button className="w-12 h-12 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                    <span className="material-symbols-outlined">print</span>
                                </button>
                            </div>
                            <Link to="/news" className="text-blue-600 font-black text-sm flex items-center gap-2 hover:gap-4 transition-all">
                                Barcha yangiliklar <span className="material-symbols-outlined">east</span>
                            </Link>
                        </div>
                    </div>
                </article>

                {/* Related News Mockup */}
                <div className="mt-20">
                    <h2 className="text-2xl font-black text-slate-900 mb-8">Boshqa yangiliklar</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { id: '2', title: 'Universitetimiz xalqaro reytinglarda', date: '2025 M12 3' },
                            { id: '3', title: 'UTAS hamkorlikni rivojlanmoqda', date: '2025 M12 4' }
                        ].map(item => (
                            <Link key={item.id} to={`/news/${item.id}`} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                                <div className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-3">{item.date}</div>
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">{item.title}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
