
import { useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  HeartPulse,
  Layers3,
  Mail,
  Menu,
  Mic,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  X,
} from "lucide-react";


const projects = [
  {
    title: "Shiftwell",
    category: "Product & UX",
    description: "A product prototype focused on wellbeing.",
    tags: ["Product", "Wellbeing"],
    url: "https://github.com/AAstha-Bajaj/shiftwell",
    liveUrl: "https://schedule-sentry-pal.lovable.app",
    icon: HeartPulse,
    color: "#a78bfa",
  },
  {
    title: "ScopeGuard",
    category: "Product & UX",
    description: "A product prototype for a focused user problem.",
    tags: ["Product", "Prototype"],
    url: "https://github.com/AAstha-Bajaj/scopeguard",
    liveUrl: "https://scopeguard-seven-tau.vercel.app/",
    icon: ShieldCheck,
    color: "#67e8f9",
  },
  {
    title: "SuperClub Rewards",
    category: "Product & UX",
    description: "A rewards experience built as a web prototype.",
    tags: ["Product", "Rewards"],
    url: "https://github.com/AAstha-Bajaj/superclub-rewards",
    liveUrl: "https://superclub-rewards.vercel.app",
    icon: Sparkles,
    color: "#fbbf24",
  },
  {
    title: "Snap Map Privacy Redesign",
    category: "Product & UX",
    description: "A UX case study exploring privacy and user experience.",
    tags: ["UX", "Privacy"],
    url: "https://github.com/AAstha-Bajaj/snap-map-privacy-redesign",
    icon: Target,
    color: "#f9a8d4",
  },
  {
    title: "Rapido Kids Case Study",
    category: "Product & UX",
    description: "A product case study focused on a specific user need.",
    tags: ["Product", "Case Study"],
    url: "https://github.com/AAstha-Bajaj/rapido-kids-case-study",
    icon: BriefcaseBusiness,
    color: "#fdba74",
  },
  {
    title: "Vapi Voice Agent",
    category: "AI & Automation",
    description: "A project exploring voice-based AI interactions.",
    tags: ["Voice AI", "Automation"],
    url: "https://github.com/AAstha-Bajaj/vapi-voice-agent",
    icon: Mic,
    color: "#67e8f9",
  },
  {
    title: "Multi-Agent Research System",
    category: "AI & Automation",
    description: "An AI research system built around multiple agents.",
    tags: ["AI Agents", "Research"],
    url: "https://github.com/AAstha-Bajaj/multi-agent-research-system",
    liveUrl: "https://multi-agent-research-systemgit-xhbjeuwzz5u6wajmhbkappj.streamlit.app/",
    icon: BrainCircuit,
    color: "#c4b5fd",
  },
  {
    title: "Reddit Sentiment Analysis Automation",
    category: "AI & Automation",
    description: "An automation project for sentiment analysis of Reddit content.",
    tags: ["Automation", "NLP"],
    url: "https://github.com/AAstha-Bajaj/Reddit-Sentiment-Analysis-Automation.",
    icon: Workflow,
    color: "#fb923c",
  },
  {
    title: "House Price Prediction API",
    category: "Engineering & Applied AI",
    description: "A machine learning project exposed through an API.",
    tags: ["Machine Learning", "API"],
    url: "https://github.com/AAstha-Bajaj/house-price-prediction-API",
    icon: Layers3,
    color: "#86efac",
  },
  {
    title: "Air Canvas",
    category: "Engineering & Applied AI",
    description: "An interactive project exploring gesture-based drawing.",
    tags: ["Computer Vision", "Interactive"],
    url: "https://github.com/AAstha-Bajaj/Air-Canvas",
    icon: Paintbrush,
    color: "#a78bfa",
  },
];


