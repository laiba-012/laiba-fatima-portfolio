import React, { useState } from 'react';
import { Layers, Code2, Palette, Gamepad2, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categoryIcons = {
  'MERN Stack': Layers,
  'Programming Languages': Code2,
  'Web & Styling': Palette,
  'Game & 3D Tech': Gamepad2,
  'Tools & Ecosystem': Wrench,
};

export default function Skills3D() {
  const [activeCategory, setActiveCategory] = useState('MERN Stack');

  const currentCategoryData = skillsData.find((cat) => cat.category === activeCategory) || skillsData[0];

  return (
    <section id="skills" className="py-20 relative bg-slate-950/60 border-t border-b border-slate-800/80">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Title Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-sky-500/30 text-xs font-semibold text-sky-400">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Technical Capabilities & Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            MERN Stack & Technical Mastery
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on experience building scalable web applications, designing RESTful APIs, 
            crafting responsive interfaces, and programming 3D game logic in Unreal Engine.
          </p>
        </div>

        {/* Category Tabs Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {skillsData.map((cat) => {
            const IconComponent = categoryIcons[cat.category] || Code2;
            const isActive = activeCategory === cat.category;

            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 border border-sky-300/40 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-sky-400'}`} />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Skills Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {currentCategoryData.skills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card rounded-2xl p-6 space-y-4 relative overflow-hidden group hover:border-sky-400/50"
            >
              {/* Top Card Line */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-400 bg-sky-950/80 border border-sky-800/60 px-2.5 py-1 rounded-md">
                  {skill.badge}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">{skill.level}%</span>
              </div>

              {/* Skill Name */}
              <div>
                <h3 className="text-lg font-extrabold text-white group-hover:text-sky-300 transition-colors">
                  {skill.name}
                </h3>
              </div>

              {/* Skill Progress Bar */}
              <div className="space-y-1.5">
                <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800 p-0.5">
                  <div
                    className="bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

              {/* Status Badge */}
              <div className="pt-2 flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Production & Project Ready</span>
              </div>

            </div>
          ))}
        </div>

        {/* Full MERN Core Highlight Banner */}
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <div className="p-4 bg-slate-950/80 rounded-2xl border border-sky-500/30 space-y-1 text-center md:text-left">
            <div className="text-xs font-bold text-sky-400 uppercase">MongoDB</div>
            <div className="text-sm font-bold text-slate-200">NoSQL Database</div>
            <div className="text-xs text-slate-400">Schema & Document Indexing</div>
          </div>

          <div className="p-4 bg-slate-950/80 rounded-2xl border border-emerald-500/30 space-y-1 text-center md:text-left">
            <div className="text-xs font-bold text-emerald-400 uppercase">Express.js</div>
            <div className="text-sm font-bold text-slate-200">REST API Server</div>
            <div className="text-xs text-slate-400">Middleware & Endpoints</div>
          </div>

          <div className="p-4 bg-slate-950/80 rounded-2xl border border-indigo-500/30 space-y-1 text-center md:text-left">
            <div className="text-xs font-bold text-indigo-400 uppercase">React.js</div>
            <div className="text-sm font-bold text-slate-200">UI Frontend</div>
            <div className="text-xs text-slate-400">Hooks, State & Components</div>
          </div>

          <div className="p-4 bg-slate-950/80 rounded-2xl border border-purple-500/30 space-y-1 text-center md:text-left">
            <div className="text-xs font-bold text-purple-400 uppercase">Node.js</div>
            <div className="text-sm font-bold text-slate-200">JS Runtime</div>
            <div className="text-xs text-slate-400">Asynchronous Backend Logic</div>
          </div>
        </div>

      </div>
    </section>
  );
}
