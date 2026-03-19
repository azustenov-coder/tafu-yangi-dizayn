import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProgramDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const programsData: Record<string, any> = {
        '1': {
            title: 'Pedagogika va psixologiya',
            icon: 'school',
            image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop',
            description: "Pedagogika fakulteti 2022-yilda Toshkent amaliy fanlar ilmiy kengashi qarori asosida tashkil etilgan. Hozirgi kunda fakultetda 160 nafardan ortiq professor-o'qituvchilar faoliyat olib bormoqda.",
            dekan: {
                name: "Rustamov Doniyorbek Avazbekovich",
                email: "d.rustamov@utas.uz",
                phone: "(Ichki: 408)",
                image: "https://img.icons8.com/bubbles/200/null/user-male.png"
            },
            deputies: [
                {
                    name: "Ulug'murodov Davron Jumaboyevich",
                    role: "Yoshlar masalalari va ma'naviy-ma'rifiy ishlar bo'yicha dekan o'rinbosari",
                    phone: "(Ichki: 407)",
                    image: "https://img.icons8.com/bubbles/100/null/user-male.png"
                },
                {
                    name: "Xolboyev Ravshan Mirxoldorovich",
                    role: "O'quv ishlari bo'yicha dekan o'rinbosari",
                    phone: "(Ichki: 407)",
                    image: "https://img.icons8.com/bubbles/100/null/user-male.png"
                }
            ],
            departments: [
                {
                    id: "boshlangich",
                    title: "Boshlang'ich ta'lim nazariyasi va metodikasi",
                    desc: "Kelajak avlodning ilk bilim poydevorini qo'yuvchi ijodkor va mahoratli pedagoglarni yetishtirib chiqaradi.",
                    icon: "child_care",
                    color: "bg-orange-50 text-orange-500"
                },
                {
                    id: "psixologiya",
                    title: "Psixologiya",
                    desc: "Inson ruhiyati sirlarini anglash, psixologik qo'llab-quvvatlash va shaxslararo munosabatlarni uyg'unlashtirishni o'rgatadi.",
                    icon: "psychology",
                    color: "bg-pink-50 text-pink-500"
                },
                {
                    id: "pedagogika",
                    title: "Pedagogika kafedrasi",
                    desc: "Bo'lajak o'qituvchilarning pedagogik mahoratini oshirish, ta'lim nazariyasi va zamonaviy o'qitish texnologiyalari bo'yicha fundamental bilimlar beruvchi kafedra.",
                    icon: "menu_book",
                    color: "bg-blue-50 text-blue-500"
                },
                {
                    id: "maktabgacha",
                    title: "Maktabgacha ta'lim metodikasi kafedrasi",
                    desc: "Kichik yoshdagi bolalar bilan ishlashning innovatsion usullari, bog'cha yoshidagi bolalarni psixologik va intellektual tayyorlash metodikalarini ishlab chiquvchi markaz.",
                    icon: "face",
                    color: "bg-red-50 text-red-500"
                }
            ],
            tutors: [
                "Ulug'murodov Davron Jumaboyevich",
                "Xolboyev Ravshan Mirxoldorovich"
            ],
            directions: [
                { name: "Boshlang'ich ta'lim", code: '60110500', period: '4 yil', mode: 'Kunduzgi, Sirtqi' },
                { name: "Maktabgacha ta'lim", code: '60110200', period: '4 yil', mode: 'Kunduzgi, Sirtqi' },
                { name: 'Maxsus pedagogika (logopediya)', code: '60110700', period: '4 yil', mode: 'Kunduzgi' },
                { name: 'Psixologiya (faoliyat turlari boʻyicha)', code: '60310900', period: '4 yil', mode: 'Kunduzgi, Sirtqi' },
                { name: 'Pedagogika va psixologiya', code: '60110100', period: '4 yil', mode: 'Kunduzgi, Sirtqi' },
                { name: 'Tasviriy sanʼat va muhandislik grafikasi', code: '60111200', period: '4 yil', mode: 'Kunduzgi' },
            ]
        },
        '2': {
            title: 'Iqtisodiyot',
            icon: 'trending_up',
            image: 'https://images.unsplash.com/photo-1611974714014-419b45781684?q=80&w=1200&auto=format&fit=crop',
            description: "Iqtisodiyot fakulteti 2023-yilda tashkil etilgan. Hozirgi kunda fakultetda 74 nafardan ortiq professor-o'qituvchilar faoliyat olib bormoqda.",
            dekan: {
                name: "Axmedov Ikrom Akramovich",
                email: "i.axmedov@utas.uz",
                phone: "98 125 13 26 (308)",
                image: "https://img.icons8.com/bubbles/200/null/user-male.png"
            },
            deputies: [
                {
                    name: "Saparov Eldor Niyatilla o'g'li",
                    role: "Yoshlar masalalari va ma'naviy-ma'rifiy ishlar bo'yicha dekan o'rinbosari",
                    phone: "93 683 58 66 (309)",
                    image: "https://img.icons8.com/bubbles/100/null/user-male.png"
                },
                {
                    name: "Mamajonov Oybek Odilovich",
                    role: "O'quv ishlari bo'yicha dekan o'rinbosari",
                    phone: "90 176 19 20 (309)",
                    image: "https://img.icons8.com/bubbles/100/null/user-male.png"
                },
                {
                    name: "Nigmatova (Jalalova) Nodiraxon Aliaxmatovna",
                    role: "Hamshira",
                    phone: "97 171 70 87 (304)",
                    image: "https://img.icons8.com/bubbles/100/null/user-female.png"
                }
            ],
            departments: [
                {
                    id: "tarmoqlar-iqtisodiyoti",
                    title: "Tarmoqlar iqtisodiyoti va buxgalteriyasi",
                    desc: "Iqtisodiy barqarorlikning asosi bo'lgan hisob-kitob, audit va tarmoq boshqaruvini zamonaviy standartlar asosida o'rgatadi.",
                    icon: "calculate",
                    color: "bg-blue-50 text-blue-500"
                },
                {
                    id: "bank-va-moliya",
                    title: "Bank va moliya",
                    desc: "Moliya tizimi, bank operatsiyalari va investitsiya muhitini tahlil qiluvchi yuqori malakali mutaxassislar tayyorlaydi.",
                    icon: "account_balance_wallet",
                    color: "bg-cyan-50 text-cyan-500"
                },
                {
                    id: "umumiqtisodiy-fanlar",
                    title: "Umumiqtisodiy fanlar kafedrasi",
                    desc: "Iqtisodiyot nazariyasi, makro va mikroiqtisodiyotning fundamental asoslarini o'rgatish orqali talabalarda iqtisodiy tafakkur va tahliliy ko'nikmalarni shakllantiruvchi tayanch kafedra.",
                    icon: "pie_chart",
                    color: "bg-teal-50 text-teal-500"
                }
            ],
            tutors: [
                "Saparov Eldor Niyatilla o'g'li",
                "Mamajonov Oybek Odilovich",
                "Nigmatova (Jalalova) Nodiraxon Aliaxmatovna"
            ],
            directions: [
                { name: 'Iqtisodiyot (tarmoqlar va sohalar boʻyicha)', code: '60410100', period: '4 yil', mode: 'Kunduzgi, Sirtqi' },
                { name: 'Moliya va moliyaviy texnologiyalar', code: '60410400', period: '4 yil', mode: 'Kunduzgi, Sirtqi' },
                { name: 'Buxgalteriya hisobi va audit', code: '60410500', period: '4 yil', mode: 'Kunduzgi, Sirtqi' },
                { name: 'Menejment (tarmoqlar va sohalar boʻyicha)', code: '60411200', period: '4 yil', mode: 'Kunduzgi, Sirtqi' },
                { name: 'Turizm (faoliyat yoʻnalishlari boʻyicha)', code: '61010300', period: '4 yil', mode: 'Kunduzgi, Sirtqi' },
                { name: 'Marketing (tarmoqlar va sohalar boʻyicha)', code: '60411300', period: '4 yil', mode: 'Kunduzgi, Sirtqi' },
            ]
        },
        '3': {
            title: 'Tarix va filologiya',
            icon: 'menu_book',
            image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop',
            description: "Tarix va filologiya fakulteti 25.08.2023 yilda universitet rektorining 25.08.2023y. 28-i buyrug'i asosida 4-fakultet negizida tashkil etilgan. Hozirgi kunda fakultetda 106 nafardan ortiq professor-o'qituvchilar faoliyat olib bormoqda.",
            dekan: {
                name: "Xidirov Abror M o'minovich",
                email: "a.xidirov@utas.uz",
                phone: "93 386 55 95 (225)",
                image: "https://img.icons8.com/bubbles/200/null/user-male.png"
            },
            deputies: [
                {
                    name: "Arolov U tkir Tursunovich",
                    role: "Yoshlar bilan ishlash bo'yicha dekan o'rinbosari",
                    phone: "Aloqa mavjud emas",
                    image: "https://img.icons8.com/bubbles/100/null/user-male.png"
                },
                {
                    name: "Atamuradov Xasan Yuldoshevich",
                    role: "O'quv ishlari bo'yicha dekan o'rinbosari",
                    phone: "Aloqa mavjud emas",
                    image: "https://img.icons8.com/bubbles/100/null/user-male.png"
                }
            ],
            departments: [
                {
                    id: "tarix-ijtimoiy",
                    title: "Tarix va ijtimoiy fanlar",
                    desc: "O'tmish saboqlari va jamiyatshunoslik asoslarini tadqiq etuvchi, milliy va umuminsoniy qadriyatlarni o'rgatuvchi kafedra.",
                    icon: "history",
                    color: "bg-amber-50 text-amber-500"
                },
                {
                    id: "xorijiy-tillar",
                    title: "Xorijiy til va adabiyoti",
                    desc: "Dunyo tillarini mukammal egallash va jahon adabiyoti durdonalarini tahlil qilish orqali global muloqotga yo'l ochadi.",
                    icon: "translate",
                    color: "bg-indigo-50 text-indigo-500"
                },
                {
                    id: "ozbek-tili",
                    title: "O'zbek tili va adabiyoti",
                    desc: "Ona tilimizning boy jozibasi, mumtoz va zamonaviy adabiyotimizning badiiy olamini ilmiy asosda o'rganish markazi.",
                    icon: "article",
                    color: "bg-emerald-50 text-emerald-500"
                },
                {
                    id: "tillar-kafedrasi",
                    title: "Tillar kafedrasi",
                    desc: "Zamonaviy lingvistika metodikalari asosida xorijiy tillarni o'qitish, qiyosiy tilshunoslik va tarjimashunoslik sohasida yuqori malakali mutaxassislar tayyorlovchi kafedra.",
                    icon: "translate",
                    color: "bg-purple-50 text-purple-500"
                }
            ],
            tutors: [
                "Arolov U tkir Tursunovich",
                "Atamuradov Xasan Yuldoshevich"
            ],
            directions: [
                { name: 'Filologiya va tillarni oʻqitish: Oʻzbek tili', code: '60230100', period: '4 yil', mode: 'Kunduzgi, Sirtqi' },
                { name: 'Filologiya va tillarni oʻqitish: Ingliz tili', code: '60230100', period: '4 yil', mode: 'Kunduzgi' },
                { name: 'Tarix (mamlakatlar va yoʻnalishlar boʻyicha)', code: '60220300', period: '4 yil', mode: 'Kunduzgi, Sirtqi' },
            ]
        },
        '4': {
            title: 'Axborot texnologiyalari',
            icon: 'memory',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
            description: "Axborot texnologiyalari fakulteti TAFU Kengashining 2023 yil 30-avgustdagi 1-son yig'ilishi qarori asosida tashkil etilgan. Hozirgi kunda fakultetda 43 nafardan ortiq professor-o'qituvchilar faoliyat olib bormoqda.",
            dekan: {
                name: "Turayev Baxodir Ergashevich",
                email: "b.turayev@utas.uz",
                phone: "+998712030540 (603)",
                image: "https://img.icons8.com/bubbles/200/null/user-male.png"
            },
            deputies: [
                {
                    name: "Imomov Shavkat Norboyevich",
                    role: "Yoshlar masalalari va ma'naviy-ma'rifiy ishlar bo'yicha dekan o'rinbosari",
                    phone: "+998712030540 (602)",
                    image: "https://img.icons8.com/bubbles/100/null/user-male.png"
                },
                {
                    name: "Xojibolayev Yodgorbek Yusup o'g'li",
                    role: "O'quv ishlari bo'yicha dekan o'rinbosari",
                    phone: "+998712030540 (602)",
                    image: "https://img.icons8.com/bubbles/100/null/user-male.png"
                }
            ],
            departments: [
                {
                    id: "kompyuter-injiniringi",
                    title: "Kompyuter injiniringi",
                    desc: "Apparat ta'minoti va dasturiy tizimlar uyg'unligini loyihalashtiruvchi zamonaviy IT muhandislari maktabi.",
                    icon: "memory",
                    color: "bg-blue-50 text-blue-500"
                },
                {
                    id: "raqamli-fanlar",
                    title: "Raqamli va fundamental fanlar kafedrasi",
                    desc: "Matematik modellashtirish, algoritmlash va raqamli texnologiyalarning nazariy asoslarini o'rgatuvchi, talabalarning fundamental bilim bazasini shakllantiruvchi kafedra.",
                    icon: "calculate",
                    color: "bg-indigo-50 text-indigo-500"
                }
            ],
            tutors: [
                "Imomov Shavkat Norboyevich",
                "Xojibolayev Yodgorbek Yusup o'g'li"
            ],
            directions: [
                { name: 'Kompyuter injiniringi', code: '60610300', period: '4 yil', mode: 'Kunduzgi, Sirtqi' },
                { name: 'Axborot tizimlari va texnologiyalari', code: '60610500', period: '4 yil', mode: 'Kunduzgi, Sirtqi' },
                { name: 'Dasturiy injiniring', code: '60610600', period: '4 yil', mode: 'Kunduzgi' },
                { name: 'Sunʼiy intellekt', code: '60610700', period: '4 yil', mode: 'Kunduzgi' },
            ]
        }
    };

    const program = programsData[id || '1'] || programsData['1'];

    return (
        <div className="bg-[#eff8ff] min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-sm mb-12 font-medium">
                    <Link to="/" className="text-slate-400 hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <Link to="/faculties" className="text-slate-400 hover:text-blue-600 transition-colors">Universitet haqida</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <Link to="/faculties" className="text-slate-400 hover:text-blue-600 transition-colors">Fakultet va kafedralar</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <span className="text-blue-600 font-bold">{program.title}</span>
                </div>

                <div className="rounded-[3.5rem] p-12 md:p-20 shadow-2xl mb-12 relative overflow-hidden min-h-[400px] flex items-center">
                    {/* Background Image with Overlay */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                        style={{ backgroundImage: `url('${program.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-transparent"></div>

                    <div className="relative z-10 w-full">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md text-white rounded-[2rem] flex items-center justify-center mb-10 border border-white/20 shadow-2xl">
                            <span className="material-symbols-outlined text-4xl">{program.icon}</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight max-w-3xl">
                            {program.title}
                        </h1>
                        <p className="text-xl text-blue-100/90 font-medium max-w-2xl">
                            Ushbu fakultet doirasida mavjud bo'lgan bakalavriat ta'lim yo'nalishlari va ularning qabul parametrlari bilan tanishing.
                        </p>
                    </div>
                </div>

                {/* New Faculty Info Section */}
                {program.description && (
                    <div className="mb-20">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                {program.description}
                            </p>
                        </div>

                        {program.dekan && (
                            <div className="flex flex-col items-center mb-16">
                                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 bg-slate-200">
                                    <img src={program.dekan.image} alt={program.dekan.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="text-center">
                                    <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-2 block">
                                        FAKULTET DEKANI
                                    </span>
                                    <h2 className="text-3xl font-black text-slate-900 mb-2">
                                        {program.dekan.name}
                                    </h2>
                                    <div className="flex flex-col text-slate-500 font-medium gap-1">
                                        <a href={`mailto:${program.dekan.email}`} className="hover:text-blue-600 transition-colors">
                                            {program.dekan.email}
                                        </a>
                                        <span>{program.dekan.phone}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {program.deputies && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                {program.deputies.map((deputy: any, idx: number) => (
                                    <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-center gap-6 hover:shadow-md transition-shadow">
                                        <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 bg-slate-100 border-2 border-slate-50">
                                            <img src={deputy.image} alt={deputy.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <span className="text-blue-600 font-bold text-[10px] uppercase tracking-wider mb-1 block leading-tight">
                                                {deputy.role}
                                            </span>
                                            <h3 className="text-lg font-black text-slate-900 mb-1">
                                                {deputy.name}
                                            </h3>
                                            <span className="text-slate-400 text-sm font-bold">
                                                {deputy.phone}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Faculty Departments Section */}
                {program.departments && (
                    <div className="mb-24">
                        <h2 className="text-4xl font-black text-slate-900 text-center mb-16">
                            Fakultet kafedralari
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {program.departments.map((dep: any, idx: number) => (
                                <div key={idx} className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8 hover:shadow-xl transition-all group flex flex-col">
                                    <div className={`w-12 h-12 ${dep.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <span className="material-symbols-outlined text-2xl">{dep.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight">
                                        {dep.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                                        {dep.desc}
                                    </p>
                                    <Link to={`/department/${dep.id}`} className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all mt-auto pt-4 border-t border-slate-50">
                                        Batafsil ma'lumot
                                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Tutors Section */}
                {program.tutors && (
                    <div className="mb-24">
                        <h2 className="text-4xl font-black text-slate-900 text-center mb-10">
                            Tyutorlar
                        </h2>
                        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-10">
                            <ul className="space-y-4">
                                {program.tutors.map((tutor: string, idx: number) => (
                                    <li key={idx} className="flex items-center gap-3 text-slate-600 font-medium">
                                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                        {tutor}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ProgramDetail;
