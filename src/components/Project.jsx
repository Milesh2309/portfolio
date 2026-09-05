import React from 'react';

const projects = [
  {
    name: 'Dream IT Infotech Pvt Ltd - Corporate Website',
    platform: 'Client / Production',
    title: (
      <>
        DREAM IT <span className="font-light italic text-gray-300 lowercase font-serif">infotech</span><br />
        PVT LTD
      </>
    ),
    description: "A fully dynamic, high-performance corporate web application designed and built for Dream IT Infotech Pvt Ltd using React.js and modern responsive architecture. Features interactive software service showcases, portfolio galleries, client inquiry forms, business solution modules, and optimized performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    repoUrl: null, // Private / Closed Source as requested
    liveUrl: "https://dreamit-bay.vercel.app/",
    tags: ["React.js", "Tailwind CSS", "Corporate Web", "Fully Dynamic", "Vercel"]
  },
  {
    name: 'AutoX - Smart Garage Management Platform',
    platform: 'GitHub',
    title: (
      <>
        AUTOX <span className="font-light italic text-gray-300 lowercase font-serif">smart</span><br />
        GARAGE PLATFORM
      </>
    ),
    description: "A modern automotive service and garage management web application built with React.js, Node.js, Express & Tailwind CSS. Enables seamless online vehicle service booking, real-time maintenance tracking, mechanic assignment, service history, and automated garage workflows.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2000&auto=format&fit=crop",
    repoUrl: "https://github.com/Milesh2309/AutoX-Smart-Garage-",
    liveUrl: "https://auto-x-smart-garage.vercel.app",
    tags: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Vercel"]
  },
  {
    name: 'D & H Creatives - Video Editing Web Application',
    platform: 'GitHub',
    title: (
      <>
        D &amp; H CREATIVES <br />
        <span className="font-light italic text-gray-300 lowercase font-serif">ai</span> VIDEO EDITING PLATFORM
      </>
    ),
    description: "A full-stack AI video editing and creative production web application built with React, Node.js & Express. Features interactive timeline video editing, template libraries, AI video tools, project export rendering pipelines, and Swagger API documentation.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2000&auto=format&fit=crop",
    repoUrl: "https://github.com/Milesh2309/H-D",
    liveUrl: null,
    tags: ["React", "Node.js", "Express.js", "AI Video Editor", "REST API", "Swagger"]
  },
  {
    name: 'Student Management System',
    platform: 'GitLab / GitHub',
    title: (
      <>
        STUDENT <br />
        MANAGEMENT SYSTEM
      </>
    ),
    description: "A complete web application developed with PHP, MySQL, JavaScript, HTML5 & CSS3. Features secure role-based authentication, student records administration, course enrollments, attendance tracking, grades management, and fee records.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop",
    repoUrl: "https://github.com/Milesh2309/student_management_system",
    gitlabUrl: "https://gitlab.com/milesh0610-group/sms",
    liveUrl: null,
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"]
  },
  {
    name: 'CRF Data Entry & Analytics System',
    platform: 'GitLab',
    title: (
      <>
        CRF DATA ENTRY <br />
        <span className="font-light italic text-gray-300 lowercase font-serif">&amp;</span> ANALYTICS SYSTEM
      </>
    ),
    description: "A production-grade Clinical Report Form (CRF) and research data management web platform built with React 19, Vite & Firebase. Features interactive multi-step data entry forms, real-time analytics with Recharts, automated PDF generation via jsPDF, Excel data export with XLSX, and animated UI flows with Framer Motion.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2000&auto=format&fit=crop",
    repoUrl: "https://gitlab.com/milesh0610/crf-data-entry-system",
    liveUrl: null,
    tags: ["React 19", "Firebase", "Recharts", "Framer Motion", "jsPDF", "XLSX"]
  },
  {
    name: 'Task Management RESTful API',
    platform: 'GitHub',
    title: (
      <>
        TASK MANAGEMENT <br />
        RESTFUL API
      </>
    ),
    description: "A scalable backend RESTful API engineered with Laravel and PHP 8.2. Implements Laravel Sanctum token-based authentication, user roles and permissions, task lifecycle CRUD endpoints, and robust database migrations.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
    repoUrl: "https://github.com/Milesh2309/TaskManagmentAPI",
    liveUrl: null,
    tags: ["Laravel", "PHP 8.2", "Sanctum Auth", "REST API", "MySQL"]
  }
];

