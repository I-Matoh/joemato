"use client";

import { motion, type Variants } from "framer-motion";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

const CERTIFICATIONS = [
  { name: "Building with the Claude API", issuer: "Anthropic", year: "2026" },
  { name: "Advanced MCP Topics", issuer: "Anthropic", year: "2026" },
  { name: "Claude Code in Action", issuer: "Anthropic", year: "2026" },
  { name: "Introduction to Model Context Protocol", issuer: "Anthropic", year: "2026" },
  { name: "AI Fluency: Framework & Foundations", issuer: "Anthropic", year: "2026" },
];

const SOFT_SKILLS = [
  "Communication",
  "Leadership",
  "Systems Thinking",
  "End-to-End Ownership",
  "Bias for Action",
  "Influence without Authority",
  "Ambiguity Management",
];

const TECH_STACK = [
  { name: "JavaScript", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "MongoDB, PostgreSQL", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "WebSocket", category: "Real-time" },
  { name: "OpenAI API", category: "AI" },
  { name: "Groq API", category: "AI" },
  { name: "Claude", category: "AI" },
  { name: "Prompt Engineering", category: "AI" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Rate Limiting", category: "Architecture" },
  { name: "Observability", category: "DevOps" },
];

const DIFFERENTIATORS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" /><path d="m16.2 7.8 2.9-2.9" /><path d="M18 12h4" /><path d="m16.2 16.2 2.9 2.9" /><path d="M12 18v4" /><path d="m4.9 19.1 2.9-2.9" /><path d="M2 12h4" /><path d="m4.9 4.9 2.9 2.9" />
      </svg>
    ),
    title: "AI-Native Architecture",
    description: "I don't bolt AI onto existing systems. I build architectures where machine learning pipelines, LLM integrations, and intelligent automation are first-class citizens. RAG pipelines, embedding vectors, prompt optimization, hallucination control.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
      </svg>
    ),
    title: "Real-Time Systems Thinking",
    description: "Beyond REST APIs—I build WebSocket-driven collaboration systems with conflict resolution, presence awareness, and sub-100ms latency. Redis pub/sub, message queues, connection pooling.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "System Architecture",
    description: "Designed WebSocket architecture supporting 1K+ concurrent users with Redis pub/sub. Implemented caching layers reducing DB load by 60%. Built fault-tolerant services with retry + fallback mechanisms.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Production Discipline",
    description: "Code that ships, scales, and survives. TypeScript strict mode, comprehensive error handling, database indexing strategies, caching layers, CI/CD pipelines, rate limiting, and observability with logs/metrics/tracing.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function About() {
  return (
    <Section id="about">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants}>
          <SectionHeader>
            <SectionTitle>About</SectionTitle>
            <SectionDescription>
              Building intelligent systems with production discipline and
              systems thinking.
            </SectionDescription>
          </SectionHeader>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-[var(--foreground)] leading-relaxed">
              I&apos;m a full-stack engineer with 3 years of experience building
              production-grade applications. My focus: AI integration and
              real-time systems that solve real problems.
            </p>
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              I&apos;ve built AI-powered learning platforms that adapt to user
              behavior and real-time collaboration systems handling thousands of
              concurrent connections. My code isn&apos;t
              portfolio-ready, it's production-ready.
            </p>

            <div className="pt-4">
              <h3 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[var(--muted)] text-[var(--foreground)] border border-[var(--border)]"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-4">
                Certifications
              </h3>
              <div className="space-y-2">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.name} className="flex justify-between items-center text-sm">
                    <span className="text-[var(--foreground)]">{cert.name}</span>
                    <span className="text-[var(--muted-foreground)]">{cert.issuer} · {cert.year}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-4">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {SOFT_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[var(--muted)] text-[var(--foreground)] border border-[var(--border)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            {DIFFERENTIATORS.map((item) => (
              <Card key={item.title} className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
