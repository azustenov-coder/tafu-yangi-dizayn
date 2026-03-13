
import React from 'react';
import { Link } from 'react-router-dom';

const Grants: React.FC = () => {
    const mainGrants = [
        {
            title: "Ilmiy tadqiqot grantlari",
            desc: "Talabalar va magistrantlarning innovatsion g'oyalarini moliyaviy qo'llab-quvvatlash uchun ajratiladigan grantlar.",
            amount: "10,000,000 so'mgacha",
            deadline: "15-Mart",
            icon: "science"
        },
        {
            title: "Startup tashabbuslari",
            desc: "Biznes sohasidagi kreativ loyihalarni amalga oshirish va rivojlantirish uchun investitsiya dasturlari.",
            amount: "50,000,000 so'mgacha",
            deadline: "1-Aprel",
            icon: "rocket_launch"
        },
        {
            title: "Xalqaro almashinuv grantlari",
            desc: "Chet el universitetlarida qisqa muddatli kurslar va semestrlar uchun to'liq qoplanadigan grantlar.",
            amount: "To'liq qoplanadi",
            deadline: "Doimiy",
            icon: "flight_takeoff"
        }
    ];

    const scholarships = [
        {
            name: "Universitet Grandi",
            reward: "100% Kontrakt qoplab beriladi",
            criteria: "Barcha fanlardan a'lo baho va faol jamoat ishlari",
            limit: "Cheklangan miqdorda",
            icon: "military_tech",
            bg: "from-blue-600 to-indigo-700"
        },
        {
            name: "Rektor Stipendiyasi",
            reward: "Har oy 1,000,000 so'm",
            criteria: "Top-10 talaba ro'yxatiga kirish",
            limit: "Har semestr bo'yicha",
            icon: "workspace_premium",
            bg: "from-emerald-500 to-teal-600"
        },
        {
            name: "Nogironligi bo'lgan shaxslar uchun",
            reward: "50% Kontrakt chegirmasi",
            criteria: "Tegishli davlat hujjatlari",
            limit: "Barcha uchun",
            icon: "accessible",
            bg: "from-amber-500 to-orange-600"
        }
    ];

    const handleApply = (name: string) => {
        alert(`"${name}" uchun arizangiz qabul qilinish jarayonida. Iltimos, dekanatga kerakli hujjatlarni taqdim eting.`);
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
                    <span className="text-blue-600 font-bold">Grantlar va stipendiyalar</span>
                </div>

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">Grantlar va stipendiyalar</h1>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                        O'qishdagi muvaffaqiyatlaringiz munosib taqdirlanadi. Bizda ijtimoiy himoya va rag'batlantirish tizimi yo'lga qo'yilgan.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                    {mainGrants.map((grant, idx) => (
                        <div key={idx} className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col items-center text-center">
                            <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
                            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                <span className="material-symbols-outlined text-4xl">{grant.icon}</span>
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">{grant.title}</h2>
                            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">{grant.desc}</p>

                            <div className="mt-auto w-full">
                                <div className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl mb-6">
                                    <div className="text-left">
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Mablag'</p>
                                        <p className="text-blue-600 font-bold">{grant.amount}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Muxlat</p>
                                        <p className="text-slate-900 font-bold">{grant.deadline}</p>
                                    </div>
                                </div>
                                <Link to="/research-grants" className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-blue-600 transition-colors text-center block">
                                    Batafsil ma'lumot
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scholarships Section */}
                <div className="mb-24">
                    <div className="flex items-center gap-6 mb-12">
                        <div className="w-1.5 h-10 bg-blue-600 rounded-full"></div>
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Stipendiyalar va imtiyozlar</h2>
                    </div>
                    <div className="space-y-6">
                        {scholarships.map((s, idx) => (
                            <div key={idx} className="group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row items-center gap-8">
                                <div className={`w-28 h-28 bg-gradient-to-br ${s.bg} rounded-[2rem] flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-105 transition-transform`}>
                                    <span className="material-symbols-outlined text-5xl">{s.icon}</span>
                                </div>

                                <div className="flex-grow text-center md:text-left">
                                    <h3 className="text-2xl font-black text-slate-900 mb-2">{s.name}</h3>
                                    <p className="text-blue-600 font-black text-lg mb-4">{s.reward}</p>
                                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                        <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-slate-100">
                                            MEZON: {s.criteria}
                                        </span>
                                        <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-slate-100">
                                            MIQDOR: {s.limit}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleApply(s.name)}
                                    className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-md active:scale-95"
                                >
                                    Ariza topshirish
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Research Groups Section */}
                <div className="mt-24 p-12 bg-white rounded-[4rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h3 className="text-3xl font-black text-slate-900 mb-6">Ilmiy-tadqiqot guruhlari</h3>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8">
                            Bizning laboratoriyalarimizda professor-o'qituvchilar rahbarligida real muammolar ustida tadqiqot olib boring. Natijani maqola sifatida chop eting!
                        </p>
                        <ul className="space-y-4">
                            {['AI va Big Data guruhi', 'Ijtimoiy-psixologik tahlillar', 'Qayta tiklanuvchi energiya manbalari'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-800 font-bold">
                                    <span className="material-symbols-outlined text-blue-600">check_circle</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-1/3 w-full">
                        <div className="relative aspect-square bg-blue-600 rounded-[3rem] overflow-hidden group">
                            <img src="https://picsum.photos/seed/researcher/500/500" className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:scale-110 transition-transform duration-700" alt="Research" />
                            <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-white">
                                <p className="text-4xl font-black uppercase tracking-tight">Kashfiyotlarga tayyormisiz?</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Grants;