const Project = ({ onCtaClick }) => {
  return (
    <div id="project" className="bg-[#050505] w-full text-white pt-10 md:pt-20 pb-24 px-6 md:px-16">

      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-12 lg:gap-0 mb-20 lg:mb-32">

        {/* Left Giant Title */}
        <div className="w-full lg:w-7/12 overflow-visible">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[0.9] uppercase flex items-center gap-3 whitespace-nowrap">
            Selected
            <span className="font-light italic text-gray-300 lowercase font-serif pr-4 pt-2 md:pt-4">work</span>
          </h2>
        </div>

        {/* Right Description & Profile Buttons */}
        <div className="w-full lg:w-4/12 flex flex-col items-start lg:mt-4">
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-6">
            As a Full Stack Developer, I design and build scalable web applications, robust backend APIs, and modern responsive user interfaces.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://gitlab.com/milesh0610" target="_blank" rel="noopener noreferrer" className="cursor-pointer px-5 py-2 rounded-full border border-[#fc6d26]/40 bg-[#fc6d26]/10 text-white font-medium text-xs md:text-sm hover:bg-[#fc6d26] hover:text-white transition-all flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-[#fc6d26] group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 13.29-1.87-5.75a.94.94 0 0 0-1.78-.04l-1.4 4.31H7.05l-1.4-4.31a.94.94 0 0 0-1.78.04L2 13.29a2 2 0 0 0 .74 2.24l9.26 6.72 9.26-6.72a2 2 0 0 0 .74-2.24Z"/>
              </svg>
              GitLab Profile
            </a>
            <a href="https://github.com/Milesh2309?tab=repositories" target="_blank" rel="noopener noreferrer" className="cursor-pointer px-5 py-2 rounded-full border border-[#ccff00] bg-[#ccff00] text-black font-medium text-xs md:text-sm hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub Repos
            </a>
          </div>
        </div>
      </div>

      {/* Projects List - Alternating Layout */}
      <div className="flex flex-col gap-24 lg:gap-40 w-full">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={proj.name} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-12 lg:gap-16 w-full group`}>

              {/* Image Side */}
              <div className="w-full lg:w-6/12 overflow-hidden relative aspect-[16/10] bg-[#111] rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                {proj.platform && (
                  <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-gray-200 uppercase">
                    {proj.platform}
                  </span>
                )}
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-5/12 flex flex-col items-start">
                <span className="text-[#ccff00] text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
                  0{idx + 1}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.1] uppercase mb-4">
                  {proj.title}
                </h3>
                
                {/* Tech tags */}
                {proj.tags && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-8">
                  {proj.description}
                </p>

                <div className="flex items-center gap-4 flex-wrap">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black text-xs md:text-sm font-medium hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors inline-flex items-center gap-2"
                    >
                      Live Demo
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  )}

                  {proj.repoUrl && (
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer px-6 py-2.5 rounded-full border border-white/30 text-white text-xs md:text-sm hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2"
                    >
                      {proj.platform.includes('GitLab') ? (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m22 13.29-1.87-5.75a.94.94 0 0 0-1.78-.04l-1.4 4.31H7.05l-1.4-4.31a.94.94 0 0 0-1.78.04L2 13.29a2 2 0 0 0 .74 2.24l9.26 6.72 9.26-6.72a2 2 0 0 0 .74-2.24Z"/>
                          </svg>
                          GitLab Repo
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                          GitHub Repo
                        </>
                      )}
                    </a>
                  )}

                  {proj.gitlabUrl && (
                    <a
                      href={proj.gitlabUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer px-6 py-2.5 rounded-full border border-[#fc6d26]/40 text-[#fc6d26] text-xs md:text-sm hover:bg-[#fc6d26] hover:text-white transition-colors inline-flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m22 13.29-1.87-5.75a.94.94 0 0 0-1.78-.04l-1.4 4.31H7.05l-1.4-4.31a.94.94 0 0 0-1.78.04L2 13.29a2 2 0 0 0 .74 2.24l9.26 6.72 9.26-6.72a2 2 0 0 0 .74-2.24Z"/>
                      </svg>
                      GitLab Repo
                    </a>
                  )}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Project;
