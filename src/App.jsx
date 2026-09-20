import React, { useEffect, useRef, useState } from 'react';
import styles from './App.module.css';

const portfolio = {
  name: 'Saicharan Peddapelli',
  initials: 'SP',
  title: 'Software / Full-Stack Developer',
  phone: '8801705149',
  email: 'saicharanpeddapelli@proton.me',
  github: 'https://github.com/saicharan-cmd',
  linkedin: 'https://www.linkedin.com/in/saicharan-peddapelli-a98655229/',
  website: 'https://saicharanpeddapelli.in',
  summary:
    'Computer Science graduate with hands-on experience building responsive web applications and backend APIs using HTML, CSS, JavaScript, React, Python, FastAPI, MongoDB, and Streamlit. Developed practical projects focused on clean code, usability, CRUD operations, and efficient data handling. Seeking a fresher software development opportunity.',
  focus:
    'Interested in entry-level software development roles focused on building practical web applications, backend services, REST APIs, and database-driven solutions. Comfortable working across frontend and backend components using Python, JavaScript, TypeScript, React, FastAPI, Flask, MongoDB, and PostgreSQL. Focused on clean code, maintainable project structure, CRUD-based data handling, and usable interfaces. Interested in continuous learning and applying machine learning foundations alongside hands-on software projects.',
  strengths: ['Responsive web applications', 'Backend APIs & CRUD operations', 'Clean, maintainable code'],
  skills: [
    { label: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'Java'] },
    { label: 'Frameworks & Libraries', items: ['React', 'FastAPI', 'Flask', 'Streamlit'] },
    { label: 'Databases', items: ['MongoDB', 'PostgreSQL'] },
    { label: 'Tools & Version Control', items: ['Git', 'GitHub', 'Docker'] }
  ],
  developmentAreas: [
    { label: 'Frontend', detail: 'Responsive web interfaces using HTML, CSS, JavaScript, TypeScript, and React.' },
    { label: 'Backend & APIs', detail: 'Application and REST API development using Python, FastAPI, and Flask.' },
    { label: 'Databases', detail: 'Database-backed applications using MongoDB and PostgreSQL, including CRUD-based data handling.' },
    { label: 'Development tools', detail: 'Git, GitHub, Docker, and Streamlit for development, version control, and application interfaces.' }
  ],
  education: [
    { institution: 'Vaageswari, Karimnagar', detail: 'B.Tech in Computer Science', dates: '2021 — 2025' },
    { institution: 'Kendriya Vidyalaya, Karimnagar', detail: 'XII with Python' }
  ],
  projects: [
    {
      name: 'BudgetApp',
      description: 'Designed a responsive budgeting application for managing budgets and transactions, with a focus on clarity and everyday usability.',
      highlights: ['Customizable categories', 'Spending insights for better tracking and visibility', 'Clear tracking and a simple budgeting workflow'],
      url: 'https://github.com/saicharan-cmd/BudgetApp'
    },
    {
      name: 'NoteAPI',
      description: 'Built a notes application with CRUD operations using FastAPI and MongoDB, with Streamlit for the user interface.',
      technologies: ['FastAPI', 'MongoDB', 'Streamlit'],
      highlights: ['CRUD operations with FastAPI and MongoDB', 'Streamlit-powered user interface', 'Practical full-stack application'],
      url: 'https://github.com/saicharan-cmd/Noteapp'
    }
  ],
  certifications: [
    {
      name: 'Machine Learning Foundation',
      issued: '03/02/2023',
      certificateId: 'FSP/2023/2/9634940',
      category: 'Gold',
      score: '76 / 100 (76%)',
      file: '/machine-learning-foundation-certificate.pdf'
    }
  ]
};

