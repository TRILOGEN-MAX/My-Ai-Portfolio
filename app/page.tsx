"use client";
import React from 'react';

// 1. PROJECT DATABASE: Add all your projects here! 
const PROJECTS = [
  {
    title: "Omni-Cortex v1.0",
    category: "Biometrics/AI",
    description: "Conceptual framework for a facial-scan interface integrating legal, financial, and civil datasets.",
    tags: ["Python", "OpenCV", "Deep Learning"],
    status: "In-Development",
    color: "text-cyan-400"
  },
  {
    title: "GenAI Neural Architect",
    category: "Generative AI",
    description: "Custom LLM pipeline for autonomous system documentation using RAG.",
    tags: ["Python", "PyTorch", "LangChain"],
    status: "Deployed",
    color: "text-blue-400"
  },
  {
    title: "Vision-Based Robot Controller",
    category: "Robotics",
    description: "Real-time object detection and kinematic movement for industrial arms.",
    tags: ["C++", "ROS2", "OpenCV"],
    status: "Testing",
    color: "text-purple-400"
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#01040a] text-slate-300 font-sans selection:bg-cyan-500/30 overflow-x-hidden max-w-full">
      {/* BACKGROUND ENGINE */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-500/5 via-transparent to-slate-900/20"></div>
      </div>

      {/* HUD NAVIGATION */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl px-6 py-3 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 flex justify-between items-center shadow-2xl">
        <div className="text-lg font-black tracking-tighter text-white">
          VISHNU<span className="text-cyan-400">.</span>AI
        </div>
        <div className="flex gap-4 text-[10px] sm:text-xs font-mono uppercase tracking-widest">
          <a href="#archive" className="hover:text-cyan-400 transition-colors">Project_Archive</a>
          <a href="https://github.com" className="text-white bg-cyan-600 px-3 py-1 rounded-md hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]">Git_Hub</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative z-10 pt-32 pb-20 px-6 text-center max-w-full">
        <div className="inline-block px-3 py-1 mb-6 text-[10px] font-mono text-cyan-400 border border-cyan-400/50 rounded-full bg-cyan-400/10 animate-pulse">
          SYSTEM_STATUS: OPTIMIZED // ROLE: AI_ENGINEER
        </div>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-none">
          INTELLIGENT <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            AUTOMATION.
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg md:text-xl font-light leading-relaxed px-4">
          Architecting the convergence of <span className="text-white">Generative AI</span>, 
          <span className="text-white">Deep Learning</span>, and <span className="text-white">Robotic Kinematics</span>.
        </p>
      </header>

      {/* DIGITAL IDENTITY SECTION - THE "DECRYPTED FILE" LOOK */}
      <section className="relative z-10 py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* THE CORE DOSSIER */}
          <div className="md:col-span-2 group relative p-8 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/20 animate-pulse"></div>
            <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-mono font-bold text-white tracking-t도ter">
                    USER_PROFILE: <span className="text-cyan-400">VISHNU_NARAYANAN_K</span>
                </h3>
                <span className="text-[10px] font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded">
                    STATUS: ACTIVE_DEVELOPMENT
                </span>
            </div>
            <div className="space-y-6">
                <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-all">
                    <div className="text-xs font-mono text-cyan-400 mb-2 uppercase tracking-widest">Primary_Objective // Omni-Cortex</div>
                    <p className="text-slate-300 leading-relaxed font-light">
                        Architecting a <span className="text-white font-semibold">Multi-Modal Biometric Intelligence System</span>. 
                        Goal: a facial-scan interface capable of real-time, full-spectrum data synthesis—integrating 
                        legal, financial, and civil datasets into a singular intelligence interface.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                        <div className="text-[10px] font-mono text-slate-500 uppercase mb-1">Academic_Base</div>
                        <div className="text-sm text-white font-medium">B.Tech CSE (AI) <br/> Joy University, TN</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                        <div className="text-[10px] font-mono text-slate-500 uppercase mb-1">Upskilling_Framework</div>
                        <div className="text-sm text-white font-medium">NIAT <br/> (NxtWave of Innovation in Advanced Tech)</div>
                    </div>
                </div>
                <p className="text-slate-400 text-sm font-mono italic">
                    "Operationally driven by high-volume project deployment to achieve industry-level competency and early-stage professional integration."
                </p>
            </div>
          </div>

          {/* THE TERMINAL CONTACT CARD */}
          <div className="p-8 rounded-3xl border border-slate-800 bg-black/60 backdrop-blur-sm flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 blur-3xl"></div>
            <div>
                <h3 className="text-sm font-mono text-cyan-400 uppercase mb-8 tracking-widest">Establish_Connection</h3>
                <div className="space-y-4">
                    <a href="mailto:your-email@gmail.com" className="flex justify-between items-center group text-slate-400 hover:text-white transition-all font-mono text-sm p-2 rounded-lg hover:bg-slate-800">
                        <span>&gt; EMAIL_LINK</span>
                        <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-all text-cyan-400">CONNECT</span>
                    </a>
                    <a href="https://linkedin.com/in/yourname" className="flex justify-between items-center group text-slate-400 hover:text-white transition-all font-mono text-sm p-2 rounded-lg hover:bg-slate-800">
                        <span>&gt; LINKEDIN_DATA</span>
                        <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-all text-cyan-400">CONNECT</span>
                    </a>
                    <a href="https://github.com/yourname" className="flex justify-between items-center group text-slate-400 hover:text-white transition-all font-mono text-sm p-2 rounded-lg hover:bg-slate-800">
                        <span>&gt; GITHUB_REPO</span>
                        <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-all text-cyan-400">CONNECT</span>
                    </a>
                </div>
            </div>
            <div className="mt-auto pt-6 border-t border-slate-800">
                <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">System_Status</span>
                    <span className="text-[10px] font-mono text-green-400 animate-pulse">AVAILABLE_FOR_HIRE</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROJECT ARCHIVE (Grid) */}
      <section id="archive" className="relative z-10 py-20 px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-slate-800"></div>
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-slate-500">Project_Database</h2>
          <div className="h-px flex-1 bg-slate-800"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-6 hover:border-cyan-500/50 transition-all backdrop-blur-sm hover:-translate-y-2 shadow-xl">
              <div className="flex justify-between items-start mb-4">
                <span className={`text-[10px] font-mono uppercase px-2 py-1 rounded bg-slate-800 ${project.color}`}>
                  {project.category}
                </span>
                <span className="text-[10px] font-mono text-slate-600">ID: 0{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                <span className="text-[10px] font-mono text-slate-500">STATUS: {project.status}</span>
                <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 py-12 border-t border-slate-800 text-center">
        <div className="text-xs font-mono text-slate-600 tracking-widest uppercase">
          End of Transmission // © 2024 VISHNU.AI
        </div>
      </footer>
    </div>
  );
}
