import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import {
  BrainCircuit,
  Cloud,
  Database,
  Code2,
  Atom,
} from "lucide-react"
gsap.registerPlugin(ScrollTrigger)

const stars = [
  { left: "8%", top: "18%", size: 2, delay: "0s" },
  { left: "18%", top: "72%", size: 1, delay: "1s" },
  { left: "28%", top: "28%", size: 2, delay: "2s" },
  { left: "36%", top: "12%", size: 1, delay: "0.5s" },
  { left: "44%", top: "82%", size: 2, delay: "1.5s" },
  { left: "56%", top: "17%", size: 1, delay: "2.5s" },
  { left: "66%", top: "70%", size: 2, delay: "1.2s" },
  { left: "74%", top: "24%", size: 1, delay: "0.8s" },
  { left: "84%", top: "58%", size: 2, delay: "2.2s" },
  { left: "92%", top: "14%", size: 1, delay: "1.8s" },
  { left: "12%", top: "48%", size: 1, delay: "2.8s" },
  { left: "88%", top: "82%", size: 2, delay: "0.3s" },
]

function Hero() {
  const heroRef = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      })

      tl.from(".hero-portrait", {
        opacity: 0,
        scale: 1.08,
        duration: 1.6,
      })
        .from(
          ".hero-left",
          {
            opacity: 0,
            x: -60,
            duration: 1.1,
          },
          "-=1"
        )
        .from(
          ".hero-right",
          {
            opacity: 0,
            x: 60,
            duration: 1.1,
          },
          "-=0.9"
        )
        .from(
          ".hero-nav",
          {
            opacity: 0,
            y: -20,
            duration: 0.8,
          },
          "-=0.8"
        )
        .from(
          ".hero-icons",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".hero-bottom",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.4"
        )
    }, heroRef)
   const scrollTl = gsap.timeline({
  scrollTrigger: {
    trigger: heroRef.current,
    start: "top top",
    end: "bottom top",
    scrub: 1,
  },
})

