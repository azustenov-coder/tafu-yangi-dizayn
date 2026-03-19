
import React from 'react';
import { Link } from 'react-router-dom';

const Rectorate: React.FC = () => {
    const management = [
        {
            name: 'Umarov Abdusalom Vaxitovich',
            role: 'Rektor',
            info: 'Texnika fanlari doktori, professor',
            phone: '(+99871) 203-05-40',
            image: 'https://picsum.photos/seed/rector1/200/200'
        },
        {
            name: 'Shonazarov Qaxramon Rabbimovich',
            role: "Yoshlar masalalari va ma'naviy-ma'rifiy ishlar bo'yicha birinchi prorektor",
            info: 'Pedagogika fanlari belgilashi, dotsent',
            phone: '(+99871) 203-05-40 (233)',
            image: 'https://picsum.photos/seed/prorektor_y/200/200'
        },
        {
            name: 'Vapayev Murodjon Dusummatovich',
            role: "O'quv ishlari bo'yicha prorektor",
            info: 'Texnika fanlari bo\'yicha falsafa doktori (PhD), dotsent',
            phone: '(+99871) 203-05-40 (316)',
            image: 'https://picsum.photos/seed/prorektor_o/200/200'
        },
        {
            name: "Zuparov Bobur Botir o'g'li",
            role: 'Rektor yordamchisi',
            info: '',
            phone: '(+99871) 71-203-05-40 (221)',
            image: 'https://picsum.photos/seed/assistant/200/200'
        },
        {
            name: 'Qayumov Olim Sadriddinovich',
            role: 'Kengash kotibi',
            info: 'Filologiya fanlari doktori, professor',
            phone: '(+99871) 203-05-40',
            image: 'https://picsum.photos/seed/secretary/200/200'
        }
    ];

    const advisors = [
        {
            name: 'Yusupov Artukbek Adilovich',
            role: 'Rektor maslahatchisi',
            info: 'Falsafa muxlislari, dotsent',
            phone: '(+99871) 203-05-40 (206)',
            image: ''
        },
        {
            name: 'Muhammadiyev Aktam Zayniddinovich',
            role: 'Rektor maslahatchisi',
            info: '',
            phone: '(+99871) 203-05-40 (234)',
            image: ''
        }
    ];

    const PersonCard = ({ person }: { person: any }) => (
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow">
            <div className="w-24 h-24 flex-shrink-0 bg-slate-100 rounded-full overflow-hidden border-2 border-slate-50 shadow-inner mx-auto sm:mx-0">
                {person.image ? (
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                        <span className="material-symbols-outlined text-5xl">person</span>
                    </div>
                )}
            </div>
            <div className="flex flex-col text-center sm:text-left">
                <div className="mb-2">
                    <span className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-slate-100 inline-block">
                        {person.role}
                    </span>
                </div>
                <h3 className="text-xl font-black text-blue-600 mb-1 leading-tight">{person.name}</h3>
                {person.info && <p className="text-slate-400 text-sm italic mb-2 leading-tight">{person.info}</p>}
                <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-500 text-sm mt-auto">
                    <span className="material-symbols-outlined text-lg opacity-60">call</span>
                    <span className="font-medium">Telefon: {person.phone}</span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="py-8 bg-[#eff8ff] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <Link to="/about" className="hover:text-blue-600 transition-colors">Universitet haqida</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <Link to="/infrastructure" className="hover:text-blue-600 transition-colors">Infratuzilma</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-blue-600 font-bold">Rektorat</span>
                </div>

                <h1 className="text-4xl font-black text-slate-900 text-center mb-16 tracking-tight">Rektorat</h1>

                {/* Main Management Group */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {management.map((person, idx) => (
                        <div key={idx}>
                            <PersonCard person={person} />
                        </div>
                    ))}
                </div>

                {/* Advisors Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">Rektor maslahatchilari</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {advisors.map((person, idx) => (
                            <div key={idx}>
                                <PersonCard person={person} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Rectorate;
