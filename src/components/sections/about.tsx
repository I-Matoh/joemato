"use client";

import { motion, type Variants } from "framer-motion";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

const CERTIFICATIONS = [
  { name: "Building with the Claude API", issuer: "Anthropic", year: "2026" },
];

const SOFT_SKILLS = [
  "Communication",
  "Leadership",
  "Systems Thinking",
  "End-to-End Ownership",
  "Bias for Action",
];

const TECH_STACK = {
  core: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "PostgreSQL",
  ],
  realtime: [
    "WebSockets (connection management, sync strategies)",
    "Redis (caching, pub/sub)",
    "Rate limiting, queue-based processing",
    "API design (REST + real-time patterns)",
  ],
  ai: [
    "OpenAI, Claude, Groq APIs",
    "RAG pipelines (basic retrieval flows, embedding-based search)",
    "Prompt design and response validation",
    "Latency + cost-aware API usage",
  ],
  infrastructure: [
    "Docker",
    "AWS (deployment, scaling basics)",
    "Observability (logs, metrics)",
    "CI/CD pipelines",
  ],
};

const DIFFERENTIATORS = [
  
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
              I&apos;m a full-stack engineer with 3+ years of experience building and
              shipping production applications, with a focus on backend systems,
              real-time infrastructure and AI integrations.
            </p>
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              I work primarily across the MERN stack, designing systems that handle
              live data, scale under load and integrate LLM capabilities where they
              add real value.
            </p>
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-3">
                Focus Areas
              </h3>
              <ul className="space-y-1.5 text-sm text-[var(--muted-foreground)]">
                <li><span className="text-primary-500">•</span> Real-time systems (WebSockets, Redis pub/sub, low-latency sync)</li>
                <li><span className="text-primary-500">•</span> Backend architecture (caching, rate limiting, fault tolerance)</li>
                <li><span className="text-primary-500">•</span> Practical AI integration (RAG pipelines, prompt workflows, API orchestration)</li>
              </ul>
            </div>

            <div className="pt-4">
              <h3 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-4">
                Core Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.core.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[var(--muted)] text-[var(--foreground)] border border-[var(--border)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-4">
                Real-Time & Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.realtime.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[var(--muted)] text-[var(--foreground)] border border-[var(--border)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-4">
                AI Integration
              </h3>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.ai.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[var(--muted)] text-[var(--foreground)] border border-[var(--border)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-4">
                Infrastructure & Production
              </h3>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.infrastructure.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[var(--muted)] text-[var(--foreground)] border border-[var(--border)]"
                  >
                    {tech}
                  </span>
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

            <div className="pt-4">
              <h3 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-4">
                Certifications
              </h3>
              <div className="space-y-2">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.name} className="flex justify-between items-center text-sm">
                    <span className="text-[var(--foreground)]">{cert.name}</span>
                    <span className="text-[var(--muted-foreground)]">{cert.year}</span>
                  </div>
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
