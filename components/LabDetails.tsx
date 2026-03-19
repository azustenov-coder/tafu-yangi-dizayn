import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const LabDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const labsData: Record<string, any> = {
        '204': {
            name: 'Robototexnika va Mexatronika',
            subtitle: 'Markaziy laboratoriya #204',
            icon: 'precision_manufacturing',
            description: 'Ushbu laboratoriya zamonaviy sanoat robotlari va mexatronik tizimlarni tadqiq qilishga mo\'ljallangan. Bu yerda talabalar robotlarni dasturlash, avtomatlashtirilgan tizimlarni loyihalash va sun\'iy intellektni apparat vositalari bilan integratsiya qilishni o\'rganadilar.',
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop',
            specs: [
                { label: 'Robotlar', value: 'Fanuc M-20iB/25, UR5 Cobalt' },
                { label: 'Sensorlar', value: 'Lidar, Vision Systems, Force Sensors' },
                { label: 'Platformalar', value: 'ROS (Robot Operating System), Arduino, Raspberry Pi' }
            ],
            projects: [
                { title: 'Avtonom yetkazib berish roboti', status: 'Yakunlangan' },
                { title: 'Sanoat konveyerini avtomatlashtirish', status: 'Jarayonda' }
            ]
        },
        '512': {
            name: 'Kiberxavfsizlik',
            subtitle: 'Markaziy laboratoriya #512',
            icon: 'dns',
            description: 'Kiberxavfsizlik laboratoriyasi tarmoq xavfsizligi, kripotgrafiya va axborot himoyasi sohasidagi tajribalar o\'tkazish uchun yirik server quvvatlariga ega. Laboratoriya xalqaro standartlar asosida kiber-hujumlarni simulyatsiya qilish va ulardan himoyalanish usullarini ishlab chiqadi.',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
            specs: [
                { label: 'Hisoblash quvvati', value: 'GPU Cluster (NVIDIA A100 x 4)' },
                { label: 'Xavfsizlik tizimlari', value: 'IBM QRadar SIEM, Cisco Firepower' },
                { label: 'Dasturiy muhit', value: 'Kali Linux, Metasploit, Wireshark' }
            ],
            projects: [
                { title: 'Bank tizimlari uchun kiber-himoya', status: 'Jarayonda' },
                { title: 'Ma\'lumotlar shifrlashning yangi algoritmi', status: 'Tadqiqot bosqichida' }
            ]
        }
    };

    const lab = labsData[id || ''] || labsData['204'];

    return (
        <div className="bg-[#eff8ff] min-h-screen pt-8 pb-24">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-sm mb-12 font-medium">
                    <Link to="/" className="text-slate-400 hover:text-blue-600 transition-colors">Bosh sahifa</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <Link to="/laboratories" className="text-slate-800 hover:text-blue-600 transition-colors">Laboratoriyalar</Link>
                    <span className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
                    <span className="text-blue-600 font-bold">{lab.name}</span>
                </div>

                <div className="bg-white rounded-[4rem] overflow-hidden shadow-xl shadow-blue-900/5 mb-16">
                    <div className="grid lg:grid-cols-2 gap-0">
                        <div className="p-12 lg:p-20">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-4xl">{lab.icon}</span>
                                </div>
                                <div>
                                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">{lab.name}</h1>
                                    <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mt-1">{lab.subtitle}</p>
                                </div>
                            </div>

                            <p className="text-xl text-slate-500 leading-relaxed font-medium mb-12">
                                {lab.description}
                            </p>

                            <div className="space-y-8">
                                {lab.specs.map((spec: any, i: number) => (
                                    <div key={i} className="flex flex-col gap-2">
                                        <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{spec.label}</div>
                                        <div className="text-lg font-bold text-slate-800">{spec.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative min-h-[400px]">
                            <img src={lab.image} alt={lab.name} className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-blue-900/20"></div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm">
                        <h2 className="text-2xl font-black text-slate-900 mb-8">Joriy loyihalar</h2>
                        <div className="space-y-6">
                            {lab.projects.map((project: any, i: number) => (
                                <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                                    <span className="font-bold text-slate-800">{project.title}</span>
                                    <span className="bg-blue-100 text-blue-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">{project.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#1a3d6b] p-12 rounded-[3rem] text-white flex flex-col justify-center items-center text-center">
                        <h2 className="text-3xl font-black mb-6">Tadqiqotda ishtirok eting</h2>
                        <p className="text-blue-100 mb-10 font-medium">Ushbu laboratoriyada o'z ilmiy loyihangizni amalga oshirmoqchimisiz?</p>
                        <button className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-all">
                            Ariza topshirish
                        </button>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-slate-400 font-bold hover:text-blue-600 transition-colors flex items-center justify-center gap-2 mx-auto"
                    >
                        <span className="material-symbols-outlined">west</span>
                        Laboratoriyalar ro'yxatiga qaytish
                    </button>
                </div>
            </section>
        </div>
    );
};

export default LabDetails;
