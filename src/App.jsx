import { useEffect, useRef, useState } from "react";
import profileImg from './assets/h.jpg';
import "./App.css";
import img from './assets/h.jpg';

import cybercrimeCertificate from './assets/cybercrime.jpeg';
import ecommerceCertificate from './assets/ecommerce.jpeg';

function Nav({ onNav }) {
  return(
    <nav className="nav">
      <div className="logo">Portfolio</div>
      <ul className="nav-links">
        <li><button onClick={() => onNav("home")}>Home</button></li>
        <li><button onClick={() => onNav("qualifications")}>Qualifications</button></li>
        <li><button onClick={() => onNav("about")}>About</button></li>
        <li><button onClick={() => onNav("work")}>Work</button></li>
        <li><button onClick={() => onNav("contact")}>Contact</button></li>
      </ul>
      <div className="social-mini">
        <a href="mailto:hayyanabbasi03@gmail.com" title="Email"><svg viewBox="0 0 24 24"><path d="M2 6.5v11A2.5 2.5 0 004.5 20h15A2.5 2.5 0 0022 17.5v-11A2.5 2.5 0 0019.5 4h-15A2.5 2.5 0 002 6.5zm2 .5l7 4.5L18 7V6L11 10.5 4 6v1z"/></svg></a>
        <a href="https://www.linkedin.com/in/hayyanabbasi03" target="_blank" rel="noreferrer" title="LinkedIn">
          <svg viewBox="0 0 24 24"><path d="M4.98 3.5A2.5 2.5 0 002.5 6v12a2.5 2.5 0 002.48 2.5h.02A2.5 2.5 0 007.5 18V6a2.5 2.5 0 00-2.52-2.5zM9 8h3v10H9V8zM12 6.5a1 1 0 110-2 1 1 0 010 2zM15 8h3v1.4c.5-.8 1.7-1.4 3-1.4 2 0 3 1 3 4v8H22v-7c0-1.8-.8-2.6-2.3-2.6-1 0-1.7.6-1.9 1.3V18h-3V8z"/></svg>
        </a>
      </div>
    </nav>
  );
}

function Home({ onNav, scrollToRef }) {
  return (
    <section id="home" className="section home">
      <div className="home-left">
        <h1>Hi, I'm <span className="accent">Hayyan</span></h1>
        <p className="lead">A passionate Front-End Developer crafting modern web experiences with React.</p>
        <div className="home-buttons">
          <button onClick={() => onNav("work")} className="primary">See my work</button>
          <button onClick={() => onNav("contact")} className="ghost">Contact me</button>
        </div>
        <div className="icon-row">
          <a href="https://www.linkedin.com/in/hayyanabbasi03" target="_blank" rel="noreferrer" title="LinkedIn (opens new tab)">LinkedIn</a>
          <a href="mailto:hayyanabbasi03@gmail.com" title="Email">Email</a>
          <a href="#" onClick={(e)=>{e.preventDefault(); alert("Twitter placeholder — add your link.");}}>Twitter</a>
        </div>
      </div>

      <div className="home-right">
        <div className="profile-circle">
          <img src={profileImg} alt="Hayyan" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about">
      <h2>About Me</h2>
      <p>
        I'm a Front-End Developer focused on building clean, responsive, and accessible interfaces using React. I enjoy converting designs into performant user experiences and continuously learning modern tooling.
      </p>
      <ul className="skills">
        <li>React.js</li>
        <li>JavaScript (ES6+)</li>
        <li>CSS / Flexbox / Grid</li>
        <li>Vite / Webpack</li>
      </ul>
    </section>
  );
}

