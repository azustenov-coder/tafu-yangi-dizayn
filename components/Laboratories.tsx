
import React from 'react';
import { Link } from 'react-router-dom';

const Laboratories: React.FC = () => {
    const labs = [
        {
            id: '204',
            name: 'Robototexnika va Mexatronika',
            subtitle: 'Markaziy laboratoriya #204',
            icon: 'precision_manufacturing',
            iconBg: 'bg-blue-50',
            iconColor: 'text-blue-500',
            details: [
                { label: 'TEXNIK TAVSIF', value: 'Fanuc M-20iB/25 robotlari' },
                { label: "DASTURIY TA'MINOT", value: 'MATLAB, SolidWorks' },
                { label: 'IMKONIYAT', value: '3D Prototip yaratish' }
            ]
        },
        {
            id: '512',
            name: 'Kiberxavfsizlik',
            subtitle: 'Markaziy laboratoriya #512',
            icon: 'dns',
            iconBg: 'bg-purple-50',
            iconColor: 'text-purple-500',
            details: [
                { label: 'INFRATUZILMA', value: 'GPU Cluster (NVIDIA A100)' },
                { label: 'TIZIMLAR', value: 'IBM QRadar, Kali' },
                { label: 'MAQSAD', value: 'Big Data Tahlili' }
            ]
        }
    ];

    return (
        <div className="py-20 bg-[#eff8ff] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
                    <Link to="/" className="hover:text-blue-600 transition-colors text-slate-400">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-sm text-slate-300">chevron_right</span>
                    <span className="text-slate-800">Fan va ilmiy faoliyat</span>
                    <span className="material-symbols-outlined text-sm text-slate-300">chevron_right</span>
                    <span className="text-blue-600 font-bold">Ilmiy laboratoriyalar</span>
                </div>

                <div className="bg-white/40 backdrop-blur-sm rounded-[4rem] p-12 lg:p-20 border border-white shadow-[0_40px_100px_rgba(0,0,0,0.02)]">
                    <div className="text-center mb-20">
                        <h1 className="text-4xl lg:text-5xl font-black text-[#1a3d6b] mb-8 tracking-tight">Ilmiy laboratoriyalar</h1>
                        <p className="max-w-3xl mx-auto text-lg text-slate-500 leading-relaxed font-medium">
                            Zamonaviy uskunalar bilan jihozlangan ixtisoslashtirilgan laboratoriyalarimiz
                            tadqiqotchilar uchun barcha imkoniyatlarni taqdim etadi.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        {labs.map((lab) => (
                            <div key={lab.id} className="bg-white p-8 lg:p-12 rounded-[2.5rem] border border-slate-50 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row lg:items-center justify-between gap-10 hover:shadow-2xl transition-all duration-500 group">
                                <div className="flex items-center gap-6 lg:w-[30%]">
                                    <div className={`w-16 h-16 ${lab.iconBg} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                                        <span className={`material-symbols-outlined text-3xl ${lab.iconColor}`}>{lab.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-slate-900 leading-tight">{lab.name}</h3>
                                        <p className="text-sm font-medium text-slate-300 mt-1">{lab.subtitle}</p>
                                    </div>
                                </div>

                                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {lab.details.map((detail, idx) => (
                                        <div key={idx}>
                                            <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-3">{detail.label}</div>
                                            <div className="text-[15px] font-bold text-slate-700 leading-tight">{detail.value}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="lg:w-[12%] flex justify-end">
                                    <Link
                                        to={`/laboratory/${lab.id}`}
                                        className="bg-blue-50 text-blue-600 px-8 py-3 rounded-xl font-bold text-sm hover:bg-blue-600 hover:text-white transition-all shadow-sm inline-block text-center"
                                    >
                                        Batafsil
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Laboratories;
