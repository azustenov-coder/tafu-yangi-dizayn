
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const isActive = (path: string) => location.pathname === path;

  interface NavSubLink {
    name: string;
    path: string;
    icon: string;
    sub?: { name: string; path: string; icon?: string }[];
  }

  interface NavLink {
    name: string;
    path: string;
    sub?: NavSubLink[];
  }

  const navLinks: NavLink[] = [
    { name: 'Bosh sahifa', path: '/' },
    {
      name: 'Universitet haqida',
      path: '/faculties',
      sub: [
        { name: 'Fakultet va kafedralar', path: '/faculties', icon: 'school' },
        { name: 'Missiya va qadriyatlar', path: '/mission', icon: 'flag' },
        { name: 'Rektorat', path: '/rectorat', icon: 'groups' },
        { name: 'Infratuzilma', path: '/infrastructure', icon: 'apartment' }
      ]
    },
    {
      name: 'Abituriyentlarga',
      path: '#',
      sub: [
        { name: 'Universitetga kirish', path: '/admissions', icon: 'login' }
      ]
    },
    {
      name: 'Talabalarga',
      path: '#',
      sub: [
        { name: 'Darsdan tashqari faoliyat', path: '/extracurricular', icon: 'sports_soccer' },
        { name: 'Amaliyot va stajirovkalar', path: '/internships', icon: 'work' },
        { name: 'Grantlar va stipendiyalar', path: '/grants', icon: 'military_tech' }
      ]
    },
    {
      name: 'Fan va ilmiy faoliyat',
      path: '#',
      sub: [
        { name: 'Yutuqlar', path: '/achievements', icon: 'workspace_premium' },
        {
          name: 'Ilmiy jurnallar va konferensiyalar',
          path: '#',
          icon: 'menu_book',
          sub: [
            { name: 'Xalqaro ilmiy faoliyat', path: '/journals/international', icon: 'public' },
            { name: 'Mahalliy ilmiy faoliyat', path: '/journals/local', icon: 'location_on' }
          ]
        },
        { name: 'Hamkorlar', path: '/scientific-partners', icon: 'biotech' }
      ]
    },
    {
      name: 'Hamkorlik',
      path: '/partnerships',
      sub: [
        { name: 'Hamkorlar', path: '/partners', icon: 'handshake' },
        { name: "UTAS hamkori bo'lish", path: '/become-partner', icon: 'person_add' },
        { name: 'Aloqa', path: '/partner-contact', icon: 'contact_support' }
      ]
    },
    { name: 'Kontakt', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/30 backdrop-blur-[2px] animate-in fade-in duration-200 flex items-start justify-center pt-20 px-4">
          <div className="w-full max-w-sm animate-in zoom-in-95 duration-200">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-blue-500 transition-colors">search</span>
              <input
                autoFocus
                type="text"
                placeholder="Qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-10 py-2.5 text-sm font-bold shadow-xl outline-none focus:border-blue-500 transition-all placeholder:text-slate-300"
              />
              <button
                onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 transition-all"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {searchQuery && (
              <div className="mt-2 bg-white rounded-xl border border-slate-100 shadow-xl overflow-hidden animate-in slide-in-from-top-2 duration-200">
                <div className="p-1 space-y-0.5">
                  {[
                    { title: "Universitet tarixi", path: "/about" },
                    { title: "Fakultetlar", path: "/faculties" },
                    { title: "Qabul 2024", path: "/apply" },
                    { title: "Grantlar va stipendiyalar", path: "/grants" },
                    { title: "Kontakt", path: "/contact" }
                  ].filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase())).map((res, i) => (
                    <Link
                      key={i}
                      to={res.path}
                      onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                      className="flex items-center gap-2.5 p-2 hover:bg-slate-50 rounded-lg transition-all group"
                    >
                      <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <span className="material-symbols-outlined text-[13px]">link</span>
                      </div>
                      <span className="text-[12px] font-bold text-slate-700">{res.title}</span>
                    </Link>
                  ))}
                  {searchQuery.length > 0 && ![
                    "Universitet tarixi", "Fakultetlar", "Qabul 2024", "Grantlar va stipendiyalar", "Kontakt"
                  ].some(title => title.toLowerCase().includes(searchQuery.toLowerCase())) && (
                      <div className="text-center py-3 text-slate-400 text-[10px] font-medium italic">
                        Topilmadi...
                      </div>
                    )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-50 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3.5 group shrink-0">
              <div className="flex flex-col gap-0.5">
                <div className="flex gap-0.5">
                  <div className="w-3 h-3 bg-[#1a3d6b] rounded-[1px]"></div>
                  <div className="w-3 h-3 bg-[#1a3d6b] rounded-[1px]"></div>
                  <div className="w-3 h-3 bg-[#1a3d6b] rounded-[1px]"></div>
                </div>
                <div className="flex gap-0.5 justify-center relative">
                  <div className="w-3 h-3 bg-[#1a3d6b] rounded-[1px]"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold tracking-tight text-[#1a3d6b] leading-tight uppercase">Toshkent Amaliy</span>
                <span className="text-[13px] font-bold text-blue-600 leading-tight tracking-[0.01em] uppercase">Fanlar Universiteti</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-7">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group/nav">
                  {link.sub ? (
                    <div className="relative text-[15px] font-medium transition-all duration-200 py-3 flex items-center gap-1 cursor-default text-slate-500 hover:text-blue-600">
                      {link.name}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`relative text-[15px] font-medium transition-all duration-200 py-3 flex items-center gap-1 ${isActive(link.path) ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'
                        }`}
                    >
                      {link.name}
                      {isActive(link.path) && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                      )}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {link.sub && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform group-hover/nav:translate-y-0 translate-y-2 z-50 overflow-visible">
                      <div className="py-2 px-1.5">
                        {link.sub.map((subLink, idx) => (
                          <div key={idx} className="relative group/subnav">
                            <Link
                              to={subLink.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center justify-between px-4 py-2.5 text-[13px] font-bold text-slate-600 hover:text-blue-600 hover:bg-[#eff8ff] rounded-xl transition-all group/subitem"
                            >
                              <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[18px] text-slate-300 group-hover/subitem:text-blue-400 transition-colors">{subLink.icon}</span>
                                {subLink.name}
                              </div>
                              {subLink.sub && (
                                <span className="material-symbols-outlined text-[16px] text-slate-300">chevron_right</span>
                              )}
                            </Link>

                            {/* Second Level Dropdown */}
                            {subLink.sub && (
                              <div className="absolute top-0 left-full ml-1 w-52 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.10)] border border-slate-100 opacity-0 invisible group-hover/subnav:opacity-100 group-hover/subnav:visible transition-all duration-300 transform group-hover/subnav:translate-x-0 -translate-x-2 py-2 px-1.5 z-[60]">
                                {subLink.sub.map((deepLink, dIdx) => (
                                  <Link
                                    key={dIdx}
                                    to={deepLink.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-2.5 px-4 py-2 text-[12px] font-black text-slate-600 hover:text-blue-600 hover:bg-[#eff8ff] rounded-lg transition-all"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-100 group-hover:bg-blue-400"></div>
                                    {deepLink.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(true)}
                className="w-9 h-9 rounded-full hover:bg-slate-50 text-slate-400 hover:text-blue-600 transition-all flex items-center justify-center shrink-0"
              >
                <span className="material-symbols-outlined text-[22px]">search</span>
              </button>

              <div className="flex items-center gap-2 cursor-pointer group shrink-0 bg-[#eff8ff] px-3 py-1.5 rounded-full hover:bg-blue-50 transition-all">
                <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-blue-600">language</span>
                <span className="text-[12px] font-bold text-slate-500 group-hover:text-blue-600 tracking-wider">UZ</span>
              </div>

              <button
                className="xl:hidden w-10 h-10 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors shrink-0"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="material-symbols-outlined text-3xl">menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-100 px-4 py-8 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.sub ? (
                  <div className="space-y-4">
                    <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest px-4">{link.name}</div>
                    {link.sub.map((sub, sidx) => (
                      <React.Fragment key={sidx}>
                        <Link
                          to={sub.path}
                          className="flex items-center gap-4 text-[15px] font-bold py-3 px-4 rounded-2xl text-slate-600 hover:bg-slate-50 active:bg-blue-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="material-symbols-outlined text-slate-400">{sub.icon}</span>
                          {sub.name}
                        </Link>
                        {sub.sub && (
                          <div className="ml-12 space-y-2 border-l border-slate-100 pl-4 py-1">
                            {sub.sub.map((deep, didx) => (
                              <Link
                                key={didx}
                                to={deep.path}
                                className="block text-[13px] font-bold text-slate-400 hover:text-blue-600 py-1"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {deep.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`block text-[15px] font-black py-4 px-4 rounded-2xl transition-all ${isActive(link.path) ? 'bg-blue-600 text-white' : 'text-slate-800 hover:bg-slate-50'
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-[#0a192f] py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Ma'lumotlar Section */}
            <div>
              <h4 className="text-white font-black text-sm uppercase tracking-wider mb-8">Ma'lumotlar</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-slate-400 hover:text-blue-400 text-sm font-bold transition-colors">Universitet haqida</Link></li>
                <li><Link to="/apply" className="text-slate-400 hover:text-blue-400 text-sm font-bold transition-colors">Qabul</Link></li>
                <li><Link to="/extracurricular" className="text-slate-400 hover:text-blue-400 text-sm font-bold transition-colors">Talabalar uchun</Link></li>
                <li><Link to="/research" className="text-slate-400 hover:text-blue-400 text-sm font-bold transition-colors">Fan</Link></li>
                <li><Link to="/partners" className="text-slate-400 hover:text-blue-400 text-sm font-bold transition-colors">Hamkorlik</Link></li>
                <li><Link to="/contact" className="text-slate-400 hover:text-blue-400 text-sm font-bold transition-colors">Kontaktlar</Link></li>
              </ul>
            </div>

            {/* Ish vaqti & Telefon Section */}
            <div>
              <div className="mb-10">
                <h4 className="text-white font-black text-sm uppercase tracking-wider mb-8">Ish vaqti</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-slate-500">Dush-Juma</span>
                    <span className="text-blue-400">09:00-17:00</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-slate-500">Shanba</span>
                    <span className="text-blue-400">09:00-15:00</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-white font-black text-sm uppercase tracking-wider mb-6">Telefon</h4>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-400 shadow-sm border border-blue-800 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-lg">call</span>
                  </div>
                  <a href="tel:+998712000540" className="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors tracking-wide">+998 (71) 200 05 40</a>
                </div>
              </div>
            </div>

            {/* Manzil Section */}
            <div>
              <h4 className="text-white font-black text-sm uppercase tracking-wider mb-8">Manzil</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-400 shadow-sm border border-emerald-800/50 mt-1">
                    <span className="material-symbols-outlined text-lg">directions_subway</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-emerald-400">Olmazor</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">(eski Sobir Raximov)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-400 shadow-sm border border-blue-800/50 mt-1">
                    <span className="material-symbols-outlined text-lg">location_on</span>
                  </div>
                  <p className="text-sm font-bold text-slate-300 leading-relaxed">
                    Toshkent shahar, Chilonzor,<br />
                    Gavxar ko'chasi, 1-uy
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Section - Dynamic Expansion */}
            <div className="h-48 rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl transition-all duration-700 hover:h-96 group/map relative">
              <div className="absolute inset-0 bg-blue-600/10 pointer-events-none group-hover/map:opacity-0 transition-opacity z-10"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.41366762226!2d69.20490459642816!3d41.2563281973597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5f2d87abbf5d%3A0x2600378446d3d29f!2sToshkent%20amaliy%20fanlar%20universiteti!5e0!3m2!1sen!2s!4v1770469096010!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={true}
                loading="lazy"
                title="UTAS Location"
                className="relative z-0"
              ></iframe>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0a192f]/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-700 opacity-0 group-hover/map:opacity-100 transition-opacity pointer-events-none z-20">
                <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest whitespace-nowrap">Kattalashtirish uchun sichqonchani ishlating</p>
              </div>
            </div>

          </div>

          {/* Logo & Social Section */}
          <div className="pt-12 border-t border-slate-800 flex flex-col items-center">
            <div className="flex items-center gap-10 mb-10 w-full">
              <div className="flex-grow h-px bg-slate-800"></div>
              <div className="flex items-center gap-4 shrink-0 px-6">
                <div className="flex flex-col gap-0.5">
                  <div className="flex gap-0.5">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-[1px]"></div>
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-[1px]"></div>
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-[1px]"></div>
                  </div>
                  <div className="flex gap-0.5 justify-center relative">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-[1px]"></div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-black text-white uppercase leading-none tracking-tight">Toshkent Amaliy</span>
                  <span className="text-[12px] font-black text-blue-400 uppercase leading-tight tracking-[0.05em]">Fanlar Universiteti</span>
                </div>
              </div>
              <div className="flex-grow h-px bg-slate-800"></div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: 'facebook', color: 'bg-blue-600' },
                { icon: 'photo_camera', color: 'bg-pink-600' },
                { icon: 'work', color: 'bg-blue-800' },
                { icon: 'send', color: 'bg-sky-500' }
              ].map((social, i) => (
                <a key={i} href="#" className={`${social.color} w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all hover:brightness-110`}>
                  <span className="material-symbols-outlined text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
            <p className="mt-8 text-[10px] font-bold text-slate-500 uppercase tracking-widest">© 2024 UTAS.UZ — BARCHA HUQUQLAR HIMOYALANGAN</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
