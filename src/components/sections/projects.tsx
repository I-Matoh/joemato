"use client";

import { useState } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  architecture: string[];
  challenges: string[];
  techStack: string[];
  impact: string[];
  metrics: { label: string; value: string }[];
}

const PROJECTS: Project[] = [
  {
    id: "ai-learning",
    title: "AI-Powered Learning Platform",
    tagline: "Adaptive learning paths driven by LLM integration",
    problem: "Traditional e-learning platforms deliver static content to diverse learners. Students with different learning speeds, styles, and backgrounds receive identical experiences, leading to disengagement and poor outcomes.",
    architecture: [
      "React frontend with server-side rendering for SEO and performance",
      "Node.js/Express API layer with GraphQL for flexible data fetching",
      "MongoDB with compound indexes for query optimization",
      "Supabase for user authentication and real-time database features",
      "Redis cache for session management and API response caching",
      "Groq API integration for content generation and assessment",
      "Custom recommendation engine using collaborative filtering",
    ],
    challenges: [
      "Building a recommendation algorithm that adapts to learning patterns in real-time",
      "Implementing content difficulty scaling without exposing model complexity to users",
      "Optimizing database queries for peak load with sub-200ms response times",
      "Designing an assessment system that validates understanding, not memorization",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Supabase", "Redis", "Groq API", "WebSocket"],
    impact: [
      "Improved completion rates through adaptive feedback loops",
      "Reduced repeated API calls through intelligent caching",
      "Personalized content delivery based on learning patterns",
    ],
    metrics: [
      { label: "Peak Users", value: "Thousands" },
      { label: "Avg Response Time", value: "~180ms" },
      { label: "Completion Rate", value: "Improved" },
    ],
  },
  {
    id: "realtime-collab",
    title: "Real-Time Collaboration System",
    tagline: "Multiplayer workspace with conflict resolution",
    problem: "Remote teams need real-time collaboration tools that work reliably at scale. Existing solutions either lack true real-time sync or become unstable with multiple concurrent editors, causing data loss and frustration.",
    architecture: [
      "WebSocket server with Redis pub/sub for horizontal scaling",
      "Operational Transformation (OT) algorithm for conflict resolution",
      "Presence awareness system tracking cursor positions and user states",
      "Event sourcing for complete edit history and undo/redo",
      "MongoDB change streams for persistent state synchronization",
      "Docker containerization with auto-scaling on Kubernetes",
    ],
    challenges: [
      "Implementing OT from scratch to handle concurrent edits without data loss",
      "Building presence awareness that scales to 50+ users per document",
      "Designing a conflict resolution UI that's intuitive, not technical",
      "Optimizing WebSocket connections to handle 1000+ concurrent sessions",
    ],
    techStack: ["React", "Node.js", "WebSocket", "Redis", "MongoDB", "Docker"],
    impact: [
      "Reliable multi-user editing with conflict handling",
      "Sub-50ms sync latency under normal load",
      "Basic fault handling for 99.9% uptime",
    ],
    metrics: [
      { label: "Concurrent Connections", value: "~1K" },
      { label: "Sync Latency", value: "<50ms" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div variants={itemVariants}>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-[var(--foreground)]">
                  {project.title}
                </h3>
                <p className="mt-1 text-[var(--muted-foreground)]">
                  {project.tagline}
                </p>
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex-shrink-0 p-2 rounded-lg hover:bg-[var(--muted)] transition-colors"
                aria-label={isExpanded ? "Collapse" : "Expand"}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path d="m6 9 6 6 6-6" />
                </motion.svg>
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary-500/10 text-primary-600 dark:text-primary-400"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 5 && (
                <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-[var(--muted)] text-[var(--muted-foreground)]">
                  +{project.techStack.length - 5} more
                </span>
              )}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-lg font-bold text-[var(--foreground)]">
                    {metric.value}
                  </div>
                  <div className="text-xs text-[var(--muted-foreground)]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-[var(--border)] pt-6 space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-2">
                      Problem
                    </h4>
                    <p className="text-[var(--foreground)] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-2">
                      System Architecture
                    </h4>
                    <ul className="space-y-2">
                      {project.architecture.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[var(--foreground)]">
                          <svg className="w-4 h-4 mt-0.5 text-primary-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-2">
                      Key Challenges Solved
                    </h4>
                    <ul className="space-y-2">
                      {project.challenges.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[var(--foreground)]">
                          <svg className="w-4 h-4 mt-0.5 text-accent-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-2">
                      Impact
                    </h4>
                    <ul className="space-y-2">
                      {project.impact.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[var(--foreground)]">
                          <svg className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-2">
                      Full Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-[var(--muted)] text-[var(--foreground)] border border-[var(--border)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Projects() {
  return (
    <Section id="projects" className="bg-[var(--muted)]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants}>
          <SectionHeader>
            <SectionTitle>Flagship Projects</SectionTitle>
            <SectionDescription>
              Deep dives into systems I&apos;ve built. Click to expand for
              architecture details, challenges solved, and measurable impact.
            </SectionDescription>
          </SectionHeader>
        </motion.div>

        <div className="space-y-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <p className="mt-8 text-sm text-[var(--muted-foreground)] text-center">
          Additional projects available on request
        </p>
      </motion.div>
    </Section>
  );
}
