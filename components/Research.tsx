import React from 'react';
import { Link } from 'react-router-dom';

const Research: React.FC = () => {
  return (
    <div className="bg-[#eff8ff] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
          <Link to="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link>
          <span className="material-symbols-outlined text-sm text-slate-300">chevron_right</span>
          <span className="text-blue-800">Fan va ilmiy faoliyat</span>
          <span className="material-symbols-outlined text-sm text-slate-300">chevron_right</span>
          <span className="text-blue-600 font-bold">Ilmiy faoliyat va tadqiqotlar</span>
        </div>

        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h1 className="text-5xl font-black text-[#1a3d6b] mb-8 tracking-tight">Ilmiy konferensiyalar</h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-500 leading-relaxed mb-10 font-medium">
            Universitetimiz ilg'or texnologiyalar, innovatsion loyihalar va xalqaro miqyosdagi ilmiy izlanishlar markazi hisoblanadi. Biz nazariya va amaliyotni birlashtirib, jamiyat rivojiga hissa qo'shamiz.
          </p>
        </section>

        {/* Xalqaro Konferensiyalar Section */}
        <section className="mb-24">
          <div className="flex justify-between items-end mb-10">
            <div className="space-y-2">
              <h2 className="text-4xl font-black text-[#1a3d6b] tracking-tight">Xalqaro konferensiyalar</h2>
              <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
            </div>
            <Link to="/conference-calendar" className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
              Xalqaro kalendar <span className="material-symbols-outlined text-lg">public</span>
            </Link>
          </div>

          <div className="space-y-6">
            {[
              { day: '22', month: 'OKT', title: 'Global Education & Future Skills: International Summit 2024', location: 'London (Greenwich University) & Online', time: '12:00', slug: 'global-edu-summit' },
              { day: '02', month: 'IYUN', title: 'Applied Science 2024: International Symposium', location: 'Online (Zoom/Meet)', time: '14:00', slug: 'applied-science' }
            ].map((conf, idx) => (
              <div key={idx} className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex items-center gap-10">
                <div className="flex flex-col items-center justify-center w-24 h-24 bg-emerald-50 rounded-3xl shrink-0 border border-emerald-100/50">
                  <div className="text-3xl font-black text-emerald-600 leading-none">{conf.day}</div>
                  <div className="text-[10px] font-black text-emerald-400 mt-1">{conf.month}</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight">{conf.title}</h3>
                  <div className="flex flex-wrap gap-8 text-slate-400">
                    <div className="flex items-center gap-2 text-sm font-bold">
                      <span className="material-symbols-outlined text-lg text-slate-300">location_on</span>
                      {conf.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold">
                      <span className="material-symbols-outlined text-lg text-slate-300">schedule</span>
                      {conf.time}
                    </div>
                  </div>
                </div>
                <Link
                  to={`/conference/${conf.slug}`}
                  className="hidden lg:flex w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Respublika Ilmiy Konferensiyalari Section */}
        <section className="mb-24">
          <div className="flex justify-between items-end mb-10">
            <div className="space-y-2">
              <h2 className="text-4xl font-black text-[#1a3d6b] tracking-tight">Ilmiy konferensiyalar</h2>
              <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
            </div>
          </div>

          <div className="space-y-6">
            {[
              { day: '15', month: 'MAY', title: 'Raqamli iqtisodiyot: Muammo va yechimlar', location: 'Majlislar zali (B bino)', time: '10:00', slug: 'digital-economy' },
              { day: '10', month: 'NOYA', title: 'Zamonaviy pedagogika va innovatsiyalar Respublika ilmiy-amaliy anjumani', location: 'Asosiy bino, 4-qavat', time: '09:00', slug: 'modern-pedagogy' }
            ].map((conf, idx) => (
              <div key={idx} className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex items-center gap-10">
                <div className="flex flex-col items-center justify-center w-24 h-24 bg-blue-50 rounded-3xl shrink-0 border border-blue-100/50">
                  <div className="text-3xl font-black text-blue-600 leading-none">{conf.day}</div>
                  <div className="text-[10px] font-black text-blue-400 mt-1">{conf.month}</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">{conf.title}</h3>
                  <div className="flex flex-wrap gap-8 text-slate-400">
                    <div className="flex items-center gap-2 text-sm font-bold">
                      <span className="material-symbols-outlined text-lg text-slate-300">location_on</span>
                      {conf.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold">
                      <span className="material-symbols-outlined text-lg text-slate-300">schedule</span>
                      {conf.time}
                    </div>
                  </div>
                </div>
                <Link
                  to={`/conference/${conf.slug}`}
                  className="hidden lg:flex w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Konferensiyalar Section oxiri */}
      </div>
    </div>
  );
};

export default Research;
