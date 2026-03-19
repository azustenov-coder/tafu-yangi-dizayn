import React from 'react';
import { Link } from 'react-router-dom';

const ConferenceCalendar: React.FC = () => {
    const months = [
        {
            month: 'MAY 2024', events: [
                { id: '1', slug: 'digital-economy', day: '15', title: 'Raqamli iqtisodiyot: Muammo va yechimlar', location: 'Majlislar zali (B bino)', time: '10:00' },
                { id: '2', slug: 'pedagogy', day: '28', title: 'Pedagogika va zamonaviy o\'qitish metodikasi', location: 'Online', time: '15:00' }
            ]
        },
        {
            month: 'IYUN 2024', events: [
                { id: '3', slug: 'applied-science', day: '02', title: 'Applied Science 2024: International Symposium', location: 'Zoom/Meet', time: '14:00' },
                { id: '4', slug: 'it-innovations', day: '20', title: 'IT sohasida innovatsiyalar forumi', location: 'IT Park hosting', time: '11:00' }
            ]
        }
    ];

    return (
        <div className="bg-[#eff8ff] min-h-screen pt-8 pb-20">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-sm mb-12 font-medium">
                    <Link to="/" className="text-slate-400 hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <Link to="/research" className="text-slate-800 hover:text-blue-600 transition-colors">Fan va ilmiy faoliyat</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <span className="text-blue-600 font-bold">Konferensiyalar kalendari</span>
                </div>

                <div className="mb-16">
                    <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">Konferensiyalar</h1>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl">
                        Yaqin oylarda rejalashtirilgan barcha ilmiy konferensiyalar va uchrashuvlar taqvimi.
                    </p>
                </div>

                <div className="space-y-16">
                    {months.map((m) => (
                        <div key={m.month} className="bg-white p-12 rounded-[4rem] shadow-sm border border-slate-50">
                            <h2 className="text-2xl font-black text-[#1a3d6b] mb-10 flex items-center gap-4">
                                <span className="material-symbols-outlined text-3xl">calendar_month</span>
                                {m.month}
                            </h2>
                            <div className="space-y-8">
                                {m.events.map((event: any, i) => (
                                    <div key={i} className="flex flex-col md:flex-row md:items-center gap-8 group">
                                        <div className="w-20 h-20 bg-blue-600 text-white rounded-[2rem] flex flex-col items-center justify-center shrink-0 shadow-lg shadow-blue-600/30">
                                            <div className="text-2xl font-black">{event.day}</div>
                                        </div>
                                        <div className="flex-grow pb-8 border-b border-slate-50 last:border-0 md:last:pb-0">
                                            <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">{event.title}</h3>
                                            <div className="flex flex-wrap gap-8 text-slate-400">
                                                <div className="flex items-center gap-2 text-sm font-bold">
                                                    <span className="material-symbols-outlined text-lg text-slate-300">location_on</span>
                                                    {event.location}
                                                </div>
                                                <div className="flex items-center gap-2 text-sm font-bold">
                                                    <span className="material-symbols-outlined text-lg text-slate-300">schedule</span>
                                                    {event.time}
                                                </div>
                                            </div>
                                        </div>
                                        <Link
                                            to={`/conference/${event.slug}`}
                                            className="bg-slate-50 text-slate-600 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all self-start md:self-center inline-block"
                                        >
                                            Batafsil
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ConferenceCalendar;
