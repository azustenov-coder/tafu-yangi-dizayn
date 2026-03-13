import React from 'react';
import { Link } from 'react-router-dom';

const Exams: React.FC = () => {
    const examSchedule = [
        { subject: 'Matematika', date: '15-iyul, 2025', time: '09:00', room: '302-auditoriya' },
        { subject: 'Ingliz tili', date: '16-iyul, 2025', time: '14:00', room: '405-auditoriya' },
        { subject: 'Ona tili va adabiyot', date: '17-iyul, 2025', time: '10:00', room: 'Asosiy zal' },
    ];

    return (
        <div className="py-20 bg-[#eff8ff] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <Link to="/admissions" className="hover:text-blue-600 transition-colors">Abituriyentlarga</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-blue-600 font-bold">Imtihonlar</span>
                </div>

                <h1 className="text-4xl font-black text-slate-900 mb-12">Kirish imtihonlari jadvali</h1>

                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-10 py-6 text-sm font-black text-slate-900 uppercase tracking-widest">Fan nomi</th>
                                <th className="px-10 py-6 text-sm font-black text-slate-900 uppercase tracking-widest">Sana</th>
                                <th className="px-10 py-6 text-sm font-black text-slate-900 uppercase tracking-widest">Vaqt</th>
                                <th className="px-10 py-6 text-sm font-black text-slate-900 uppercase tracking-widest">Xona</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {examSchedule.map((exam, idx) => (
                                <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                                    <td className="px-10 py-8 text-lg font-bold text-slate-900">{exam.subject}</td>
                                    <td className="px-10 py-8 text-slate-500 font-medium">{exam.date}</td>
                                    <td className="px-10 py-8 text-slate-500 font-medium">{exam.time}</td>
                                    <td className="px-10 py-8 text-slate-500 font-medium">{exam.room}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-12 bg-amber-50 border border-amber-100 p-8 rounded-3xl flex gap-6 items-start">
                    <span className="material-symbols-outlined text-amber-600 text-3xl">info</span>
                    <div>
                        <h4 className="text-lg font-black text-amber-900 mb-2">Muhim eslatma!</h4>
                        <p className="text-amber-800 font-medium leading-relaxed">
                            Imtihonga belgilangan vaqtdan 30 daqiqa oldin shaxsni tasdiqlovchi hujjat (pasport/ID karta) bilan kelishingiz so'raladi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exams;
