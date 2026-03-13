
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface PlaceholderProps {
    title: string;
    parent?: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ title, parent }) => {
    const navigate = useNavigate();

    return (
        <div className="py-8 bg-[#eff8ff] min-h-screen relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-sm mb-20 font-medium whitespace-nowrap">
                    <Link to="/" className="text-slate-400 hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    {parent && (
                        <>
                            <Link
                                to={parent === "Hamkorlik" ? "/partnerships" : "/research"}
                                className="text-slate-800 hover:text-blue-600 transition-colors"
                            >
                                {parent}
                            </Link>
                            <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                        </>
                    )}
                    <span className="text-blue-600 font-bold">{title}</span>
                </div>

                <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mt-10">
                    {/* Premium Iconic Element */}
                    <div className="relative mb-16 group">
                        <div className="w-40 h-40 bg-white shadow-2xl shadow-blue-200/50 rounded-[3rem] flex items-center justify-center relative z-10 border border-white transition-all duration-700 group-hover:rotate-6 group-hover:scale-105">
                            <span className="material-symbols-outlined text-7xl text-blue-600">engineering</span>
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 rounded-2xl shadow-xl flex items-center justify-center text-white z-20 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2">
                            <span className="material-symbols-outlined text-3xl">auto_awesome</span>
                        </div>
                        {/* Decorative rings */}
                        <div className="absolute inset-0 border-2 border-dashed border-blue-200 rounded-[3.5rem] -m-4 animate-spin-slow opacity-50"></div>
                    </div>

                    <div className="space-y-8 mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-100/50 text-blue-700 px-6 py-2 rounded-full border border-blue-100">
                            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                            <span className="text-[11px] font-black uppercase tracking-[0.3em]">Sahifa tayyorlanmoqda</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">
                            {title}
                        </h1>

                        <div className="space-y-4">
                            <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl mx-auto">
                                Ushbu bo'lim hozirda mutaxassislarimiz tomonidan yangilanmoqda va tez orada ishga tushiriladi.
                            </p>
                            <div className="flex items-center justify-center gap-4">
                                <div className="h-[1px] w-12 bg-slate-200"></div>
                                <span className="text-blue-600 font-black text-2xl tracking-[0.3em] uppercase">Tez orada</span>
                                <div className="h-[1px] w-12 bg-slate-200"></div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => navigate(-1)}
                        className="bg-[#1a3d6b] text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-2xl shadow-blue-900/20 flex items-center gap-4 group hover:-translate-y-1"
                    >
                        <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-x-1">west</span>
                        Bosh sahifaga qaytish
                    </button>

                    {/* Decorative Background Element */}
                    <div className="mt-24 opacity-[0.03] select-none pointer-events-none">
                        <span className="text-8xl md:text-[14rem] font-black uppercase tracking-tighter text-slate-900 leading-none">University</span>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 15s linear infinite;
                }
            `}} />
        </div>
    );
};

export default Placeholder;
