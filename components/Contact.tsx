
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#eff8ff] min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <nav className="flex text-sm font-bold text-primary mb-6">
            <ol className="flex items-center space-x-2">
              <li className="text-slate-400">Bosh sahifa</li>
              <li><span className="material-symbols-outlined text-xs">chevron_right</span></li>
              <li>Bog'lanish</li>
            </ol>
          </nav>
          <h1 className="text-6xl font-black text-primary tracking-tight">Bog'lanish va manzillar</h1>
          <p className="mt-6 text-slate-500 text-2xl max-w-2xl">Savollaringiz bormi? Biz bilan bog'laning va mutaxassislarimiz sizga yordam berishadi.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-3xl bg-blue-50 flex items-center justify-center text-primary group hover:bg-primary hover:text-white transition-all">
                    <span className="material-symbols-outlined text-3xl">location_on</span>
                  </div>
                  <div>
                    <h3 className="font-black text-xl text-primary mb-2">Manzil</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Toshkent shahri, Olmazor tumani,<br />
                      Kichik halqa yo'li, 17-uy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-3xl bg-blue-50 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">call</span>
                  </div>
                  <div>
                    <h3 className="font-black text-xl text-primary mb-2">Telefon</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      +998 (71) 200-00-00<br />
                      +998 (71) 200-00-01
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-3xl bg-blue-50 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">mail</span>
                  </div>
                  <div>
                    <h3 className="font-black text-xl text-primary mb-2">Elektron pochta</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      info@tafu.uz<br />
                      qabul@tafu.uz
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-3xl bg-blue-50 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">schedule</span>
                  </div>
                  <div>
                    <h3 className="font-black text-xl text-primary mb-2">Ish vaqti</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Dushanba - Shanba:<br />
                      09:00 dan 18:00 gacha
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-16 pt-12 border-t border-slate-50">
                <h3 className="font-black text-xl text-primary mb-8">Bizni ijtimoiy tarmoqlarda kuzating</h3>
                <div className="flex space-x-5">
                  {['facebook', 'telegram', 'instagram', 'youtube'].map((soc) => (
                    <a key={soc} className="w-16 h-16 rounded-[1.5rem] bg-slate-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-slate-100 shadow-sm" href="#">
                      <span className="material-symbols-outlined text-2xl">share</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Area */}
            <div className="bg-white p-3 rounded-[3.5rem] shadow-sm overflow-hidden group border border-white">
              <div className="h-96 relative rounded-[3rem] overflow-hidden">
                <img alt="Map placeholder" className="w-full h-full object-cover" src="https://picsum.photos/seed/maploc/800/600" />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl flex justify-between items-center text-slate-900 border border-white">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                      <span className="material-symbols-outlined text-2xl">navigation</span>
                    </div>
                    <span className="text-lg font-black text-primary">Kichik halqa yo'li, 17-uy</span>
                  </div>
                  <button className="bg-primary text-white px-8 py-3.5 rounded-2xl text-sm font-black hover:bg-slate-900 transition-all shadow-xl shadow-primary/20">Xaritada ochish</button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-12 md:p-16 rounded-[3.5rem] shadow-2xl shadow-blue-200/50 border border-white">
            <h2 className="text-4xl font-black text-primary mb-2">Bizga yozing</h2>
            <p className="text-slate-400 text-lg mb-12">Mutaxassislarimiz ish kuni davomida siz bilan bog'lanishadi.</p>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-primary">Ism va familiya</label>
                  <input className="w-full bg-slate-50 border-slate-100 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-slate-300 border font-medium" placeholder="Ismingizni kiriting" type="text" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-primary">Telefon raqam</label>
                  <input className="w-full bg-slate-50 border-slate-100 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-slate-300 border font-medium" placeholder="+998" type="tel" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-primary">Elektron pochta</label>
                <input className="w-full bg-slate-50 border-slate-100 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-slate-300 border font-medium" placeholder="example@mail.com" type="email" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-primary">Mavzu</label>
                <select className="w-full bg-slate-50 border-slate-100 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all border text-slate-700 font-bold">
                  <option>Savollar</option>
                  <option>Hamkorlik</option>
                  <option>Qabul masalalari</option>
                  <option>Xatolik haqida xabar</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-primary">Xabar matni</label>
                <textarea className="w-full bg-slate-50 border-slate-100 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-slate-300 border font-medium" placeholder="Sizning xabaringiz..." rows={5}></textarea>
              </div>
              <div className="pt-6">
                <button className="w-full bg-primary text-white py-6 rounded-[1.5rem] font-black hover:bg-slate-900 active:scale-95 transition-all flex items-center justify-center space-x-3 shadow-2xl shadow-primary/30" type="submit">
                  <span className="text-xl">Xabarni yuborish</span>
                  <span className="material-symbols-outlined text-2xl">send</span>
                </button>
              </div>
              <p className="text-[10px] text-center text-slate-400 mt-6 leading-relaxed font-bold uppercase tracking-widest">
                Tugmani bosish orqali siz shaxsiy ma'lumotlarni qayta ishlash shartlariga rozilik bildirasiz.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
