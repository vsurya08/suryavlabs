import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/agentic-systems-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Surya Vaidyanathan | Principal PM, Agentic AI" },
      {
        name: "description",
        content:
          "Principal Product Manager building production agentic AI systems and enterprise B2B SaaS products.",
      },
      { property: "og:title", content: "Surya Vaidyanathan | Principal PM, Agentic AI" },
      {
        property: "og:description",
        content: "Building production AI systems that enterprises actually ship.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    number: "01",
    label: "Microsoft Dynamics 365",
    title: "T&E Approvals Agent",
    problem:
      "Enterprise approvals were slowed by fragmented policies, context switching, and repetitive review work.",
    outcome:
      "Led Microsoft’s first CRM production agentic AI system—deployed to 500+ enterprise tenants and featured in Satya Nadella’s keynote.",
  },
  {
    number: "02",
    label: "Independent Build · In Progress",
    title: "Mapmypalate",
    problem:
      "Finding food that fits personal taste, context, and location remains a noisy, generic experience.",
    outcome:
      "Building a more personal way to map taste and turn food discovery into confident decisions. Details coming soon.",
  },
  {
    number: "03",
    label: "Surya V Labs · In Progress",
    title: "Next Enterprise AI System",
    problem:
      "The most valuable enterprise workflows still need AI systems that can reason, act, and earn trust in production.",
    outcome: "In progress—details coming soon.",
  },
];

const skills = [
  "0→1 Product Builder",
  "Enterprise Agents",
  "B2B SaaS",
  "LLM Evaluation",
  "RAG Systems",
  "Responsible AI",
  "Quote to Cash",
  "Spend Management",
  "Intelligent Automation",
];

const writing = [
  {
    title: "Vibe coding: The new era of product development",
    description: "How AI-native building changes the distance between product intent and working software.",
  },
  {
    title: "AI as a personal OS",
    description: "A practical view of AI that coordinates context, decisions, and action across daily work.",
  },
  {
    title: "Building enterprise agents people trust",
    description: "Why evaluation, grounding, and responsible defaults matter more than a polished demo.",
  },
];