function Qualifications() {
  return (
    <section id="qualifications" className="section qualifications">
      <h2>Qualifications & Certificates</h2>

      <p className="qualification-intro">
        Here are some of my certificates and professional qualifications.
      </p>

      <div className="certificates">

        <div className="certificate-card">
          <div className="certificate-image">
            <img
              src={cybercrimeCertificate}
              alt="Cybercrime and Laws Certificate"
            />
          </div>

          <div className="certificate-info">
            <h3>Cybercrime and Laws</h3>

            <p>
              Certificate related to cybercrime, cyber laws,
              online safety, and legal aspects of digital activities.
            </p>

            <button
              onClick={() =>
                window.open(cybercrimeCertificate, "_blank")
              }
            >
              View Certificate
            </button>
          </div>
        </div>


        <div className="certificate-card">
          <div className="certificate-image">
            <img
              src={ecommerceCertificate}
              alt="E-Commerce Certificate"
            />
          </div>

          <div className="certificate-info">
            <h3>E-Commerce</h3>

            <p>
              Certificate related to e-commerce, online business,
              digital markets, and online selling.
            </p>

            <button
              onClick={() =>
                window.open(ecommerceCertificate, "_blank")
              }
            >
              View Certificate
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
const demoProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio showing projects with animations and responsive design.",
    link: "#"
  },
  {
    id: 2,
    title: "Todo App",
    description: "Task manager with local storage and filters.",
    link: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Fetches real weather data and displays forecasts.",
    link: "#"
  }
];

function Work({ openProject }) {
  return (
    <section id="work" className="section work">
      <h2>Work</h2>
      <div className="projects">
        {demoProjects.map(p => (
          <div key={p.id} className="project-card">
            <div className="project-thumb">{p.title.split(" ")[0]}</div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="project-actions">
              <button onClick={() => openProject(p)}>View</button>
              <a href={p.link} onClick={(e)=>{e.preventDefault(); alert("External link placeholder.");}}>Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  // This contact uses a mailto: so it opens your Gmail compose when clicked.
  const handleSend = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name || "Visitor"}`);
    const body = encodeURIComponent(message || "(no message)");
    window.location.href = `mailto:hayyanabbasi03@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSend}>
        <label>
          Your name
          <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" />
        </label>
        <label>
          Message
          <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Write a short message..." />
        </label>
        <div className="form-actions">
          <button type="submit" className="primary">Send via Gmail</button>
          <button type="button" className="ghost" onClick={()=>{navigator.clipboard?.writeText("hayyanabbasi03@gmail.com"); alert("Email copied to clipboard.");}}>Copy Email</button>
        </div>
      </form>
    </section>
  );
}

function Footer({ onNav }) {
  return (
    <footer className="site-footer">
      <div>
        <strong>Hayyan Abbasi</strong>
        <p>© {new Date().getFullYear()} — All rights reserved</p>
      </div>
      <div className="footer-links">
        <button onClick={() => onNav("home")}>Home</button>
        <button onClick={() => onNav("about")}>About</button>
        <button onClick={() => onNav("qualifications")}>Qualifications</button>
        <button onClick={() => onNav("work")}>Work</button>
        <button onClick={() => onNav("contact")}>Contact</button>
      </div>
    </footer>
  );
}

function Modal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e)=>e.stopPropagation()}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p><em>Demo links and details would go here.</em></p>
        <div style={{textAlign:"right"}}>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [showTop, setShowTop] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const qualificationsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(()=> {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return ()=> window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const map = {
      home: homeRef,
      about: aboutRef,
      qualifications: qualificationsRef,
      work: workRef,
      contact: contactRef
    };
    const ref = map[id];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      <Nav onNav={scrollTo} />
      <div ref={homeRef}><Home onNav={scrollTo} /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={qualificationsRef}><Qualifications /></div>
      <div ref={workRef}><Work openProject={(p)=>setActiveProject(p)} /></div>
      <div ref={contactRef}><Contact /></div>

      <Footer onNav={scrollTo} />

      {showTop &&
        <button className="back-to-top" onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} title="Back to top">
          ↑
        </button>
      }

      <Modal project={activeProject} onClose={()=>setActiveProject(null)} />
    </div>
  );
}
