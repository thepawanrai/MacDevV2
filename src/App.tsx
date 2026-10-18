import React, { useState, useEffect } from 'react';
import { AppStore } from './services/store';
import { Program, SiteSettings, User as UserType, LeadSegment } from './types';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/pages/HomePage';
import { CataloguePage } from './components/pages/CataloguePage';
import { ProgramDetailPage } from './components/pages/ProgramDetailPage';
import { CorporateTrainingPage } from './components/pages/CorporateTrainingPage';
import { EmotionalIntelligencePage } from './components/pages/EmotionalIntelligencePage';
import { InstitutionalTrainingPage } from './components/pages/InstitutionalTrainingPage';
import { KeynotesPage } from './components/pages/KeynotesPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { YouthPage } from './components/pages/YouthPage';
import { EventsPage } from './components/pages/EventsPage';
import { PolicyPage } from './components/pages/PolicyPage';
import { LearnerDashboard } from './components/learner/LearnerDashboard';
import { CoursePlayer } from './components/learner/CoursePlayer';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { InquiryModal } from './components/modals/InquiryModal';
import { AuthModal } from './components/modals/AuthModal';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [routeParam, setRouteParam] = useState<string>('');
  
  const [currentUser, setCurrentUser] = useState<UserType | null>(() => AppStore.getCurrentUser());
  const [programs, setPrograms] = useState<Program[]>(() => AppStore.getPrograms());
  const [settings, setSettings] = useState<SiteSettings>(() => AppStore.getSettings());

  // Player state
  const [playerProgramId, setPlayerProgramId] = useState<string>('');
  const [playerLessonId, setPlayerLessonId] = useState<string | undefined>(undefined);

  // Modals state
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquirySegment, setInquirySegment] = useState<LeadSegment>('B2C');
  const [inquiryTitle, setInquiryTitle] = useState('');
  const [authOpen, setAuthOpen] = useState(false);

  // Scroll to top on navigation
  const handleNavigate = (route: string, param: string = '') => {
    setCurrentRoute(route);
    setRouteParam(param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (segment: LeadSegment = 'B2C', title: string = '') => {
    setInquirySegment(segment);
    setInquiryTitle(title);
    setInquiryOpen(true);
  };

  const handleLaunchPlayer = (programId: string, lessonId?: string) => {
    setPlayerProgramId(programId);
    setPlayerLessonId(lessonId);
    setCurrentRoute('player');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const refreshPrograms = () => {
    setPrograms(AppStore.getPrograms());
  };

  const refreshSettings = () => {
    setSettings(AppStore.getSettings());
  };

  // Find active program for Program Detail
  const selectedProgram = routeParam
    ? AppStore.getProgramBySlug(routeParam) || programs[0]
    : programs[0];

  // Find active program for Player
  const playerProgram = playerProgramId
    ? AppStore.getProgramBySlug(playerProgramId) || programs.find(p => p.id === 'prog-communication-skills') || programs[0]
    : programs.find(p => p.id === 'prog-communication-skills') || programs[0];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#111111] flex flex-col font-['Inter',sans-serif]">
      {/* Universal Header (hidden in CoursePlayer for immersion) */}
      {currentRoute !== 'player' && (
        <Header
          currentRoute={currentRoute}
          onNavigate={handleNavigate}
          currentUser={currentUser}
          onOpenAuth={() => setAuthOpen(true)}
          onOpenInquiry={handleOpenInquiry}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomePage
            programs={programs}
            settings={settings}
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {(currentRoute === 'catalogue' || currentRoute === 'courses') && (
          <CataloguePage
            programs={programs}
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentRoute === 'youth' && (
          <YouthPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentRoute === 'events' && (
          <EventsPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentRoute === 'program-detail' && (
          <ProgramDetailPage
            program={selectedProgram}
            currentUser={currentUser}
            onBack={() => handleNavigate('catalogue')}
            onNavigateToPlayer={handleLaunchPlayer}
            onOpenInquiry={handleOpenInquiry}
            onEnrollSuccess={() => refreshPrograms()}
          />
        )}

        {(currentRoute === 'corporate' || currentRoute === 'program') && (
          <CorporateTrainingPage
            programs={programs}
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentRoute === 'emotional-intelligence' && (
          <EmotionalIntelligencePage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentRoute === 'institutional' && (
          <InstitutionalTrainingPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentRoute === 'keynotes' && (
          <KeynotesPage
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage
            settings={settings}
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactPage
            settings={settings}
          />
        )}

        {currentRoute === 'policy' && (
          <PolicyPage
            policyType={(routeParam as any) || 'privacy'}
            onBack={() => handleNavigate('home')}
          />
        )}

        {currentRoute === 'learner' && (
          <LearnerDashboard
            currentUser={currentUser || {
              id: 'guest',
              name: 'Learner Guest',
              email: 'guest@mac.com',
              role: 'learner',
              createdAt: new Date().toISOString()
            }}
            programs={programs}
            onOpenPlayer={handleLaunchPlayer}
            onExplorePrograms={() => handleNavigate('catalogue')}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentRoute === 'player' && (
          <CoursePlayer
            program={playerProgram}
            currentUser={currentUser || {
              id: 'guest',
              name: 'Learner Guest',
              email: 'guest@mac.com',
              role: 'learner',
              createdAt: new Date().toISOString()
            }}
            initialLessonId={playerLessonId}
            onBackToDashboard={() => handleNavigate('learner')}
          />
        )}

        {currentRoute === 'admin' && (
          <AdminDashboard
            programs={programs}
            settings={settings}
            onRefreshPrograms={refreshPrograms}
            onRefreshSettings={refreshSettings}
            onPreviewProgram={(slug) => handleNavigate('program-detail', slug)}
          />
        )}
      </main>

      {/* Universal Footer (hidden in CoursePlayer) */}
      {currentRoute !== 'player' && (
        <Footer
          settings={settings}
          onNavigate={handleNavigate}
          onOpenInquiry={handleOpenInquiry}
        />
      )}

      {/* Segmented Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultSegment={inquirySegment}
        defaultProgramTitle={inquiryTitle}
      />

      {/* Authentication & Role Switcher Modal */}
      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        currentUser={currentUser}
        onUserChange={(usr) => setCurrentUser(usr)}
        onNavigateToDashboard={(role) => handleNavigate(role === 'admin' ? 'admin' : 'learner')}
      />
    </div>
  );
}
