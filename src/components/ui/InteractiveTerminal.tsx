import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, Maximize2, Minimize2, Send, Trash2 } from 'lucide-react';
import { soundFx } from '../../utils/audio';
import confetti from 'canvas-confetti';
import { PROJECTS, PERSONAL_INFO } from '../../data/portfolioData';

interface InteractiveTerminalProps {
  onSelectProject: (id: string) => void;
  onNavigate: (section: string) => void;
  onToggleTheme: () => void;
}

interface CommandLog {
  id: string;
  type: 'input' | 'output' | 'error' | 'success' | 'ai' | 'matrix';
  content: string | React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  onSelectProject,
  onNavigate,
  onToggleTheme,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [inputVal, setInputVal] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      type: 'output',
      content: (
        <div className="space-y-1 text-xs">
          <div className="text-brand-electric font-bold">
            SnehaOS Developer Terminal v2.6.4 [Full-Stack ECS Kernel]
          </div>
          <div className="text-editorial-dim">
            Type <span className="text-emerald-400 font-bold">'help'</span> for commands or try <span className="text-amber-300 font-bold">'sudo hire'</span>, <span className="text-cyan-400 font-bold">'projects'</span>, <span className="text-violet-400 font-bold">'skills'</span>.
          </div>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [logs, isOpen]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    soundFx.playBlip(750);
    const newLogId = Date.now().toString();

    // Add input command to logs
    const newLogs: CommandLog[] = [
      ...logs,
      { id: `${newLogId}-in`, type: 'input', content: `$ ${trimmed}` },
    ];

    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    switch (cmd) {
      case 'help':
        newLogs.push({
          id: `${newLogId}-out`,
          type: 'output',
          content: (
            <div className="space-y-1 text-xs font-mono">
              <div className="text-brand-electric font-bold">AVAILABLE COMMANDS:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] pt-1">
                <div><span className="text-emerald-400 font-bold">help</span> — Display command manual</div>
                <div><span className="text-emerald-400 font-bold">projects</span> — List all featured projects</div>
                <div><span className="text-emerald-400 font-bold">open &lt;num&gt;</span> — Launch project details (e.g. 'open 1')</div>
                <div><span className="text-emerald-400 font-bold">skills</span> — Display technical skills taxonomy</div>
                <div><span className="text-emerald-400 font-bold">sudo hire</span> — Initiate contact + confetti burst</div>
                <div><span className="text-emerald-400 font-bold">theme</span> — Toggle Light / Dark UI mode</div>
                <div><span className="text-emerald-400 font-bold">nav &lt;sec&gt;</span> — Jump to section (work, skills, about, contact)</div>
                <div><span className="text-emerald-400 font-bold">clear</span> — Wipe terminal logs</div>
              </div>
            </div>
          ),
        });
        break;

      case 'projects':
      case 'work':
        newLogs.push({
          id: `${newLogId}-out`,
          type: 'output',
          content: (
            <div className="space-y-1.5 text-xs font-mono">
              <div className="text-brand-electric font-bold">FEATURED PROJECTS:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px]">
                {PROJECTS.map((p, i) => (
                  <div key={p.id} className="flex items-center gap-1.5">
                    <span className="text-emerald-400 font-bold">[{i + 1}]</span>
                    <span className="text-white">{p.title}</span>
                    <span className="text-editorial-dim text-[10px]">({p.category})</span>
                  </div>
                ))}
              </div>
              <div className="text-[10px] text-editorial-dim pt-1">
                Type <span className="text-amber-300 font-bold">'open 1'</span> to inspect CRM Platform or <span className="text-amber-300 font-bold">'open 2'</span> for AI Email Assistant.
              </div>
            </div>
          ),
        });
        break;

      case 'open': {
        const num = parseInt(args, 10);
        if (!isNaN(num) && num >= 1 && num <= PROJECTS.length) {
          const proj = PROJECTS[num - 1];
          onSelectProject(proj.id);
          newLogs.push({
            id: `${newLogId}-out`,
            type: 'success',
            content: `Launching case study for [${proj.number}] ${proj.title}...`,
          });
        } else {
          newLogs.push({
            id: `${newLogId}-err`,
            type: 'error',
            content: `Invalid project index. Specify 1 to ${PROJECTS.length} (e.g. 'open 1').`,
          });
        }
        break;
      }

