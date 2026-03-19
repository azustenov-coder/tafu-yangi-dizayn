
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NewsItem, Program } from '../types';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bachelor' | 'master'>('bachelor');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "UTAS — Sizning muvaffaqiyatingizni birga quramiz!",
      desc: "Talaba hayoti, yangiliklar va haqida kuzatib boring! Telegramdagi rasmiy kanalimizga obuna bo'ling!",
      image: "/images/university_building.png",
      link: "/about"
    },
    {
      title: "Zamonaviy ta'lim va innovatsion muhit",
      desc: "Universitetimizda eng so'nggi texnologiyalar va tajribali ustozlar sizga yo'l ko'rsatadi.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      link: "/faculties"
    },
    {
      title: "Kelajak kasblarini biz bilan egallang",
      desc: "Axborot texnologiyalari, iqtisodiyot va pedagogika yo'nalishlarida professional mutaxassis bo'ling.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      link: "/directions"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const news: NewsItem[] = [
    {
      id: '1',
      title: "Tanlov e'lon qilindi",
      date: '2025 M12 2, Seshanba',
      summary: "2025-yil 2-3 dekabr kunlari universitetda tanlov bo'lib o'tadi...",
      image: 'https://picsum.photos/seed/news_contest/600/400'
    },
    {
      id: '2',
      title: 'Universitetimiz xalqaro reytinglarda',
      date: '2025 M12 3, Chorshanba',
      summary: "Toshkent Amaliy Fanlar Universiteti Nature Index bo'yicha O'zbekistondagi universitetlar orasida 5-o...",
      image: 'https://picsum.photos/seed/news_ranking/600/400'
    },
    {
      id: '3',
      title: 'UTAS hamkorlikni rivojlanmoqda',
      date: '2025 M12 4, Payshanba',
      summary: "Toshkent Amaliy Fanlar Universiteti va Turin Politeknik Universiteti o'zaro hamkorlik memorandumi...",
      image: 'https://picsum.photos/seed/news_collab/600/400'
    }
  ];

  const announcements = [
    {
      id: '1',
      title: "Tanlov e'lon qilindi",
      date: 'Seshanba', // Using simplistic date as per screenshot
      summary: "2025-yil 2-3 dekabr kunlari universitetda tanlov bo'lib o'tadi...",
      image: 'https://picsum.photos/seed/announce_1/600/400'
    },
    {
      id: '2',
      title: 'Universitetimiz xalqaro reytinglarda',
      date: '',
      summary: "Toshkent Amaliy Fanlar Universiteti Nature Index bo'yicha O'zbekistondagi universitetlar orasida 5-o...",
      image: 'https://picsum.photos/seed/announce_2/600/400'
    },
    {
      id: '3',
      title: 'UTAS hamkorlikni rivojlanmoqda',
      date: '2025 M12 4, Payshanba',
      summary: "Toshkent Amaliy Fanlar Universiteti va Turin Politeknik Universiteti o'zaro hamkorlik memorandumi...",
      image: 'https://picsum.photos/seed/announce_3/600/400'
    }
  ]

  const bachelorPrograms: Program[] = [
    { id: '1', title: 'Pedagogika va psixologiya', description: "Zamonaviy ta'lim metodikalari, shaxsiy va texnik yordam ko'rsatish yuqori...", count: '6 yo\'nalish', icon: 'school', color: 'indigo' },
    { id: '2', title: 'Iqtisodiyot', description: "Global moliya bozori, iqtisodiy iqtisodiyot va strategik menejment bo'yicha fundamental bili...", count: '8 yo\'nalish', icon: 'trending_up', color: 'emerald' },
    { id: '3', title: 'Tarix va filologiya', description: "Madaniy meros tadqiq etish, tilshunoslik va adabiyotshunoslikdan foydalanish masalalarini o...", count: '4 yo\'nalish', icon: 'menu_book', color: 'amber' },
    { id: '4', title: 'Axborot texnologiyalari', description: "Dasturiy injiniring, kiberxavfsizlik va sun'iy intellektni yig'ishda novatsion echimlar ...", count: '4 yo\'nalish', icon: 'memory', color: 'blue' }
  ];

  // Placeholder for masters - reusing same data for demo or slightly different
  const masterPrograms: Program[] = [
    { id: '1', title: 'Pedagogika (Magistratura)', description: "Ilmiy tadqiqotlar va oliy ta'lim metodikasi...", count: '3 yo\'nalish', icon: 'school', color: 'indigo' },
    { id: '2', title: 'Iqtisodiyot (Magistratura)', description: "Strategik tahlil va makroiqtisodiy bashorat...", count: '2 yo\'nalish', icon: 'trending_up', color: 'emerald' },
  ];

  const currentPrograms = activeTab === 'bachelor' ? bachelorPrograms : masterPrograms;

  const hexLinks = [
    { title: 'Universitet fakultetlari', icon: 'domain', path: '/faculties' },
    { title: 'Infratuzilma', icon: 'groups_3', path: '/infrastructure' },
    { title: 'Kontaktlar', icon: 'call', path: '/contact' },
    { title: 'Hamkorlar', icon: 'supervised_user_circle', path: '/partnerships' },
    { title: 'Stipendiyalar va yordam', icon: 'award_star', path: '/scholarships' },
    { title: 'Missiya va qadriyatlar', icon: 'public', path: '/mission' },
    { title: 'Universitetga qabul', icon: 'school', path: '/apply' },
    { title: 'Hamkorlik uchun kontaktlar', icon: 'handshake', path: '/business-relations' },
    { title: 'Tadqiqotlar va nashrlar', icon: 'article', path: '/research' },
  ];

  return (
    <div className="bg-[#eff8ff] font-sans">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
              src={slide.image}
            />
            <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl leading-tight mb-6">
                {slide.title}
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                {slide.desc}
              </p>
              {/* <div>
                <Link to={slide.link} className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                  Batafsil <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </Link>
              </div> */}
            </div>
          </div>
        ))}

        {/* Slider dots */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full h-2 ${index === currentSlide ? 'w-10 bg-cyan-400' : 'w-2 bg-white/40 hover:bg-white/60'}`}
            ></button>
          ))}
        </div>

        {/* Slider arrows */}
        <div className="absolute bottom-10 right-10 flex space-x-4 z-20">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-colors border border-white/10"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 transition-all active:scale-95"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </section>

      {/* Yangiliklar Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-4">
          <h2 className="text-3xl font-bold text-slate-900 relative">
            Yangiliklar
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-600 rounded-full translate-y-4"></span>
          </h2>
          <Link to="/news" className="text-slate-500 hover:text-blue-600 font-medium flex items-center text-sm">
            Barchasi <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="relative overflow-hidden rounded-t-2xl aspect-[4/3]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {item.id === '1' && (
                  <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center p-6 text-center">
                    <h3 className="text-white text-3xl font-bold uppercase leading-tight">DIQQAT TANLOV</h3>
                    <div className="absolute bottom-0 right-0 p-4">
                      {/* Mockup for person image overlay if needed */}
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-slate-400 text-xs mb-3 font-medium uppercase tracking-wide">
                  <span className="material-symbols-outlined text-sm mr-2">calendar_today</span>
                  {item.date}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                  {item.summary}
                </p>
                <Link to={`/news/${item.id}`} className="text-blue-600 font-bold text-sm flex items-center mt-auto">
                  Batafsil <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Oxirgi Elektronlar Section (Announcements) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
        <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-4">
          <h2 className="text-3xl font-bold text-slate-900 relative">
            Oxirgi elektronlar
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-cyan-500 rounded-full translate-y-4"></span>
          </h2>
          <Link to="/announcements" className="text-slate-500 hover:text-blue-600 font-medium flex items-center text-sm">
            Barchasi <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured specific layout style - reusing news item 1 for layout match */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 md:col-span-1 flex flex-col">
            <div className="relative h-64 overflow-hidden rounded-t-2xl bg-blue-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-4xl font-bold uppercase z-10 text-center px-4">DIQQAT<br />TANLOV</h3>
              </div>
              {/* Placeholder content for visualization */}
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" className="absolute right-0 bottom-0 h-full w-1/2 object-cover object-center mask-gradient" alt="" />
            </div>
            <div className="p-6">
              <div className="flex justify-between mb-2">
                <span className="text-cyan-500 text-sm font-bold">Seshanba</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Tanlov e'lon qilindi</h3>
              <p className="text-slate-500 text-sm mb-4">2025-yil 2-3 dekabr kunlari universitetda tanlov bo'lib o'tadi...</p>
            </div>
          </div>

          {/* Right side items */}
          <div className="space-y-6">
            {/* Item 2 */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex gap-4 hover:shadow-md transition-all">
              <img src={announcements[1].image} className="w-32 h-24 object-cover rounded-lg" alt="" />
              <div>
                <h4 className="font-bold text-slate-900 leading-tight mb-2">Universitetimiz xalqaro reytinglarda</h4>
                <p className="text-xs text-slate-500 line-clamp-3">Toshkent Amaliy Fanlar Universiteti Nature Index bo'yicha O'zbekistondagi universitetlar orasida 5-o'rinni egalladi</p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex gap-4 hover:shadow-md transition-all">
              <img src={announcements[2].image} className="w-32 h-24 object-cover rounded-lg" alt="" />
              <div>
                <div className="text-cyan-500 text-xs font-bold mb-1">2025 M12 4, Payshanba</div>
                <h4 className="font-bold text-slate-900 leading-tight mb-2">UTAS hamkorlikni rivojlanmoqda</h4>
                <a href="#" className="text-blue-600 text-xs font-bold flex items-center mt-2">
                  Davomini o'qish <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ta'lim Dasturlari Section */}
      <section className="bg-[#eff8ff] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Ta'lim dasturlari</h2>

          <div className="flex space-x-8 border-b border-slate-200 mb-10">
            <button
              onClick={() => setActiveTab('bachelor')}
              className={`pb-4 text-sm font-bold transition-all relative ${activeTab === 'bachelor' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Bakalavriat
              {activeTab === 'bachelor' && <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-t-full"></span>}
            </button>
            <button
              onClick={() => setActiveTab('master')}
              className={`pb-4 text-sm font-bold transition-all relative ${activeTab === 'master' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Magistratura
              {activeTab === 'master' && <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-t-full"></span>}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentPrograms.map((prog) => (
              <div key={prog.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col justify-between min-h-[280px]">
                <div>
                  <div className={`w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <span className="material-symbols-outlined text-2xl">{prog.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{prog.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {prog.description}
                  </p>
                </div>
                <div className="flex justify-between items-center pt-4 mt-auto">
                  <span className="text-xs font-bold text-slate-400">{prog.count}</span>
                  <Link to={`/program/${prog.id}`} className="text-blue-100 group-hover:text-blue-600 text-sm font-bold bg-blue-50 px-4 py-2 rounded-lg transition-colors">
                    Ko'rish
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talabalarga Section */}
      <section className="py-24 bg-[#eff8ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 relative inline-block">
              Talabalarga
              <span className="absolute bottom-[-8px] left-0 w-full h-[3px] bg-blue-600 rounded-full"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Hemis Tizimi", icon: "school", desc: "O'quv jarayonini boshqarish axborot tizimi", link: "/apply" },
              { title: "Dars Jadvali", icon: "calendar_month", desc: "Haftalik dars jadvallari va xonalar", link: "/directions" },
              { title: "Kutubxona", icon: "local_library", desc: "Elektron resurslar va kitoblar bazasi", link: "/infrastructure" },
              { title: "Masofaviy Ta'lim", icon: "laptop_chromebook", desc: "Moodle tizimi va onlayn kurslar", link: "/extracurricular" }
            ].map((item, idx) => (
              <Link key={idx} to={item.link} className="group bg-slate-50 hover:bg-blue-600 rounded-2xl p-6 transition-all duration-300 cursor-pointer border border-slate-100 hover:border-transparent hover:shadow-xl hover:-translate-y-1 block">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-5 text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm mb-6 group-hover:text-blue-100 transition-colors leading-relaxed">{item.desc}</p>
                <div className="flex items-center text-blue-600 font-bold text-sm group-hover:text-white transition-colors">
                  Kirish <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Muhim Havolalar (Hexagonal Grid) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Muhim havolalar</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-16"></div>

        <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
          {hexLinks.map((link: any, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="group relative w-36 h-44 flex flex-col items-center justify-center cursor-pointer transition-transform hover:-translate-y-2"
            >
              {/* Hexagon Shape */}
              <div className={`absolute inset-0 ${link.active ? 'bg-blue-600 shadow-blue-200' : 'bg-slate-50 group-hover:bg-blue-600'} shadow-lg transition-colors duration-300`}
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                {!link.active && (
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100/50 rounded-bl-full transition-colors group-hover:bg-white/20"></div>
                )}
              </div>

              <div className="relative z-10 flex flex-col items-center px-4 transition-colors duration-300">
                <span className={`material-symbols-outlined text-4xl mb-4 transition-colors duration-300 ${link.active ? 'text-white' : 'text-blue-600 group-hover:text-white'}`}>
                  {link.icon}
                </span>
                <span className={`text-sm font-semibold leading-tight transition-colors duration-300 ${link.active ? 'text-white' : 'text-slate-800 group-hover:text-white'}`}>
                  {link.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
