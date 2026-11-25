"use client";
import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Github, Globe2, Layers3, Linkedin, Mail, Menu, Moon, Smartphone, Sun, X, MapPin, BriefcaseBusiness, Sparkles } from "lucide-react";
import { useState } from "react";
import { ThemeProvider, useTheme } from "./ThemeProvider";

const skills = [
  { title:"Mobile", items:["Swift","SwiftUI","Objective-C","UIKit","React Native","Flutter"] },
  { title:"Frontend", items:["React","Next.js","TypeScript","JavaScript","HTML & CSS","Tailwind CSS"] },
  { title:"Backend", items:["Node.js","Express.js","REST APIs","Firebase","Authentication"] },
  { title:"Data & Cloud", items:["PostgreSQL","Core Data","MongoDB","Mapbox","GitHub Actions","CI/CD"] }
];
const projects = [
  { name:"WheelOnDeal", type:"Automotive · Group buying", desc:"A group-buying platform concept connecting customers with local vehicle dealers to compare offers and arrange showroom visits.", stack:["React Native","Node.js","PostgreSQL"], number:"01", status:"Product in development" },
  { name:"Estater", type:"Real estate · GIS intelligence", desc:"Real-estate intelligence experiences combining property data, interactive maps, location layers and parcel-level exploration.", stack:["iOS","Swift","Mapbox","GIS"], number:"02", status:"Professional experience" },
  { name:"Brave Overseas CRM", type:"Recruitment · Business software", desc:"A recruitment operations platform concept for managing enquiries, candidates, job opportunities, follow-ups and documents.", stack:["React","Node.js","PostgreSQL"], number:"03", status:"Product in development" }
];
function Inner() {
  const {theme,toggle}=useTheme();
  const [menu,setMenu]=useState(false);
  const [copied,setCopied]=useState(false);
  const email="YOUR_EMAIL@example.com";
  const nav=[["About","#about"],["Skills","#skills"],["Projects","#projects"],["Services","#services"],["Contact","#contact"]];
  const close=()=>setMenu(false);
  return <main>
    <header className="sticky top-0 z-50 border-b" style={{background:"color-mix(in srgb, var(--bg) 88%, transparent)",borderColor:"var(--line)",backdropFilter:"blur(18px)"}}>
      <div className="container flex h-[74px] items-center justify-between">
        <a href="#home" className="flex items-center gap-3 font-bold tracking-tight"><span className="flex h-9 w-9 items-center justify-center rounded-xl text-sm" style={{background:"var(--accent)",color:"var(--accent-ink)"}}>VY</span><span>Vijay Yadav<span className="accent">.</span></span></a>
        <nav className="hidden items-center gap-8 md:flex">{nav.map(([n,h])=><a className="nav-link" href={h} key={n}>{n}</a>)}</nav>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle color theme" className="surface flex h-10 w-10 items-center justify-center rounded-full">{theme==="dark"?<Sun size={17}/>:<Moon size={17}/>}</button>
          <a href="#contact" className="btn btn-primary hidden sm:inline-flex">Let&apos;s talk <ArrowUpRight size={16}/></a>
          <button onClick={()=>setMenu(!menu)} className="surface flex h-10 w-10 items-center justify-center rounded-full md:hidden" aria-label="Toggle menu">{menu?<X size={18}/>:<Menu size={18}/>}</button>
        </div>
      </div>
      {menu&&<nav className="container flex flex-col gap-4 pb-5 md:hidden">{nav.map(([n,h])=><a className="nav-link py-1" href={h} onClick={close} key={n}>{n}</a>)}</nav>}
    </header>

    <section id="home" className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-70"/>
      <div className="container relative grid min-h-[690px] items-center gap-12 py-24 lg:grid-cols-[1.35fr_.65fr]">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs" style={{borderColor:"var(--line)",background:"var(--surface)"}}><span className="h-2 w-2 rounded-full" style={{background:"var(--accent)"}}/> Available for select projects and opportunities</div>
          <p className="eyebrow mb-5">Full-stack · iOS · Mobile</p>
          <h1 className="max-w-4xl text-[clamp(48px,8vw,88px)] font-bold leading-[.98] tracking-[-.075em]">I build digital<br/>products that <span className="accent">move</span><br/>business forward.</h1>
          <p className="muted mt-8 max-w-xl text-lg leading-8">I&apos;m Vijay Yadav, a software developer focused on building useful web platforms, mobile applications and reliable backend systems.</p>
          <div className="mt-9 flex flex-wrap gap-3"><a href="#projects" className="btn btn-primary">Explore my work <ArrowUpRight size={17}/></a><a href="#contact" className="btn btn-secondary">Get in touch <ArrowRight size={16}/></a></div>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm muted"><span className="flex items-center gap-2"><MapPin size={15}/> Jaipur, India</span><span className="flex items-center gap-2"><BriefcaseBusiness size={15}/> 11+ years in software development</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[360px]">
          <div className="absolute -inset-8 rounded-full opacity-20 blur-3xl" style={{background:"var(--accent)"}}/>
          <div className="card relative p-6">
            <div className="mb-8 flex items-center justify-between"><span className="eyebrow">Developer profile</span><Code2 className="accent" size={20}/></div>
            <div className="text-6xl font-bold tracking-[-.08em]">VY<span className="accent">.</span></div>
            <p className="muted mt-3 text-sm">Turning complex ideas into clear, practical software.</p>
            <div className="my-7 h-px" style={{background:"var(--line)"}}/>
            <div className="space-y-4">{[["01","Mobile applications"],["02","Web platforms"],["03","Backend & APIs"],["04","Product engineering"]].map(([n,t])=><div className="flex items-center gap-4" key={n}><span className="text-xs accent">{n}</span><span className="text-sm font-medium">{t}</span></div>)}</div>
            <div className="mt-8 flex flex-wrap gap-2"><span className="pill">Swift</span><span className="pill">React Native</span><span className="pill">Node.js</span><span className="pill">PostgreSQL</span></div>
          </div>
          <div className="surface absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl"><Sparkles className="accent" size={18}/><div><p className="text-xs font-bold">Build · Ship · Improve</p><p className="muted text-[10px]">A practical engineering mindset</p></div></div>
        </div>
      </div>
      <div className="container pb-8"><a href="#about" className="muted inline-flex items-center gap-2 text-xs">Scroll to explore <ArrowDown size={14}/></a></div>
    </section>

    <section id="about" className="section"><div className="container grid gap-12 md:grid-cols-[.7fr_1.3fr]">
      <div><p className="eyebrow">01 / About</p><h2 className="section-title">Engineering with<br/>a product mindset.</h2></div>
      <div><p className="text-xl leading-9">I&apos;m a software developer with 11+ years of experience building mobile applications and digital products. My core background is in iOS engineering, and I also work across modern web, cross-platform mobile and backend technologies.</p><p className="muted mt-6 leading-8">I enjoy taking an idea from an early concept through architecture, development and release. I care about clean user experiences, maintainable code and software that solves real problems.</p>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3"><div className="surface rounded-2xl p-4"><p className="text-3xl font-bold accent">11+</p><p className="muted mt-1 text-xs">Years of experience</p></div><div className="surface rounded-2xl p-4"><p className="text-3xl font-bold accent">iOS</p><p className="muted mt-1 text-xs">Core expertise</p></div><div className="surface rounded-2xl p-4"><p className="text-3xl font-bold accent">End-to-end</p><p className="muted mt-1 text-xs">Product development</p></div></div></div>
    </div></section>

    <section id="skills" className="section" style={{background:"var(--surface)"}}><div className="container"><p className="eyebrow">02 / Capabilities</p><h2 className="section-title">My technology toolkit.</h2><p className="muted mb-10 max-w-xl leading-7">A practical mix of mobile, frontend, backend and cloud technologies to take products from interface to infrastructure.</p>
      <div className="grid gap-4 sm:grid-cols-2">{skills.map((s,i)=><div className="card p-6" key={s.title}><div className="mb-5 flex items-center justify-between"><h3 className="text-lg font-bold">{s.title}</h3><span className="accent text-xs">0{i+1}</span></div><div className="flex flex-wrap gap-2">{s.items.map(x=><span className="pill" key={x}>{x}</span>)}</div></div>)}</div>
    </div></section>

    <section id="projects" className="section"><div className="container"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">03 / Selected work</p><h2 className="section-title">Projects & products.</h2></div><p className="muted max-w-sm text-sm leading-7">A selection of product work and concepts across automotive, real estate and business operations.</p></div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">{projects.map(p=><article className="card flex flex-col p-6" key={p.name}><div className="mb-10 flex items-center justify-between"><span className="eyebrow">{p.type}</span><span className="muted text-xs">{p.number}</span></div><div className="mb-5 flex h-28 items-center justify-center rounded-2xl text-4xl font-bold tracking-tighter" style={{background:"var(--surface2)"}}>{p.name==="WheelOnDeal"?"W/":p.name==="Estater"?"E.":"BO."}</div><h3 className="text-2xl font-bold tracking-tight">{p.name}</h3><p className="muted mt-3 min-h-[96px] text-sm leading-7">{p.desc}</p><div className="mt-5 flex flex-wrap gap-2">{p.stack.map(t=><span className="pill" key={t}>{t}</span>)}</div><div className="mt-7 border-t pt-4 text-xs muted" style={{borderColor:"var(--line)"}}>{p.status}</div></article>)}</div>
      <p className="muted mt-5 text-xs">Project descriptions reflect selected work and product development. Add public demos, screenshots and repositories when they are ready to share.</p>
    </div></section>

    <section id="services" className="section" style={{background:"var(--surface)"}}><div className="container"><p className="eyebrow">04 / What I do</p><h2 className="section-title">From first idea to<br/>production-ready product.</h2><div className="mt-10 grid gap-4 sm:grid-cols-2">
      {[{icon:<Globe2/>,title:"Web development",desc:"Responsive websites, dashboards, portals and business applications."},{icon:<Smartphone/>,title:"Mobile applications",desc:"Native iOS and cross-platform mobile experiences for iOS and Android."},{icon:<Layers3/>,title:"Backend & APIs",desc:"Backend services, REST APIs, database design and third-party integrations."},{icon:<Code2/>,title:"Product engineering",desc:"Technical planning, architecture, performance improvements and ongoing development."}].map(s=><div className="card flex gap-5 p-6" key={s.title}><div className="accent">{s.icon}</div><div><h3 className="text-lg font-bold">{s.title}</h3><p className="muted mt-2 text-sm leading-7">{s.desc}</p></div></div>)}</div></div></section>

    <section id="contact" className="section"><div className="container"><div className="card relative overflow-hidden p-8 sm:p-12"><div className="absolute -right-10 -top-20 h-64 w-64 rounded-full opacity-10 blur-3xl" style={{background:"var(--accent)"}}/><div className="relative max-w-2xl"><p className="eyebrow">05 / Contact</p><h2 className="section-title">Have an idea?<br/>Let&apos;s build it.</h2><p className="muted mb-8 leading-7">Whether you&apos;re looking for a developer, have a product idea or want to discuss an opportunity, I&apos;d be happy to connect.</p><div className="flex flex-wrap gap-3"><a className="btn btn-primary" href={`mailto:${email}?subject=Project%20or%20opportunity%20enquiry`}>Email me <Mail size={16}/></a><a className="btn btn-secondary" href="https://github.com/vijay18vishesh" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={15}/></a><a className="btn btn-secondary" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={15}/></a></div><p className="muted mt-5 text-xs">Before publishing, replace the sample email address and LinkedIn homepage link with your actual contact details.</p></div></div>
      <footer className="flex flex-col justify-between gap-3 py-8 text-xs muted sm:flex-row"><span>© {new Date().getFullYear()} Vijay Yadav. Built with care.</span><a href="#home" className="hover:accent">Back to top ↑</a></footer>
    </div></section>
  </main>;
}
export default function Portfolio(){return <ThemeProvider><Inner/></ThemeProvider>}
