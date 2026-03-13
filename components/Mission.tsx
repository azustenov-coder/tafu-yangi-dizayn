
import React from 'react';
import { Link } from 'react-router-dom';

const Mission: React.FC = () => {
    const values = [
        {
            title: "Ta'lim sifati",
            icon: 'verified',
            color: 'text-blue-600',
            bg: 'bg-blue-50',
            content: "Biz zamonaviy o'qitish metodikalari, innovatsion texnologiya va amaliyotga yo'naltirilgan ta'limdan yuk holda yuk tashishni ta'minlash uchun bor kuchimizni safarbar qilish. Maqsadimiz — xalqaro mehnat bozorida sifatlibardosh, murakkab professional boshqaruvni yuksak kompetensiya va tanqidiy fikrlash bilan hal qila oladigan mutaxassislarni tarbiyalashdir."
        },
        {
            title: "Ilmiy loyihalar",
            icon: 'science',
            color: 'text-purple-600',
            bg: 'bg-purple-50',
            content: "Universitet ilmiy tadqiqoti, yangi texnologiyalarni joriy etishni va innovatsion ishlab chiqarishni ishlab chiqishni faol qo'llab-quvvatlash. Biz talabalar va o'qituvchilar uchun xalqaro konferensiyalarda, qo'shma dasturlarda va grant dasturlarida ishtirok etishni yaratamiz."
        },
        {
            title: "Mas'uliyat va etik",
            icon: 'gavel',
            color: 'text-emerald-600',
            bg: 'bg-emerald-50',
            content: "Mas'uliyat, halollik va axloqiy jarayonlar ta'lim falsafamizning qurilishi. Biz qarorlar qabul qila oladigan, jamiyat manfaatlariga ish tutadigan va yuqori ma'naviy standartlarga rioya qilgan muammolarni tarbiyalaymiz."
        },
        {
            title: "Innovatsiyalar va kreativlik",
            icon: 'lightbulb',
            color: 'text-amber-600',
            bg: 'bg-amber-50',
            content: "Biz talabalar va professor-o'qituvchilarning tashabbuskorligi, kreativligi va nostandart fikrlashini qo'llab-quvvatlaymiz. Universitet startaplar ishlab chiqarish chiqishni, innovatsion g'oyalar tanlovlarida etishni va xususiylashtirishni amalga oshirishni rag'batlantiradi."
        },
        {
            title: "Global istiqbol",
            icon: 'public',
            color: 'text-indigo-600',
            bg: 'bg-indigo-50',
            content: "Universitetimiz jahon ta'lim va ilm-fan hamjamiyatiga integratsiyalashuvga intiladi. Biz xalqaro yordam, oliy o'quv yurtlari bilan hamkorlik va global ishtirokda ishtirok etish uchun biz yaratamiz."
        }
    ];

    return (
        <div className="py-8 bg-[#eff8ff] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <Link to="/faculties" className="hover:text-blue-600 transition-colors">Universitet haqida</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-blue-600 font-bold">Missiya va qadriyatlar</span>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Missiya va qadriyatlar</h1>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-600/5 blur-2xl rounded-full"></div>
                            <p className="relative text-slate-600 text-lg font-medium leading-relaxed italic">
                                "Bizning missiyamiz yuqori malakali, mas'uliyatli mutaxassislarni boshqarishga ko'ra ta'lim muhitini ta'minlashdir. Biz bilim, yangilanish hamda ma'naviyaxloqiy qadriyatlarni integratsiyalashuviga intilamiz, har bir talabaning inshootni va universitetning ilmiy faoliyatini mustahkamlaymiz."
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-10">
                        {values.map((v, idx) => (
                            <div key={idx} className="group relative bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 hover:shadow-xl transition-all duration-500 overflow-hidden">
                                {/* Decorative background accent */}
                                <div className={`absolute top-0 left-0 w-2 h-full ${v.bg}`}></div>

                                <div className={`flex-shrink-0 w-16 h-16 ${v.bg} ${v.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                    <span className="material-symbols-outlined text-3xl">{v.icon}</span>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{v.title}</h3>
                                    <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                        {v.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA or Quote */}
                    <div className="mt-20 text-center">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-bold shadow-lg">
                            <span className="material-symbols-outlined text-sm">auto_awesome</span>
                            G'alaba sari birgalikda!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;
