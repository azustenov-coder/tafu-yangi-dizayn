
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Admissions: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Bakalavriat');

  const steps = [
    {
      id: '01',
      title: 'Qabul',
      desc: 'Hujjatlaringizni masofadan turib topshirishingiz mumkin. Ariza berish jarayoni atigi 10 daqiqa vaqt oladi.',
      icon: 'segment',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      path: '/apply'
    },
    {
      id: '02',
      title: 'Imtihonlar',
      desc: "Kirish imtihonlari jadvali va o'tkazilish tartibi haqida batafsil ma'lumotga ega bo'ling.",
      icon: 'assignment',
      color: 'text-emerald-500',
      bg: 'bg-emerald-50',
      path: '/exams'
    },
    {
      id: '03',
      title: 'Natijalar',
      desc: 'Imtihon natijalarini shaxsiy kabinet yoki ID raqami orqali tekshirishingiz mumkin.',
      icon: 'military_tech',
      color: 'text-orange-500',
      bg: 'bg-orange-50',
      path: '/results'
    }
  ];

  const handleConsultation = () => {
    alert('Tez orada mutaxassislarimiz siz bilan bog\'lanishadi. Iltimos, kontaktlaringizni tekshirib ko\'ring.');
  };

  return (
    <div className="py-20 bg-[#eff8ff] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
          <Link to="/" className="hover:text-blue-600 transition-colors">Bosh sahifa</Link>
          <span className="material-symbols-outlined text-sm text-slate-300">chevron_right</span>
          <span className="text-slate-400">Abituriyentlarga</span>
          <span className="material-symbols-outlined text-sm text-slate-300">chevron_right</span>
          <span className="text-blue-600 font-bold">Universitetga kirish</span>
        </div>

        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-[#1a3d6b] tracking-tight mb-6">Universitetga qabul</h1>
          <p className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            Bizning universitetga kirish jarayoni bir necha ketma-ket bosqichlarni o'z ichiga oladi.
            Hujjatlarni muvaffaqiyatli topshirish uchun quyidagi ko'rsatmalarga amal qiling.
          </p>
        </div>

        {/* Steps List */}
        <div className="max-w-5xl mx-auto relative mb-32">
          {/* Vertical line connector */}
          <div className="absolute left-[31px] top-10 bottom-10 w-0.5 bg-slate-100 hidden md:block"></div>

          <div className="space-y-12">
            {[
              {
                id: 1,
                title: "Abituriyentlar tizimida ro'yxatdan o'ting",
                desc: "Ro'yxatdan o'tgandan so'ng siz shaxsiy kabinetga kirish imkoniyatiga ega bo'lasiz, u yerda anketani to'ldirishingiz, kerakli hujjatlaringizni yuklashingiz va ariza holatini kuzatib borishingiz mumkin.",
                icon: "how_to_reg",
                color: "text-blue-600",
                bg: "bg-blue-50",
                link: { text: "Ro'yxatdan o'tish", path: "/apply" }
              },
              {
                id: 2,
                title: "Barcha kerakli hujjatlarni yuklang",
                desc: "Shaxsiy kabinetga pasport, attestat, fotosuratlar, imtihon natijalari va boshqa talab qilinadigan hujjatlarning skanerlangan nusxalarini biriktiring. Tizim fayllarning to'g'riligini avtomatik ravishda tekshiradi.",
                icon: "upload_file",
                color: "text-emerald-500",
                bg: "bg-emerald-50"
              },
              {
                id: 3,
                title: "Ko'rib chiqish natijalarini kuting",
                desc: "Hujjatlar yuborilgandan so'ng qabul komissiyasi ularni tekshiradi va tanlov ro'yxatlarini shakllantiradi. Siz ariza holatini real vaqt rejimida shaxsiy kabinetda kuzatib borishingiz mumkin.",
                icon: "fact_check",
                color: "text-amber-500",
                bg: "bg-amber-50"
              }
            ].map((step) => (
              <div key={step.id} className="flex flex-col md:flex-row gap-8 items-start relative group">
                {/* Number Circle */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full border-2 border-blue-600 bg-[#eff8ff] flex items-center justify-center text-blue-600 font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.1)] group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {step.id}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-slate-50 group-hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className={`w-20 h-20 shrink-0 ${step.bg} rounded-[2rem] flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <span className={`material-symbols-outlined text-4xl ${step.color}`}>{step.icon}</span>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-black text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-slate-500 text-base leading-relaxed mb-6 font-medium">
                      {step.desc}
                    </p>
                    {step.link && (
                      <Link to={step.link.path} className="text-blue-600 font-black text-sm flex items-center justify-center md:justify-start gap-2 hover:gap-3 transition-all">
                        {step.link.text} <span className="material-symbols-outlined text-sm font-black">arrow_forward</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-white border border-blue-50 shadow-[0_40px_100px_rgba(0,0,0,0.03)] rounded-[3.5rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-16 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 tracking-tight leading-tight">Hozirroq hujjat topshiring!</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-12 font-medium">
              Sizda tanlagan yo'nalishingiz bo'yicha talaba bo'lish imkoniyati bor. Balla kerakli hujjatlarni tayyorlab, online ariza tugmasini bosing.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'Pasport nusxasi', icon: 'check_circle' },
                { name: 'Attestat/Diplom', icon: 'check_circle' },
                { name: '3.5x4.5 rasm', icon: 'check_circle' }
              ].map((doc, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs font-black text-slate-700 bg-[#eff8ff] px-6 py-4 rounded-full border border-blue-100/50">
                  <span className="material-symbols-outlined text-blue-600 text-lg">{doc.icon}</span>
                  {doc.name}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-80 group relative z-10">
            <Link to="/apply" className="bg-[#1a3d6b] text-white font-black px-10 py-6 rounded-[1.5rem] hover:bg-blue-600 transition-all text-center shadow-2xl shadow-blue-900/20 text-sm uppercase tracking-widest block">
              Hujjat topshirish
            </Link>
            <button
              onClick={handleConsultation}
              className="bg-white border-2 border-slate-100 text-slate-700 font-black px-10 py-6 rounded-[1.5rem] hover:bg-slate-50 transition-all text-center text-sm uppercase tracking-widest"
            >
              Konsultatsiya olish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
