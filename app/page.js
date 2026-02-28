"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { useEffect, useState } from "react";

const HERO_IMAGE = "/images/hero.JPG";   
const AMWAAJ_IMAGE = "/images/Amwaajessakina.jpg";

function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="glass">
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-14">
          <div className="h-16 flex items-center justify-between">
           <a href="#top" className="flex items-center">
  <img
    src="/images/logovk.png"
    alt="logovk"
    className="h-9 w-auto"
  />
</a>

            <nav className="hidden md:flex items-center gap-7 text-sm text-neutral-700">
              <a className="hover:text-neutral-900" href="#impact">Impact</a>
              <a className="hover:text-neutral-900" href="#amwaaj">Amwaajessakina</a>
              <a className="hover:text-neutral-900" href="#cv">CV</a>
              <a className="hover:text-neutral-900" href="#contact">Contact</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition">
                Book a Call
              </a>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hairline hover:bg-neutral-50 transition"
              onClick={() => setOpen(v => !v)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>

          {open ? (
            <div className="md:hidden pb-4">
              <div className="grid gap-1 text-sm text-neutral-700">
                <a className="rounded-xl px-3 py-2 hover:bg-neutral-50" href="#impact">Impact</a>
                <a className="rounded-xl px-3 py-2 hover:bg-neutral-50" href="#amwaaj">Amwaajessakina</a>
                <a className="rounded-xl px-3 py-2 hover:bg-neutral-50" href="#cv">Download CV</a>
                <a className="rounded-xl px-3 py-2 hover:bg-neutral-50" href="#contact">Contact</a>
                <a className="mt-2 inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition" href="#contact">
                  Book a Call
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.02, 1]);
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 h-[2px] w-full origin-left bg-neutral-900/80 z-[60]"
    />
  );
}

export default function Home() {
  const { scrollY } = useScroll();

  // Cinematic hero transforms
  const heroScale = useTransform(scrollY, [0, 380], [1, 0.92]);
  const heroY = useTransform(scrollY, [0, 420], [0, -40]);
  const heroOpacity = useTransform(scrollY, [0, 520], [1, 0]);

  // Image parallax
  const heroImgY = useTransform(scrollY, [0, 600], [0, 24]);
  const amwaajImgY = useTransform(scrollY, [900, 1700], [32, -32]);

  return (
    <main id="top" className="overflow-x-hidden font-sans">
      <ScrollProgress />
      <Nav />

      {/* HERO */}
<section className="relative min-h-[100vh] pt-24">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_700px_at_20%_10%,rgba(0,0,0,0.06),transparent_60%),radial-gradient(900px_600px_at_80%_0%,rgba(0,0,0,0.04),transparent_55%)]" />

  <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-14">
    <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE – TEXT */}
      <div>
        <p className="text-xs tracking-widest text-neutral-500 uppercase mb-4">
          Growth • Partnerships • Cultural Platforms
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Vishnukant Ramachandran
        </h1>

        <p className="mt-6 text-lg text-neutral-600 max-w-xl">
          Founder-minded Growth Strategist & Partnership Architect — building
          cross-market expansion, premium narratives, and scalable ecosystems
          across the UAE and global markets.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#impact" className="px-6 py-3 bg-black text-white rounded-full">
            View Impact
          </a>
          <a href="#cv" className="px-6 py-3 border border-neutral-300 rounded-full">
            Download CV
          </a>
        </div>
      </div>
      {/* RIGHT SIDE – IMAGE */}
   <div className="relative">
        <img
          src={HERO_IMAGE}
          alt="Vishnukantr portrait"
          className="w-full h-auto rounded-3xl object-contain"
        />
      </div>
    </div>
  </div>
