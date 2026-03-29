"use client";

import { motion, type Variants } from "framer-motion";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "Talk to me!",
    href: "mailto:matojmax11@proton.me?subject=Opportunity%20from%20Portfolio",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  
  {
    label: "GitHub",
    value: "Lets Collaborate!",
    href: "https://github.com/I-Matoh",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
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

export function Contact() {
  return (
    <Section id="contact" className="bg-[var(--muted)]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.div variants={itemVariants}>
          <SectionHeader className="text-center">
            <SectionTitle>Let&apos;s Build Something</SectionTitle>
            <SectionDescription className="mx-auto">
              Looking for a senior engineer who can architect AI-powered systems
              and ship production-grade code? Let&apos;s talk.
            </SectionDescription>
          </SectionHeader>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          {CONTACT_LINKS.map((link) => (
            <Card key={link.label} className="group">
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 hover:bg-[var(--muted)] transition-colors rounded-xl"
              >
                <div className="flex-shrink-0 p-2 rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                  {link.icon}
                </div>
                <div className="text-left flex-1">
                  <div className="text-sm font-medium text-[var(--muted-foreground)]">
                    {link.label}
                  </div>
                  <div className="text-[var(--foreground)]">
                    {link.value}
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] group-hover:translate-x-1 transition-all"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </Card>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8">
          <p className="text-sm text-[var(--muted-foreground)]">
            Response time: usually within 24 hours
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
}
