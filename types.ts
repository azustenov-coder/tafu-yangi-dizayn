
export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  count: string;
  icon: string;
  color: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  image: string;
}

export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  status: 'Aktiv' | 'Tugallangan' | 'Grant Bosqichi';
  lead: string;
  period: string;
  image: string;
}
