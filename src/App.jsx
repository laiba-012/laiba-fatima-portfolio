import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Skills3D from './components/Skills3D';
import ProjectsShowcase from './components/ProjectsShowcase';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import RecruiterModal from './components/RecruiterModal';
import ResumeModal from './components/ResumeModal';
import { Sparkles, ArrowUp } from 'lucide-react';
import { personalData } from './data/portfolioData';

export default function App() {
  const [recruiterModalOpen, setRecruiterModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-slate-950 relative">
      
      {/* Top Navbar */}
      <Navbar
        onOpenRecruiter={() => setRecruiterModalOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero3D
          onOpenRecruiter={() => setRecruiterModalOpen(true)}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        <Skills3D />

        <ProjectsShowcase />

        <ExperienceTimeline />

        <EducationSection />

        <ContactSection
          onOpenRecruiter={() => setRecruiterModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-base font-extrabold text-white">{personalData.name}</div>
            <div className="text-xs text-sky-400 font-medium">Full MERN Stack Developer | Software Engineer</div>
            <div className="text-xs text-slate-500">© 2026 Laiba Fatima. All Rights Reserved.</div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setRecruiterModalOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-sky-500/30 text-xs font-bold text-sky-300 hover:text-white transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Recruiter Mode</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* Floating Action Button (FAB) for Recruiter Mode */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setRecruiterModalOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white font-extrabold text-xs rounded-full shadow-2xl shadow-sky-500/50 border border-sky-300/40 hover:scale-110 active:scale-95 transition-all duration-200 pulse-button"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="hidden sm:inline">Impress Recruiter</span>
        </button>
      </div>

      {/* Recruiter & Resume Modals */}
      <RecruiterModal
        isOpen={recruiterModalOpen}
        onClose={() => setRecruiterModalOpen(false)}
        onOpenResume={() => {
          setRecruiterModalOpen(false);
          setResumeModalOpen(true);
        }}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </div>
  );
}
