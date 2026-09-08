import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Download, Linkedin, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import headshotAsset from "@/assets/surya-headshot.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Surya Vaidyanathan | Principal PM, Agentic AI" },
      { name: "description", content: "Principal Product Manager building production agentic AI systems and enterprise B2B SaaS products." },
      { property: "og:title", content: "Surya Vaidyanathan | Principal PM, Agentic AI" },
      { property: "og:description", content: "Building production AI systems that enterprises actually ship." },
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
    problem: "Enterprise approvals were slowed by fragmented policies, context switching, and repetitive review work.",
    outcome: "Microsoft’s first CRM production agentic AI—deployed to 500+ enterprise tenants and featured in Satya Nadella’s keynote.",
    stat: "500+",
    statLabel: "enterprise tenants",
  },
];

const skills = ["0→1 Product Builder", "Enterprise Agents", "B2B SaaS", "LLM Evaluation", "RAG Systems", "Responsible AI", "Quote to Cash", "Spend Management", "Intelligent Automation"];

const writing: [string, string, string, string?][] = [
  ["01", "Vibe coding: The new era of product development", "How AI-native building changes the distance between product intent and working software.", "https://www.linkedin.com/pulse/vibe-coding-new-era-product-development-surya-vaidyanathan-cq2tc/"],
  ["02", "AI isn't my assistant, it's my personal operating system", "A practical view of AI that coordinates context, decisions, and action across daily work.", "https://www.linkedin.com/pulse/ai-isnt-my-assistant-its-personal-operating-system-surya-vaidyanathan-tlfcc/"],
  ["03", "Building enterprise agents people trust", "Why evaluation, grounding, and responsible defaults matter more than a polished demo."],
];

