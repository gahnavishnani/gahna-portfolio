import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ArrowUpRight,
  Mail,
  Sparkles,
  Send,
  Code2,
  Database,
  BrainCircuit,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ==================================================
         SECTION ENTRANCE
      ================================================== */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      })

      tl.fromTo(
        ".contact-header",
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
      )
        .fromTo(
          ".contact-heading",
          {
            opacity: 0,
            x: -45,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
          },
          "-=0.35",
        )
        .fromTo(
          ".contact-description",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.55",
        )
        .fromTo(
          ".contact-card",
          {
            opacity: 0,
            x: 45,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
          },
          "-=0.7",
        )
        .fromTo(
          ".contact-action",
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.4",
        )

      /* ==================================================
         FLOATING ICONS
      ================================================== */

      gsap.to(".contact-floating-icon", {
        y: -8,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        stagger: 0.35,
        ease: "sine.inOut",
      })

      /* ==================================================
         MAIN GLOW
      ================================================== */

      gsap.to(".contact-glow", {
        scale: 1.08,
        opacity: 0.65,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      /* ==================================================
         ORBIT
      ================================================== */

      gsap.to(".contact-orbit", {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
      })

      gsap.to(".contact-orbit-reverse", {
        rotation: -360,
        duration: 18,
        repeat: -1,
        ease: "none",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#050505] px-7 text-white md:px-12 lg:px-16 xl:px-20"
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main glow */}

        <div className="contact-glow absolute left-[55%] top-[48%] h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/[0.045] blur-[130px]" />

        {/* Secondary glow */}

        <div className="absolute right-[5%] top-[20%] h-[260px] w-[260px] rounded-full bg-purple-300/[0.025] blur-[100px]" />

        {/* Vignette */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#050505_75%)]" />

        {/* Decorative symbols */}

        <span className="absolute left-[8%] top-[27%] text-white/10">
          +
        </span>

        <span className="absolute right-[10%] top-[23%] text-white/10">
          ✦
        </span>

        <span className="absolute left-[45%] bottom-[20%] text-white/10">
          ·
        </span>
      </div>

      {/* ==================================================
          ONE VIEWPORT
      ================================================== */}

      <div className="relative z-10 mx-auto grid h-full max-w-[1450px] grid-rows-[auto_1fr_auto]">
        {/* ==================================================
            HEADER
        ================================================== */}

        <header className="contact-header flex items-end justify-between pt-16 md:pt-20">
          <div>
            <p className="mb-2.5 text-[9px] uppercase tracking-[0.5em] text-pink-200/60">
              06 — Let&apos;s Connect
            </p>

            <h2 className="font-serif text-4xl leading-none tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[3.8rem]">
              CONTACT
              <span className="text-white/25"> / ME</span>
            </h2>
          </div>

          <div className="hidden text-right sm:block">
            <p className="text-[8px] uppercase tracking-[0.4em] text-white/25">
              Current Status
            </p>

            <p className="mt-1.5 text-sm text-pink-200/70">
              OPEN TO OPPORTUNITIES
            </p>
          </div>
        </header>

        {/* ==================================================
            MAIN
        ================================================== */}

        <main className="grid min-h-0 items-center gap-10 py-4 lg:grid-cols-[1.08fr_0.92fr] xl:gap-20">
          {/* ==================================================
              LEFT — MESSAGE
          ================================================== */}

          <div className="min-w-0">
            <div className="contact-heading">
              <p className="mb-4 text-[9px] uppercase tracking-[0.45em] text-pink-200/60">
                AI × DATA × FULLSTACK
              </p>

              <h1 className="max-w-[750px] font-serif text-5xl leading-[0.86] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[5.2rem]">
                LET&apos;S BUILD
                <br />
                <span className="text-white/45">
                  SOMETHING
                </span>
                <br />
                <span className="text-pink-200">
                  MEANINGFUL.
                </span>
              </h1>
            </div>

            <div className="contact-description mt-6 max-w-[590px]">
              <p className="text-sm leading-6 text-white/45 md:text-base">
                Whether it&apos;s an intelligent product, a scalable data
                system, or an idea that needs to become real — I&apos;d love
                to hear about it.
              </p>

              <p className="mt-3 text-xs leading-5 text-white/25">
                Always curious. Always building. Always looking for the next
                meaningful problem to solve.
              </p>
            </div>

            {/* ==================================================
                ACTION
            ================================================== */}

            <div className="contact-action mt-7">
              <a
                href="mailto:your-gahnavishnani@gmail.com"
                className="group inline-flex items-center gap-3 rounded-full border border-pink-200/30 bg-pink-200/[0.04] px-5 py-3 text-[9px] uppercase tracking-[0.3em] text-pink-100 transition-all duration-300 hover:border-pink-200/60 hover:bg-pink-200/10"
              >
                <Send
                  size={13}
                  strokeWidth={1.2}
                />

                Start a Conversation

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.2}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>

          {/* ==================================================
              RIGHT — CONTACT ORBIT
          ================================================== */}

          <div className="contact-card relative mx-auto h-[365px] w-full max-w-[480px]">
            {/* ==================================================
                GLOW
            ================================================== */}

            <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/[0.045] blur-[75px]" />

            {/* ==================================================
                OUTER ORBIT
            ================================================== */}

            <div className="contact-orbit absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]">
              <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-pink-200 shadow-[0_0_14px_rgba(244,114,182,0.7)]" />

              <span className="absolute bottom-[10%] right-[8%] h-1 w-1 rounded-full bg-white/25" />
            </div>

            {/* ==================================================
                INNER ORBIT
            ================================================== */}

            <div className="contact-orbit-reverse absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-200/[0.10]">
              <span className="absolute bottom-[-2px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-pink-200/60" />
            </div>

            {/* ==================================================
                CENTER
            ================================================== */}

            <div className="absolute left-1/2 top-1/2 z-20 flex h-[135px] w-[135px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-pink-200/20 bg-pink-200/[0.035] shadow-[0_0_70px_rgba(244,114,182,0.10)] backdrop-blur-md">
              <Sparkles
                size={27}
                strokeWidth={1}
                className="text-pink-200/80"
              />

              <p className="mt-3 text-[7px] uppercase tracking-[0.3em] text-white/40">
                Let&apos;s Connect
              </p>

              <p className="mt-1 text-[6px] uppercase tracking-[0.25em] text-white/20">
                BUILD SOMETHING
              </p>
            </div>

            {/* ==================================================
                EMAIL
            ================================================== */}

            <ContactNode
              href="mailto:your-gahnavishnani@gmail.com"
              className="left-[0%] top-[12%]"
              icon={<Mail size={15} strokeWidth={1.2} />}
              label="EMAIL"
              value="LET'S TALK"
            />

            {/* ==================================================
                GITHUB
            ================================================== */}

            <ContactNode
              href="https://github.com/gahnavishnani"
              target="_blank"
              rel="noreferrer"
              className="right-[0%] top-[16%]"
              icon={
                <span className="text-[11px] font-medium leading-none">
                GH
                </span>
            }
              label="GITHUB"
              value="VIEW CODE"
            />

            {/* ==================================================
                LINKEDIN
            ================================================== */}

            <ContactNode
                href="https://www.linkedin.com/in/gahna-vishnani-677175244"
                className="left-[2%] bottom-[12%]"
                icon={
                    <span className="text-[10px] font-semibold leading-none">
                    in
                    </span>
                }
                label="LINKEDIN"
                value="CONNECT"
                />

            {/* ==================================================
                PORTFOLIO STACK
            ================================================== */}

            <div className="contact-floating-icon absolute bottom-[12%] right-[3%] flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3 py-2 backdrop-blur-md">
              <div className="flex items-center gap-1.5">
                <Code2
                  size={13}
                  strokeWidth={1.1}
                  className="text-pink-200/55"
                />

                <Database
                  size={13}
                  strokeWidth={1.1}
                  className="text-pink-200/45"
                />

                <BrainCircuit
                  size={13}
                  strokeWidth={1.1}
                  className="text-pink-200/55"
                />
              </div>

              <span className="text-[7px] uppercase tracking-[0.2em] text-white/30">
                AI × DATA
              </span>
            </div>

            {/* ==================================================
                CONNECTION LINES
            ================================================== */}

            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 480 365"
              fill="none"
            >
              <path
                d="M80 75 C150 100 170 130 205 160"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 7"
                className="text-white/10"
              />

              <path
                d="M400 90 C340 105 320 135 275 160"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 7"
                className="text-white/10"
              />

              <path
                d="M90 290 C150 270 175 235 205 205"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 7"
                className="text-white/10"
              />

              <path
                d="M390 295 C335 270 310 235 275 205"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 7"
                className="text-white/10"
              />

              <circle
                cx="80"
                cy="75"
                r="2"
                className="fill-white/25"
              />

              <circle
                cx="400"
                cy="90"
                r="2"
                className="fill-white/25"
              />

              <circle
                cx="90"
                cy="290"
                r="2"
                className="fill-white/25"
              />

              <circle
                cx="390"
                cy="295"
                r="2"
                className="fill-white/25"
              />
            </svg>

            {/* Bottom label */}

            <p className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[7px] uppercase tracking-[0.4em] text-white/20">
              Open to meaningful conversations
            </p>
          </div>
        </main>

        {/* ==================================================
            FOOTER
        ================================================== */}

        <footer className="flex items-center justify-between border-t border-white/[0.07] pb-4 pt-3">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-200 shadow-[0_0_10px_rgba(244,114,182,0.7)]" />

            <span className="text-[7px] uppercase tracking-[0.3em] text-white/25">
              Available for opportunities
            </span>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <span className="text-[7px] uppercase tracking-[0.3em] text-white/20">
              AI • DATA • FULLSTACK
            </span>
          </div>

          <span className="text-[7px] uppercase tracking-[0.3em] text-white/20">
            06
          </span>
        </footer>
      </div>
    </section>
  )
}

/* ========================================================
   CONTACT NODE
======================================================== */

function ContactNode({
  href,
  target,
  rel,
  className,
  icon,
  label,
  value,
}: {
  href: string
  target?: string
  rel?: string
  className: string
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`contact-floating-icon absolute z-30 flex min-w-[130px] items-center gap-2.5 rounded-xl border border-white/[0.08] bg-black/45 px-3 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-pink-200/20 hover:bg-pink-200/[0.04] ${className}`}
    >
      <span className="text-pink-200/60">
        {icon}
      </span>

      <div>
        <p className="text-[7px] uppercase tracking-[0.25em] text-white/25">
          {label}
        </p>

        <p className="mt-0.5 text-[8px] text-white/45">
          {value}
        </p>
      </div>

      <ArrowUpRight
        size={10}
        strokeWidth={1}
        className="ml-auto text-white/20"
      />
    </a>
  )
}

export default Contact