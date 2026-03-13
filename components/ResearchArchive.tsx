import React from 'react';
import { Link } from 'react-router-dom';

const ResearchArchive: React.FC = () => {
    const archives = [
        {
            year: '2023', items: [
                { type: 'Nashr', title: 'Sustainable Energy Systems in Central Asia', detail: 'Scopus Q2, 2023' },
                { type: 'Mukofot', title: 'Eng yaxshi ilmiy maqola diplomiga sazovor bo\'lingan', detail: 'Xalqaro simpozium, 2023' }
            ]
        },
        {
            year: '2022', items: [
                { type: 'Nashr', title: 'AI in Higher Education: Challenges and Opportunities', detail: 'Conference Proceeding, 2022' },
                { type: 'Grant', title: 'ERASMUS+ loyihasi g\'olibi', detail: 'Evropa Ittifoqi granti, 2022' }
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
                    <span className="text-blue-600 font-bold">Ilmiy arxiv</span>
                </div>

                <div className="mb-16">
                    <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">Ilmiy Arxiv</h1>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl">
                        Universitetimizning yillar davomidagi ilmiy yutuqlari va nashrlari to'plami.
                    </p>
                </div>

                <div className="space-y-16">
                    {archives.map((yearGroup) => (
                        <div key={yearGroup.year}>
                            <div className="flex items-center gap-4 mb-8">
                                <h2 className="text-3xl font-black text-blue-600">{yearGroup.year}</h2>
                                <div className="h-[2px] flex-grow bg-slate-200"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {yearGroup.items.map((item, i) => (
                                    <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all flex items-start gap-6">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${item.type === 'Nashr' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-500'}`}>
                                            <span className="material-symbols-outlined">{item.type === 'Nashr' ? 'book' : 'award_star'}</span>
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-2">{item.type}</div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">{item.title}</h3>
                                            <p className="text-sm text-slate-400 font-medium">{item.detail}</p>
                                        </div>
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

export default ResearchArchive;
