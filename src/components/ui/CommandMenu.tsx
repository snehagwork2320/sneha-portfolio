import React, { useState, useEffect } from 'react';
import { Search, X, FolderGit2, Code, FileText, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { soundFx } from '../../utils/audio';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
  onSelectResearch?: (topicId: string) => void;
  onOpenResume: () => void;
  onSelectSection?: (sectionId: string) => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({
  isOpen,
  onClose,
  onSelectProject,
  onOpenResume,
  onSelectSection,
}) => {
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        soundFx.playBlip(800);
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const handleNav = (sectionId: string) => {
    soundFx.playClick(600);
    onClose();
    if (onSelectSection) {
      onSelectSection(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-[#0d0f18] border border-white/15 rounded-2xl shadow-2xl overflow-hidden font-mono flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-[#080a11]">
          <Search className="w-4 h-4 text-brand-electric mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, skills, education, or experience..."
            className="w-full bg-transparent text-sm text-white placeholder:text-editorial-dim focus:outline-none font-sans"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-editorial-dim hover:text-white mr-1">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs text-editorial-muted hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-6 flex-1 text-xs">
          {/* Quick Actions */}
          <div>
            <div className="text-[10px] text-editorial-dim uppercase tracking-wider mb-2">QUICK ACTIONS</div>
            <div className="space-y-1">
              <button
                onClick={() => {
                  onClose();
                  onOpenResume();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 text-editorial-muted hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-brand-electric" />
                  <span className="font-sans font-medium text-sm text-white">View Curriculum Vitae (Résumé)</span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button
                onClick={() => handleNav('contact')}
                className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 text-editorial-muted hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Code className="w-4 h-4 text-emerald-400" />
                  <span className="font-sans font-medium text-sm text-white">Contact & Opportunity Inquiry</span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>

          {/* Featured Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="text-[10px] text-editorial-dim uppercase tracking-wider mb-2">
                PROJECTS ({filteredProjects.length})
              </div>
              <div className="space-y-1">
                {filteredProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => {
                      onClose();
                      onSelectProject(proj.id);
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 text-left transition-colors group"
                  >
                    <div className="flex items-start gap-2.5">
                      <FolderGit2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <div>
                        <div className="font-sans font-semibold text-sm text-white group-hover:text-brand-electric transition-colors">
                          {proj.title}
                        </div>
                        <div className="text-[11px] text-editorial-dim font-mono">
                          {proj.category} · {proj.technologies.slice(0, 3).join(', ')}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-editorial-dim group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 border-t border-white/10 bg-[#080a11] flex items-center justify-between text-[11px] text-editorial-dim">
          <span>Navigate with ⌘K / Esc</span>
          <span className="text-brand-electric font-mono">SNEHA GUPTA PORTFOLIO</span>
        </div>
      </div>
    </div>
  );
};
