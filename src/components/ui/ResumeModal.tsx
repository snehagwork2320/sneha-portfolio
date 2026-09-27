import React from 'react';
import { X, Printer, ExternalLink, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EDUCATION_LIST, CERTIFICATIONS, TECHNICAL_SKILLS, EXPERIENCES } from '../../data/portfolioData';
import { soundFx } from '../../utils/audio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    soundFx.playClick(700);
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0d0f18] border border-white/20 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Action Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#08090f] shrink-0 font-mono">
          <div className="flex items-center gap-2 text-xs text-brand-electric font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>CURRICULUM VITAE // SNEHA GUPTA</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / PDF</span>
            </button>

            <button
              onClick={() => {
                soundFx.playClick(600);
                onClose();
              }}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-editorial-dim hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#0b0d14] text-editorial-text font-sans">
          {/* Header Identity */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-3xl font-display font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm sm:text-base text-brand-electric font-mono font-medium mt-1">
              {PERSONAL_INFO.primaryPositioning}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-4 text-xs font-mono text-editorial-muted">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                {PERSONAL_INFO.location}
              </span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:text-white">
                <Mail className="w-3.5 h-3.5 text-brand-blue" />
                {PERSONAL_INFO.email}
              </a>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-blue" />
                {PERSONAL_INFO.phone}
              </span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white">
                <ExternalLink className="w-3.5 h-3.5 text-brand-blue" />
                {PERSONAL_INFO.githubDisplay}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-brand-electric uppercase mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-blue" /> PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-editorial-muted leading-relaxed font-light p-4 rounded-xl bg-white/[0.02] border border-white/5">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-brand-electric uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-blue" /> TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-mono text-white text-[11px] font-bold block mb-1">Languages:</span>
                <span className="text-editorial-muted">{TECHNICAL_SKILLS.languages.map((l) => l.name).join(', ')}</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-mono text-white text-[11px] font-bold block mb-1">Frontend:</span>
                <span className="text-editorial-muted">{TECHNICAL_SKILLS.frameworksAndLibraries.map((f) => f.name).join(', ')}</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-mono text-white text-[11px] font-bold block mb-1">Backend & Databases:</span>
                <span className="text-editorial-muted">{TECHNICAL_SKILLS.conceptsAndPractices.map((c) => c.name).concat(TECHNICAL_SKILLS.databasesAndInfrastructure.map((d) => d.name)).join(', ')}</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-mono text-white text-[11px] font-bold block mb-1">Other & Soft Skills:</span>
                <span className="text-editorial-muted">{TECHNICAL_SKILLS.toolsAndPlatforms.map((a) => a.name).concat(TECHNICAL_SKILLS.softSkills).join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-brand-electric uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-blue" /> PROJECTS
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="font-bold text-white text-sm sm:text-base">
                      {proj.title}
                    </h3>
                    <span className="font-mono text-xs text-brand-electric font-medium">
                      {proj.technologies.join(', ')}
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-editorial-muted list-disc list-inside leading-relaxed font-light">
                    {proj.keyCapabilities.map((cap, i) => (
                      <li key={i}>{cap}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-brand-electric uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-blue" /> EDUCATION
            </h2>
            <div className="space-y-3">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base">
                      {edu.institution}
                    </h3>
                    <div className="text-xs text-brand-electric mt-0.5">
                      {edu.degree} · {edu.location}
                    </div>
                  </div>
                  <span className="font-mono text-xs text-editorial-dim mt-1 sm:mt-0 font-medium">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Campus Involvement */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-brand-electric uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-blue" /> LEADERSHIP & CAMPUS INVOLVEMENT
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm sm:text-base">
                        {exp.company} — <span className="text-brand-electric font-normal">{exp.role}</span>
                      </h3>
                      <div className="text-xs text-editorial-dim font-mono">{exp.location}</div>
                    </div>
                    <span className="font-mono text-xs text-editorial-muted mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-2 space-y-1.5 text-xs text-editorial-muted list-disc list-inside leading-relaxed font-light">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-brand-electric uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-blue" /> CERTIFICATIONS & ACHIEVEMENTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-editorial-muted">{cert.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-[#08090f] flex items-center justify-between text-xs font-mono text-editorial-dim">
          <span>CURRICULUM VITAE // SHREE L. R. TIWARI COLLEGE OF ENGINEERING</span>
          <span className="text-brand-electric">SNEHA GUPTA</span>
        </div>
      </div>
    </div>
  );
};
