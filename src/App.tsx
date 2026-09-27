import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingSequence } from './components/ui/LoadingSequence';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navigation } from './components/ui/Navigation';
import { CommandMenu } from './components/ui/CommandMenu';
import { ResumeModal } from './components/ui/ResumeModal';
import { CaseStudyModal } from './components/modals/CaseStudyModal';
import { InteractiveTerminal } from './components/ui/InteractiveTerminal';
import { SectionTransition } from './components/ui/Animations';

import { Hero } from './components/sections/Hero';
import { SelectedWork } from './components/sections/SelectedWork';
import { Experience } from './components/sections/Experience';
import { TechnicalSkills } from './components/sections/TechnicalSkills';
import { EducationAndHackathons } from './components/sections/EducationAndHackathons';
import { OpenSourceAndAbout } from './components/sections/OpenSourceAndAbout';
import { ContactAndFooter } from './components/sections/ContactAndFooter';

import { PROJECTS } from './data/portfolioData';
import type { ProjectItem } from './data/portfolioData';

export function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [commandMenuOpen, setCommandMenuOpen] = useState<boolean>(false);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // Theme Management
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('sneha-portfolio-theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('sneha-portfolio-theme', 'light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      localStorage.setItem('sneha-portfolio-theme', 'dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSelectProject = (projectId: string) => {
    const found = PROJECTS.find((p) => p.id === projectId);
    if (found) setActiveProject(found);
  };

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-editorial-text selection:bg-brand-blue selection:text-white relative w-full overflow-x-hidden transition-colors duration-300">
      {/* Short loading sequence */}
      {isLoading && <LoadingSequence onComplete={() => setIsLoading(false)} />}

      {/* Fluid custom desktop cursor */}
      <CustomCursor />

      {/* Fixed Header Navigation */}
      <Navigation
        activeSection={activeSection}
        onSelectSection={handleNavigateSection}
        onOpenCommandMenu={() => setCommandMenuOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Section-Wise Content Opening */}
      <main className="relative z-10 w-full pt-16 min-h-[85vh]">
        <AnimatePresence mode="wait">
          {/* OVERVIEW / HERO */}
          {activeSection === 'overview' && (
            <SectionTransition key="overview">
              <Hero
                onOpenResumeModal={() => setResumeModalOpen(true)}
                onNavigate={handleNavigateSection}
              />
            </SectionTransition>
          )}

          {/* WORK */}
          {activeSection === 'work' && (
            <SectionTransition key="work">
              <SelectedWork onSelectProject={handleSelectProject} />
            </SectionTransition>
          )}

          {/* EXPERIENCE & LEADERSHIP */}
          {activeSection === 'experience' && (
            <SectionTransition key="experience">
              <Experience />
            </SectionTransition>
          )}

          {/* SKILLS */}
          {activeSection === 'skills' && (
            <SectionTransition key="skills">
              <TechnicalSkills />
            </SectionTransition>
          )}

          {/* ABOUT & EDUCATION */}
          {activeSection === 'about' && (
            <SectionTransition key="about">
              <OpenSourceAndAbout />
              <EducationAndHackathons />
            </SectionTransition>
          )}

          {/* CONTACT & FOOTER */}
          {activeSection === 'contact' && (
            <SectionTransition key="contact">
              <ContactAndFooter />
            </SectionTransition>
          )}
        </AnimatePresence>
      </main>

      {/* Interactive Developer REPL Terminal */}
      <InteractiveTerminal
        onSelectProject={handleSelectProject}
        onNavigate={handleNavigateSection}
        onToggleTheme={toggleTheme}
      />

      {/* Modals & Command Palette */}
      <CommandMenu
        isOpen={commandMenuOpen}
        onClose={() => setCommandMenuOpen(false)}
        onSelectProject={handleSelectProject}
        onOpenResume={() => setResumeModalOpen(true)}
        onSelectSection={handleNavigateSection}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}

export default App;
