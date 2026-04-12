"use client";

import { motion, type Variants } from "framer-motion";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

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

const SYSTEM_SNAPSHOT = {
  name: "Real-Time Collaboration",
  overview: "WebSocket server handles connection lifecycle and message routing. Redis pub/sub used for cross-instance communication. Clients maintain local state with server reconciliation. Backpressure handled via message throttling and batching.",
  tradeoffs: [
    { decision: "Chose Redis over Kafka", rationale: "Lower latency and simpler setup" },
    { decision: "Accepted eventual consistency", rationale: "Performance tradeoff for collaborative edits" },
  ],
};

export function EngineeringDepth() {
  return (
    <Section id="engineering-depth">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants}>
          <SectionHeader>
            <SectionTitle>System Design Snapshot</SectionTitle>
            <SectionDescription>
              Real-world architecture decisions and tradeoffs.
            </SectionDescription>
          </SectionHeader>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-6 md:p-8">
            <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">
              {SYSTEM_SNAPSHOT.name}
            </h3>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
              {SYSTEM_SNAPSHOT.overview}
            </p>
            <div>
              <h4 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-3">
                Key Tradeoffs
              </h4>
              <div className="space-y-3">
                {SYSTEM_SNAPSHOT.tradeoffs.map((item, i) => (
                  <div key={i} className="flex gap-4 text-sm">
                    <span className="text-primary-500 font-medium">{item.decision}:</span>
                    <span className="text-[var(--muted-foreground)]">{item.rationale}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  );
}