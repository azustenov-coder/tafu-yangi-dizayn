
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import HistoryArchive from './components/HistoryArchive';
import PhotoArchive from './components/PhotoArchive';
import MuseumTour from './components/MuseumTour';
import Admissions from './components/Admissions';
import Research from './components/Research';
import Partnerships from './components/Partnerships';
import Contact from './components/Contact';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

import Faculties from './components/Faculties';
import Rectorate from './components/Rectorate';
import Infrastructure from './components/Infrastructure';
import Mission from './components/Mission';
import Centers from './components/Centers';
import Buildings from './components/Buildings';
import Councils from './components/Councils';
import Extracurricular from './components/Extracurricular';
import Internships from './components/Internships';
import Grants from './components/Grants';
import Partners from './components/Partners';
import Achievements from './components/Achievements';
import BecomePartner from './components/BecomePartner';
import ScientificPartners from './components/ScientificPartners';
import PartnerContact from './components/PartnerContact';
import Directions from './components/Directions';
import ProgramDetail from './components/ProgramDetail';
import Laboratories from './components/Laboratories';
import Journals from './components/Journals';
import BusinessRelations from './components/BusinessRelations';
import PartnersPortfolio from './components/PartnersPortfolio';
import CooperationRequest from './components/CooperationRequest';
import Alumni from './components/Alumni';
import AlumniStories from './components/AlumniStories';
import CareerCenter from './components/CareerCenter';
import ResearchGrants from './components/ResearchGrants';
import News from './components/News';
import NewsDetail from './components/NewsDetail';
import Announcements from './components/Announcements';
import LabDetails from './components/LabDetails';
import DepartmentDetail from './components/DepartmentDetail';
import Exams from './components/Exams';
import Results from './components/Results';
import OnlineApplication from './components/OnlineApplication';
import ResearchArchive from './components/ResearchArchive';
import ConferenceCalendar from './components/ConferenceCalendar';
import ConferenceDetails from './components/ConferenceDetails';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history-archive" element={<HistoryArchive />} />
          <Route path="/photo-archive" element={<PhotoArchive />} />
          <Route path="/museum-tour" element={<MuseumTour />} />
          <Route path="/faculties" element={<Faculties />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/rectorat" element={<Rectorate />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/centers" element={<Centers />} />
          <Route path="/buildings" element={<Buildings />} />
          <Route path="/councils" element={<Councils />} />
          <Route path="/extracurricular" element={<Extracurricular />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/grants" element={<Grants />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/become-partner" element={<BecomePartner />} />
          <Route path="/scientific-partners" element={<ScientificPartners />} />
          <Route path="/partner-contact" element={<PartnerContact />} />
          <Route path="/directions" element={<Directions />} />
          <Route path="/program/:id" element={<ProgramDetail />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/apply" element={<OnlineApplication />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/results" element={<Results />} />
          <Route path="/research" element={<Research />} />
          <Route path="/laboratories" element={<Laboratories />} />
          <Route path="/laboratory/:id" element={<LabDetails />} />
          <Route path="/department/:id" element={<DepartmentDetail />} />
          <Route path="/research-archive" element={<ResearchArchive />} />
          <Route path="/conference-calendar" element={<ConferenceCalendar />} />
          <Route path="/conference/:id" element={<ConferenceDetails />} />
          <Route path="/journals" element={<Journals />} />
          <Route path="/journals/:category" element={<Journals />} />
          <Route path="/research-grants" element={<ResearchGrants />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/business-relations" element={<BusinessRelations />} />
          <Route path="/partners-portfolio" element={<PartnersPortfolio />} />
          <Route path="/cooperation-request" element={<CooperationRequest />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/alumni-stories" element={<AlumniStories />} />
          <Route path="/career-center" element={<CareerCenter />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
