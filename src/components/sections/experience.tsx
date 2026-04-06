"use client";

import { motion, type Variants } from "framer-motion";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";

interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

const EXPERIENCES: Experience[] = [
  {
    role: "Intern Full-Stack Engineer",
    company: "Cytonn",
    period: "2025",
    highlights: [
      "Led architecture of AI-powered learning platform serving 10K+ users",
      "Reduced API response times by 60% through Redis caching strategies",
      "Mentored 2 junior engineers on TypeScript and system design",
    ],
  },
  {
    role: "Remote Data Annotation Specialist",
    company: "Contracts",
    period: "2024-2025",
    highlights: [
      "Labeled and quality-checked 50K+ AI training datasets for computer vision models",
      "Developed Python scripts to automate data validation and reduce processing time by 40%",
      "Collaborated with ML engineers to refine annotation guidelines improving model accuracy by 15%",
    ],
  },
  {
    role: "Freelance Junior Developer",
    company: "Freelance",
    period: "2022 — 2023",
    highlights: [
      "Developed MERN stack applications from scratch for 5+ clients",
      "Integrated OpenAI API for automated content generation features",
      "Achieved 95% test coverage on critical payment processing modules",
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Experience() {
  return (
    <Section id="experience">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants}>
          <SectionHeader>
            <SectionTitle>Experience</SectionTitle>
            <SectionDescription>
              A track record of shipping production-grade software and growing
              technical capabilities.
            </SectionDescription>
          </SectionHeader>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border)]" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.role}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary-500 rounded-full -translate-x-1/2 mt-1.5" />

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {exp.period}
                  </span>
                </div>

                <div className={`md:w-1/2 pl-6 md:pl-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <h3 className="text-lg font-bold text-[var(--foreground)]">
                    {exp.role}
                  </h3>
                  <p className="text-[var(--muted-foreground)] mb-3">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]"
                      >
                        <svg
                          className="w-4 h-4 mt-0.5 text-primary-500 flex-shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
