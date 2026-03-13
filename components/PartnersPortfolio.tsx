import React from 'react';
import { Link } from 'react-router-dom';

const PartnersPortfolio: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "Smart Campus Integration",
            partner: "Huawei",
            category: "Digital Transformation",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
            description: "Universitet hududida 5G texnologiyasini joriy etish va aqlli boshqaruv tizimini yaratish loyihasi."
        },
        {
            id: 2,
            title: "Industrial Design Hub",
            partner: "Artel",
            category: "Manufacturing",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
            description: "Maishiy texnikalar uchun innovatsion dizayn yechimlarini ishlab chiqish bo'yicha hamkorlik."
        },
        {
            id: 3,
            title: "AI Fintech Solutions",
            partner: "TBC Bank",
            category: "Finance",
            image: "https://images.unsplash.com/photo-1551288049-bbda64626744?w=800&auto=format&fit=crop",
            description: "Bank tizimlari uchun sun'iy intellektga asoslangan tahliliy dasturlar yaratish."
        },
        {
            id: 4,
            title: "Eco Green Energy",
            partner: "Solar City",
            category: "Energy",
            image: "https://images.unsplash.com/photo-1509391366360-fe5bb65830bb?w=800&auto=format&fit=crop",
            description: "Qayta tiklanuvchi energiya manbalaridan samarali foydalanish bo'yicha ilmiy tadqiqotlar."
        }
    ];

    return (
        <div className="bg-[#eff8ff] min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-sm mb-12 font-medium justify-center">
                    <Link to="/" className="text-slate-400 hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <Link to="/business-relations" className="text-slate-400 hover:text-blue-600 transition-colors">Biznes bilan aloqalar</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <span className="text-blue-600 font-bold">Portfolio</span>
                </div>

                <div className="text-center mb-20">
                    <h1 className="text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                        Hamkorlik <span className="text-blue-600">Portfoliosi</span>
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
                        Universitetimiz va sanoat hamkorlari o'rtasida amalga oshirilgan eng muvaffaqiyatli loyihalar.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-[3rem] overflow-hidden shadow-xl shadow-blue-900/5 group hover:-translate-y-2 transition-all duration-500 border border-slate-100">
                            <div className="h-64 overflow-hidden relative">
                                <img src={project.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={project.title} />
                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-sm text-xs font-black text-blue-600 uppercase tracking-widest">
                                    {project.category}
                                </div>
                            </div>
                            <div className="p-10">
                                <div className="text-blue-600 font-black text-xs uppercase tracking-widest mb-2">{project.partner} bilan birga</div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{project.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium italic">
                                    "{project.description}"
                                </p>
                                <button className="flex items-center gap-2 text-blue-600 font-black text-xs hover:gap-4 transition-all">
                                    BATAFSIL KO'RISH <span className="material-symbols-outlined text-lg">east</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Statistics */}
                <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: 'Amalga oshirilgan', value: '80+', suffix: 'Loyiha' },
                        { label: 'Strategik hamkorlar', value: '45+', suffix: 'Kompaniya' },
                        { label: 'Talabalar jalb etilgan', value: '400+', suffix: 'Talaba' },
                        { label: 'Investitsiyalar', value: '$2M+', suffix: 'Hajm' }
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 text-center shadow-sm">
                            <div className="text-3xl font-black text-blue-600 mb-1">{stat.value}</div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</div>
                            <div className="text-xs font-bold text-slate-800">{stat.suffix}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PartnersPortfolio;
