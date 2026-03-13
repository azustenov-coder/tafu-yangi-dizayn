import React from 'react';
import { Link } from 'react-router-dom';

const AlumniStories: React.FC = () => {
    const stories = [
        {
            id: 1,
            name: "Azizov Bekzod",
            year: "2020",
            role: "Lead Engineer at Google",
            quote: "Universitetimizda olgan bilimlarim va u yerdagi muhit mening Google kompaniyasiga ishga kirishimda poydevor bo'ldi.",
            image: "https://images.unsplash.com/photo-1544717297-fa95b3ee51f3?w=500&auto=format&fit=crop",
            fullStory: "Bekzod Azizov 2020-yilda Axborot texnologiyalari fakultetini tamomladi. Talabalik davridanoq dasturlashga juda qiziqqan va bir necha xalqaro loyihalarda ishtirok etgan. Bugungi kunda u AQShda Google kompaniyasining bosh muhandislaridan biri bo'lib faoliyat yuritmoqda."
        },
        {
            id: 2,
            name: "Karimova Nilufar",
            year: "2018",
            role: "CEO of 'Global Consulting'",
            quote: "Iqtisodiyot fakultetida olingan bilimlar bugun o'z xususiy konsalting korxonamni rivojlantirishda yordam bermoqda.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop",
            fullStory: "Nilufar Karimova 2018-yilda Iqtisodiyot fakultetini bitirgan. 2 yillik tajribadan so'ng u o'zining konsalting kompaniyasiga asos solgan. Bugungi kunda uning kompaniyasi O'zbekistondagi 50 dan ortiq yirik korxonalarga moliyaviy maslahatlar berib kelmoqda."
        },
        {
            id: 3,
            name: "Saidov Rustam",
            year: "2019",
            role: "Senior Researcher at CERN",
            quote: "Ilmiy tadqiqotlar markazidagi tajribam meni katta fan olamiga yetakladi. Universitet laboratoriyalari xalqaro darajaga mos.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop",
            fullStory: "Rustam Saidov fizika yo'nalishida tahsil olgan. Uning magistrlik dissertatsiyasi xalqaro jurnallarda chop etilgan va u CERN xalqaro markazidan taklifnoma olgan."
        },
        {
            id: 4,
            name: "Abduraxmonova Malika",
            year: "2021",
            role: "Lead Designer at Artel",
            quote: "Dizayn va kreativ yondashuv universitetimizda har doim qo'llab-quvvatlangan. Bu mening ijodiy rivojlanishimda muhim rol o'ynadi.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop",
            fullStory: "Malika dizayn sohasida yangicha yo'nalishlarni tatbiq etishda peshqadam. U talabalik yillaridayoq bir necha brendlarning vizual imidjini yaratgan."
        }
    ];

    return (
        <div className="bg-[#eff8ff] min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-sm mb-12 font-medium justify-center">
                    <Link to="/" className="text-slate-400 hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <Link to="/alumni" className="text-slate-400 hover:text-blue-600 transition-colors">Alumni</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <span className="text-blue-600 font-bold">Muvaffaqiyat hikoyalari</span>
                </div>

                <h1 className="text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                    Muvaffaqiyat <span className="text-blue-600">Hikoyalari</span>
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-20 font-medium">
                    Bizning bitiruvchilarimiz — universitetimizning haqiqiy faxri. Ularning har biri o'z sohasida yuksak natijalarga erishgan.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {stories.map((story) => (
                        <div key={story.id} className="bg-white rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-sm border border-slate-100 group hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500">
                            <div className="md:w-1/2 relative overflow-hidden h-64 md:h-auto">
                                <img
                                    src={story.image}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    alt={story.name}
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Alumni</span>
                                </div>
                            </div>
                            <div className="md:w-1/2 p-10 flex flex-col justify-center text-left">
                                <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-4 block">
                                    {story.year}-yil bitiruvchisi
                                </span>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                                    {story.name}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium italic">
                                    "{story.quote}"
                                </p>
                                <div className="mt-auto">
                                    <div className="text-sm font-bold text-slate-900">{story.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Inspiration Section */}
                <div className="mt-32 bg-[#1a3d6b] rounded-[4rem] p-16 md:p-24 relative overflow-hidden text-center text-white">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                            Siz ham o'z muvaffaqiyat hikoyangizni yarating!
                        </h2>
                        <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-12 font-medium">
                            UTAS sizga dunyo darajasidagi ta'lim va cheksiz imkoniyatlar eshigini ochadi.
                        </p>
                        <Link to="/apply" className="bg-white text-blue-900 px-12 py-6 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-2xl inline-block">
                            Hozirroq hujjat topshirish
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlumniStories;