scrollTl
  .to(
    ".hero-portrait",
    {
      y: -120,
      scale: 1.03,
      ease: "none",
    },
    0
  )
  .to(
    ".hero-left",
    {
      x: -120,
      opacity: 0,
      ease: "none",
    },
    0
  )
  .to(
    ".hero-right",
    {
      x: 120,
      opacity: 0,
      ease: "none",
    },
    0
  )
  .to(
    ".hero-nav",
    {
      y: -30,
      opacity: 0,
      ease: "none",
    },
    0
  )

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050608] text-white"
    >
      {/* =========================================================
          CINEMATIC BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0 overflow-hidden">
        {/* Main atmospheric gradients */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at 50% 42%,
                rgba(255, 126, 178, 0.22) 0%,
                rgba(154, 68, 111, 0.12) 20%,
                rgba(5, 6, 8, 0) 48%
              ),
              radial-gradient(
                circle at 50% 100%,
                rgba(255, 90, 160, 0.12) 0%,
                rgba(5, 6, 8, 0) 42%
              ),
              linear-gradient(
                180deg,
                #030406 0%,
                #08070a 50%,
                #030406 100%
              )
            `,
          }}
        />

        {/* Central pink atmospheric glow */}
        <div
          className="cinematic-light absolute left-1/2 top-[40%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,120,175,0.20), rgba(255,120,175,0.05) 45%, transparent 72%)",
          }}
        />

        {/* Secondary moving light */}
        <div
          className="cinematic-light-two absolute left-[15%] top-[45%] h-[420px] w-[420px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(180,100,255,0.08), transparent 70%)",
          }}
        />

        {/* Stars */}
        {stars.map((star, index) => (
          <span
            key={index}
            className="cinematic-star absolute rounded-full bg-white/70"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
            }}
          />
        ))}

        {/* Planet / halo */}
        <div className="absolute left-1/2 top-[44%] z-10 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-200/10" />

        <div className="absolute left-1/2 top-[44%] z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-200/10" />

        <div
          className="absolute left-1/2 top-[44%] z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,130,180,0.12), rgba(255,130,180,0.025) 55%, transparent 72%)",
          }}
        />

        {/* Orbit rings */}
        <div className="cinematic-orbit absolute left-1/2 top-[44%] z-10 h-[580px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-pink-100/10" />

        <div className="cinematic-orbit-reverse absolute left-1/2 top-[44%] z-10 h-[760px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/5" />

        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <nav className="hero-nav absolute left-0 top-0 z-50 flex w-full items-center justify-between px-8 py-7 md:px-14">
        <a
          href="#home"
          className="text-sm font-medium tracking-[0.55em] text-white transition-opacity hover:opacity-70"
        >
          GAHNA VISHNANI
        </a>

        <div className="hidden items-center gap-8 text-sm text-white/65 md:flex md:ml-auto md:mr-8 lg:mr-10">
          <a
            href="#home"
            className="transition-colors hover:text-white"
          >
            Home
          </a>

          <a
            href="#about"
            className="transition-colors hover:text-white"
          >
            About
          </a>

          <a
            href="#projects"
            className="transition-colors hover:text-white"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="transition-colors hover:text-white"
          >
            Internships
          </a>

          <a
            href="#skills"
            className="transition-colors hover:text-white"
          >
            Skills
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-pink-200/40 px-6 py-3 text-sm transition-all duration-300 hover:border-pink-200 hover:bg-pink-100 hover:text-black"
        >
          Let's Connect
        </a>
      </nav>

      {/* =========================================================
          LEFT HERO CONTENT
      ========================================================= */}

      <div className="hero-left absolute left-0 top-[42%] z-30 -translate-y-1/2 md:left-4 lg:left-12 xl:left-16">
        <p className="mb-5 text-xs uppercase tracking-[0.4em] text-pink-200/70">
          Building intelligent systems
        </p>

        <h1 className="font-serif text-5xl leading-[0.85] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
          <span className="text-white">
            AI-FULLSTACK
          </span>

          <br />

          <span className="text-white/75">
            DEVELOPER
          </span>
        </h1>

        <div className="mt-8 h-px w-12 bg-pink-200/70" />

        <p className="mt-7 max-w-[310px] text-sm leading-6 text-white/60">
          Building intelligent applications and scalable data systems —
          connecting data, AI, and software into meaningful products.
        </p>

        <a
          href="#projects"
          className="mt-8 inline-flex items-center gap-3 text-sm text-white transition-all duration-300 hover:gap-5"
        >
          Explore My Work
          <span className="text-pink-200">→</span>
        </a>
      </div>

      {/* =========================================================
          PORTRAIT
      ========================================================= */}

      <div className="hero-portrait absolute bottom-0 left-1/2 z-20 h-[720px] w-[520px] -translate-x-1/2">
        <img
          src="/hero.png"
          alt="Gahna"
          className="h-full w-full object-contain object-bottom drop-shadow-[0_0_35px_rgba(255,150,190,0.12)]"
        />
      </div>

      {/* =========================================================
          RIGHT HERO CONTENT
      ========================================================= */}

      <div className="hero-right absolute right-0 top-[42%] z-30 -translate-y-1/2 text-right md:right-4 lg:right-12 xl:right-16">
        <h2 className="font-serif text-5xl leading-[0.85] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
          <span className="text-pink-200">
            DATA
          </span>

          <br />

          <span className="text-white/80">
            ENGINEER
          </span>
        </h2>

        <div className="hero-icons mt-10 flex justify-end gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <Code2
              size={18}
              strokeWidth={1.5}
              className="text-pink-200/80"
            />
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <Atom
              size={18}
              strokeWidth={1.5}
              className="text-pink-200/80"
            />
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <Database
              size={18}
              strokeWidth={1.5}
              className="text-pink-200/80"
            />
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <Cloud
              size={18}
              strokeWidth={1.5}
              className="text-pink-200/80"
            />
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <BrainCircuit
              size={18}
              strokeWidth={1.5}
              className="text-pink-200/80"
            />
          </div>
        </div>

        <p className="mt-5 text-xs uppercase tracking-[0.35em] text-white/45">
          Data × AI × Applications × Impact
        </p>
      </div>

      {/* =========================================================
          RIGHT QUOTE
      ========================================================= */}

      <div className="absolute right-0 top-28 hidden max-w-[170px] text-right text-xs uppercase leading-6 tracking-[0.3em] text-white/35 lg:block">
        Turning
        <br />
        ideas into
        <br />
        impact
      </div>

      {/* =========================================================
          BOTTOM CONTENT
      ========================================================= */}

      <div className="hero-bottom absolute bottom-10 left-8 z-30 md:left-14">
        <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">
          Currently Building
        </p>

        <p className="mt-2 text-sm text-white/65">
          AI × Data × Fullstack
        </p>
      </div>

      <div className="hero-bottom absolute bottom-10 right-8 z-30 text-right md:right-14">
        <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">
          What Excites Me
        </p>

        <p className="mt-2 text-sm text-white/65">
          Ideas → Systems → Impact
        </p>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <div className="hero-bottom absolute bottom-7 left-1/2 z-30 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/30">
            Scroll
          </span>

          <div className="h-10 w-px bg-gradient-to-b from-pink-200/70 to-transparent" />
        </div>
      </div>

      {/* =========================================================
          SIGNATURE
      ========================================================= */}

      <div className="absolute bottom-4 right-8 z-30 hidden text-[10px] tracking-[0.18em] text-white/25 lg:block">
        Same Girl. Bigger Dreams. ♡
      </div>

      {/* =========================================================
          ANIMATION STYLES
      ========================================================= */}

      <style>{`
        @keyframes cinematicStar {
          0%, 100% {
            opacity: 0.25;
            transform: scale(1);
          }

          50% {
            opacity: 0.9;
            transform: scale(1.4);
          }
        }

        @keyframes cinematicLight {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }

          50% {
            transform: translate(-50%, -50%) scale(1.12);
            opacity: 1;
          }
        }

        @keyframes cinematicLightTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(80px, -30px, 0) scale(1.15);
          }
        }

        @keyframes cinematicOrbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes cinematicOrbitReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        .cinematic-star {
          animation: cinematicStar 4s ease-in-out infinite;
        }

        .cinematic-light {
          animation: cinematicLight 18s ease-in-out infinite;
        }

        .cinematic-light-two {
          animation: cinematicLightTwo 22s ease-in-out infinite;
        }

        .cinematic-orbit {
          animation: cinematicOrbit 60s linear infinite;
        }

        .cinematic-orbit-reverse {
          animation: cinematicOrbitReverse 45s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .cinematic-star,
          .cinematic-light,
          .cinematic-light-two,
          .cinematic-orbit,
          .cinematic-orbit-reverse {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero