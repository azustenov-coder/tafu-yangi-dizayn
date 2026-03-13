
import React from 'react';
import { Link } from 'react-router-dom';

const Partnerships: React.FC = () => {
  return (
    <div className="bg-[#eff8ff] min-h-screen pt-8">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-sm mb-12 font-medium">
          <Link to="/" className="text-slate-400 hover:text-blue-600 transition-colors">Bosh sahifa</Link>
          <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
          <span className="text-slate-800">Hamkorlik</span>
          <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
          <span className="text-blue-600 font-bold">Xalqaro hamkorlik</span>
        </div>

        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight">Xalqaro hamkorlik va biznes aloqalari</h1>
          <p className="text-xl text-slate-500 leading-relaxed mb-12 font-medium">Biz ta'lim sifati va innovatsiyalarni xalqaro darajaga olib chiqish, bitiruvchilarimiz uchun karyera imkoniyatlarini yaratish maqsadida dunyoning yetakchi OTMlari va yirik korporatsiyalar bilan hamkorlik qilamiz.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-32">
          {[
            { title: 'Xalqaro hamkorlik', path: '#global-map', desc: "Dunyo bo'ylab 50+ dan ortiq yetakchi oliy ta'lim muassasalari bilan almashinuv dasturlari.", icon: 'public' },
            { title: 'Biznes bilan aloqalar', path: '/business-relations', desc: 'Talabalarimiz uchun real amaliyot va sanoat korxonalari bilan qo\'shma laboratoriyalar.', icon: 'business' },
            { title: 'Bitiruvchilar', path: '/alumni', desc: 'Bitiruvchilarimizning karyera o\'sishini kuzatib boramiz va doimiy aloqani ta\'minlaymiz.', icon: 'school' }
          ].map((item) => (
            <div key={item.title} className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 group hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">{item.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-500 mb-10 leading-relaxed">{item.desc}</p>
              {item.path.startsWith('#') ? (
                <a className="text-blue-600 font-black flex items-center gap-2 group/link cursor-pointer" onClick={() => document.getElementById(item.path.substring(1))?.scrollIntoView({ behavior: 'smooth' })}>
                  Batafsil <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              ) : (
                <Link className="text-blue-600 font-black flex items-center gap-2 group/link" to={item.path}>
                  Batafsil <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Global Map Visual */}
        <div className="text-center mb-16" id="global-map">
          <h2 className="text-4xl font-black mb-4 text-slate-900">Global Hamkorlar Xaritasi</h2>
          <p className="text-slate-500 text-lg">Bizning hamkorlarimiz geografiyasi butun dunyo bo'ylab keng tarqalgan.</p>
        </div>
        {/* Global Map Visual - Fixed positioning and visibility */}
        <div className="relative rounded-[4rem] bg-[#f0f7ff] overflow-visible mb-32 group border border-blue-100">
          <div className="aspect-[21/9] w-full relative overflow-hidden rounded-[4rem]">
            {/* Professional Stylized World Map - More stable link */}
            <img
              alt="World Map"
              className="absolute inset-0 w-full h-full object-contain opacity-50 grayscale group-hover:grayscale-0 transition-all duration-1000"
              src="https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg&w=1500&tint=1a3d6b"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.weserv.nl/?url=https://www.free-world-maps.com/images/free-world-map.gif&w=1500&tint=1a3d6b";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent"></div>
          </div>

          {/* EUROPE PING & CARD - Positioned to the side to avoid top clipping */}
          <div className="absolute top-[32%] left-[48%] group/pin z-20">
            <div className="w-5 h-5 bg-blue-600 rounded-full animate-ping opacity-75"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full shadow-lg absolute top-1 left-1 border-2 border-white"></div>

            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-72 p-6 bg-white rounded-[2rem] shadow-2xl border border-blue-100 opacity-0 group-hover/pin:opacity-100 transition-all duration-300 translate-y-2 group-hover/pin:translate-y-0 pointer-events-none">
              <h4 className="font-black text-lg text-primary mb-2">Yevropa Ittifoqi</h4>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed font-medium">Erasmus+ dasturi doirasida Germaniya va Polsha universitetlari bilan talabalar almashinuvi.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[8px] rounded-lg font-black uppercase">Exchange</span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[8px] rounded-lg font-black uppercase">Dual Degree</span>
              </div>
            </div>
          </div>

          {/* UK PING & CARD - Adjusted position */}
          <div className="absolute top-[30%] left-[45%] group/pin z-20">
            <div className="w-5 h-5 bg-red-600 rounded-full animate-ping opacity-75"></div>
            <div className="w-3 h-3 bg-red-600 rounded-full shadow-lg absolute top-1 left-1 border-2 border-white"></div>

            <div className="absolute top-8 left-1/2 -translate-x-3/4 w-72 p-6 bg-white rounded-[2rem] shadow-2xl border border-red-100 opacity-0 group-hover/pin:opacity-100 transition-all duration-300 translate-y-2 group-hover/pin:translate-y-0 pointer-events-none">
              <h4 className="font-black text-lg text-red-700 mb-2">Buyuk Britaniya</h4>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed font-medium">Greenwich va UCLan universitetlari bilan qo'shma diplom va o'quv dasturlari.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-red-50 text-red-600 text-[8px] rounded-lg font-black uppercase">University Partnership</span>
              </div>
            </div>
          </div>

          {/* USA PING & CARD */}
          <div className="absolute top-[38%] left-[22%] group/pin z-20">
            <div className="w-5 h-5 bg-accent rounded-full animate-ping opacity-75"></div>
            <div className="w-3 h-3 bg-accent rounded-full shadow-lg absolute top-1 left-1 border-2 border-white"></div>

            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-72 p-6 bg-white rounded-[2rem] shadow-2xl border border-blue-100 opacity-0 group-hover/pin:opacity-100 transition-all duration-300 translate-y-2 group-hover/pin:translate-y-0 pointer-events-none">
              <h4 className="font-black text-lg text-accent mb-2">Shimoliy Amerika</h4>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed font-medium">Cedarville University bilan strategik hamkorlik va global ta'lim standartlari almashinuvi.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-50 text-accent text-[8px] rounded-lg font-black uppercase">Strategic Partner</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-10 p-4 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 hidden md:block">
            <p className="text-[9px] font-black text-primary uppercase tracking-[0.2em]">Interaktiv: Nuqtalar ustiga olib boring</p>
          </div>
        </div>

        {/* Partner Logos - Professional Marquee */}
        <div className="bg-white rounded-[4rem] py-32 shadow-sm border border-slate-100 mb-32 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="animate-marquee flex items-center gap-24">
            {[
              { name: 'CMT Association', url: 'https://cmtassociation.org/wp-content/uploads/2021/09/cmt-academic-partner-rgb.png', color: 'text-red-700' },
              { name: 'Ofqual', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Ofqual_logo.svg/1024px-Ofqual_logo.svg.png', color: 'text-slate-900' },
              { name: 'University of Greenwich', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/University_of_Greenwich_logo.svg/1024px-University_of_Greenwich_logo.svg.png', color: 'text-blue-900' },
              { name: 'Cedarville University', url: 'https://www.cedarville.edu/-/media/Images/External-Relations/logos/Cedarville-U-Logo-Blue-Stacked.png', color: 'text-blue-700' },
              { name: 'Buckinghamshire New University', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Buckinghamshire_New_University_logo.svg/1024px-Buckinghamshire_New_University_logo.svg.png', color: 'text-slate-800' },
              { name: 'UCLan', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/University_of_Central_Lancashire_logo.svg/1024px-University_of_Central_Lancashire_logo.svg.png', color: 'text-red-600' }
            ].concat([
              { name: 'CMT Association', url: 'https://cmtassociation.org/wp-content/uploads/2021/09/cmt-academic-partner-rgb.png', color: 'text-red-700' },
              { name: 'Ofqual', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Ofqual_logo.svg/1024px-Ofqual_logo.svg.png', color: 'text-slate-900' },
              { name: 'University of Greenwich', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/University_of_Greenwich_logo.svg/1024px-University_of_Greenwich_logo.svg.png', color: 'text-blue-900' },
              { name: 'Cedarville University', url: 'https://www.cedarville.edu/-/media/Images/External-Relations/logos/Cedarville-U-Logo-Blue-Stacked.png', color: 'text-blue-700' },
              { name: 'Buckinghamshire New University', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Buckinghamshire_New_University_logo.svg/1024px-Buckinghamshire_New_University_logo.svg.png', color: 'text-slate-800' },
              { name: 'UCLan', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/University_of_Central_Lancashire_logo.svg/1024px-University_of_Central_Lancashire_logo.svg.png', color: 'text-red-600' }
            ]).map((logo, i) => (
              <div key={i} className="flex-shrink-0 flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 px-4">
                <img
                  src={`https://images.weserv.nl/?url=${encodeURIComponent(logo.url)}&w=300&fit=contain`}
                  alt={logo.name}
                  className="h-28 lg:h-36 object-contain mb-3"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('logo.clearbit.com')) {
                      // Try Clearbit as second backup
                      const domain = new URL(logo.url).hostname.replace('www.', '');
                      target.src = `https://logo.clearbit.com/${domain}`;
                    } else {
                      target.style.display = 'none';
                      target.parentElement?.querySelector('.fallback-text')?.classList.remove('hidden');
                    }
                  }}
                />
                <div className={`fallback-text hidden font-black text-xl lg:text-2xl tracking-tighter ${logo.color} whitespace-nowrap text-center`}>
                  {logo.name.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-6xl mx-auto bg-white rounded-[4rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white">
          <div className="md:w-5/12 p-12 md:p-20 bg-primary text-white">
            <h2 className="text-5xl font-black mb-10 leading-tight">Hamkor bo'lish</h2>
            <p className="mb-12 text-blue-100 text-xl leading-relaxed">Biz bilan yangi loyihalar, o'quv dasturlari yoki biznes hamkorlikni yo'lga qo'yishni istasangiz, ariza qoldiring. Mas'ul xodimlarimiz 24 soat ichida siz bilan bog'lanishadi.</p>
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl">email</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-1">Email manzili</p>
                  <p className="font-bold text-2xl">partnerships@tafu.uz</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl">phone</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-1">Aloqa markazi</p>
                  <p className="font-bold text-2xl">+998 71 200 00 00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-7/12 p-12 md:p-20 bg-white">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-black text-slate-900 uppercase tracking-widest mb-3">Ismingiz</label>
                  <input className="w-full px-6 py-5 rounded-2xl border border-slate-100 bg-slate-50 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" placeholder="Masalan: Aziz Rahimov" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-black text-slate-900 uppercase tracking-widest mb-3">Tashkilot nomi</label>
                  <input className="w-full px-6 py-5 rounded-2xl border border-slate-100 bg-slate-50 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" placeholder="Masalan: SoftCorp MCHJ" type="text" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-black text-slate-900 uppercase tracking-widest mb-3">Soha / Yo'nalish</label>
                <select className="w-full px-6 py-5 rounded-2xl border border-slate-100 bg-slate-50 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold text-slate-700">
                  <option>Xalqaro Akademik Hamkorlik</option>
                  <option>Talabalar amaliyoti</option>
                  <option>Ilmiy tadqiqotlar</option>
                  <option>Homiylik va xayriya</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-black text-slate-900 uppercase tracking-widest mb-3">Xabar matni</label>
                <textarea className="w-full px-6 py-5 rounded-2xl border border-slate-100 bg-slate-50 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" placeholder="Hamkorlik taklifi haqida batafsil..." rows={5}></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-slate-900 text-white font-black py-6 px-10 rounded-[1.5rem] shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3 active:scale-95" type="submit">
                Ariza yuborish <span className="material-symbols-outlined text-2xl">send</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;
