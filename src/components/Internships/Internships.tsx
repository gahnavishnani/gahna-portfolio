import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Database,
  GitBranch,
  Cloud,
  Code2,
  Terminal,
  BarChart3,
  Workflow,
  Snowflake,
  FileCode2,
  MonitorCog,
  MapPin,
  CalendarDays,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

type Accent = "pink" | "blue" | "purple"

type Internship = {
  id: string
  number: string
  company: string
  role: string
  period: string
  location: string
  description: string
  points: string[]
  technologies: string[]
  accent: Accent
}

const internships: Internship[] = [
  {
    id: "arcoiris",
    number: "01",
    company: "ARCOIRIS LOGICS",
    role: "Technical Intern",
    period: "Jul 2025 — Sep 2025",
    location: "Remote",
    description:
      "Worked across frontend and backend development while building and deploying a MERN-based social platform.",
    points: [
      "Developed and deployed a MERN social platform supporting 250+ active users.",
      "Integrated REST APIs and built reusable React components.",
      "Worked across frontend, backend, Git, and responsive application development.",
    ],
    technologies: [
      "React",
      "MongoDB",
      "Node.js",
      "REST APIs",
      "JavaScript",
      "Git",
    ],
    accent: "pink",
  },

  {
    id: "wishwagon",
    number: "02",
    company: "WISHWAGON",
    role: "Data Engineering Intern",
    period: "Feb 2026 — Apr 2026",
    location: "Varanasi",
    description:
      "Worked on data engineering, backend systems, workflow automation, databases, and analytics.",
    points: [
      "Built and worked with Airflow DAGs and automated data workflows.",
      "Worked with SQL and Power BI for data analysis and reporting.",
      "Led a team of 6 while contributing to backend, database, schema, API, and deployment work.",
    ],
    technologies: [
      "Python",
      "SQL",
      "Airflow",
      "Power BI",
      "Backend",
      "Git",
    ],
    accent: "blue",
  },

  {
    id: "cityai",
    number: "03",
    company: "CITY.AI",
    role: "Data Engineering Intern",
    period: "May 2026 — Present",
    location: "Varanasi",
    description:
      "Working on production data systems for a US-based client, focusing on pipeline reliability, monitoring, troubleshooting, and data quality.",
    points: [
      "Worked with Snowflake, dbt Cloud, Airflow, and Fivetran across production data workflows.",
      "Investigated alerts and pipeline failures while performing validation and troubleshooting.",
      "Worked with Salesforce and Gainsight data using SQL, PyCharm, Jira, and production monitoring workflows.",
    ],
    technologies: [
      "Snowflake",
      "dbt Cloud",
      "Airflow",
      "Fivetran",
      "SQL",
      "Python",
      "Jira",
    ],
    accent: "purple",
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
    soft: "bg-pink-200/[0.05]",
    glow: "rgba(244,114,182,0.24)",
    line: "bg-pink-200",
  },

  blue: {
    text: "text-blue-200",
    border: "border-blue-200/25",
    soft: "bg-blue-200/[0.05]",
    glow: "rgba(96,165,250,0.24)",
    line: "bg-blue-200",
  },

  purple: {
    text: "text-purple-200",
    border: "border-purple-200/25",
    soft: "bg-purple-200/[0.05]",
    glow: "rgba(192,132,252,0.24)",
    line: "bg-purple-200",
  },
}

function Internships() {
  const sectionRef = useRef<HTMLElement | null>(null)

  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const internship = internships[activeIndex]
  const accent = accentStyles[internship.accent]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ==================================================
         SECTION ENTRANCE
      ================================================== */

      gsap.fromTo(
        ".internships-shell",
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
         TECH NODES
      ================================================== */

      gsap.to(".tech-node", {
        y: -7,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        stagger: 0.25,
        ease: "sine.inOut",
      })

      /* ==================================================
         ORBIT
      ================================================== */

      gsap.to(".internship-orbit-outer", {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
      })

      gsap.to(".internship-orbit-inner", {
        rotation: -360,
        duration: 18,
        repeat: -1,
        ease: "none",
      })

      /* ==================================================
         GLOW PULSE
      ================================================== */

      gsap.to(".internship-core-glow", {
        scale: 1.08,
        opacity: 0.7,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  /* ======================================================
     CHANGE INTERNSHIP
  ====================================================== */

  const changeInternship = (direction: number) => {
    if (isAnimating) return

    setIsAnimating(true)

    const nextIndex =
      (activeIndex + direction + internships.length) %
      internships.length

    const timeline = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false)
      },
    })

    timeline
      .to(".internship-info", {
        opacity: 0,
        x: direction > 0 ? -35 : 35,
        duration: 0.25,
        ease: "power2.in",
      })
      .to(
        ".internship-visual",
        {
          opacity: 0,
          x: direction > 0 ? 30 : -30,
          scale: 0.97,
          duration: 0.25,
          ease: "power2.in",
        },
        "<",
      )
      .call(() => {
        setActiveIndex(nextIndex)
      })
      .fromTo(
        ".internship-info",
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
        ".internship-visual",
        {
          opacity: 0,
          x: direction > 0 ? -30 : 30,
          scale: 0.97,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.55,
          ease: "power3.out",
        },
        "<",
      )
  }

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#050505] px-7 text-white md:px-12 lg:px-16 xl:px-20"
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-[20%] top-[52%] h-[450px] w-[450px] -translate-y-1/2 rounded-full blur-[130px]"
          style={{
            background: accent.glow,
            opacity: 0.055,
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_50%,transparent_0%,#050505_70%)]" />

        <span className="absolute left-[8%] top-[29%] text-white/10">
          +
        </span>

        <span className="absolute right-[9%] top-[24%] text-white/10">
          ✦
        </span>

        <span className="absolute bottom-[20%] left-[43%] text-white/10">
          ·
        </span>
      </div>

      {/* ==================================================
          ONE VIEWPORT
      ================================================== */}

      <div className="internships-shell relative z-10 mx-auto grid h-full max-w-[1450px] grid-rows-[auto_1fr_auto]">
        {/* ==================================================
            HEADER
        ================================================== */}

        <header className="flex items-end justify-between pt-16 md:pt-20">
          <div>
            <p className="mb-2.5 text-[9px] uppercase tracking-[0.5em] text-pink-200/60">
              03 — Professional Journey
            </p>

            <h2 className="font-serif text-4xl leading-none tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[3.8rem]">
              INTERNSHIPS
              <span className="text-white/25"> / JOURNEY</span>
            </h2>
          </div>

          <div className="hidden text-right sm:block">
            <p className="text-[8px] uppercase tracking-[0.4em] text-white/25">
              Selected Experience
            </p>

            <p className={`mt-1.5 text-sm ${accent.text}`}>
              {internship.number} / {internships.length}
            </p>
          </div>
        </header>

        {/* ==================================================
            MAIN
        ================================================== */}

        <main className="grid min-h-0 items-center gap-7 py-3 lg:grid-cols-[1.08fr_0.92fr] xl:gap-12">
          {/* ==================================================
              LEFT — INTERNSHIP CARD
          ================================================== */}

          <div className="internship-info min-w-0">
            <div
              className={`rounded-2xl border ${accent.border} bg-white/[0.015] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.25)] md:p-6 lg:p-7`}
            >
              {/* Card top */}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full border ${accent.border} ${accent.soft}`}
                  >
                    <BriefcaseBusiness
                      size={14}
                      strokeWidth={1.3}
                      className={accent.text}
                    />
                  </span>

                  <span
                    className={`text-[8px] uppercase tracking-[0.35em] ${accent.text}`}
                  >
                    Internship {internship.number}
                  </span>
                </div>

                <span className="text-[8px] uppercase tracking-[0.3em] text-white/20">
                  Professional Journey
                </span>
              </div>

              {/* Company */}

              <p className="mt-6 text-[8px] uppercase tracking-[0.35em] text-white/25">
                {internship.number}
              </p>

              <h3 className="mt-1 max-w-[680px] font-serif text-3xl leading-[0.9] tracking-[-0.04em] sm:text-4xl md:text-5xl xl:text-[3.5rem]">
                {internship.company}
              </h3>

              <p className={`mt-2 text-sm ${accent.text}`}>
                {internship.role}
              </p>

              {/* Meta */}

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                <div className="flex items-center gap-2">
                  <CalendarDays
                    size={12}
                    strokeWidth={1.2}
                    className="text-white/30"
                  />

                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                    {internship.period}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin
                    size={12}
                    strokeWidth={1.2}
                    className="text-white/30"
                  />

                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                    {internship.location}
                  </span>
                </div>
              </div>

              {/* Description */}

              <p className="mt-4 max-w-[680px] text-xs leading-5 text-white/45 md:text-sm md:leading-5.5">
                {internship.description}
              </p>

              {/* ==================================================
                  CONTRIBUTIONS
              ================================================== */}

              <div className="mt-5">
                <p className="mb-2 text-[8px] uppercase tracking-[0.35em] text-white/25">
                  What I Worked On
                </p>

                <div className="grid gap-1.5">
                  {internship.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-2.5 rounded-lg border border-white/[0.05] bg-white/[0.015] px-3 py-2"
                    >
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent.line}`}
                      />

                      <p className="text-[8px] leading-4 text-white/40 md:text-[9px]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ==================================================
                  TECHNOLOGIES
              ================================================== */}

              <div className="mt-5">
                <p className="mb-2 text-[8px] uppercase tracking-[0.35em] text-white/25">
                  Built Around
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {internship.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 text-[7px] text-white/40"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ==================================================
              RIGHT — TECH ECOSYSTEM
          ================================================== */}

          <div className="internship-visual relative mx-auto h-[330px] w-full max-w-[480px] md:h-[370px]">
            {/* Glow */}

            <div
              className="internship-core-glow absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[65px]"
              style={{
                background: accent.glow,
                opacity: 0.3,
              }}
            />

            {/* Outer orbit */}

            <div className="internship-orbit-outer absolute left-1/2 top-1/2 h-[285px] w-[285px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]">
              <span
                className={`absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full ${accent.line}`}
              />

              <span className="absolute bottom-[12%] right-[6%] h-1 w-1 rounded-full bg-white/30" />
            </div>

            {/* Inner orbit */}

            <div className="internship-orbit-inner absolute left-1/2 top-1/2 h-[215px] w-[215px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-200/[0.08]">
              <span className="absolute bottom-[-2px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/40" />
            </div>

            {/* ==================================================
                CENTER
            ================================================== */}

            <div
              className={`absolute left-1/2 top-1/2 z-20 flex h-[125px] w-[125px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border ${accent.border} ${accent.soft} backdrop-blur-md`}
            >
              <MonitorCog
                size={27}
                strokeWidth={1}
                className={accent.text}
              />

              <p className="mt-3 text-[7px] uppercase tracking-[0.3em] text-white/35">
                {internship.company}
              </p>

              <p className="mt-1 text-[6px] uppercase tracking-[0.25em] text-white/20">
                TECH ECOSYSTEM
              </p>
            </div>

            {/* ==================================================
                TECH NODES
            ================================================== */}

            <TechNode
              className="left-[8%] top-[18%]"
              label={getTechLabel(internship.id, 0)}
              icon={getTechIcon(internship.id, 0)}
              accent={accent}
            />

            <TechNode
              className="right-[5%] top-[15%]"
              label={getTechLabel(internship.id, 1)}
              icon={getTechIcon(internship.id, 1)}
              accent={accent}
            />

            <TechNode
              className="left-[3%] bottom-[17%]"
              label={getTechLabel(internship.id, 2)}
              icon={getTechIcon(internship.id, 2)}
              accent={accent}
            />

            <TechNode
              className="right-[4%] bottom-[14%]"
              label={getTechLabel(internship.id, 3)}
              icon={getTechIcon(internship.id, 3)}
              accent={accent}
            />

            {/* ==================================================
                CONNECTIONS
            ================================================== */}

            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 480 370"
              fill="none"
            >
              <path
                d="M92 78 C150 95 175 130 195 165"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 7"
                className="text-white/10"
              />

              <path
                d="M390 72 C335 100 315 135 285 165"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 7"
                className="text-white/10"
              />

              <path
                d="M75 305 C145 275 170 245 195 205"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 7"
                className="text-white/10"
              />

              <path
                d="M390 315 C335 285 310 245 285 205"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 7"
                className="text-white/10"
              />

              <circle
                cx="92"
                cy="78"
                r="2.5"
                className="fill-white/30"
              />

              <circle
                cx="390"
                cy="72"
                r="2.5"
                className="fill-white/30"
              />

              <circle
                cx="75"
                cy="305"
                r="2.5"
                className="fill-white/30"
              />

              <circle
                cx="390"
                cy="315"
                r="2.5"
                className="fill-white/30"
              />
            </svg>

            {/* Label */}

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <p className="whitespace-nowrap text-[7px] uppercase tracking-[0.4em] text-white/20">
                Technology Ecosystem
              </p>
            </div>
          </div>
        </main>

        {/* ==================================================
            FOOTER / NAVIGATION
        ================================================== */}

        <footer className="flex items-center justify-between border-t border-white/[0.07] pb-4 pt-3">
          {/* Previous */}

          <button
            type="button"
            onClick={() => changeInternship(-1)}
            disabled={isAnimating}
            className="group flex items-center gap-3 text-[8px] uppercase tracking-[0.3em] text-white/35 transition-colors hover:text-white disabled:opacity-30"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-white/30">
              <ArrowLeft size={12} />
            </span>

            Previous
          </button>

          {/* Indicators */}

          <div className="flex items-center gap-2">
            {internships.map((item, index) => (
              <button
                key={item.id}
                type="button"
                disabled={isAnimating}
                onClick={() => {
                  if (index === activeIndex || isAnimating) return

                  changeInternship(index > activeIndex ? 1 : -1)
                }}
                aria-label={`View ${item.company}`}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === activeIndex
                    ? `w-8 ${accent.line}`
                    : "w-2.5 bg-white/15 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Next */}

          <button
            type="button"
            onClick={() => changeInternship(1)}
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
   TECH NODE
======================================================== */

function TechNode({
  className,
  label,
  icon,
  accent,
}: {
  className: string
  label: string
  icon: React.ReactNode
  accent: (typeof accentStyles)["pink"]
}) {
  return (
    <div
      className={`tech-node absolute z-30 flex items-center gap-2 rounded-xl border ${accent.border} ${accent.soft} px-3 py-2 backdrop-blur-md ${className}`}
    >
      <span className={accent.text}>{icon}</span>

      <span className="text-[7px] uppercase tracking-[0.2em] text-white/40">
        {label}
      </span>
    </div>
  )
}

/* ========================================================
   TECH LABELS
======================================================== */

function getTechLabel(
  internshipId: string,
  index: number,
) {
  const labels: Record<string, string[]> = {
    arcoiris: [
      "React",
      "MongoDB",
      "Node.js",
      "Git",
    ],

    wishwagon: [
      "Python",
      "Airflow",
      "SQL",
      "Power BI",
    ],

    cityai: [
      "Snowflake",
      "dbt Cloud",
      "Airflow",
      "Fivetran",
    ],
  }

  return labels[internshipId][index]
}

/* ========================================================
   TECH ICONS
======================================================== */

function getTechIcon(
  internshipId: string,
  index: number,
) {
  const icons: Record<
    string,
    React.ReactNode[]
  > = {
    arcoiris: [
      <Code2 size={13} strokeWidth={1.2} />,
      <Database size={13} strokeWidth={1.2} />,
      <Terminal size={13} strokeWidth={1.2} />,
      <GitBranch size={13} strokeWidth={1.2} />,
    ],

    wishwagon: [
      <Code2 size={13} strokeWidth={1.2} />,
      <Workflow size={13} strokeWidth={1.2} />,
      <Database size={13} strokeWidth={1.2} />,
      <BarChart3 size={13} strokeWidth={1.2} />,
    ],

    cityai: [
      <Snowflake size={13} strokeWidth={1.2} />,
      <FileCode2 size={13} strokeWidth={1.2} />,
      <Workflow size={13} strokeWidth={1.2} />,
      <Cloud size={13} strokeWidth={1.2} />,
    ],
  }

  return icons[internshipId][index]
}

export default Internships