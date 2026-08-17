import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-sky-500/30 text-xs font-semibold text-sky-400">
            <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Academic Qualifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Degree coursework in Computer Science, Software Engineering, Object-Oriented Programming, and 3D Game Systems.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden group hover:border-sky-500/40"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-white group-hover:text-sky-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="text-xs font-bold text-sky-400">{edu.institution}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{edu.period}</span>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-950 border border-emerald-800 text-[11px] font-bold text-emerald-300 rounded-lg">
                    {edu.status}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {edu.details}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
