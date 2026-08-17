import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Title Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-sky-500/30 text-xs font-semibold text-sky-400">
            <Briefcase className="w-3.5 h-3.5 text-amber-300" />
            <span>Hands-on Industry Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work & Internship Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Direct web development experience converting client UI/UX designs into responsive, high-performance web code.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="glass-panel-glow rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden"
            >
              
              {/* Top Row: Role & Company */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 p-[1.5px] shrink-0">
                    <div className="w-full h-full bg-slate-950 rounded-[14.5px] flex items-center justify-center">
                      <Building2 className="w-7 h-7 text-sky-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-sm text-sky-400 font-bold mt-0.5">
                      <span>{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{exp.period}</span>
                  </div>
                  <span className="px-3 py-1.5 rounded-xl bg-emerald-950 border border-emerald-700/60 text-xs font-bold text-emerald-300">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {exp.description}
              </p>

              {/* Bullet points grid */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Contributions & Impact</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.bulletPoints.map((point, pIdx) => (
                    <div key={pIdx} className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
