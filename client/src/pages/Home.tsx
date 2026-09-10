import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";

const heroArtwork = "/manus-storage/darsh-noir-hero_ea008e6f.png";
const resumePdf = "/manus-storage/Darsh_Srivastava_Combined_84c28263.pdf";

const experiences = [
  {
    period: "APR 2026 — PRESENT",
    role: "Data Science Project Coordinator",
    company: "YUVAINTERN",
    description:
      "Coordinating end-to-end data science projects across remote teams — from detailed project plans and task allocation to milestones, stakeholder communication, and delivery.",
    tag: "PROJECT / DATA",
  },
  {
    period: "APR 2026 — MAY 2026",
    role: "Graphic Designing Intern",
    company: "THIRANEX",
    description:
      "Executing design deliverables for a future-tech startup, translating brand guidelines and client requirements into high-quality creative work.",
    tag: "DESIGN / AI",
  },
  {
    period: "APR 2026",
    role: "AI Blog Writing & Copywriting Intern",
    company: "INAMIGOS FOUNDATION",
    description:
      "Contributing to digital outreach through AI-assisted blog content generation and professional copywriting.",
    tag: "CONTENT / AI",
  },
  {
    period: "SEP 2024 — OCT 2024",
    role: "Human Resources Associate",
    company: "LEARNX",
    description:
      "Managed recruitment, staffing, and structured onboarding workflows for a growing EdTech platform.",
    tag: "PEOPLE / OPS",
  },
  {
    period: "JAN 2023 — DELHI",
    role: "Human Resources Intern",
    company: "INTERNSHALA",
    description:
      "Supported talent acquisition by screening resumes, coordinating interviews, and contributing to employee engagement initiatives.",
    tag: "HR / TALENT",
  },
];

const projects = [
  {
    number: "01",
    name: "EduTrack",
    type: "SMART STUDENT INFORMATION SYSTEM",
    description:
      "A comprehensive web application for academic progress, attendance, administrative coordination, automated reporting, and data export.",
    stack: ["JAVA", "HTML", "CSS"],
    accent: "red",
  },
  {
    number: "02",
    name: "QuickQuiz",
    type: "INTERACTIVE ONLINE ASSESSMENT TOOL",
    description:
      "A responsive EdTech platform for real-time quiz management, automated scoring, and instant result generation for educators and students.",
    stack: ["HTML", "CSS", "JAVASCRIPT"],
    accent: "blue",
  },
];

const education = [
  ["2027 (EXP.)", "B.Tech", "IIT PATNA", "8.38 / 10"],
  ["2028 (EXP.)", "B.S.", "BITS PILANI", "9.50 / 10"],
  ["2026", "BBA", "IIM BANGALORE", "—"],
  ["2023 — 26", "B.A.", "UNIVERSITY OF DELHI", "6.1 / 10"],
];