function Icon({ name, size = 18 }) {
  const icons = {
    arrow: <path d="M5 19 19 5M8 5h11v11" />,
    github: <path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.93c.46.08.63-.2.63-.45v-1.77c-2.57.56-3.11-1.1-3.11-1.1-.42-1.07-1.03-1.36-1.03-1.36-.84-.58.07-.57.07-.57.94.07 1.43.96 1.43.96.83 1.43 2.18 1.02 2.72.78.08-.6.33-1.02.59-1.26-2.05-.23-4.21-1.02-4.21-4.57 0-1.01.36-1.84.96-2.49-.1-.23-.42-1.18.09-2.46 0 0 .78-.25 2.53.95a8.75 8.75 0 0 1 4.6 0c1.75-1.2 2.53-.95 2.53-.95.51 1.28.19 2.23.1 2.46.59.65.95 1.48.95 2.49 0 3.56-2.17 4.33-4.23 4.56.34.29.63.85.63 1.71v2.54c0 .25.17.54.63.45A9.2 9.2 0 0 0 12 2.8Z" />,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7.6 10.4V17M7.6 7.1v.02M11.4 17v-3.6a2.1 2.1 0 0 1 4.2 0V17" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    phone: <path d="M7.5 3.5 5.62 4.38c-.88.42-1.31 1.42-1.03 2.35a19.2 19.2 0 0 0 12.3 12.3c.93.28 1.93-.15 2.35-1.03l.88-1.88-3.45-2.3-1.47 1.47a14.8 14.8 0 0 1-6.4-6.4l1.47-1.47-2.77-3.92Z" />,
    download: <><path d="M12 3v11M8 10l4 4 4-4M4 20h16" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    spark: <path d="m12 2 1.76 6.24L20 10l-6.24 1.76L12 18l-1.76-6.24L4 10l6.24-1.76L12 2Z" />
  };

  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{icons[name]}</svg>;
}

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(node);
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, className = '' }) {
  const [ref, visible] = useReveal();
  return <div ref={ref} className={`${styles.reveal} ${visible ? styles.revealed : ''} ${className}`}>{children}</div>;
}

function SectionHeader({ number, eyebrow, title, copy, id }) {
  return (
    <div className={styles.sectionHeader}>
      <span className={styles.sectionNumber}>{number}</span>
      <div>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {copy && <p className={styles.sectionIntro}>{copy}</p>}
    </div>
  );
}

