import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, Award } from 'lucide-react';
import { personalData, skillsData, projectsData, experienceData, educationData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/90 backdrop-blur-xl animate-fadeIn">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Action Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
            <h3 className="text-sm font-bold text-slate-200">Interactive Curriculum Vitae (CV) — {personalData.name}</h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-xl transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Container */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[80vh] overflow-y-auto bg-slate-950 text-slate-100" id="printable-cv">
          
          {/* Header Banner */}
          <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h1 className="text-3xl font-black tracking-tight text-white">{personalData.name}</h1>
              <p className="text-lg font-bold text-sky-400">{personalData.title} & Web / Software Engineer</p>
              <p className="text-xs text-slate-400 max-w-xl leading-relaxed pt-1">{personalData.bio}</p>
            </div>

            <div className="space-y-2 text-xs font-medium text-slate-300 border-l md:border-l border-slate-800 pl-0 md:pl-6 shrink-0">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{personalData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalData.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>{personalData.email}</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-2">
                <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
                <a href={personalData.github} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Section: Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-sky-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              Technical Skills Matrix
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div>
                <span className="text-xs font-bold text-slate-200">MERN Stack & Web:</span>
                <p className="text-xs text-slate-300 mt-0.5">React.js, Node.js, Express.js, MongoDB, HTML5, CSS3, JavaScript (ES6+), REST APIs, Tailwind CSS</p>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-200">Programming Languages:</span>
                <p className="text-xs text-slate-300 mt-0.5">Java, Python, SQL, C++ (Unreal Engine logic)</p>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-200">3D & Game Tech:</span>
                <p className="text-xs text-slate-300 mt-0.5">Unreal Engine (C++ & Blueprint logic), Unity 3D, Three.js</p>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-200">Tools & Platforms:</span>
                <p className="text-xs text-slate-300 mt-0.5">VS Code, Git, GitHub, Postman, WordPress, Windows OS</p>
              </div>
            </div>
          </div>

          {/* Section: Internship Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-sky-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              Internship Experience
            </h2>

            {experienceData.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-bold text-white">
                    {exp.role} <span className="text-sky-400 font-medium">| {exp.company}</span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 pl-1">
                  {exp.bulletPoints.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Section: Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-sky-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              Featured Projects
            </h2>

            <div className="space-y-3 text-xs">
              {projectsData.slice(0, 5).map((proj) => (
                <div key={proj.id} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-100">{proj.title}</span>
                    <span className="text-[10px] text-sky-400 font-mono font-semibold">{proj.tech.join(', ')}</span>
                  </div>
                  <p className="text-slate-300">{proj.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-sky-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              Education
            </h2>

            <div className="space-y-2 text-xs">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-100">{edu.degree}</span>
                    <span className="text-slate-400"> — {edu.institution}</span>
                  </div>
                  <span className="text-slate-400 font-mono">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl"
          >
            Close CV
          </button>
        </div>

      </div>
    </div>
  );
}
