import React from 'react';
import { PERSONAL_INFO, KEY_NUMBERS } from '../../data/portfolioData';
import { HeroPortrait } from '../ui/HeroPortrait';
import { ArrowRight, FileText, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { soundFx } from '../../utils/audio';
import { FadeUp, SlideIn, StaggerContainer, StaggerItem, Counter, FloatCard } from '../ui/Animations';

interface HeroProps {
  onOpenResumeModal: () => void;
  onNavigate?: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onNavigate }) => {
  const handleNav = (sec: string) => {
    soundFx.playClick(650);
    onNavigate?.(sec);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-32 pb-16 overflow-hidden w-full">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 relative z-10 space-y-16">

        {/* Top breadcrumb bar */}
        <FadeUp duration={0.4}>
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/8 text-sm text-editorial-dim">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand-electric" />
              <span>{PERSONAL_INFO.location}</span>
              <span className="opacity-30 mx-1">·</span>
              <span>{PERSONAL_INFO.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{PERSONAL_INFO.institution}</span>
              <span className="opacity-30 mx-1">·</span>
              <span className="text-brand-electric font-medium">{PERSONAL_INFO.degree}</span>
            </div>
          </div>
        </FadeUp>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left — headline + bio + actions */}
          <SlideIn from="left" className="lg:col-span-7 space-y-8">

            {/* Availability tag */}
            <div className="inline-flex items-center gap-2 text-sm text-editorial-dim font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-pulse" />
              <span>{PERSONAL_INFO.heroSubtext}</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-bold text-white tracking-tight leading-[1.1]">
                Building full-stack<br />
                <span className="text-brand-electric">applications</span> from<br />
                database to UI.
              </h1>

              <p className="text-base sm:text-lg text-editorial-muted leading-relaxed max-w-2xl font-light">
                {PERSONAL_INFO.heroIntro}
              </p>
            </div>

            {/* Actions */}
            <FadeUp delay={0.2} className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleNav('work')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-blue hover:bg-brand-cobalt text-white text-sm font-medium transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-brand-blue/20"
              >
                <span>View my work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => { soundFx.playBlip(800); onOpenResumeModal(); }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/12 text-sm text-editorial-muted hover:text-white hover:border-white/25 transition-all font-medium"
              >
                <FileText className="w-4 h-4" />
                <span>Résumé</span>
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank" rel="noreferrer"
                onClick={() => soundFx.playClick(700)}
                className="p-2.5 rounded-lg border border-white/8 text-editorial-dim hover:text-white hover:border-white/20 transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank" rel="noreferrer"
                onClick={() => soundFx.playClick(700)}
                className="p-2.5 rounded-lg border border-white/8 text-editorial-dim hover:text-brand-electric hover:border-white/20 transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </FadeUp>
          </SlideIn>

          {/* Right — portrait */}
          <SlideIn from="right" delay={0.08} className="lg:col-span-5 flex items-center justify-center">
            <HeroPortrait imageSrc="/sneha.jpg" />
          </SlideIn>
        </div>

        {/* Key numbers */}
        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/8"
          staggerDelay={0.07}
        >
          {KEY_NUMBERS.map((num, i) => (
            <StaggerItem key={i}>
              <FloatCard className="h-full">
                <div className="p-4 sm:p-5 rounded-xl bg-white/[0.025] border border-white/6 hover:border-white/12 transition-colors h-full">
                  <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                    <Counter value={num.value} />
                  </div>
                  <div className="text-sm font-medium text-editorial-muted mt-1">{num.label}</div>
                  <div className="text-xs text-editorial-dim mt-0.5">{num.context}</div>
                </div>
              </FloatCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Section quick-jump */}
        <FadeUp delay={0.1}>
          <div className="space-y-3 pt-2">
            <p className="text-xs text-editorial-dim uppercase tracking-widest font-mono">Jump to</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-2">
              {[
                { id: 'work',       label: 'Projects',         count: '4 featured' },
                { id: 'experience', label: 'Leadership & Ops', count: 'R&D Committee' },
                { id: 'skills',     label: 'Technical Skills', count: 'Full-Stack' },
                { id: 'about',      label: 'Education & Bio',  count: 'Degree & Info' },
                { id: 'contact',    label: 'Contact',          count: 'Get in touch' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="p-3.5 rounded-xl border border-white/8 hover:border-white/18 bg-white/[0.02] hover:bg-white/[0.04] text-left transition-all group"
                >
                  <div className="text-sm font-medium text-white group-hover:text-brand-electric transition-colors">
                    {item.label}
                  </div>
                  <div className="text-xs text-editorial-dim mt-0.5">{item.count}</div>
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
};
