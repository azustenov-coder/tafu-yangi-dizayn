
import React from 'react';
import { Link } from 'react-router-dom';

const BecomePartner: React.FC = () => {
    const sections = [
        {
            category: "HAMKORLIK YO'NALISHI",
            categoryIcon: "science",
            title: "Ilmiy-tadqiqot hamkorliklari",
            desc: "Ilg'or ilmiy-tadqiqot loyihalarini amalga oshirishda professor-o'qituvchilarimiz bilan hamkorlik qiling. Innovatsiyalarni joriy etish va yuqori natijalarga erishish uchun tajribamiz, resurslarimiz va uskunalarimizdan foydalaning.",
            cards: [
                {
                    title: "Afzalliklar",
                    desc: "Universitetning ilmiy salohiyatidan foydalanish va qo'shma innovatsion ishlanmalarni yaratish imkoniyati.",
                    icon: "star"
                },
                {
                    title: "Shartlar",
                    desc: "O'zaro manfaatli shartnoma asosida hamkorlik va resurslarni birgalikda taqsimlash.",
                    icon: "description"
                },
                {
                    title: "Aloqa",
                    desc: "Ilmiy bo'lim bilan bog'laning: +998 (71) 200 05 40",
                    icon: "call"
                }
            ]
        },
        {
            category: "HAMKORLIK YO'NALISHI",
            categoryIcon: "event_available",
            title: "Qo'shma tadbirlar va loyihalar",
            desc: "Konferensiyalar, seminarlar va madaniy-ma'rifiy tadbirlarni tashkil etishda biz bilan hamkorlik qiling. Birgalikda ijtimoiy va ta'lim loyihalarini amalga oshiramiz.",
            cards: [
                {
                    title: "Afzalliklar",
                    desc: "Brendingizni talabalar va akademik hamjamiyat orasida tanitish imkoniyati.",
                    icon: "star"
                },
                {
                    title: "Shartlar",
                    desc: "Tadbir miqyosi va maqsadlaridan kelib chiqqan holda kelishilgan hamkorlik.",
                    icon: "description"
                },
                {
                    title: "Aloqa",
                    desc: "Marketing bo'limi bilan bog'laning: +998 (71) 200 05 40",
                    icon: "call"
                }
            ]
        }
    ];

    return (
        <div className="bg-[#f8fafc] min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-12 font-medium">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-base">chevron_right</span>
                    <span className="text-slate-900 font-bold">UTAS hamkori bo'lish</span>
                </div>

                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Universitet hamkori bo'ling <span className="text-blue-600 uppercase">UTAS</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                        Bizning xalqaro darajadagi muassasamiz bilan hamkorlik qilishning ko'plab imkoniyatlarini o'rganing. Biz har doim yangi va istiqbolli loyihalar uchun ochiqmiz.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-32 mb-32">
                    {sections.map((section, sidx) => (
                        <div key={sidx} className="flex flex-col lg:flex-row gap-16 items-start">
                            <div className="lg:w-5/12">
                                <div className="flex items-center gap-3 mb-6 bg-blue-50 text-blue-600 px-4 py-2 rounded-full w-fit">
                                    <span className="material-symbols-outlined text-lg">{section.categoryIcon}</span>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">{section.category}</span>
                                </div>
                                <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">{section.title}</h2>
                                <div className="pl-6 border-l-4 border-blue-600">
                                    <p className="text-slate-500 text-lg font-medium leading-relaxed italic">
                                        "{section.desc}"
                                    </p>
                                </div>
                            </div>

                            <div className="lg:w-7/12 grid grid-cols-1 gap-4">
                                {section.cards.map((card, cidx) => (
                                    <div key={cidx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex items-start gap-6 group">
                                        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                                            <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-black text-slate-900 mb-2">{card.title}</h3>
                                            <p className="text-slate-500 font-medium leading-relaxed text-sm">{card.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="bg-[#0a192f] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">Biz bilan hamkorlikni boshlang</h2>
                        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto font-medium">
                            Savollaringiz bormi yoki taklif kiritmoqchimisiz? Biz siz bilan hamkorlik qilishdan mamnun bo'lamiz.
                        </p>
                        <Link to="/contact" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black hover:bg-blue-700 transition-all flex items-center gap-3 mx-auto shadow-2xl shadow-blue-600/30 active:scale-95 w-fit">
                            Biz bilan bog'lanish <span className="material-symbols-outlined">chevron_right</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomePartner;
