import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BrainCircuit,
  Database,
  Code2,
  Cloud,
  GitBranch,
  Layers3,
  BarChart3,
  Terminal,
  Cpu,
  Workflow,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

type ToolCategory = "AI" | "TECH" | "DATA ENGINEERING"

type Certificate = {
  number: string
  title: string
  subtitle: string
  image: string
}

const certificates: Certificate[] = [
  {
    number: "01",
    title: "GHCI 25 HACKATHON",
    subtitle: "AI / HACKATHON",
    image: "/certificates/certificate-01.png",
  },
  {
    number: "02",
    title: "INDIA AI IMPACT BUILDATHON",
    subtitle: "AI / BUILDATHON",
    image: "/certificates/certificate-02.png",
  },
  {
    number: "03",
    title: "OPENAI ACADEMY × NXTWAVE",
    subtitle: "AI / BUILDATHON",
    image: "/certificates/certificate-03.png",
  },
  {
    number: "04",
    title: "WISHWAGON",
    subtitle: "DATA ENGINEERING INTERNSHIP",
    image: "/certificates/certificate-04.png",
  },
  {
    number: "05",
    title: "OPEN SOURCE CONNECT INDIA",
    subtitle: "OPEN SOURCE / 2025",
    image: "/certificates/certificate-05.png",
  },
  {
    number: "06",
    title: "GOOGLE CLOUD",
    subtitle: "GENERATIVE AI",
    image: "/certificates/certificate-06.png",
  },
  {
    number: "07",
    title: "UNLOX × TRIVON",
    subtitle: "AI INTERNSHIP",
    image: "/certificates/certificate-07.png",
  },
]

const tools: Record<
  ToolCategory,
  {
    name: string
    icon: React.ReactNode
  }[]
> = {
  AI: [
    {
      name: "Python",
      icon: <Code2 size={17} strokeWidth={1.2} />,
    },
    {
      name: "FastAPI",
      icon: <Layers3 size={17} strokeWidth={1.2} />,
    },
    {
      name: "HuggingFace",
      icon: <BrainCircuit size={17} strokeWidth={1.2} />,
    },
    {
      name: "SHAP",
      icon: <BrainCircuit size={17} strokeWidth={1.2} />,
    },
    {
      name: "GenAI",
      icon: <Cpu size={17} strokeWidth={1.2} />,
    },
  ],

  TECH: [
    {
      name: "React",
      icon: <Code2 size={17} strokeWidth={1.2} />,
    },
    {
      name: "TypeScript",
      icon: <Terminal size={17} strokeWidth={1.2} />,
    },
    {
      name: "Node.js",
      icon: <Layers3 size={17} strokeWidth={1.2} />,
    },
    {
      name: "Git",
      icon: <GitBranch size={17} strokeWidth={1.2} />,
    },
    {
      name: "Tailwind",
      icon: <Code2 size={17} strokeWidth={1.2} />,
    },
  ],

  "DATA ENGINEERING": [
    {
      name: "Snowflake",
      icon: <Database size={17} strokeWidth={1.2} />,
    },
    {
      name: "dbt Cloud",
      icon: <Workflow size={17} strokeWidth={1.2} />,
    },
    {
      name: "Airflow",
      icon: <Workflow size={17} strokeWidth={1.2} />,
    },
    {
      name: "Fivetran",
      icon: <Cloud size={17} strokeWidth={1.2} />,
    },
    {
      name: "SQL",
      icon: <Database size={17} strokeWidth={1.2} />,
    },
  ],
}

