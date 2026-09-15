import { useLayoutEffect, useRef } from "react"
import type { ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  BrainCircuit,
  Database,
  Code2,
  Sparkles,
  Target,
  Layers3,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

function About() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      })

      introTl
        .fromTo(
          ".about-visual",
          {
            opacity: 0,
            x: -35,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
          },
        )
        .fromTo(
          ".about-content",
          {
            opacity: 0,
            x: 35,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
          },
          "-=0.7",
        )
        .fromTo(
          ".about-card",
          {
            opacity: 0,
            y: 12,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
          },
          "-=0.45",
        )

      /* Main orbit */

      gsap.to(".about-orbit-main", {
        rotation: 360,
        duration: 28,
        repeat: -1,
        ease: "none",
      })

      /* Secondary orbit */

      gsap.to(".about-orbit-secondary", {
        rotation: -360,
        duration: 20,
        repeat: -1,
        ease: "none",
      })

      /* Orbiting dot */

      gsap.to(".about-orbit-dot", {
        rotation: 360,
        duration: 9,
        repeat: -1,
        ease: "none",
      })

      /* Floating labels */

      gsap.to(".about-floating-label", {
        y: -6,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        stagger: 0.35,
        ease: "sine.inOut",
      })

      /* Portrait breathing */

      gsap.to(".about-portrait", {
        scale: 1.02,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#050505] px-7 text-white md:px-12 lg:px-16 xl:px-20"
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[20%] top-[48%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300/[0.045] blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,transparent_0%,#050505_68%)]" />

        <div className="absolute left-[7%] top-[25%] text-white/10">
          +
        </div>

        <div className="absolute right-[8%] top-[22%] text-white/10">
          ✦
        </div>

        <div className="absolute bottom-[18%] right-[40%] text-white/10">
          ·
        </div>
      </div>

      {/* ==================================================
          ONE VIEWPORT
      ================================================== */}

      <div className="relative z-10 mx-auto grid h-full max-w-[1450px] grid-rows-[auto_1fr_auto]">
        {/* ==================================================
            HEADER
        ================================================== */}

        <header className="flex items-end justify-between pt-16 md:pt-20 lg:pt-20">
          <div>
            <p className="mb-2 text-[9px] uppercase tracking-[0.5em] text-pink-200/60">
              02 — About Me
            </p>

            <h2 className="font-serif text-4xl leading-none tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[3.8rem]">
              ABOUT
              <span className="text-white/25"> / ME</span>
            </h2>
          </div>

          <div className="hidden text-right sm:block">
            <p className="text-[8px] uppercase tracking-[0.4em] text-white/25">
              Who I Am
            </p>

            <p className="mt-1.5 text-sm text-pink-200/70">
              AI × DATA × FULLSTACK
            </p>
          </div>
        </header>

        {/* ==================================================
            MAIN
        ================================================== */}

        <main className="grid min-h-0 items-center gap-6 py-2 lg:grid-cols-[0.85fr_1.15fr] xl:gap-14">
          {/* ==================================================
              LEFT — PORTRAIT
          ================================================== */}

          <div className="about-visual relative mx-auto h-[340px] w-full max-w-[460px] md:h-[365px]">
            {/* Glow */}

            <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/[0.055] blur-[65px]" />

            {/* Main orbit */}

            <div className="about-orbit-main absolute left-1/2 top-1/2 h-[285px] w-[285px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]">
              <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-pink-200/70 shadow-[0_0_14px_rgba(244,114,182,0.7)]" />
            </div>

            {/* Secondary orbit */}

            <div className="about-orbit-secondary absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-200/[0.12]">
              <span className="absolute bottom-[-2px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-pink-200/60" />
            </div>

            {/* Inner glow */}

            <div className="absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-200/[0.14] bg-pink-200/[0.035] shadow-[0_0_65px_rgba(244,114,182,0.12)]" />

            {/* ==================================================
                PORTRAIT
            ================================================== */}

            <div className="absolute bottom-0 left-1/2 z-20 h-[345px] w-[255px] -translate-x-1/2 md:h-[365px] md:w-[275px]">
              <img
                src="/hero.png"
                alt="Gahna"
                className="about-portrait h-full w-full object-contain object-bottom drop-shadow-[0_0_35px_rgba(255,150,190,0.12)]"
              />
            </div>

            {/* Orbiting dot */}

            <div className="about-orbit-dot absolute left-1/2 top-1/2 z-30 h-[315px] w-[315px] -translate-x-1/2 -translate-y-1/2">
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-pink-200 shadow-[0_0_16px_rgba(244,114,182,0.8)]" />
            </div>

            {/* ==================================================
                FLOATING LABELS
            ================================================== */}

            <div className="about-floating-label absolute left-[4%] top-[18%] z-40 rounded-full border border-white/[0.08] bg-black/40 px-3 py-2 backdrop-blur-md">
              <span className="text-[7px] uppercase tracking-[0.25em] text-white/40">
                Curious
              </span>
            </div>

            <div className="about-floating-label absolute right-[3%] top-[25%] z-40 rounded-full border border-pink-200/15 bg-pink-200/[0.04] px-3 py-2 backdrop-blur-md">
              <span className="text-[7px] uppercase tracking-[0.25em] text-pink-200/60">
                Creative
              </span>
            </div>

            <div className="about-floating-label absolute bottom-[22%] left-[5%] z-40 rounded-full border border-white/[0.08] bg-black/40 px-3 py-2 backdrop-blur-md">
              <span className="text-[7px] uppercase tracking-[0.25em] text-white/40">
                Analytical
              </span>
            </div>

            <div className="about-floating-label absolute bottom-[18%] right-[4%] z-40 rounded-full border border-white/[0.08] bg-black/40 px-3 py-2 backdrop-blur-md">
              <span className="text-[7px] uppercase tracking-[0.25em] text-white/40">
                Consistent
              </span>
            </div>

            {/* Center label */}

            <div className="absolute bottom-[8%] left-1/2 z-10 -translate-x-1/2">
              <p className="whitespace-nowrap text-[7px] uppercase tracking-[0.35em] text-pink-200/40">
                Building beyond boundaries
              </p>
            </div>
          </div>

          {/* ==================================================
              RIGHT — ABOUT CONTENT
          ================================================== */}

          <div className="about-content min-w-0">
            <p className="mb-2.5 text-[9px] uppercase tracking-[0.45em] text-pink-200/60">
              Turning ideas into intelligent realities
            </p>

            <h3 className="max-w-[650px] font-serif text-3xl leading-[0.94] tracking-[-0.045em] sm:text-4xl md:text-5xl xl:text-[3.5rem]">
              I build systems that
              <span className="text-pink-200"> think, </span>
              connect
              <span className="text-white/50"> &amp; create impact.</span>
            </h3>

            <p className="mt-4 max-w-[600px] text-xs leading-5 text-white/50 md:text-sm md:leading-5.5">
              I&apos;m a computer science student passionate about building
              intelligent applications and scalable data systems. I enjoy
              working across the stack — from data pipelines and AI models
              to the interfaces people actually use.
            </p>

            {/* ==================================================
                FEATURE CARDS
            ================================================== */}

            <div className="mt-5 grid max-w-[650px] grid-cols-2 gap-2">
              <AboutCard
                icon={<BrainCircuit size={14} />}
                title="AI-Powered Products"
                description="Turning intelligence into useful experiences."
              />

              <AboutCard
                icon={<Database size={14} />}
                title="Scalable Systems"
                description="Designing reliable data-driven foundations."
              />

              <AboutCard
                icon={<Code2 size={14} />}
                title="Fullstack Thinking"
                description="Connecting backend, frontend, AI and data."
              />

              <AboutCard
                icon={<Target size={14} />}
                title="Meaningful Impact"
                description="Building technology with a reason behind it."
              />
            </div>

            {/* ==================================================
                STATS
            ================================================== */}

            <div className="mt-5 flex max-w-[650px] items-center gap-8 border-t border-white/[0.07] pt-4">
              <AboutStat
                value="AI"
                label="INTELLIGENCE"
              />

              <AboutStat
                value="DATA"
                label="FOUNDATION"
              />

              <AboutStat
                value="∞"
                label="CURIOSITY"
              />
            </div>
          </div>
        </main>

        {/* ==================================================
            FOOTER
        ================================================== */}

        <footer className="flex items-center justify-between border-t border-white/[0.07] pb-4 pt-3">
          <div className="flex items-center gap-3">
            <Sparkles
              size={12}
              strokeWidth={1}
              className="text-pink-200/50"
            />

            <span className="text-[7px] uppercase tracking-[0.3em] text-white/25">
              Always learning. Always building.
            </span>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <Layers3
              size={11}
              strokeWidth={1}
              className="text-white/25"
            />

            <span className="text-[7px] uppercase tracking-[0.3em] text-white/25">
              Ideas → Systems → Impact
            </span>
          </div>

          <span className="text-[7px] uppercase tracking-[0.3em] text-white/20">
            02
          </span>
        </footer>
      </div>
    </section>
  )
}

/* ========================================================
   ABOUT CARD
======================================================== */

function AboutCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title: string
  description: string
}) {
  return (
    <div className="about-card group rounded-xl border border-white/[0.07] bg-white/[0.018] p-3 transition-all duration-300 hover:border-pink-200/15 hover:bg-white/[0.03]">
      <div className="flex items-start gap-2.5">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-pink-200/10 bg-pink-200/[0.04] text-pink-200/60 transition-colors group-hover:text-pink-200">
          {icon}
        </span>

        <div>
          <h4 className="text-[9px] font-medium text-white/70">
            {title}
          </h4>

          <p className="mt-1 text-[7px] leading-3.5 text-white/30">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ========================================================
   ABOUT STAT
======================================================== */

function AboutStat({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div>
      <p className="font-serif text-lg text-white/75">
        {value}
      </p>

      <p className="mt-0.5 text-[6px] uppercase tracking-[0.25em] text-white/25">
        {label}
      </p>
    </div>
  )
}

export default About