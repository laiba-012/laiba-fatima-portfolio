import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function ContactSection({ onOpenRecruiter }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/60 border-t border-slate-800/80">
      
      {/* Glow Orbs */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-sky-500/30 text-xs font-semibold text-sky-400">
            <Mail className="w-3.5 h-3.5 text-amber-300" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in hiring Laiba Fatima for Full MERN Stack, Web Development, or Software Engineering roles?
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xl font-extrabold text-white">Direct Channels</h3>
                <p className="text-xs text-slate-400 mt-1">Quick links for instant outreach and response.</p>
              </div>

              <div className="space-y-4">
                {/* Email Card */}
                <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-sky-950 border border-sky-800 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-sky-400" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] text-slate-400 font-bold uppercase">Email Address</div>
                      <div className="text-xs font-semibold text-slate-200 truncate">{personalData.email}</div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-700 shrink-0 transition-colors"
                    title="Copy Email"
                  >
                    <Copy className="w-4 h-4 text-sky-400" />
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-bold uppercase">Phone Number</div>
                    <div className="text-xs font-semibold text-slate-200">{personalData.phone}</div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-950 border border-purple-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-bold uppercase">Location</div>
                    <div className="text-xs font-semibold text-slate-200">{personalData.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-sky-400" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Recruiter Trigger Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenRecruiter}
                  className="w-full py-3 px-4 bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 hover:scale-[1.02] transition-transform"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Launch Recruiter Executive Summary</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xl font-extrabold text-white">Send A Message</h3>
                <p className="text-xs text-slate-400 mt-1">Inquire about employment, contract work, or technical projects.</p>
              </div>

              {formSubmitted ? (
                <div className="p-8 bg-emerald-950/60 border border-emerald-500/40 rounded-2xl text-center space-y-3 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-200">
                    Thank you for reaching out. Laiba Fatima will respond to your message shortly at your email address.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-xl text-xs text-slate-200 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. recruiter@company.com"
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-xl text-xs text-slate-200 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. MERN Full Stack Role Inquiry"
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-xl text-xs text-slate-200 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Message *</label>
                    <textarea
                      required
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your project details or job position description here..."
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-xl text-xs text-slate-200 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Laiba</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