function TechArsenal() {
  const sectionRef = useRef<HTMLElement | null>(null)

  const [certificateIndex, setCertificateIndex] = useState(0)
  const [toolCategory, setToolCategory] =
    useState<ToolCategory>("AI")

  const [isCertificateAnimating, setIsCertificateAnimating] =
    useState(false)

  const certificate = certificates[certificateIndex]
  const activeTools = tools[toolCategory]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ==================================================
         SECTION ENTRANCE
      ================================================== */

      gsap.fromTo(
        ".arsenal-shell",
        {
          opacity: 0,
          y: 25,
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

      /* ==================================================
         CERTIFICATE GLOW
      ================================================== */

      gsap.to(".certificate-glow", {
        opacity: 0.7,
        scale: 1.04,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      /* ==================================================
         FLOATING DOTS
      ================================================== */

      gsap.to(".arsenal-dot", {
        y: -6,
        opacity: 0.4,
        duration: 2.3,
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
        ease: "sine.inOut",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  /* ======================================================
     CERTIFICATE NAVIGATION
  ====================================================== */

  const changeCertificate = (direction: number) => {
    if (isCertificateAnimating) return

    setIsCertificateAnimating(true)

    const nextIndex =
      (certificateIndex + direction + certificates.length) %
      certificates.length

    const timeline = gsap.timeline({
      onComplete: () => {
        setIsCertificateAnimating(false)
      },
    })

    timeline
      .to(".certificate-content", {
        opacity: 0,
        x: direction > 0 ? -30 : 30,
        duration: 0.25,
        ease: "power2.in",
      })
      .call(() => {
        setCertificateIndex(nextIndex)
      })
      .fromTo(
        ".certificate-content",
        {
          opacity: 0,
          x: direction > 0 ? 30 : -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power3.out",
        },
      )
  }

  /* ======================================================
     TOOL CATEGORY
  ====================================================== */

  const changeToolCategory = (category: ToolCategory) => {
    if (category === toolCategory) return

    gsap.to(".tool-list", {
      opacity: 0,
      y: 10,
      duration: 0.18,
      onComplete: () => {
        setToolCategory(category)

        gsap.fromTo(
          ".tool-list",
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power3.out",
          },
        )
      },
    })
  }

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#050505] px-7 text-white md:px-12 lg:px-16 xl:px-20"
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[25%] top-[40%] h-[420px] w-[420px] rounded-full bg-pink-200/[0.035] blur-[130px]" />

        <div className="absolute right-[20%] bottom-[20%] h-[350px] w-[350px] rounded-full bg-purple-300/[0.025] blur-[120px]" />

        <span className="arsenal-dot absolute left-[7%] top-[30%] text-white/10">
          +
        </span>

        <span className="arsenal-dot absolute right-[9%] top-[25%] text-white/10">
          ✦
        </span>

        <span className="arsenal-dot absolute bottom-[22%] left-[48%] text-white/10">
          ·
        </span>
      </div>

      {/* ==================================================
          ONE VIEWPORT
      ================================================== */}

      <div className="arsenal-shell relative z-10 mx-auto grid h-full max-w-[1450px] grid-rows-[auto_1fr_auto]">
        {/* ==================================================
            HEADER
        ================================================== */}

        <header className="flex items-end justify-between pt-16 md:pt-20">
          <div>
            <p className="mb-2.5 text-[9px] uppercase tracking-[0.5em] text-pink-200/60">
              05 — Tech Arsenal
            </p>

            <h2 className="font-serif text-4xl leading-none tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[3.8rem]">
              TECH
              <span className="text-white/25"> / ARSENAL</span>
            </h2>
          </div>

          <div className="hidden text-right sm:block">
            <p className="text-[8px] uppercase tracking-[0.4em] text-white/25">
              Technologies I Build With
            </p>

            <p className="mt-1.5 text-sm text-pink-200/70">
              AI × DATA × ENGINEERING
            </p>
          </div>
        </header>

        {/* ==================================================
            MAIN
        ================================================== */}

        <main className="grid min-h-0 items-center gap-7 py-3 lg:grid-cols-[0.95fr_1.05fr] xl:gap-12">
          {/* ==================================================
              LEFT — CERTIFICATE
          ================================================== */}

          <div className="certificate-content min-w-0">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-pink-200/20 bg-pink-200/[0.04]">
                <Award
                  size={15}
                  strokeWidth={1.2}
                  className="text-pink-200"
                />
              </span>

              <span className="text-[8px] uppercase tracking-[0.35em] text-pink-200/60">
                Certifications &amp; Achievements
              </span>
            </div>

            {/* Certificate frame */}

            <div className="relative mx-auto w-full max-w-[590px]">
              {/* Glow */}

              <div className="certificate-glow absolute left-1/2 top-1/2 h-[280px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/[0.05] blur-[80px]" />

              {/* Image container */}

              <div className="relative aspect-[1.55/1] overflow-hidden rounded-2xl border border-pink-200/20 bg-[#0a0a0a] shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-full w-full object-contain p-3"
                />

                {/* top label */}

                <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/10 bg-black/65 px-2.5 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-pink-200" />

                  <span className="text-[7px] uppercase tracking-[0.25em] text-white/55">
                    Certificate {certificate.number}
                  </span>
                </div>
              </div>

              {/* Certificate metadata */}

              <div className="mt-3 flex items-end justify-between">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                    {certificate.subtitle}
                  </p>

                  <h3 className="mt-1 font-serif text-xl tracking-[-0.02em] text-white/80">
                    {certificate.title}
                  </h3>
                </div>

                <span className="text-[8px] uppercase tracking-[0.3em] text-white/20">
                  {certificate.number} / {certificates.length}
                </span>
              </div>
            </div>
          </div>

          {/* ==================================================
              RIGHT — SKILLS + TOOLS
          ================================================== */}

          <div className="min-w-0">
            {/* ==================================================
                SKILLS
            ================================================== */}

            <div>
              <p className="mb-2.5 text-[8px] uppercase tracking-[0.4em] text-white/25">
                Skills
              </p>

              <div className="grid grid-cols-2 gap-2">
                <SkillCard
                  icon={<BrainCircuit size={15} />}
                  title="Artificial Intelligence"
                  text="AI applications, LLM workflows, explainability"
                />

                <SkillCard
                  icon={<Database size={15} />}
                  title="Data Engineering"
                  text="Pipelines, ETL, orchestration, data quality"
                />

                <SkillCard
                  icon={<Code2 size={15} />}
                  title="Fullstack Development"
                  text="React, TypeScript, APIs, backend systems"
                />

                <SkillCard
                  icon={<BarChart3 size={15} />}
                  title="Data & Analytics"
                  text="SQL, dashboards, analysis and insights"
                />
              </div>
            </div>

            {/* ==================================================
                TOOL ARSENAL
            ================================================== */}

            <div className="mt-5 border-t border-white/[0.07] pt-5">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.4em] text-white/25">
                    What I Work With
                  </p>

                  <p className="mt-1 text-xs text-white/35">
                    Select an ecosystem
                  </p>
                </div>

                <Cpu
                  size={17}
                  strokeWidth={1}
                  className="text-pink-200/45"
                />
              </div>

              {/* ==================================================
                  CATEGORY BUTTONS
              ================================================== */}

              <div className="mt-3 flex flex-wrap gap-2">
                {(
                  ["AI", "TECH", "DATA ENGINEERING"] as ToolCategory[]
                ).map((category) => {
                  const active = category === toolCategory

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => changeToolCategory(category)}
                      className={`rounded-full border px-3 py-1.5 text-[7px] uppercase tracking-[0.2em] transition-all duration-300 ${
                        active
                          ? "border-pink-200/30 bg-pink-200/[0.08] text-pink-200"
                          : "border-white/[0.08] bg-white/[0.02] text-white/35 hover:border-white/20 hover:text-white/60"
                      }`}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>

              {/* ==================================================
                  TOOL LIST
              ================================================== */}

              <div className="tool-list mt-3 grid grid-cols-2 gap-2">
                {activeTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.018] px-3 py-2.5 transition-all duration-300 hover:border-pink-200/15 hover:bg-white/[0.03]"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-pink-200/10 bg-pink-200/[0.035] text-pink-200/55 transition-colors group-hover:text-pink-200">
                      {tool.icon}
                    </span>

                    <div>
                      <p className="text-[9px] font-medium text-white/65">
                        {tool.name}
                      </p>

                      <p className="mt-0.5 text-[6px] uppercase tracking-[0.2em] text-white/20">
                        {toolCategory}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* ==================================================
            FOOTER
        ================================================== */}

        <footer className="flex items-center justify-between border-t border-white/[0.07] pb-4 pt-3">
          {/* Previous certificate */}

          <button
            type="button"
            onClick={() => changeCertificate(-1)}
            disabled={isCertificateAnimating}
            className="group flex items-center gap-3 text-[8px] uppercase tracking-[0.3em] text-white/35 transition-colors hover:text-white disabled:opacity-30"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-white/30">
              <ArrowLeft size={12} />
            </span>

            Previous
          </button>

          {/* Certificate indicators */}

          <div className="flex items-center gap-1.5">
            {certificates.map((item, index) => (
              <button
                key={item.number}
                type="button"
                disabled={isCertificateAnimating}
                onClick={() => {
                  if (index === certificateIndex) return

                  const direction =
                    index > certificateIndex ? 1 : -1

                  changeCertificate(direction)
                }}
                aria-label={`View certificate ${item.number}`}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === certificateIndex
                    ? "w-7 bg-pink-200"
                    : "w-1.5 bg-white/15 hover:bg-white/35"
                }`}
              />
            ))}
          </div>

          {/* Next certificate */}

          <button
            type="button"
            onClick={() => changeCertificate(1)}
            disabled={isCertificateAnimating}
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
   SKILL CARD
======================================================== */

function SkillCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.018] p-3 transition-all duration-300 hover:border-pink-200/15 hover:bg-white/[0.03]">
      <div className="flex items-start gap-2.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-pink-200/10 bg-pink-200/[0.035] text-pink-200/55">
          {icon}
        </span>

        <div>
          <h4 className="text-[9px] font-medium text-white/65">
            {title}
          </h4>

          <p className="mt-1 text-[7px] leading-3.5 text-white/25">
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TechArsenal