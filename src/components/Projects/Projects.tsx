import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Code2,
  BrainCircuit,
  ShieldCheck,
  FileText,
  Activity,
  BarChart3,
  Languages,
  FileSearch,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

type Accent = "pink" | "blue" | "purple"

type Project = {
  id: string
  number: string
  title: string
  subtitle: string
  category: string
  description: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  accent: Accent
  icon: typeof BrainCircuit
  visual: string
}

const projects: Project[] = [
  {
    id: "sukhi-suvidha",
    number: "01",
    title: "SUKHI-SUVIDHA",
    subtitle: "Medical AI Simplifier",
    category: "AI × ACCESSIBILITY",
    description:
      "An AI-powered healthcare platform designed to make medical information simpler, multilingual, and more accessible through prescription processing, AI explanations, and voice output.",
    technologies: [
      "React",
      "Python",
      "FastAPI",
      "EasyOCR",
      "HuggingFace",
      "gTTS",
    ],
    liveUrl: "https://sukhi-suvidha-platform.vercel.app/",
    githubUrl:
      "https://github.com/gahnavishnani/sukhi-suvidha-platform",
    accent: "pink",
    icon: BrainCircuit,
    visual: "/project-visuals/sukhi-01.png",
  },

  {
    id: "genethix",
    number: "02",
    title: "GENETHIX",
    subtitle: "Banking AI Governance System",
    category: "CYBERSECURITY × AI",
    description:
      "An AI-powered banking decision system focused on explainability, customer consent, fairness, model governance, monitoring, and transparent AI-driven decisions.",
    technologies: [
      "React",
      "Vite",
      "Tailwind",
      "FastAPI",
      "Python",
      "NumPy",
      "Joblib",
      "SHAP",
    ],
    liveUrl: "https://genethix-omega.vercel.app/",
    githubUrl: "https://github.com/gahnavishnani/genethix",
    accent: "blue",
    icon: ShieldCheck,
    visual: "/project-visuals/genethix-01.png",
  },

  {
    id: "smart-resume",
    number: "03",
    title: "SMART RESUME",
    subtitle: "Resume Intelligence Platform",
    category: "DATA × AI",
    description:
      "A Python-based resume analysis platform that extracts resume information, analyzes candidate data, and transforms it into useful visual insights.",
    technologies: [
      "Python",
      "Streamlit",
      "PyResparser",
      "PDFMiner",
      "Plotly",
    ],
    liveUrl: "https://your-streamlit-app.streamlit.app/",
    githubUrl:
      "https://github.com/gahnavishnani/Innomatics-ai-recruiter-",
    accent: "purple",
    icon: FileText,
    visual: "/project-visuals/resume-01.png",
  },
]

const accentStyles: Record<
  Accent,
  {
    text: string
    border: string
    soft: string
    glow: string
    line: string
  }
> = {
  pink: {
    text: "text-pink-200",
    border: "border-pink-200/25",
    soft: "bg-pink-200/10",
    glow: "rgba(244,114,182,0.3)",
    line: "bg-pink-200",
  },

  blue: {
    text: "text-blue-200",
    border: "border-blue-200/25",
    soft: "bg-blue-200/10",
    glow: "rgba(96,165,250,0.3)",
    line: "bg-blue-200",
  },

  purple: {
    text: "text-purple-200",
    border: "border-purple-200/25",
    soft: "bg-purple-200/10",
    glow: "rgba(192,132,252,0.3)",
    line: "bg-purple-200",
  },
}

