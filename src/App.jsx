import { useEffect, useState } from 'react'

const projects = [
  {
    name: 'Kolekto',
    description: 'An e-commerce platform for collectors and their favorite items.',
    stack: 'Django · Python · HTML · CSS',
    image: '/static/Kolekto.png',
    link: 'https://github.com/P-E-N-T-E-S/Kolekto',
  },
  {
    name: 'SUBlime',
    description: 'A platform for creating and managing subtitles collaboratively.',
    stack: 'Spring · Java · HTML · CSS',
    image: '/static/Sublime.png',
    link: 'https://github.com/P-E-N-T-E-S/SUBlime',
  },
  {
    name: 'BDGuest',
    description: 'An agile management platform for restaurants and their daily operations.',
    stack: 'Spring · JavaScript · Java · MySQL',
    image: '/static/BDGuest.png',
    link: 'https://github.com/P-E-N-T-E-S/BDGuest',
  },
  {
    name: 'VMM',
    description: 'A virtual memory manager that simulates process scheduling and CPU execution.',
    stack: 'C · Memory management · Algorithms',
    image: '/static/VMM.png',
    link: 'https://github.com/Nerebo/3Periodo/tree/main/Implementacao',
  },
  {
    name: 'Focus Cube',
    description: 'A real-time dashboard for monitoring and interacting with an embedded device.',
    stack: 'Flask · Python · MQTT',
    image: '/static/Focus_Cube_Front.png',
    link: 'https://github.com/joaovfittipaldi/focus-cube',
  },
  {
    name: 'Vuln Report — GLHF',
    description: 'A black-box vulnerability analysis with documented findings and mitigations.',
    stack: 'Burp Suite · Python · Docker',
    image: '/static/Capa_GLHF.png',
    link: 'https://nerebo.github.io/glhf-vuln-webapp-report/',
  },
]

const scripts = {
  description: [
    'Computer Science student @ CESAR School.',
    'Interested in Full-Stack, Security Testing and Game Development.',
    'I like building useful software and learning through the process.',
  ],
  stack: [
    'languages  = [Python, C, C#, Java, TypeScript, JavaScript, SQL]',
    'frameworks = [Django, Spring, Flask, React]',
    'tools      = [Git, Docker, Postman, VS Code, IntelliJ]',
  ],
}

function ExternalIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
}

function GithubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1 0S17.9-.4 15 1.5a14 14 0 0 0-6 0C6.1-.4 4.9 0 4.9 0a5.4 5.4 0 0 0-.2 3A5.8 5.8 0 0 0 3.2 7.1c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 9 18v4M9 19c-3 .9-3-1.5-4.2-2" /></svg>
}

function LinkedinIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
}

function MailIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="brand" href="#about" onClick={() => setOpen(false)} aria-label="Home">andrew@portfolio:<span>~</span>$</a>
      <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
        {open ? '[ close ]' : '[ menu ]'}
      </button>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
        <a href="#about" onClick={() => setOpen(false)}>&gt; about_me</a>
        <a href="#portfolio" onClick={() => setOpen(false)}>&gt; portfolio</a>
        <a href="#contact" onClick={() => setOpen(false)}>&gt; contact</a>
      </nav>
    </header>
  )
}

function HeroTerminal() {
  const [activeScript, setActiveScript] = useState('description')

  const toggleScript = (script) => {
    setActiveScript((current) => current === script ? null : script)
  }

  return (
    <div className="hero-terminal">
      <div className="prompt-line"><span className="prompt">andrew@portfolio</span><span className="path">:~</span>$ whoami</div>
      <h1>Hi, i&apos;m Andrew<i /></h1>
      <p className="prompt-line">// software developer, security enthusiast and computer science student</p>
      <div className="script-buttons" aria-label="Terminal scripts">
        <button type="button" className={activeScript === 'description' ? 'active' : ''} onClick={() => toggleScript('description')}>
          <span>$</span> ./description.sh
        </button>
        <button type="button" className={activeScript === 'stack' ? 'active' : ''} onClick={() => toggleScript('stack')}>
          <span>$</span> ./stack.sh
        </button>
      </div>
      <div className={activeScript ? 'script-output visible' : 'script-output'} aria-live="polite">
        {activeScript && scripts[activeScript].map((line, index) => (
          <p style={{ '--line-delay': `${index * 90}ms` }} key={line}><span>&gt;</span> {line}</p>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article className="project-card reveal">
      <a className="project-preview" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
        <img src={project.image} alt={`${project.name} project preview`} loading="lazy" />
        <span className="open-project">open_project <ExternalIcon /></span>
      </a>
      <div className="project-info">
        <div className="project-title-row"><h3><span>&gt;</span> {project.name}</h3><a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}></a></div>
        <p>{project.description}</p>
        <code>{project.stack}</code>
      </div>
    </article>
  )
}

function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="scanlines" aria-hidden="true" />
      <Header />
      <main>
        <section className="about-section" id="about">
          <div className="ambient-grid" aria-hidden="true" />
          <HeroTerminal />
          <a className="scroll-command" href="#portfolio">scroll_to(&quot;portfolio&quot;) ↓</a>
        </section>

        <section className="portfolio-section" id="portfolio">
          <header className="section-title reveal">
            <p><span>andrew@portfolio</span>:~/projects$ ls -la</p>
            <h2>&gt; Portfolio<span>_</span></h2>
          </header>
          <div className="projects-grid">
            {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-terminal reveal">
            <p className="contact-command"><span>andrew@portfolio</span>:~$ ./contact.sh</p>
            <h2>Let's create something<br />great together.</h2>
            <a className="email-link" href="mailto:andregoesf@gmail.com">&gt; andregoesf@gmail.com <span>↗</span></a>
            <p className="success-message">[ OK ] Message channel ready.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Andrew Fonseca <span>— built_with: React</span></p>
        <div className="social-links">
          <a href="https://github.com/Nerebo" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
          <a href="https://www.linkedin.com/in/andrel-fonseca/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
          <a href="mailto:andregoesf@gmail.com" aria-label="Email"><MailIcon /></a>
        </div>
      </footer>
    </>
  )
}

export default App