function ButtonLink({ href, children, variant = 'primary', download, target, ariaLabel }) {
  return (
    <a className={`${styles.button} ${styles[variant]}`} href={href} download={download} target={target} rel={target === '_blank' ? 'noreferrer' : undefined} aria-label={ariaLabel}>
      <span>{children}</span>
      <Icon name={variant === 'resume' ? 'download' : 'arrow'} size={16} />
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = [['About', 'about'], ['Skills', 'skills'], ['Education', 'education'], ['Work', 'experience'], ['Projects', 'projects'], ['Contact', 'contact']];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className={styles.page} id="top">
      <div className={styles.backdrop} aria-hidden="true"><span className={styles.orbOne} /><span className={styles.orbTwo} /><span className={styles.gridGlow} /></div>

      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
        <nav className={styles.navbar} aria-label="Primary navigation">
          <a className={styles.brand} href="#top" onClick={closeMenu} aria-label="Saicharan Peddapelli — top of page"><span className={styles.brandMark}>{portfolio.initials}</span><span className={styles.brandName}>Saicharan<span>.</span></span></a>
          <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
            <a className={styles.mobileResume} href="/Saicharan_Peddapelli_Resume.pdf" download="Saicharan_Peddapelli_Resume.pdf" onClick={closeMenu}>Download résumé <Icon name="download" size={15} /></a>
          </div>
          <div className={styles.navActions}>
            <a className={styles.resumeNav} href="/Saicharan_Peddapelli_Resume.pdf" download="Saicharan_Peddapelli_Resume.pdf">Résumé <Icon name="download" size={14} /></a>
            <button type="button" className={styles.menuButton} onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}><Icon name={menuOpen ? 'close' : 'menu'} size={22} /></button>
          </div>
        </nav>
      </header>

      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroInner}>
          <Reveal className={styles.heroKicker}><span className={styles.statusDot} /><span>Portfolio</span><span className={styles.kickerRule} /><span>{portfolio.title}</span></Reveal>
          <Reveal className={styles.heroMain}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Hello, I&apos;m</p>
              <h1 id="hero-heading">Saicharan<br /><span>Peddapelli.</span></h1>
              <p className={styles.heroLead}>Computer Science graduate building responsive web applications and backend APIs with React, FastAPI, and MongoDB.</p>
              <div className={styles.heroButtons}><ButtonLink href="/Saicharan_Peddapelli_Resume.pdf" variant="resume" download="Saicharan_Peddapelli_Resume.pdf">Download résumé</ButtonLink><ButtonLink href={`mailto:${portfolio.email}`} variant="secondary">Let&apos;s connect</ButtonLink></div>
            </div>
            <aside className={styles.heroCard} aria-label="Portfolio focus">
              <div className={styles.cardTopline}><Icon name="spark" size={17} /><span>Focus</span></div>
              <p>Responsive experiences, built with attention to the details that matter.</p>
              <div className={styles.cardFooter}>
                <a href={portfolio.github} target="_blank" rel="noreferrer" aria-label="Open Saicharan's GitHub"><Icon name="github" size={18} />GitHub</a>
                <a href={portfolio.website} target="_blank" rel="noreferrer" aria-label="Visit Saicharan's website">Website <Icon name="arrow" size={15} /></a>
              </div>
            </aside>
          </Reveal>
          <Reveal className={styles.heroBottom}><a href="#about" className={styles.scrollCue}><span>Scroll to explore</span><span className={styles.scrollLine} /></a><p>Building for clarity, utility, and a polished user experience.</p></Reveal>
        </div>
      </section>

      <section className={styles.section} id="about" aria-labelledby="about-title">
        <Reveal><SectionHeader id="about-title" number="01" eyebrow="About me" title="Thoughtful development, built to feel effortless." />
          <div className={styles.aboutLayout}>
            <p className={styles.summary}>{portfolio.summary}</p>
            <div className={styles.strengths}><p className={styles.miniLabel}>Key strengths</p>{portfolio.strengths.map((strength, index) => <div className={styles.strength} key={strength}><span>0{index + 1}</span><p>{strength}</p></div>)}</div>
          </div>
        </Reveal>
      </section>

      <section className={`${styles.section} ${styles.skillsSection}`} id="skills" aria-labelledby="skills-title">
        <Reveal><SectionHeader id="skills-title" number="02" eyebrow="Technical toolkit" title="Tools I use to turn ideas into working products." copy="A focused foundation across programming languages, development tools, and APIs." />
          <div className={styles.skillGrid}>{portfolio.skills.map((group, index) => <article className={styles.skillCard} key={group.label}><div className={styles.skillCardHead}><span>0{index + 1}</span><h3>{group.label}</h3></div><div className={styles.tags}>{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
          <div className={styles.areasBlock}>
            <p className={styles.areasLabel}>Relevant development areas</p>
            <div className={styles.areaGrid}>{portfolio.developmentAreas.map((area) => <article className={styles.areaCard} key={area.label}><h3>{area.label}</h3><p>{area.detail}</p></article>)}</div>
          </div>
        </Reveal>
      </section>

      <section className={styles.section} id="education" aria-labelledby="education-title">
        <Reveal><SectionHeader id="education-title" number="03" eyebrow="Education" title="Academic foundations." />
          <div className={styles.timeline}>{portfolio.education.map((item) => <article className={styles.timelineItem} key={item.institution}><span className={styles.timelineDot} aria-hidden="true" /><div><h3>{item.institution}</h3><p>{item.detail}</p></div>{item.dates && <span className={styles.dates}>{item.dates}</span>}</article>)}</div>
        </Reveal>
      </section>

      <section className={`${styles.section} ${styles.experienceSection}`} id="experience" aria-labelledby="experience-title">
        <Reveal><SectionHeader id="experience-title" number="04" eyebrow="Hands-on experience" title="Practical work, built around useful interactions." />
          <div className={styles.sourceNote}><Icon name="spark" size={20} /><div><h3>Project experience</h3><p>Built practical web applications and backend APIs focused on responsive design, budgeting, CRUD operations, and clean user interaction.</p></div><a href="#projects" aria-label="Explore selected projects"><Icon name="arrow" size={18} /></a></div>
          <div className={`${styles.sourceNote} ${styles.sourceNoteSpaced}`}><Icon name="spark" size={20} /><div><h3>Professional focus</h3><p>{portfolio.focus}</p></div><a href="#contact" aria-label="Start a conversation about a role"><Icon name="arrow" size={18} /></a></div>
        </Reveal>
      </section>

      <section className={styles.section} id="projects" aria-labelledby="projects-title">
        <Reveal><SectionHeader id="projects-title" number="05" eyebrow="Selected projects" title="Work shaped around everyday utility." copy="Two practical applications designed for simple, useful interactions." />
          <div className={styles.projectGrid}>{portfolio.projects.map((project, index) => <article className={styles.projectCard} key={project.name}>
            <div className={styles.projectTopline}><span>Project / 0{index + 1}</span><a href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} GitHub repository`}><Icon name="github" size={19} /></a></div>
            <div className={styles.projectContent}><h3>{project.name}</h3><p>{project.description}</p></div>
            {project.technologies && <div className={styles.projectTech} aria-label={`${project.name} technologies`}>{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>}
            <ul className={styles.projectHighlights}>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            <a href={project.url} target="_blank" rel="noreferrer" className={styles.projectLink}>View on GitHub <Icon name="arrow" size={16} /></a>
          </article>)}</div>
        </Reveal>
      </section>

      <section className={`${styles.section} ${styles.achievementsSection}`} id="achievements" aria-labelledby="achievements-title">
        <Reveal><SectionHeader id="achievements-title" number="06" eyebrow="Certifications & achievements" title="Credentials earned." />
          <div className={styles.certificateGrid}>{portfolio.certifications.map((certificate) => <article className={styles.certificateCard} key={certificate.certificateId}>
            <div className={styles.certificateTopline}><span><Icon name="spark" size={16} /> Certification</span><strong>{certificate.category}</strong></div>
            <h3>{certificate.name}</h3>
            <dl className={styles.certificateDetails}>
              <div><dt>Issued</dt><dd>{certificate.issued}</dd></div>
              <div><dt>Score</dt><dd>{certificate.score}</dd></div>
              <div><dt>Certificate ID</dt><dd>{certificate.certificateId}</dd></div>
            </dl>
            <div className={styles.certificateActions}><ButtonLink href={certificate.file} variant="secondary" target="_blank">View certificate</ButtonLink><ButtonLink href={certificate.file} variant="resume" download="Saicharan-Peddapelli-Machine-Learning-Foundation-Certificate.pdf">Download PDF</ButtonLink></div>
          </article>)}</div>
        </Reveal>
      </section>

      <section className={styles.resumeSection} id="resume" aria-labelledby="resume-title">
        <Reveal className={styles.resumePanel}><div><p className={styles.eyebrow}>Résumé</p><h2 id="resume-title">A closer look at my background.</h2><p>View the original résumé or save a copy for later.</p></div><div className={styles.resumeActions}><ButtonLink href="/Saicharan_Peddapelli_Resume.pdf" variant="secondary" target="_blank">View résumé</ButtonLink><ButtonLink href="/Saicharan_Peddapelli_Resume.pdf" variant="resume" download="Saicharan_Peddapelli_Resume.pdf">Download PDF</ButtonLink></div></Reveal>
      </section>

      <section className={styles.contactSection} id="contact" aria-labelledby="contact-title">
        <Reveal><div className={styles.contactHeading}><p className={styles.eyebrow}>Contact</p><h2 id="contact-title">Let&apos;s start a conversation<span>.</span></h2><p>Have an opportunity or idea in mind? I&apos;d be glad to hear from you.</p></div>
          <div className={styles.contactGrid}>
            <a href={`mailto:${portfolio.email}`} className={styles.contactCard}><span><Icon name="mail" size={19} /> Email</span><strong>{portfolio.email}</strong><Icon name="arrow" size={18} /></a>
            <a href={`tel:${portfolio.phone}`} className={styles.contactCard}><span><Icon name="phone" size={19} /> Phone</span><strong>{portfolio.phone}</strong><Icon name="arrow" size={18} /></a>
            <a href={portfolio.github} target="_blank" rel="noreferrer" className={styles.contactCard}><span><Icon name="github" size={19} /> GitHub</span><strong>saicharan-cmd</strong><Icon name="arrow" size={18} /></a>
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className={styles.contactCard}><span><Icon name="linkedin" size={19} /> LinkedIn</span><strong>saicharan-peddapelli</strong><Icon name="arrow" size={18} /></a>
          </div>
        </Reveal>
      </section>

      <footer className={styles.footer}><a className={styles.brand} href="#top" aria-label="Back to the top"><span className={styles.brandMark}>{portfolio.initials}</span><span className={styles.brandName}>Saicharan<span>.</span></span></a><p>Designed around the details in Saicharan Peddapelli&apos;s résumé.</p><a href="#top" className={styles.toTop}>Back to top <Icon name="arrow" size={15} /></a></footer>
    </main>
  );
}

export default App;