</section>
        {/* Cinematic black transition */}
        <div className="mt-20 md:mt-28">
          <div className="bg-neutral-950 text-white">
            <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-14 py-24 md:py-32">
              <Reveal>
                <p className="text-[11px] tracking-[0.22em] uppercase text-white/60">Signal</p>
                <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
                  Precision first. Vision always.
                </h2>
                <p className="mt-6 text-base md:text-lg text-white/70 max-w-3xl">
                  Built for hiring managers today — and long-term founder positioning tomorrow.
                  Structured growth, strategic partnerships, and cultural intelligence.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[11px] tracking-[0.22em] uppercase text-neutral-500">Executive Snapshot</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Clear, recruiter-ready signal in 10 seconds.
            </h2>
            <p className="mt-5 text-base md:text-lg text-neutral-600 max-w-3xl">
              A concise view of how I operate: structured, cross-market, and execution-focused.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-12 grid md:grid-cols-3 gap-4 text-sm text-neutral-700">
              {[
                "UAE Golden Visa • Dubai-based",
                "5+ years international markets (UAE, UK, India)",
                "Business Development + Partnerships",
                "Digital strategy + content systems",
                "Regulatory & market launch execution",
                "Data-backed decisioning and reporting",
              ].map((t) => (
                <div key={t} className="rounded-2xl hairline bg-white p-5 softshadow">
                  {t}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="py-24 md:py-32 px-6 md:px-10 lg:px-14 bg-neutral-50">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[11px] tracking-[0.22em] uppercase text-neutral-500">Selected Impact</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Outcomes, not responsibilities.
            </h2>
          </Reveal>

          <div className="mt-14 space-y-16">
            {[
              {
                title: "Scaling cultural tourism beyond local audiences",
                desc:
                  "Structured India market-entry model for Amwaajessakina, securing travel partner agreements and positioning Emirati immersion as premium itinerary inclusion.",
                tags: ["Partnerships", "GTM", "Market Entry"],
              },
              {
                title: "Driving 200% brand growth",
                desc:
                  "Repositioned a healthcare brand digitally and built a multi-platform presence, improving organic growth and engagement through structured content systems.",
                tags: ["Brand", "Content", "Growth"],
              },
              {
                title: "Regulatory & market launch execution in the UAE",
                desc:
                  "Led Arabic publishing approvals and regulatory submissions independently — aligning stakeholders across compliance, printing, and distribution.",
                tags: ["Regulatory", "Ops", "Stakeholders"],
              },
            ].map((c) => (
              <Reveal key={c.title}>
                <article className="rounded-[28px] hairline bg-white p-8 softshadow hover:translate-y-[-2px] transition">
                  <div className="flex flex-wrap items-center gap-2">
                    {c.tags.map((t) => (
                      <span key={t} className="text-xs rounded-full bg-neutral-100 px-3 py-1 text-neutral-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-4 text-neutral-600 max-w-3xl">{c.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AMWAAJESSAKINA */}
     <section id="amwaajessakina" className="bg-neutral-950 text-white">
  <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-14 py-16 md:py-24">
    <div className="grid md:grid-cols-2 gap-10 items-start">

      {/* LEFT — IMAGE */}
      <div className="rounded-3xl overflow-hidden bg-white/5 ring-1 ring-white/10">
        <img
          src={AMWAAJ_IMAGE}
          alt="Amwaajessakina premium visual"
          className="w-full h-[280px] md:h-[520px] object-cover"
        />
      </div>

      {/* RIGHT — TEXT */}
      <div className="md:pt-4">
        <p className="text-[11px] tracking-[0.22em] uppercase text-white/60">Amwaajessakina</p>

        <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
          Cultural experiences, curated like a luxury product.
        </h2>

        <div className="mt-6 space-y-4 text-white/75">
          <p>Structured, premium Emirati hosting aesthetics — designed for discerning guests.</p>
          <p>Built for partnerships, cultural storytelling, and high-trust community access.</p>
        </div>

        <a
          href="https://amwaajessakina.com"
          className="mt-8 inline-flex items-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium"
          target="_blank"
          rel="noreferrer"
        >
          Visit amwaajessakina.com
        </a>
      </div>

    </div>
  </div>
</section>

      {/* CV DOWNLOAD */}
      <section id="cv" className="py-24 md:py-32 px-6 md:px-10 lg:px-14 bg-neutral-50">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[11px] tracking-[0.22em] uppercase text-neutral-500">For Recruiters</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Download CV — structured, detailed, and ATS-ready.
            </h2>
            <p className="mt-5 text-base md:text-lg text-neutral-600 max-w-3xl">
              Choose the version you want to review.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <a href="/VishnukantR_CV_012026.pdf" className="rounded-[28px] hairline bg-white p-7 softshadow hover:translate-y-[-2px] transition">
                <p className="text-xs tracking-widest uppercase text-neutral-500">Marketing CV</p>
                <p className="mt-3 text-xl font-semibold">Download (PDF)</p>
                <p className="mt-2 text-sm text-neutral-600">Marketing strategy, growth systems, content, and analytics-led execution.</p>
              </a>

              <a href="/VishnukantR_CV_012026_BD.pdf" className="rounded-[28px] bg-neutral-900 text-white p-7 softshadow hover:translate-y-[-2px] transition">
                <p className="text-xs tracking-widest uppercase text-white/60">Business Development CV</p>
                <p className="mt-3 text-xl font-semibold">Download (PDF)</p>
                <p className="mt-2 text-sm text-white/70">Partnerships, market entry, enterprise conversations, and closing support.</p>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 bg-neutral-950 text-white px-6 md:px-10 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[11px] tracking-[0.22em] uppercase text-white/60">Contact</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Let’s build something that scales.
            </h2>
            <p className="mt-5 text-base md:text-lg text-white/70 max-w-3xl">
              If you’re hiring for growth, partnerships, strategy, or building a cultural platform — I’m open to the right conversations.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a href="mailto:youremail@example.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100 transition">
                Email me
              </a>
              <a href="https://linkedin.com"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
                LinkedIn
              </a>
            </div>

            <p className="mt-10 text-sm text-white/50">© {new Date().getFullYear()} Vishnukant Ramachandran</p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
