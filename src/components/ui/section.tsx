import { type HTMLAttributes, forwardRef } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, className = "", children, ...props }, ref) => (
    <section
      ref={ref}
      id={id}
      className={`py-20 md:py-28 ${className}`}
      {...props}
    >
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  )
);

Section.displayName = "Section";

export const SectionHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className = "", children, ...props }, ref) => (
  <div ref={ref} className={`mb-12 md:mb-16 ${className}`} {...props}>
    {children}
  </div>
));

SectionHeader.displayName = "SectionHeader";

export const SectionTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className = "", children, ...props }, ref) => (
  <h2
    ref={ref}
    className={`text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)] ${className}`}
    {...props}
  >
    {children}
  </h2>
));

SectionTitle.displayName = "SectionTitle";

export const SectionDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className = "", children, ...props }, ref) => (
  <p
    ref={ref}
    className={`mt-4 text-lg text-[var(--muted-foreground)] max-w-2xl ${className}`}
    {...props}
  >
    {children}
  </p>
));

SectionDescription.displayName = "SectionDescription";