function Portfolio() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <nav aria-label="Main navigation" className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="font-display text-lg font-bold text-foreground">Surya V<span className="text-primary">.</span></a>
          <div className="hidden items-center gap-8 md:flex">
            {[["About", "#about"], ["Work", "#projects"], ["Writing", "#writing"], ["Labs", "#labs"]].map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">{label}</a>
            ))}
            <Button asChild size="sm" className="rounded-none px-5"><a href="#contact">Contact</a></Button>
          </div>
          <a href="#contact" className="text-sm font-semibold text-foreground md:hidden">Contact</a>
        </nav>
      </header>

      <section id="top" className="relative flex min-h-[94svh] items-center overflow-hidden pt-28 pb-20 sm:pt-32">
        <div className="hero-enter mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase text-primary"><span className="h-px w-10 bg-primary" />Principal PM · Agentic AI</p>
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.02] sm:text-7xl lg:text-[5.6rem]">
            Building AI systems <span className="text-primary">enterprises ship.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            I’m Surya Vaidyanathan, a product leader turning complex enterprise workflows into trustworthy, production-ready agentic AI.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Button asChild size="lg" className="h-12 rounded-none px-7"><a href="#projects">View selected work <ArrowDownRight /></a></Button>
            <a href="/surya-vaidyanathan-resume.pdf" download className="inline-flex items-center gap-2 border-b-2 border-border py-2 text-sm font-bold text-foreground transition-colors hover:border-primary">Download résumé <Download className="size-4" /></a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 text-xs font-semibold uppercase text-muted-foreground">
            <span>16+ years in B2B SaaS</span><span>Microsoft · SAP Concur</span><span>Seattle, WA</span>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-t border-border bg-card py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20 lg:px-12">
          <div className="lg:col-span-4">
            <SectionLabel number="01" label="About" />
            <h2 className="mt-8 font-display text-4xl font-bold leading-tight">Enterprise depth.<br /><span className="text-primary">Builder’s mindset.</span></h2>
            <figure className="mt-10">
              <img src={headshotAsset.url} alt="Surya Vaidyanathan professional headshot" className="aspect-[4/5] w-full max-w-sm object-cover grayscale transition-all duration-500 hover:grayscale-0" />
              <figcaption className="mt-3 text-xs font-semibold text-muted-foreground">Surya Vaidyanathan · Sammamish, WA</figcaption>
            </figure>
          </div>
          <div className="lg:col-span-8">
            <p className="max-w-3xl font-display text-2xl font-semibold leading-relaxed sm:text-3xl">For more than 16 years, I’ve built products where complex systems, high-stakes workflows, and emerging technology meet.</p>
            <div className="mt-12 grid gap-10 border-t border-border pt-10 md:grid-cols-2">
              <p className="leading-7 text-muted-foreground">My path spans SAP Concur and Microsoft Dynamics 365. I led the T&E Approvals Agent through grounding, evaluation, safety, and enterprise deployment—work that moved agentic AI from demo to daily operation.</p>
              <p className="leading-7 text-muted-foreground">The system became Microsoft’s first production agentic AI for CRM, reached 500+ enterprise tenants, and was featured in Satya Nadella’s keynote. Today I’m building at <a href="https://suryavlabs.com" className="font-semibold text-foreground underline decoration-primary underline-offset-4">suryavlabs.com</a> from Sammamish, Washington.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><SectionLabel number="02" label="Selected Work" /><h2 className="mt-8 font-display text-4xl font-bold sm:text-6xl">Shipped to Production</h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">Selected products and initiatives from my product leadership journey.</p></div>
          <div className="mt-14 border-t border-border">
            {projects.map((project, index) => (
              <article key={project.number} className="project-row group grid gap-6 border-b border-border py-9 md:grid-cols-12 md:items-center">
                <div className="md:col-span-1"><span className="font-display text-2xl font-bold text-primary">{project.number}</span></div>
                <div className="md:col-span-4"><p className="text-xs font-bold uppercase text-muted-foreground">{project.label}</p><h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{project.title}</h3></div>
                <div className="md:col-span-4"><p className="text-sm leading-6 text-muted-foreground">{project.problem}</p><p className="mt-3 text-sm font-semibold leading-6 text-foreground">{project.outcome}</p></div>
                <div className="flex items-end justify-between md:col-span-3 md:justify-end md:gap-8"><div className="md:text-right"><p className="font-display text-3xl font-bold">{project.stat}</p><p className="text-xs text-muted-foreground">{project.statLabel}</p></div><ArrowUpRight className="size-5 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className="scroll-mt-20 bg-resume py-24 text-resume-foreground sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-8"><p className="text-xs font-bold uppercase text-resume-muted">Experience at a glance</p><h2 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-6xl">16+ years making complex enterprise products feel possible.</h2></div><div className="lg:col-span-4 lg:text-right"><Button asChild size="lg" className="h-13 w-full rounded-none px-7 sm:w-auto"><a href="/surya-vaidyanathan-resume.pdf" download>Download Resume PDF <Download /></a></Button></div></div>
          <div className="mt-14 flex flex-wrap gap-x-7 gap-y-4 border-t border-resume-border pt-8">{skills.map((skill) => <span key={skill} className="text-sm text-resume-muted">{skill}</span>)}</div>
        </div>
      </section>

      <section id="writing" className="scroll-mt-20 bg-card py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-4"><SectionLabel number="03" label="Writing" /><h2 className="mt-8 font-display text-4xl font-bold">My Perspectives</h2></div>
          <div className="divide-y divide-border border-y border-border lg:col-span-8">{writing.map(([number, title, description]) => <article key={number} className="group grid gap-4 py-8 sm:grid-cols-[3rem_1fr_1fr] sm:gap-7"><span className="font-display text-lg font-bold text-primary">{number}</span><h3 className="font-display text-xl font-bold leading-snug">{title}</h3><p className="text-sm leading-6 text-muted-foreground">{description} <span className="font-semibold text-foreground">Coming soon.</span></p></article>)}</div>
        </div>
      </section>

      <section id="labs" className="scroll-mt-20 border-t border-border py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-4">
            <SectionLabel number="04" label="Labs" />
            <h2 className="mt-8 font-display text-4xl font-bold">Personal Utility Agents</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
              A growing set of small, purposeful agents built to solve everyday problems — starting with taste, memory, and decision-making. Each one is designed around a single job and shaped by real use.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <article className="border-t border-border pt-6">
                <h3 className="font-display text-xl font-bold">Mapmypalate</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">A personal food discovery agent that learns your taste and context, then recommends places and dishes you will actually want to try.</p>
                <span className="mt-4 inline-block text-xs font-bold uppercase text-muted-foreground">In progress</span>
              </article>
              <article className="border-t border-border pt-6">
                <h3 className="font-display text-xl font-bold">More experiments</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">Additional utility agents are in early exploration. Details will be shared as they reach a worth-demoing state.</p>
                <span className="mt-4 inline-block text-xs font-bold uppercase text-muted-foreground">Coming soon</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="scroll-mt-20 bg-footer py-24 text-resume-foreground sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-8"><p className="text-xs font-bold uppercase text-primary">Let’s connect</p><h2 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-6xl">Building something that needs to work in the real world?</h2></div><div className="flex flex-col justify-end gap-5 lg:col-span-4"><a href="mailto:vsurya08@gmail.com" className="inline-flex items-center gap-3 text-sm text-resume-muted hover:text-resume-foreground"><Mail className="size-4 text-primary" />vsurya08@gmail.com</a><a href="https://linkedin.com/in/suryavaidyanathan/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-sm text-resume-muted hover:text-resume-foreground"><Linkedin className="size-4 text-primary" />LinkedIn profile</a><span className="inline-flex items-center gap-3 text-sm text-resume-muted"><MapPin className="size-4 text-primary" />Sammamish · Seattle, WA</span></div></div>
          <div className="mt-20 flex items-center justify-between border-t border-resume-border pt-6 text-xs text-resume-muted"><span>© 2026 Surya Vaidyanathan</span><a href="#top" className="hover:text-resume-foreground">Back to top ↑</a></div>
        </div>
      </footer>
    </main>
  );
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return <p className="flex items-center gap-3 text-xs font-bold uppercase text-muted-foreground"><span className="text-primary">{number}</span><span className="h-px w-8 bg-border" />{label}</p>;
}