const categories = [
  {
    name: "Product & UX",
    number: "01",
    description: "Products, user experiences, and problem-solving.",
  },
  {
    name: "AI & Automation",
    number: "02",
    description: "Intelligent systems and automated workflows.",
  },
  {
    name: "Engineering & Applied AI",
    number: "03",
    description: "Technical projects, APIs, and applied machine learning.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-7">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-violet-400">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}


function ProjectCard({ project, index }) {
  const Icon = project.icon;

  return (
    <article
      className="group flex min-w-0 flex-col rounded-2xl border border-white/[0.08] bg-[#11131d] p-4 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-[#151725]"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="mb-5 flex h-36 items-center justify-center overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-[#1d1a35] via-[#131522] to-[#0d0f17]">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition duration-300 group-hover:scale-110"
          style={{ color: project.color }}
        >
          <Icon size={32} strokeWidth={1.5} />
        </div>
      </div>

      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300">
        {project.category}
      </p>

      <h3 className="text-base font-semibold leading-6 text-white">
        {project.title}
      </h3>

      <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-400">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {project.liveUrl ? (
          <>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-violet-500 px-3 py-3 text-sm font-medium text-white transition hover:bg-violet-400"
            >
              Live Demo <ArrowUpRight size={14} />
            </a>

            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-3 py-3 text-sm font-medium text-white transition hover:border-violet-400/40 hover:bg-white/[0.04]"
            >
              GitHub Repo <ArrowUpRight size={14} />
            </a>
          </>
        ) : (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:border-violet-400/40 hover:bg-white/[0.04]"
          >
            View GitHub Repo <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </article>
  );
}


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#0b0d14] text-slate-200">
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#0b0d14]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" onClick={closeMenu} className="text-lg font-bold tracking-tight text-white">
            Aastha<span className="text-violet-400">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            <a className="transition hover:text-white" href="#home">Home</a>
            <a className="transition hover:text-white" href="#work">Work</a>
            <a className="transition hover:text-white" href="#experience">Experience</a>
            <a className="transition hover:text-white" href="#about">About</a> 
            <a className="transition hover:text-white" href="#contact">Contact</a>
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-xl bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-400 md:flex"
          >
            Let's connect <ArrowUpRight size={16} />
          </a>

          <button
            className="rounded-lg border border-white/10 p-2 text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <a
  href="/Aastha Bajaj - Resume.pdf"
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-400"
>
  Resume
  <ArrowUpRight size={14} />
</a>
        </nav>

        {menuOpen && (
          <div className="flex flex-col gap-1 border-t border-white/[0.07] px-5 py-4 md:hidden">
            {[
              ["Home", "#home"],
              ["Work", "#work"],
              ["Experience", "#experience"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5">
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
          <div className="pointer-events-none absolute -right-36 -top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />
          <div className="pointer-events-none absolute left-1/3 top-40 h-64 w-64 rounded-full bg-indigo-500/[0.07] blur-[100px]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-3 py-1.5 text-xs font-medium text-violet-300">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                PRODUCT · AI · EXECUTION
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                Learning by building.{" "}
                <span className="bg-gradient-to-r from-violet-300 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  Growing by exploring.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                Curious about Product, AI, and technology. I’m learning by building projects, experimenting with new ideas, and exploring how technology can solve real-world problems.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
                  Explore my work <ArrowDownRight size={17} />
                </a>
                <a href="#about" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-violet-400/40 hover:bg-white/[0.03]">
                  A little about me <ArrowDown size={16} />
                </a>
              </div>
            </div>

            <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
              <div className="absolute inset-8 rounded-full border border-violet-300/10" />
              <div className="absolute inset-16 rounded-full border border-violet-300/15" />
              <div className="absolute h-56 w-56 rounded-full bg-gradient-to-br from-violet-400/30 via-indigo-500/15 to-transparent blur-2xl" />
              <div className="relative flex h-48 w-48 items-center justify-center rounded-[2.5rem] border border-violet-300/20 bg-gradient-to-br from-[#282044] via-[#171629] to-[#10121b] shadow-2xl shadow-violet-950/40 sm:h-56 sm:w-56">
                <BrainCircuit size={78} strokeWidth={1} className="text-violet-300" />
                <div className="absolute -right-8 top-6 rounded-xl border border-white/10 bg-[#171923] px-3 py-2 text-xs text-slate-300 shadow-xl">
                  <Sparkles size={13} className="mr-2 inline text-violet-300" />
                  Ideas
                </div>
                <div className="absolute -bottom-4 -left-9 rounded-xl border border-white/10 bg-[#171923] px-3 py-2 text-xs text-slate-300 shadow-xl">
                  <Workflow size={13} className="mr-2 inline text-violet-300" />
                  Execution
                </div>
              </div>
              <div className="absolute bottom-8 right-2 rounded-full border border-white/10 bg-[#171923] px-3 py-2 text-xs text-slate-300">
                <Target size={13} className="mr-2 inline text-violet-300" />
                Impact
              </div>
            </div>
          </div>

          <div className="relative mt-16 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Target, title: "Product Thinking", text: "User-focused solutions" },
              { icon: BrainCircuit, title: "AI & Automation", text: "Intelligent systems" },
              { icon: Workflow, title: "Project Execution", text: "From idea to impact" },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
                <div className="rounded-xl bg-violet-400/10 p-3 text-violet-300">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-1 text-xs text-slate-400">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
            <div>
              <SectionHeading eyebrow="A little about me" title="A product-minded builder." />
              <p className="max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                I'm a Computer Science Engineering student interested in
                building useful products, exploring AI-powered solutions, and
                bringing structure to complex projects. I enjoy connecting
                user needs, technology, and execution to move ideas forward.
              </p>
              <a href="#experience" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-300 hover:text-violet-200">
                Explore my experience <ArrowRight size={16} />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Product", "Research, prototyping & problem-solving"],
                ["AI", "Agents, APIs & automation"],
                ["Execution", "Planning, collaboration & delivery"],
                ["Leadership", "Building teams and communities"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/[0.08] bg-[#11131d] p-5">
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects, grouped by how I build."
            description="A collection of product concepts, AI workflows, and technical experiments. Explore the repositories to learn more about each project."
          />

          <div className="space-y-16">
            {categories.map((category) => {
              const categoryProjects = projects.filter(
                (project) => project.category === category.name
              );

              return (
                <div key={category.name} id={`category-${category.number}`}>
                  <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-white/[0.08] pb-4">
                    <div>
                     
<p className="mb-2 text-xs font-medium text-violet-400">
  {categoryProjects.length} projects
</p>

                      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                        {category.name}
                      </h3>
                      <p className="mt-2 text-sm text-slate-400">{category.description}</p>
                    </div>
                    <a href="#contact" className="inline-flex items-center gap-2 pb-1 text-sm text-slate-400 transition hover:text-violet-300">
                      Let's connect <ArrowUpRight size={15} />
                    </a>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {categoryProjects.map((project, index) => (
                      <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        
<section id="experience" className="scroll-mt-24 py-20">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <SectionHeading
      eyebrow="Experience"
      title="Where I've learned and contributed."
      description="Experiences that have shaped how I think about products, startups, and building with teams."
    />

    <div className="relative mt-10 space-y-6 border-l border-violet-400/20 pl-6 sm:pl-8">

      {/* Warmhlee */}
      <article className="relative rounded-2xl border border-white/[0.08] bg-[#11131d] p-5 sm:p-6">
        <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-violet-400 bg-[#0b0d14] sm:-left-[39px]" />

        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Founder’s Office Intern
            </h3>
            <p className="mt-1 text-sm font-medium text-violet-300">
              Warmhlee
            </p>
          </div>
          <span className="text-xs font-medium text-slate-400">
            May 2024 – Aug 2025
          </span>
        </div>

        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
          Product strategy, MVP planning, user research, and cross-functional execution. Improved onboarding flow by ~15% in simulated tests and built engagement dashboards using Google Sheets and Mixpanel.
        </ul>
      </article>

      {/* GIC-RISE */}
      <article className="relative rounded-2xl border border-white/[0.08] bg-[#11131d] p-5 sm:p-6">
        <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-violet-400 bg-[#0b0d14] sm:-left-[39px]" />

        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Incubation Intern
            </h3>
            <p className="mt-1 text-sm font-medium text-violet-300">
              GIC-RISE
            </p>
          </div>
          <span className="text-xs font-medium text-slate-400">
            Sept 2024 – May 2025
          </span>
        </div>

        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
          Supported 10+ startups with market research, product validation, competitor mapping, GTM strategy, and pitch preparation.
        </ul>
      </article>

      {/* E-Cell */}
      <article className="relative rounded-2xl border border-white/[0.08] bg-[#11131d] p-5 sm:p-6">
        <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-violet-400 bg-[#0b0d14] sm:-left-[39px]" />

        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
          <div>
            <h3 className="text-lg font-semibold text-white">
              President
            </h3>
            <p className="mt-1 text-sm font-medium text-violet-300">
              Entrepreneurship Cell, Galgotias University
            </p>
          </div>
          <span className="text-xs font-medium text-slate-400">
            Leadership Experience
          </span>
        </div>

        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
          Leading student entrepreneurship initiatives, coordinating teams and events, and building connections with founders and the startup ecosystem.
        </ul>
      </article>

    </div>
  </div>
</section>


        
<section id="skills" className="scroll-mt-24 py-20">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <SectionHeading
      eyebrow="My Toolkit"
      title="Skills & Technologies."
      description="A growing toolkit across product thinking, AI, engineering, and execution."
    />

    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Product & Strategy",
          icon: Target,
          color: "#a78bfa",
          skills: [
            "Product Strategy",
            "Roadmapping",
            "User Research",
            "Competitive Analysis",
            "Feature Prioritization",
            "MVP Definition",
            "A/B Testing",
            "Product Analytics",
            "GTM Strategy",
          ],
        },
        {
          title: "Generative AI",
          icon: BrainCircuit,
          color: "#67e8f9",
          skills: [
            "LLMs",
            "RAG",
            "AI Agents",
            "Prompt Engineering",
            "LangChain",
            "LangGraph",
            "Vapi AI",
            "Voice AI",
            "AI Prototyping",
          ],
        },
        {
          title: "Development & APIs",
          icon: Code2,
          color: "#86efac",
          skills: [
            "Python",
            "SQL",
            "FastAPI",
            "REST APIs",
            "API Integration",
            "Supabase",
            "Git",
            "GitHub",
            "JavaScript",
          ],
        },
        {
          title: "Automation & Cloud",
          icon: Workflow,
          color: "#fdba74",
          skills: [
            "n8n",
            "Make.com",
            "Tavily API",
            "Workflow Automation",
            "Google Cloud (GCP)",
            "Docker",
          ],
        },
        {
          title: "Data & Analytics",
          icon: Target,
          color: "#f9a8d4",
          skills: [
            "Mixpanel",
            "Power BI",
            "Google Analytics",
            "NumPy",
            "Pandas",
            "Data Extraction",
            "Data Visualization",
            "User Behavior Analysis",
          ],
        },
        {
          title: "Project & Collaboration",
          icon: BriefcaseBusiness,
          color: "#c4b5fd",
          skills: [
            "Agile / Scrum",
            "Project Coordination",
            "Stakeholder Management",
            "Cross-functional Collaboration",
            "Problem-solving",
            "Quality Assurance",
            "Documentation",
          ],
        },
      ].map((group) => {
        const Icon = group.icon;

        return (
          <article
            key={group.title}
            className="rounded-2xl border border-white/[0.08] bg-[#11131d] p-5 transition duration-300 hover:border-violet-400/30 hover:bg-[#151725]"
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]"
                style={{ color: group.color }}
              >
                <Icon size={20} strokeWidth={1.6} />
              </div>

              <h3 className="text-sm font-semibold text-white sm:text-base">
                {group.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-xs leading-4 text-slate-300 transition hover:border-violet-400/30 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        );
      })}
    </div>

    <div className="mt-5 rounded-2xl border border-white/[0.08] bg-[#11131d] p-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">
        Tools I Work With
      </p>

      <div className="flex flex-wrap gap-2">
        {[
          "Figma",
          "Notion",
          "Trello",
          "Canva",
          "Lovable",
          "Antigravity",
          "Postman",
          "Streamlit",
          "BeautifulSoup",
          "Airtable",
          "Google Sheets",
          "Google Slides",
        ].map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>


        
<section id="contact" className="scroll-mt-24 py-20">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#11131d] p-6 sm:p-10 lg:p-14">
      <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
          Get in touch
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Have an idea?
          <span className="block text-violet-400">
            Let's connect.
          </span>
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
          I'm exploring opportunities across Product, AI, and technology.
          If you'd like to collaborate, discuss an opportunity, or exchange
          ideas, I'd love to hear from you.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:aasthabajaj0220@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-400"
          >
            <Mail size={17} />
            Email me
            <ArrowUpRight size={15} />
          </a>

          <a
            href="https://www.linkedin.com/in/aastha-bajaj-862a2225a/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:border-violet-400/40 hover:bg-white/[0.04]"
          >
            LinkedIn
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      <div className="relative mt-10 border-t border-white/[0.08] pt-5">
        <p className="text-xs text-slate-500">
          Always open to learning, building, and meaningful collaborations.
        </p>
      </div>
    </div>
  </div>
</section>

      </main>
    </div>
  );
}

export default App;