      case 'skills':
        newLogs.push({
          id: `${newLogId}-out`,
          type: 'output',
          content: (
            <div className="space-y-2 text-xs font-mono">
              <div className="text-brand-electric font-bold">TECHNICAL TAXONOMY:</div>
              <div className="text-[11px] space-y-1 text-editorial-text">
                <div><span className="text-emerald-400 font-bold">[LANGUAGES]</span> C, C++, JavaScript, TypeScript, HTML5, CSS3</div>
                <div><span className="text-cyan-400 font-bold">[FRONTEND]</span> React.js, TypeScript, Responsive CSS</div>
                <div><span className="text-violet-400 font-bold">[BACKEND]</span> Node.js, Express.js, REST APIs, JWT Auth</div>
                <div><span className="text-amber-400 font-bold">[DATABASES]</span> MongoDB, Supabase (PostgreSQL)</div>
                <div><span className="text-rose-400 font-bold">[OTHER & AI]</span> Streamlit, Git/GitHub, Postman, Prompt Engineering</div>
                <div><span className="text-emerald-300 font-bold">[SOFT SKILLS]</span> Public Speaking, Event Planning, Team Collaboration</div>
              </div>
            </div>
          ),
        });
        break;

      case 'sudo':
      case 'hire':
        if (trimmed.includes('hire') || cmd === 'hire') {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
          onNavigate('contact');
          newLogs.push({
            id: `${newLogId}-out`,
            type: 'success',
            content: (
              <div className="space-y-1">
                <div className="text-emerald-400 font-bold">🎉 ACCESS GRANTED</div>
                <div>Dispatching to contact terminal... Direct email: {PERSONAL_INFO.email}</div>
              </div>
            ),
          });
        } else {
          newLogs.push({
            id: `${newLogId}-err`,
            type: 'error',
            content: `User '${PERSONAL_INFO.name}' is in the sudoers file. Try 'sudo hire'.`,
          });
        }
        break;

      case 'theme':
        onToggleTheme();
        newLogs.push({
          id: `${newLogId}-out`,
          type: 'success',
          content: 'Theme mode toggled successfully.',
        });
        break;

      case 'nav':
        if (args) {
          onNavigate(args.toLowerCase());
          newLogs.push({
            id: `${newLogId}-out`,
            type: 'success',
            content: `Navigating to ${args.toUpperCase()} section...`,
          });
        } else {
          newLogs.push({
            id: `${newLogId}-err`,
            type: 'error',
            content: "Usage: nav <work|skills|experience|about|contact>",
          });
        }
        break;

      case 'clear':
        setLogs([]);
        setInputVal('');
        return;

      default:
        newLogs.push({
          id: `${newLogId}-err`,
          type: 'error',
          content: `Command not recognized: '${trimmed}'. Type 'help' for manual.`,
        });
        break;
    }

    setLogs(newLogs);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIndex + 1 < history.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => {
            soundFx.playClick(800);
            setIsOpen(!isOpen);
          }}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0c0e17]/95 border border-white/15 text-white shadow-xl hover:border-brand-electric/50 transition-all group font-mono text-xs backdrop-blur-md"
        >
          <Terminal className="w-4 h-4 text-brand-electric group-hover:rotate-12 transition-transform" />
          <span>{isOpen ? 'Close CLI' : 'Developer CLI'}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </button>
      </div>

      {/* Terminal Modal Window */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 ${
            isExpanded
              ? 'inset-4 sm:inset-10'
              : 'bottom-20 right-5 w-[92vw] sm:w-[540px] h-[480px]'
          }`}
        >
          <div className="w-full h-full bg-[#080a11]/98 border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-mono text-xs backdrop-blur-2xl">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0c0e18] border-b border-white/10 select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={() => setIsOpen(false)} />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 cursor-pointer" onClick={() => setInputVal('')} />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)} />
                <span className="text-editorial-dim text-[11px] ml-2 flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-brand-electric" />
                  sneha-gupta@developer-cli:~
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setLogs([])}
                  className="p-1 rounded text-editorial-dim hover:text-white hover:bg-white/5"
                  title="Clear terminal"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 rounded text-editorial-dim hover:text-white hover:bg-white/5"
                >
                  {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded text-editorial-dim hover:text-white hover:bg-white/5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Output Logs Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-2.5 selection:bg-brand-electric/30">
              {logs.map((log) => (
                <div key={log.id} className="leading-relaxed">
                  {log.type === 'input' ? (
                    <div className="text-brand-electric font-semibold">{log.content}</div>
                  ) : log.type === 'error' ? (
                    <div className="text-rose-400">{log.content}</div>
                  ) : log.type === 'success' ? (
                    <div className="text-emerald-400 font-semibold">{log.content}</div>
                  ) : (
                    <div className="text-editorial-muted">{log.content}</div>
                  )}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Input Footer Bar */}
            <div className="p-3 border-t border-white/10 bg-[#06080e] flex items-center gap-2">
              <span className="text-brand-electric font-bold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type 'help', 'projects', 'skills', or 'sudo hire'..."
                className="w-full bg-transparent text-white placeholder:text-editorial-dim/50 focus:outline-none text-xs font-mono"
              />
              <button
                onClick={() => executeCommand(inputVal)}
                className="p-1.5 rounded-lg bg-brand-blue/80 hover:bg-brand-blue text-white"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
