import React, { useState } from 'react';
import { Sparkles, ExternalLink, Gamepad2, Layers, Cpu, Cloud, Code2, Check, ArrowRight, X } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', '3D & Game Dev', 'MERN Stack', 'Web Development', 'IoT & Systems', 'AI & Cloud'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative bg-slate-950">
      
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-sky-500/30 text-xs font-semibold text-sky-400">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Featured Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects & Engineering Works
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From an Unreal Engine 3D mission-based game to full MERN stack web platforms, cloud AI systems, and IoT alert hardware.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-sky-500 text-slate-950 font-black shadow-lg shadow-sky-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-card rounded-3xl p-6 space-y-5 flex flex-col justify-between cursor-pointer group hover:border-sky-500/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Highlight ribbon if featured */}
              {project.featured && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-sky-500 to-indigo-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                  Featured Project
                </div>
              )}

              <div className="space-y-4">
                {/* Category & Badge */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-sky-400 bg-sky-950/80 border border-sky-800/60 px-2.5 py-1 rounded-lg">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-white group-hover:text-sky-300 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer / Metrics */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono font-semibold text-emerald-400">
                  ⚡ {project.metrics}
                </span>

                <div className="flex items-center gap-1 text-xs font-bold text-sky-400 group-hover:translate-x-1 transition-transform">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-sky-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl overflow-hidden">
            
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-sky-400 bg-sky-950 px-2.5 py-1 rounded-md border border-sky-800">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-2">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-xl"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>{selectedProject.description}</p>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-900 border border-slate-700 text-sky-300 text-xs font-bold rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Check className="w-4 h-4" />
                <span>Performance Milestone: {selectedProject.metrics}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
