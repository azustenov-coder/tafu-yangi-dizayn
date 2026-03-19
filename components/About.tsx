
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="py-8 bg-[#eff8ff] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 font-medium">
          <Link to="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <Link to="/about" className="hover:text-blue-600 transition-colors">Universitet haqida</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-blue-600 font-bold">Universitet tarixi</span>
        </div>

        {/* Main Content */}
        <div className="bg-[#eff8ff] rounded-[2.5rem] p-12 md:p-16 relative overflow-hidden">
          {/* Decorative background circle if needed, simpler to just use color for now */}

          <div className="relative z-10 max-w-3xl">
            <span className="inline-block bg-blue-100/80 text-blue-700 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              Tarixiy Meros
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
              O'tmishdan <span className="text-blue-600">Kelajakka:</span><br />
              Bizning Tariximiz
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-2xl font-medium">
              Universitetimiz 1992-yilda mamlakatimiz mustaqilligining ilk yillarida ilm-fan poydevorini mustahkamlash maqsadida tashkil etilgan. O'ttiz yildan ortiq vaqt davomida biz mintaqaning yetakchi intellektual markazi darajasiga ko'tarildik.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/history-archive" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-blue-600/20 flex items-center gap-2 transition-all hover:-translate-y-1">
                Arxiv materiallari
                <span className="material-symbols-outlined text-lg">folder_open</span>
              </Link>
              <Link to="/museum-tour" className="bg-white hover:bg-slate-50 text-slate-700 font-bold py-3.5 px-8 rounded-xl shadow-sm flex items-center gap-2 transition-all hover:-translate-y-1 border border-slate-100">
                Muzey sayohati
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
