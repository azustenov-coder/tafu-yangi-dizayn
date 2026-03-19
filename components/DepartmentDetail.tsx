
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DepartmentDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const departmentsData: Record<string, any> = {
        'boshlangich': {
            title: "Boshlang'ich ta'lim nazariyasi va metodikasi",
            icon: "child_care",
            color: "bg-orange-50 text-orange-500",
            head: {
                name: "Aripova Shahlo Abdullayevna",
                role: "Kafedra mudiri",
                degree: "Pedagogika fanlari nomzodi, dotsent",
                image: "https://img.icons8.com/bubbles/200/null/user-female.png"
            },
            about: "Kafedra 2022-yilda tashkil etilgan bo'lib, boshlang'ich ta'lim yo'nalishi bo'yicha yuqori malakali kadrlarni tayyorlash bilan shug'ullanadi. Kafedrada zamonaviy pedagogik texnologiyalar va metodikalar asosida darslar olib boriladi.",
            subjects: [
                "Boshlang'ich ta'lim pedagogikasi",
                "Ona tili o'qitish metodikasi",
                "Matematika o'qitish metodikasi",
                "Tarbiyaviy ishlar metodikasi"
            ],
            staff: [
                { name: "Jo'rayev Akmal Ismoilovich", role: "Dotsent" },
                { name: "Karimova Zilola Otabekovna", role: "Katta o'qituvchi" },
                { name: "Sodiqov Murod Bakhtiyorovich", role: "O'qituvchi" }
            ]
        },
        'psixologiya': {
            title: "Psixologiya",
            icon: "psychology",
            color: "bg-pink-50 text-pink-500",
            head: {
                name: "Karimova Nigora Shavkatovna",
                role: "Kafedra mudiri",
                degree: "Psixologiya fanlari nomzodi",
                image: "https://img.icons8.com/bubbles/200/null/user-female.png"
            },
            about: "Psixologiya kafedrasi talabalarga inson ruhiyati, xulq-atvori va ijtimoiy munosabatlar bo'yicha chuqur bilimlar beradi. Kafedra qoshida psixologik maslahat markazi faoliyat ko'rsatadi.",
            subjects: [
                "Umumiy psixologiya",
                "Ijtimoiy psixologiya",
                "Yosh davrlari psixologiyasi",
                "Eksperimental psixologiya"
            ],
            staff: [
                { name: "Abdullayev Nodirbek", role: "Dotsent" },
                { name: "Usmonova Gulnoza", role: "Katta o'qituvchi" }
            ]
        },
        'pedagogika': {
            title: "Pedagogika kafedrasi",
            icon: "menu_book",
            color: "bg-blue-50 text-blue-500",
            head: {
                name: "Ismoilov Bahodir Toshpulatovich",
                role: "Kafedra mudiri",
                degree: "Pedagogika fanlari doktori, professor",
                image: "https://img.icons8.com/bubbles/200/null/user-male.png"
            },
            about: "Pedagogika kafedrasi universitetning asosiy ilmiy-metodik markazlaridan biri hisoblanadi. Kafedra ta'lim tizimidagi innovatsiyalar va zamonaviy o'qitish usullarini tadqiq etadi.",
            subjects: [
                "Pedagogika nazariyasi",
                "Ta'lim texnologiyalari",
                "Kreativ pedagogika",
                "Pedagogik mahorat"
            ],
            staff: [
                { name: "Tursunov Alisher", role: "Dotsent" },
                { name: "Xalilova Malika", role: "O'qituvchi" }
            ]
        },
        'maktabgacha': {
            title: "Maktabgacha ta'lim metodikasi kafedrasi",
            icon: "face",
            color: "bg-red-50 text-red-500",
            head: {
                name: "Rahimova Umida Farhodovna",
                role: "Kafedra mudiri",
                degree: "Pedagogika fanlari nomzodi",
                image: "https://img.icons8.com/bubbles/200/null/user-female.png"
            },
            about: "Maktabgacha ta'lim metodikasi kafedrasi bog'cha yoshidagi bolalar bilan ishlash bo'yicha mutaxassislarni tayyorlaydi. Kafedrada Montessori va boshqa xalqaro metodikalar o'rgatiladi.",
            subjects: [
                "Maktabgacha pedagogika",
                "Bolalar psixologiyasi",
                "Nutq o'stirish metodikasi",
                "Ilk qadam dasturi"
            ],
            staff: [
                { name: "Zokirova Nargiza", role: "Katta o'qituvchi" },
                { name: "Saidov Jamshid", role: "O'qituvchi" }
            ]
        },
        'kompyuter-injiniringi': {
            title: "Kompyuter injiniringi",
            icon: "memory",
            color: "bg-blue-50 text-blue-500",
            head: {
                name: "Karimov Sherzod Alisherovich",
                role: "Kafedra mudiri",
                degree: "Texnika fanlari nomzodi, dotsent",
                image: "https://img.icons8.com/bubbles/200/null/user-male.png"
            },
            about: "Kompyuter injiniringi kafedrasi zamonaviy hisoblash tizimlari, apparat ta'minoti va dasturiy komplekslarni loyihalash bo'yicha mutaxassislar tayyorlaydi. Kafedra eng so'nggi rusumdagi laboratoriya uskunalari bilan jihozlangan.",
            subjects: [
                "Kompyuter arxitekturasi",
                "Operatsion tizimlar",
                "Mikroprotsessorlar",
                "Tizimli dasturlash"
            ],
            staff: [
                { name: "Xalilov Rustam", role: "Katta o'qituvchi" },
                { name: "Mamatova Dilnoza", role: "O'qituvchi" }
            ]
        },
        'raqamli-fanlar': {
            title: "Raqamli va fundamental fanlar kafedrasi",
            icon: "calculate",
            color: "bg-indigo-50 text-indigo-500",
            head: {
                name: "Soliyev Otabek Mirzayevich",
                role: "Kafedra mudiri",
                degree: "Fizika-matematika fanlari nomzodi",
                image: "https://img.icons8.com/bubbles/200/null/user-male.png"
            },
            about: "Kafedra talabalarga matematik mantiq, algoritmlar nazariyasi va raqamli texnologiyalarning fundamental asoslarini o'rgatadi. Ilmiy tadqiqotlar asosan sun'iy intellekt va ma'lumotlar tahliliga yo'naltirilgan.",
            subjects: [
                "Oliy matematika",
                "Ehtimollar nazariyasi",
                "Algoritmlar va ma'lumotlar tuzilmasi",
                "Diskret matematika"
            ],
            staff: [
                { name: "Yusupov Jasur", role: "Dotsent" },
                { name: "Ergasheva Ra'no", role: "Katta o'qituvchi" }
            ]
        }
    };

    const dept = departmentsData[id || 'boshlangich'] || departmentsData['boshlangich'];

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
                    <span className="text-blue-600 font-bold">{dept.title}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Head of Dept */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 flex flex-col items-center sticky top-24">
                            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-50 shadow-xl mb-6 bg-slate-50">
                                <img src={dept.head.image} alt={dept.head.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="text-center">
                                <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-2 block">
                                    {dept.head.role}
                                </span>
                                <h2 className="text-2xl font-black text-slate-900 mb-2 leading-tight">
                                    {dept.head.name}
                                </h2>
                                <p className="text-slate-400 text-sm font-medium">
                                    {dept.head.degree}
                                </p>
                            </div>

                            <div className="w-full mt-10 pt-10 border-t border-slate-50 space-y-4">
                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-xl">mail</span>
                                    </div>
                                    <span className="text-sm font-bold text-slate-600">Email yuborish</span>
                                </div>
                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-xl">call</span>
                                    </div>
                                    <span className="text-sm font-bold text-slate-600">Bog'lanish</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Header Image/Card */}
                        <div className={`p-12 rounded-[3.5rem] ${dept.color} flex items-center gap-8`}>
                            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-lg">
                                <span className="material-symbols-outlined text-4xl">{dept.icon}</span>
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                                    {dept.title}
                                </h1>
                                <p className="text-slate-500 font-medium italic">Kafedra faoliyati haqida batafsil</p>
                            </div>
                        </div>

                        {/* About Section */}
                        <div className="bg-white rounded-[2.5rem] p-12 shadow-sm border border-slate-100">
                            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                                Kafedra haqida
                            </h3>
                            <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                {dept.about}
                            </p>
                        </div>

                        {/* Subjects & Staff Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Subjects */}
                            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100">
                                <h3 className="text-xl font-black text-slate-900 mb-6">Asosiy fanlar</h3>
                                <ul className="space-y-4">
                                    {dept.subjects.map((s: string, i: number) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-500 font-bold text-sm">
                                            <span className="material-symbols-outlined text-blue-400 text-lg">check_circle</span>
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Staff */}
                            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100">
                                <h3 className="text-xl font-black text-slate-900 mb-6">Professor-o'qituvchilar</h3>
                                <div className="space-y-6">
                                    {dept.staff.map((p: any, i: number) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                                                <img src={`https://img.icons8.com/bubbles/100/null/user-${i % 2 === 0 ? 'male' : 'female'}.png`} className="w-10 h-10" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-black text-slate-900 leading-tight">{p.name}</h4>
                                                <span className="text-[11px] font-bold text-slate-400 uppercase">{p.role}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentDetail;
