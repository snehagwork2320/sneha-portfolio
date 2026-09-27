import React from 'react';
import { EDUCATION_LIST, EXTRACURRICULAR, CERTIFICATIONS } from '../../data/portfolioData';
import { GraduationCap, Award, Users, CheckCircle, MapPin, Calendar } from 'lucide-react';
import { FadeUp, SlideIn, StaggerContainer, StaggerItem, FloatCard } from '../ui/Animations';

export const EducationAndHackathons: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/8 w-full">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 space-y-20">
        {/* Education Timeline */}
        <SlideIn from="left" className="space-y-6">
          <p className="text-xs text-editorial-dim uppercase tracking-widest font-mono flex items-center gap-2">
            <GraduationCap className="w-3.5 h-3.5 text-brand-electric" /> Academic foundation
          </p>

          <div className="space-y-4">
            {EDUCATION_LIST.map((edu, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/8 space-y-3 hover:border-brand-blue/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {edu.institution}
                    </h3>
                    <div className="text-sm font-medium text-brand-electric mt-0.5">
                      {edu.degree}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-editorial-dim">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-brand-blue" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 border border-white/5 text-white">
                      <Calendar className="w-3 h-3 text-brand-electric" />
                      {edu.period}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-editorial-muted leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </SlideIn>

        {/* Leadership & Campus Involvement */}
        <FadeUp className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs text-editorial-dim uppercase tracking-widest font-mono flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-brand-electric" /> Leadership & Campus Involvement
            </p>
            <h3 className="text-2xl font-bold text-white tracking-tight">Research & Development (R&D) Committee & Operations</h3>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.06}>
            {EXTRACURRICULAR.map((item, idx) => (
              <StaggerItem key={idx}>
                <FloatCard className="h-full">
                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/6 hover:border-white/12 transition-colors space-y-2 h-full">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-white text-sm">{item.title}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-brand-blue/10 text-brand-electric shrink-0 font-mono">
                        {item.role}
                      </span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-mono block">{item.highlight}</span>
                    <p className="text-xs text-editorial-muted leading-relaxed pt-1 font-light">
                      {item.description}
                    </p>
                  </div>
                </FloatCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeUp>

        {/* Certifications & Achievements */}
        <FadeUp className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs text-editorial-dim uppercase tracking-widest font-mono flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-brand-electric" /> Credentials
            </p>
            <h3 className="text-2xl font-bold text-white tracking-tight">Certifications & achievements</h3>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.05}>
            {CERTIFICATIONS.map((cert, idx) => (
              <StaggerItem key={idx}>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/6 flex items-start gap-3 hover:border-white/14 transition-colors h-full">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white text-sm font-medium block">{cert.title}</span>
                    <span className="text-xs text-editorial-dim block mt-0.5 font-light">{cert.domain}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeUp>
      </div>
    </section>
  );
};
