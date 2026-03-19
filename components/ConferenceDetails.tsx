import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ConferenceDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Mock data for conferences
    const conferenceData: Record<string, any> = {
        'digital-economy': {
            title: 'Raqamli iqtisodiyot: Muammo va yechimlar',
            date: '15-May, 2024',
            time: '10:00',
            location: 'Majlislar zali (B bino)',
            description: 'Ushbu konferensiya raqamli iqtisodiyot sohasidagi dolzarb muammolar va ularning innovatsion yechimlariga bag\'ishlanadi. Unda yetakchi iqtisodchilar va mutaxassislar o\'z ma\'ruzalari bilan ishtirok etadilar.',
            topics: [
                'Blockchain texnologiyalari bank tizimida',
                'Elektron tijorat rivojlanishining yangi bosqichlari',
                'Raqamli xavfsizlik va ma\'lumotlar himoyasi'
            ],
            agenda: [
                { time: '09:00 - 10:00', activity: 'Ishtirokchilarni ro\'yxatga olish' },
                { time: '10:00 - 10:30', activity: 'Konferensiyaning ochilish marosimi' },
                { time: '10:30 - 12:30', activity: 'Sho\'ba majlislari' }
            ]
        },
        'pedagogy': {
            title: 'Pedagogika va zamonaviy o\'qitish metodikasi',
            date: '28-May, 2024',
            time: '15:00',
            location: 'Online (Zoom)',
            description: 'Zamonaviy pedagogik texnologiyalar va masofaviy ta\'lim samaradorligini oshirish masalalari muhokama qilinadigan ilmiy-amaliy seminar.',
            topics: [
                'Gibrid ta\'limning afzalliklari',
                'Talabalarni motivatsiya qilish usullari',
                'Online kurslarni yaratish metodikasi'
            ],
            agenda: [
                { time: '14:45 - 15:00', activity: 'Zoom tizimiga ulanish' },
                { time: '15:00 - 16:30', activity: 'Asosiy ma\'ruzalar' },
                { time: '16:30 - 17:00', activity: 'Savol-javob va muhokama' }
            ]
        },
        'applied-science': {
            title: 'Applied Science 2024: International Symposium',
            date: '02-Iyun, 2024',
            time: '14:00',
            location: 'International Symposium Hall / Zoom',
            description: 'Amaliy fanlar sohasidagi eng so\'nggi xalqaro yutuqlar va kashfiyotlar taqdimoti o\'tkaziladigan yirik xalqaro tadbir.',
            topics: [
                'Nanotexnologiyalar va yangi materiallar',
                'Muqobil energiya manbalari',
                'Ekologik muammolarning ilmiy yechimlari'
            ],
            agenda: [
                { time: '13:30 - 14:00', activity: 'Xalqaro mehmonlarni kutib olish' },
                { time: '14:00 - 18:00', activity: 'Simpozium yalpi majlisi' }
            ]
        },
        'it-innovations': {
            title: 'IT sohasida innovatsiyalar forumi',
            date: '20-Iyun, 2024',
            time: '11:00',
            location: 'IT Park hosting center',
            description: 'Axborot texnologiyalari sohasidagi startaplar va innovatsion loyihalar uchun yaratilgan muloqot maydoni.',
            topics: [
                'Startup ekotizimi va venchur investitsiyalar',
                'Cloud computing va server texnologiyalari',
                'Big Data tahlili va amaliy qo\'llanishi'
            ],
            agenda: [
                { time: '11:00 - 13:00', activity: 'Loyihalar taqdimoti (Pitch Day)' },
                { time: '14:00 - 16:00', activity: 'Networking va kofebreyk' }
            ]
        }
    };

    const conf = conferenceData[id || ''] || conferenceData['digital-economy'];

    return (
        <div className="bg-[#eff8ff] min-h-screen pt-8 pb-24">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-sm mb-12 font-medium">
                    <Link to="/" className="text-slate-400 hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <Link to="/research" className="text-slate-800 hover:text-blue-600 transition-colors">Fan va ilmiy faoliyat</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <Link to="/conference-calendar" className="text-slate-800 hover:text-blue-600 transition-colors">Konferensiyalar</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <span className="text-blue-600 font-bold">{conf.title}</span>
                </div>

                <div className="bg-white rounded-[4rem] p-12 lg:p-20 shadow-xl shadow-blue-900/5 mb-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#eff8ff] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

                    <div className="relative z-10">
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="flex items-center gap-2 bg-blue-100/50 text-blue-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                                <span className="material-symbols-outlined text-sm">event</span>
                                {conf.date}
                            </div>
                            <div className="flex items-center gap-2 bg-cyan-100/50 text-cyan-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                                <span className="material-symbols-outlined text-sm">schedule</span>
                                {conf.time}
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-tight tracking-tight">
                            {conf.title}
                        </h1>

                        <div className="flex items-center gap-3 text-slate-500 font-bold mb-12">
                            <span className="material-symbols-outlined text-blue-600">location_on</span>
                            {conf.location}
                        </div>

                        <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-4xl mb-16">
                            {conf.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
                                    Muhokama qilinadigan mavzular
                                </h3>
                                <ul className="space-y-4">
                                    {conf.topics.map((topic: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                                            <span className="material-symbols-outlined text-blue-600 mt-1">check_circle</span>
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="w-1.5 h-8 bg-cyan-500 rounded-full"></span>
                                    Kun tartibi (Agenda)
                                </h3>
                                <div className="space-y-4 text-sm">
                                    {conf.agenda.map((item: any, i: number) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                            <span className="font-black text-blue-600">{item.time}</span>
                                            <span className="font-bold text-slate-700">{item.activity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="md:col-span-2 bg-gradient-to-br from-[#1a3d6b] to-blue-900 rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-3xl font-black mb-4">Ishtirok etasizmi?</h2>
                            <p className="text-blue-100 font-medium">Konferensiyada spiker yoki tinglovchi sifatida ishtirok etish uchun ro'yxatdan o'ting.</p>
                        </div>
                        <button className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all flex-shrink-0">
                            Ro'yxatdan o'tish
                        </button>
                    </div>
                    <a
                        href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                        download
                        className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-xl transition-all group cursor-pointer"
                    >
                        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">download</span>
                        </div>
                        <div className="text-sm font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">To'liq dasturni yuklash</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">PDF • 1.2 MB</div>
                    </a>
                </div>

                <button
                    onClick={() => navigate(-1)}
                    className="text-slate-400 font-bold hover:text-blue-600 transition-colors flex items-center justify-center gap-2 mx-auto"
                >
                    <span className="material-symbols-outlined">west</span>
                    Kalendarga qaytish
                </button>
            </section>
        </div>
    );
};

export default ConferenceDetails;