function Portfolio() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-nav-border bg-nav/90 backdrop-blur-md">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
        >
          <a href="#top" className="font-display text-lg font-semibold text-nav-foreground">
            SV<span className="text-brand">.</span>
          </a>
          <div className="flex items-center gap-1 sm:gap-6">
            {[
              ["About", "#about"],
              ["Work", "#projects"],
              ["Writing", "#writing"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="px-2 py-2 text-xs font-medium text-nav-muted transition-colors hover:text-nav-foreground sm:px-0 sm:text-sm"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="top" className="relative flex min-h-[92svh] items-end overflow-hidden bg-nav pt-28">
        <img
          src={heroImage}
          alt="Abstract visualization of an interconnected agentic AI system"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-80"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="hero-enter relative mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
          <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase text-brand-light">
            <span className="h-px w-8 bg-brand" /> Principal PM · Agentic AI
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.98] text-nav-foreground sm:text-7xl lg:text-8xl">
            Surya<br />Vaidyanathan
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-nav-muted sm:text-2xl">
            Building production AI systems that enterprises actually ship.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-sm px-6 text-sm">
              <a href="#projects">View Work <ArrowDown aria-hidden="true" /></a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-sm border-nav-border bg-transparent px-6 text-nav-foreground hover:bg-nav-surface hover:text-nav-foreground"
            >
              <a href="/surya-vaidyanathan-resume.pdf" download>
                Download Resume <Download aria-hidden="true" />
              </a>
            </Button>
          </div>
          <div className="mt-12 flex items-center gap-2 text-sm text-nav-muted sm:absolute sm:bottom-10 sm:right-12 sm:mt-0">
            <MapPin className="size-4 text-brand-light" aria-hidden="true" /> Sammamish · Seattle, WA
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-16 border-b border-border py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_2fr] lg:px-12">
          <SectionLabel number="01" label="About" />
          <div>
            <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-5xl">
              Enterprise depth.<br /><span className="text-muted-foreground">Builder’s mindset.</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
              <p>
                I’m a product leader with 16+ years in enterprise B2B SaaS, from SAP Concur to Microsoft Dynamics 365. I work where complex business systems meet emerging AI capability.
              </p>
              <p>
                I led the T&E Approvals Agent—Microsoft’s first production agentic AI system for CRM—through the hard work of grounding, evaluation, safety, and enterprise deployment. It now serves 500+ enterprise tenants and was featured in Satya Nadella’s keynote.
              </p>
              <p>
                Today, I’m building at <a className="font-medium text-foreground underline decoration-brand underline-offset-4" href="https://suryavlabs.com">suryavlabs.com</a>, exploring the next generation of useful, trustworthy AI products from Sammamish, Washington.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-16 bg-section py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
            <SectionLabel number="02" label="Selected Work" />
            <div>
              <h2 className="font-display text-4xl font-semibold sm:text-5xl">Products built for production.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
                Work at the intersection of enterprise workflows, applied AI, and measurable outcomes.
              </p>
            </div>
          </div>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.number} className="project-card flex min-h-[360px] flex-col border border-border bg-card p-6 sm:p-8">
                <div className="flex items-center justify-between text-xs font-semibold uppercase text-muted-foreground">
                  <span>{project.number}</span><ArrowUpRight className="size-4 text-brand" aria-hidden="true" />
                </div>
                <div className="mt-16">
                  <p className="text-xs font-semibold uppercase text-brand">{project.label}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-6 text-sm leading-6 text-muted-foreground">{project.problem}</p>
                  <div className="mt-6 border-t border-border pt-5">
                    <p className="text-sm font-medium leading-6 text-foreground">{project.outcome}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className="scroll-mt-16 border-y border-nav-border bg-nav py-20 text-nav-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase text-brand-light">Experience at a glance</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold sm:text-5xl">16+ years building for complex enterprises.</h2>
            </div>
            <Button asChild size="lg" className="h-12 w-full rounded-sm px-6 sm:w-fit">
              <a href="/surya-vaidyanathan-resume.pdf" download>Download Resume PDF <Download aria-hidden="true" /></a>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-nav-border pt-8">
            {skills.map((skill) => <span key={skill} className="text-sm text-nav-muted">{skill}</span>)}
          </div>
        </div>
      </section>

      <section id="writing" className="scroll-mt-16 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
            <SectionLabel number="03" label="Writing" />
            <h2 className="font-display text-4xl font-semibold sm:text-5xl">Ideas in progress.</h2>
          </div>
          <div className="mt-14 divide-y divide-border border-y border-border">
            {writing.map((article, index) => (
              <article key={article.title} className="grid gap-3 py-8 sm:grid-cols-[4rem_1fr_2fr] sm:items-start sm:gap-6">
                <span className="text-xs font-semibold text-muted-foreground">0{index + 1}</span>
                <h3 className="font-display text-xl font-semibold leading-snug">{article.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{article.description} <span className="ml-2 font-medium text-foreground">Coming soon.</span></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="scroll-mt-16 bg-footer py-20 text-nav-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase text-brand-light">Let’s connect</p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">Building something that needs to work in the real world?</h2>
          <div className="mt-12 flex flex-col gap-4 border-t border-nav-border pt-8 sm:flex-row sm:gap-10">
            <a href="mailto:vsurya08@gmail.com" className="inline-flex items-center gap-3 text-sm text-nav-muted transition-colors hover:text-nav-foreground">
              <Mail className="size-4 text-brand-light" aria-hidden="true" /> vsurya08@gmail.com
            </a>
            <a href="https://linkedin.com/in/suryavaidyanathan/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-sm text-nav-muted transition-colors hover:text-nav-foreground">
              <Linkedin className="size-4 text-brand-light" aria-hidden="true" /> linkedin.com/in/suryavaidyanathan
            </a>
          </div>
          <div className="mt-16 flex items-center justify-between text-xs text-nav-muted">
            <span>© 2026 Surya Vaidyanathan</span><a href="#top" className="hover:text-nav-foreground">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <p className="flex items-center gap-3 text-xs font-semibold uppercase text-muted-foreground">
      <span className="text-brand">{number}</span><span className="h-px w-8 bg-border" />{label}
    </p>
  );
}