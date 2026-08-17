import React, { useEffect, useState } from 'react';
import { X, Sparkles, CheckCircle2, Download, Copy, ExternalLink, Mail, Phone, MapPin, Award, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function RecruiterModal({ isOpen, onClose, onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#a855f7', '#10b981', '#fbbf24']
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const recruiterChecklist = [
    { label: "MERN Stack Application Development", desc: "React.js frontend, Node.js & Express REST APIs, MongoDB Database" },
    { label: "Hands-on Industry Internship", desc: "6 Months at Giga Developers Pvt. Ltd. (Front-end, UI/UX, Speed optimization)" },
    { label: "3D Game Engine Mastery", desc: "Built 3D Mission-Based Final Year Project using Unreal Engine & C++" },
    { label: "Solid Computer Science Degree", desc: "BS CS (2022-2026) @ University of Haripur" },
    { label: "Multi-Language Capability", desc: "Java, Python, C++, SQL, JavaScript (ES6+)" },
    { label: "Clean Code & Performance Focus", desc: "Responsive cross-browser layouts, Core Web Vitals optimization" }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-xl animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-sky-500/30 rounded-3xl shadow-2xl shadow-sky-500/20 overflow-hidden my-8">
        
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/10 rounded-2xl backdrop-blur-md">
              <Sparkles className="w-6 h-6 text-amber-300 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-extrabold tracking-tight">Recruiter Executive Brief</h2>
                <span className="px-2.5 py-0.5 bg-amber-400 text-slate-950 text-[11px] font-black uppercase rounded-full tracking-wider">
                  Recruiter Mode
                </span>
              </div>
              <p className="text-xs text-sky-100 font-medium">
                Candidate Summary for {personalData.name} — Full MERN Stack & Software Developer
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Executive Tagline & Quick Stats */}
          <div className="p-5 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">Candidate Profile</span>
                <h3 className="text-xl font-extrabold text-white mt-0.5">
                  {personalData.recruiterSummary.tagline}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full CV</span>
                </button>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {personalData.recruiterSummary.quickStats.map((stat) => (
                <div key={stat.label} className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-center">
                  <div className="text-xl font-black text-sky-400">{stat.value}</div>
                  <div className="text-[11px] text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recruiter Qualification Match Checklist */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-200 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Why Hire Laiba Fatima? (Key Qualifications Checklist)</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recruiterChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 hover:border-sky-500/40 transition-colors flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-100">{item.label}</h5>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Stack Breakdown */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-200 flex items-center gap-2">
              <Layers className="w-5 h-5 text-sky-400" />
              <span>Core Stack At A Glance</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 bg-slate-950/80 rounded-xl border border-sky-500/30 text-center space-y-1">
                <div className="text-xs font-bold text-sky-400">Frontend</div>
                <div className="text-xs text-slate-200">React.js, JavaScript, HTML5, CSS3, Tailwind</div>
              </div>

              <div className="p-3.5 bg-slate-950/80 rounded-xl border border-emerald-500/30 text-center space-y-1">
                <div className="text-xs font-bold text-emerald-400">Backend & DB</div>
                <div className="text-xs text-slate-200">Node.js, Express.js, MongoDB, SQL, REST APIs</div>
              </div>

              <div className="p-3.5 bg-slate-950/80 rounded-xl border border-purple-500/30 text-center space-y-1">
                <div className="text-xs font-bold text-purple-400">Game & Languages</div>
                <div className="text-xs text-slate-200">Unreal Engine (C++), Java, Python</div>
              </div>

              <div className="p-3.5 bg-slate-950/80 rounded-xl border border-amber-500/30 text-center space-y-1">
                <div className="text-xs font-bold text-amber-400">Experience</div>
                <div className="text-xs text-slate-200">Giga Developers Web Intern (6 Mos)</div>
              </div>
            </div>
          </div>

          {/* Direct Contact & Action Links */}
          <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl space-y-4">
            <h4 className="text-sm font-bold text-slate-200">Direct Contact Details for Hiring Managers</h4>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>laibafatima0116@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>+92 321-6272140</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>Haripur, Pakistan</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-xl transition-colors"
                >
                  <Copy className="w-3.5 h-3.5 text-sky-400" />
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
                </button>

                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">Available for Immediate Interview Scheduling</span>
          
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-colors"
            >
              Close Brief
            </button>
            <button
              onClick={onOpenResume}
              className="px-5 py-2 text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-600 rounded-xl hover:opacity-95 transition-opacity"
            >
              Open Full Printable CV
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