const skills = [
  { label: "CORPORATE FINANCE", group: "FINANCE" },
  { label: "MS EXCEL / EXPERT", group: "FINANCE" },
  { label: "PROJECT MANAGEMENT", group: "FINANCE" },
  { label: "BUSINESS STATISTICS", group: "FINANCE" },
  { label: "FINANCIAL ANALYSIS", group: "FINANCE" },
  { label: "JAVA", group: "TECH" },
  { label: "HTML / CSS", group: "TECH" },
  { label: "DATA SCIENCE COORDINATION", group: "TECH" },
  { label: "FULL-STACK DEVELOPMENT", group: "TECH" },
  { label: "AI TOOLS & PROMPTING", group: "TECH" },
  { label: "TEAM LEADERSHIP", group: "LEADERSHIP" },
  { label: "CROSS-FUNCTIONAL COLLABORATION", group: "LEADERSHIP" },
  { label: "UI / UX DESIGN", group: "CREATIVE" },
  { label: "GRAPHIC DESIGN", group: "CREATIVE" },
  { label: "PHOTOGRAPHY", group: "CREATIVE" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;
    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      setTilt({ x: y * -3, y: x * 4 });
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });
    node.addEventListener("mousemove", onMove);
    node.addEventListener("mouseleave", onLeave);
    return () => {
      node.removeEventListener("mousemove", onMove);
      node.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const triggerGlitch = () => {
    setGlitch(true);
    window.setTimeout(() => setGlitch(false), 650);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" ref={heroRef}>
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark">DNR</span>
          <span className="brand-sub">PORTFOLIO / 2026</span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"}>
          <a href="#work" onClick={closeMenu}>WORK <span>01</span></a>
          <a href="#experience" onClick={closeMenu}>EXPERIENCE <span>02</span></a>
          <a href="#contact" onClick={closeMenu}>CONTACT <span>03</span></a>
        </nav>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="intro-title">
          <div className="hero-rail rail-left">
            <span className="eyebrow">AVAILABLE FOR SELECTED ROLES</span>
            <p className="hero-blurb">Building clarity at the intersection of business, code &amp; creative systems.</p>
            <div className="social-stack">
              <a href="mailto:darshnarayan7@gmail.com"><Mail size={14} /> EMAIL</a>
              <a href="https://github.com/DarshNarainS" target="_blank" rel="noreferrer"><Github size={14} /> GITHUB</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={14} /> LINKEDIN</a>
            </div>
          </div>

          <div className="hero-copy">
            <span className="hero-kicker">DARSH NARAIN SRIVASTAVA</span>
            <h1 id="intro-title">MAKE<br /><em>IDEAS</em><br />MOVE.</h1>
            <p className="hero-summary">BBA — Accounting &amp; Finance<br />IIT Patna / BITS Pilani / IIM Bangalore</p>
          </div>

          <div className="hero-art-wrap" style={{ transform: `translate3d(${tilt.y}px, ${tilt.x}px, 0) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}>
            <div className="red-geometry geometry-one" />
            <div className="red-geometry geometry-two" />
            <button className={glitch ? "hero-art glitching" : "hero-art"} onClick={triggerGlitch} aria-label="Trigger visual reveal">
              <img src={heroArtwork} alt="Abstract crimson spider-web artwork" />
              <span className="art-overlay" />
              <span className="art-center">DNR<small>CLICK / REVEAL</small></span>
            </button>
            <span className="orbit-label orbit-top">01 — 26</span>
            <span className="orbit-label orbit-bottom">BOLD IDEAS / QUIET EXECUTION</span>
          </div>

          <div className="hero-rail rail-right">
            <span className="vertical-copy">© 2026 DNR / ALL RIGHTS RESERVED</span>
          </div>
          <div className="scroll-cue"><span /> SCROLL TO EXPLORE</div>
        </section>

        <section className="manifesto-section section-grid">
          <div className="section-index">00 / PROFILE</div>
          <div className="manifesto-statement">A multidisciplinary<br /><span>operator</span> with a<br />builder's instinct.</div>
          <div className="manifesto-detail">I move between finance, technology, people operations, and visual communication — translating ambitious ideas into practical systems, clear narratives, and useful products.</div>
        </section>

        <section id="work" className="projects-section section-grid">
          <div className="section-index">01 / SELECTED WORK</div>
          <div className="section-heading-wrap"><h2>Things<br /><em>built.</em></h2><span className="section-meta">02 PROJECTS / WEB + EDTECH</span></div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.name}>
                <div className="project-number">{project.number}</div>
                <div className="project-main"><span className="card-eyebrow">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p><div className="stack-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
                <ArrowUpRight className="project-arrow" size={28} strokeWidth={1.25} />
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="experience-section section-grid">
          <div className="section-index">02 / EXPERIENCE</div>
          <div className="section-heading-wrap"><h2>On the<br /><em>record.</em></h2><span className="section-meta">05 ROLES / CROSS-FUNCTIONAL</span></div>
          <div className="experience-list">
            {experiences.map((experience) => (
              <article className="experience-row" key={`${experience.company}-${experience.role}`}><div className="experience-period">{experience.period}</div><div className="experience-body"><span className="card-eyebrow">{experience.tag}</span><h3>{experience.role}</h3><div className="experience-company">{experience.company}</div><p>{experience.description}</p></div><ArrowUpRight className="row-arrow" size={22} /></article>
            ))}
          </div>
        </section>

        <section className="education-section section-grid">
          <div className="section-index">03 / EDUCATION</div>
          <div className="section-heading-wrap"><h2>Learning<br /><em>in motion.</em></h2><span className="section-meta">MULTI-DISCIPLINARY / ALWAYS CURIOUS</span></div>
          <div className="education-table">
            <div className="education-head"><span>YEAR</span><span>QUALIFICATION</span><span>INSTITUTION</span><span>RESULT</span></div>
            {education.map(([year, qualification, institution, result]) => <div className="education-row" key={institution}><span>{year}</span><strong>{qualification}</strong><span>{institution}</span><span className="education-result">{result}</span></div>)}
          </div>
        </section>

        <section className="skills-section section-grid">
          <div className="section-index">04 / TOOLKIT</div>
          <div className="section-heading-wrap"><h2>Useful<br /><em>range.</em></h2><span className="section-meta">SKILLS / CURIOSITY / GRIT</span></div>
          <div className="skills-cloud">{skills.map((skill) => <span className={`skill-pill ${skill.group.toLowerCase()}`} key={skill.label}>{skill.label}</span>)}</div>
        </section>

        <section className="achievements-section section-grid">
          <div className="section-index">05 / SIGNALS</div>
          <div className="section-heading-wrap"><h2>Proof<br /><em>of work.</em></h2><span className="section-meta">ACHIEVEMENTS / INITIATIVE</span></div>
          <div className="achievement-list"><div><span>01</span><p>All India Rank under 600 in Entrepreneurship, CUET 2023.</p></div><div><span>02</span><p>Rank 214 in BHU B.Com Hons Entrance Examination.</p></div><div><span>03</span><p>Academic Prelims Rank 3 in an institute-level competition.</p></div><div><span>04</span><p>Winner, institute-level Photography Challenge.</p></div></div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-topline"><span>06 / CONTACT</span><span>OPEN TO THE NEXT GOOD PROBLEM</span></div>
          <div className="contact-layout"><div><h2>Let's make<br /><em>something</em><br />useful.</h2></div><div className="contact-aside"><p>For opportunities, collaborations, or a thoughtful hello:</p><a className="email-link" href="mailto:darshnarayan7@gmail.com">DARSHNARAYAN7@GMAIL.COM <ArrowUpRight size={26} /></a><div className="contact-actions"><a className="button-primary" href={resumePdf} download><Download size={16} /> DOWNLOAD RESUME</a><a className="button-ghost" href="https://github.com/DarshNarainS" target="_blank" rel="noreferrer"><Github size={16} /> GITHUB <ExternalLink size={14} /></a></div></div></div>
          <div className="contact-footer"><span>DNR*</span><span>DESIGNED FOR THE WEB / BUILT WITH INTENT</span><span>© 2026</span></div>
        </section>
      </main>
    </div>
  );
}