function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null)

  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const project = projects[activeIndex]
  const accent = accentStyles[project.accent]
  const ProjectIcon = project.icon

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-shell",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        },
      )

      gsap.to(".project-floating-dot", {
        y: -8,
        opacity: 0.4,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.4,
        ease: "sine.inOut",
      })

      gsap.to(".project-path-dot", {
        opacity: 0.25,
        scale: 0.7,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
        ease: "sine.inOut",
      })

      gsap.to(".small-visual", {
        y: -5,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
        ease: "sine.inOut",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const changeProject = (direction: number) => {
    if (isAnimating) return

    setIsAnimating(true)

    const nextIndex =
      (activeIndex + direction + projects.length) % projects.length

    const timeline = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false)
      },
    })

    timeline
      .to(".project-info", {
        opacity: 0,
        x: direction > 0 ? -35 : 35,
        duration: 0.28,
        ease: "power2.in",
      })
      .to(
        ".project-visuals",
        {
          opacity: 0,
          x: direction > 0 ? -30 : 30,
          scale: 0.97,
          duration: 0.28,
          ease: "power2.in",
        },
        "<",
      )
      .call(() => {
        setActiveIndex(nextIndex)
      })
      .fromTo(
        ".project-info",
        {
          opacity: 0,
          x: direction > 0 ? 35 : -35,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          ease: "power3.out",
        },
      )
      .fromTo(
        ".project-visuals",
        {
          opacity: 0,
          x: direction > 0 ? 30 : -30,
          scale: 0.97,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "<",
      )
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#050505] px-7 text-white md:px-12 lg:px-16 xl:px-20"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-[72%] top-[50%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{
            background: accent.glow,
            opacity: 0.07,
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,transparent_0%,#050505_72%)]" />

        <span className="project-floating-dot absolute left-[8%] top-[30%] text-white/15">
          +
        </span>

        <span className="project-floating-dot absolute right-[8%] top-[25%] text-white/15">
          ✦
        </span>

        <span className="project-floating-dot absolute bottom-[20%] left-[45%] text-white/10">
          ·
        </span>
      </div>

      {/* One viewport */}

      <div className="projects-shell relative z-10 mx-auto grid h-full max-w-[1450px] grid-rows-[auto_1fr_auto]">
        {/* HEADER */}

        <header className="flex items-end justify-between pt-20 md:pt-24">
          <div>
            <p className="mb-3 text-[9px] uppercase tracking-[0.5em] text-pink-200/60">
              03 — Selected Work
            </p>

            <h2 className="font-serif text-4xl leading-none tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[4rem]">
              PROJECTS
              <span className="text-white/25"> / UNIVERSE</span>
            </h2>
          </div>

          <div className="hidden text-right sm:block">
            <p className="text-[8px] uppercase tracking-[0.4em] text-white/25">
              Selected Projects
            </p>

            <p className={`mt-2 text-sm ${accent.text}`}>
              {project.number} / {projects.length}
            </p>
          </div>
        </header>

        {/* MAIN CONTENT */}

        <main className="grid min-h-0 items-center gap-8 py-4 lg:grid-cols-[0.78fr_1.22fr] xl:gap-14">
          {/* LEFT — INFORMATION */}

          <div className="project-info min-w-0">
            <div className="mb-4 flex items-center gap-3">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full border ${accent.border} ${accent.soft}`}
              >
                <ProjectIcon
                  size={15}
                  strokeWidth={1.3}
                  className={accent.text}
                />
              </span>

              <span
                className={`text-[8px] uppercase tracking-[0.4em] ${accent.text}`}
              >
                {project.category}
              </span>
            </div>

            <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-white/25">
              PROJECT {project.number}
            </p>

            <h3 className="max-w-[570px] font-serif text-4xl leading-[0.88] tracking-[-0.045em] sm:text-5xl md:text-5xl xl:text-[3.8rem]">
              {project.title}
            </h3>

            <p className={`mt-3 text-sm ${accent.text}`}>
              {project.subtitle}
            </p>

            <p className="mt-4 max-w-[520px] text-xs leading-5.5 text-white/50 md:text-sm md:leading-6">
              {project.description}
            </p>

            {/* TECHNOLOGIES */}

            <div className="mt-5">
              <p className="mb-2 text-[8px] uppercase tracking-[0.35em] text-white/25">
                Built With
              </p>

              <div className="flex max-w-[520px] flex-wrap gap-1.5">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 text-[8px] text-white/45"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* LINKS */}

            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={`group flex items-center gap-2 rounded-full border ${accent.border} px-4 py-2 text-[8px] uppercase tracking-[0.18em] transition-all duration-300 hover:bg-white hover:text-black`}
              >
                <ExternalLink size={12} />
                View Deployed Version
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[8px] uppercase tracking-[0.18em] text-white/50 transition-all duration-300 hover:border-white/30 hover:text-white"
              >
                <Code2 size={12} />
                View Code
              </a>
            </div>
          </div>

          {/* ==================================================
              RIGHT — PROJECT VISUAL COMPOSITION
          ================================================== */}

          <div className="project-visuals relative mx-auto h-[350px] w-full max-w-[720px] md:h-[380px]">
            {/* ==================================================
                BIG MIDDLE PROJECT IMAGE
            ================================================== */}

            <div
              className={`absolute left-[3%] top-[12%] h-[230px] w-[68%] overflow-hidden rounded-2xl border ${accent.border} bg-[#090909] md:h-[255px]`}
              style={{
                boxShadow: `0 18px 60px ${accent.glow}`,
              }}
            >
              {/* Project screenshot */}

              <img
                src={project.visual}
                alt={`${project.title} project visual`}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              />

              {/* Cinematic overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

              {/* Top label */}

              <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-2.5 py-1.5 backdrop-blur-md">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${accent.line}`}
                />

                <span className="text-[7px] uppercase tracking-[0.25em] text-white/55">
                  PROJECT VISUAL
                </span>
              </div>
            </div>

            {/* ==================================================
                TOP RIGHT — DESCRIPTIVE TILE
            ================================================== */}

            <div
              className={`small-visual absolute right-[2%] top-[0%] flex h-[105px] w-[28%] flex-col items-center justify-center rounded-2xl border ${accent.border} ${accent.soft} backdrop-blur-md md:h-[120px]`}
            >
              <SmallVisualTop
                projectId={project.id}
                accent={accent}
              />
            </div>

            {/* ==================================================
                BOTTOM RIGHT — DESCRIPTIVE TILE
            ================================================== */}

            <div className="small-visual absolute bottom-[0%] right-[5%] flex h-[110px] w-[32%] flex-col items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-md md:h-[125px]">
              <SmallVisualBottom projectId={project.id} />
            </div>

            {/* ==================================================
                CONNECTING PATH
            ================================================== */}

            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 720 380"
              fill="none"
            >
              <path
                d="
                  M525 55
                  C475 75 470 105 410 125
                  C350 145 330 180 300 205
                  C275 225 335 260 440 290
                "
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 8"
                className="text-white/15"
              />

              <circle
                cx="525"
                cy="55"
                r="3"
                className="project-path-dot fill-current text-white/45"
              />

              <circle
                cx="300"
                cy="205"
                r="3"
                className="project-path-dot fill-current text-white/35"
              />

              <circle
                cx="440"
                cy="290"
                r="3"
                className="project-path-dot fill-current text-white/45"
              />
            </svg>
          </div>
        </main>

        {/* NAVIGATION */}

        <footer className="flex items-center justify-between border-t border-white/[0.07] pb-5 pt-4">
          <button
            type="button"
            onClick={() => changeProject(-1)}
            disabled={isAnimating}
            className="group flex items-center gap-3 text-[8px] uppercase tracking-[0.3em] text-white/35 transition-colors hover:text-white disabled:opacity-30"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-white/30">
              <ArrowLeft size={12} />
            </span>

            Previous
          </button>

          {/* INDICATORS */}

          <div className="flex items-center gap-2">
            {projects.map((item, index) => (
              <button
                key={item.id}
                type="button"
                disabled={isAnimating}
                onClick={() => {
                  if (index === activeIndex || isAnimating) return

                  changeProject(index > activeIndex ? 1 : -1)
                }}
                aria-label={`View ${item.title}`}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === activeIndex
                    ? `w-8 ${accent.line}`
                    : "w-2.5 bg-white/15 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => changeProject(1)}
            disabled={isAnimating}
            className="group flex items-center gap-3 text-[8px] uppercase tracking-[0.3em] text-white/35 transition-colors hover:text-white disabled:opacity-30"
          >
            Next

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-white/30">
              <ArrowRight size={12} />
            </span>
          </button>
        </footer>
      </div>
    </section>
  )
}

/* ========================================================
   TOP RIGHT VISUAL
======================================================== */

function SmallVisualTop({
  projectId,
  accent,
}: {
  projectId: string
  accent: (typeof accentStyles)["pink"]
}) {
  if (projectId === "sukhi-suvidha") {
    return (
      <>
        <Languages
          size={27}
          strokeWidth={1}
          className={accent.text}
        />

        <p className="mt-2 text-[8px] uppercase tracking-[0.25em] text-white/40">
          5+ Languages
        </p>
      </>
    )
  }

  if (projectId === "genethix") {
    return (
      <>
        <ShieldCheck
          size={27}
          strokeWidth={1}
          className={accent.text}
        />

        <p className="mt-2 text-[8px] uppercase tracking-[0.25em] text-white/40">
          Secure AI
        </p>
      </>
    )
  }

  return (
    <>
      <BarChart3
        size={27}
        strokeWidth={1}
        className={accent.text}
      />

      <p className="mt-2 text-[8px] uppercase tracking-[0.25em] text-white/40">
        Data Insights
      </p>
    </>
  )
}

/* ========================================================
   BOTTOM RIGHT VISUAL
======================================================== */

function SmallVisualBottom({
  projectId,
}: {
  projectId: string
}) {
  if (projectId === "sukhi-suvidha") {
    return (
      <div className="flex items-center gap-3">
        <BrainCircuit
          size={23}
          strokeWidth={1}
          className="text-white/45"
        />

        <div>
          <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
            AI
          </p>

          <p className="mt-1 text-[9px] text-white/40">
            Simplify
          </p>
        </div>
      </div>
    )
  }

  if (projectId === "genethix") {
    return (
      <div className="flex items-center gap-3">
        <Activity
          size={23}
          strokeWidth={1}
          className="text-white/45"
        />

        <div>
          <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
            Model
          </p>

          <p className="mt-1 text-[9px] text-white/40">
            Monitor
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <FileSearch
        size={23}
        strokeWidth={1}
        className="text-white/45"
      />

      <div>
        <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
          Resume
        </p>

        <p className="mt-1 text-[9px] text-white/40">
          Analyze
        </p>
      </div>
    </div>
  )
}

export default Projects