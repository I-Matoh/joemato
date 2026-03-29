# Portfolio Architecture — MERN + AI Engineer

## Sitemap

```
/ (Single-page application with smooth scroll sections)
├── Hero
├── About
├── Projects
│   ├── AI Learning Platform (expandable)
│   └── Real-Time Collaboration System (expandable)
├── Experience
├── Contact
└── Footer
```

## Section Breakdown

### 1. Hero
- **Purpose:** First impression. Communicate positioning in <5 seconds.
- **Content:** Headline, value prop, CTA buttons, subtle animation.
- **Conversion Goal:** Recruiters click "View Projects" or "Contact".
- **UX Rationale:** Recruiters scan fast. Headline must signal seniority + AI expertise immediately. No scrolling required to take action.

### 2. About
- **Purpose:** Establish credibility and personality.
- **Content:** Short bio, tech stack badges, years of experience, core differentiators.
- **Conversion Goal:** Reinforce trust, push to Projects section.
- **UX Rationale:** Recruiters want to know "who is this person?" after the hook. Keep it tight—3 sentences max. Tech stack visual for quick scanning.

### 3. Projects
- **Purpose:** Demonstrate systems thinking, not just code.
- **Content:** Two flagship projects with expandable detail views.
- **Conversion Goal:** Prove senior-level engineering capability.
- **UX Rationale:** Generic project cards don't differentiate. Expandable detail views let engaged readers go deep while keeping the page scannable. Focus on architecture decisions, not feature lists.

### 4. Experience
- **Purpose:** Timeline of professional growth.
- **Content:** Roles, companies, key achievements (metrics-driven).
- **Conversion Goal:** Validate career trajectory.
- **UX Rationale:** Recruiters check experience second. Use a clean timeline, not a wall of text. Highlight impact with numbers.

### 5. Contact
- **Purpose:** Make it easy to reach out.
- **Content:** Email, LinkedIn, GitHub, simple contact form.
- **Conversion Goal:** Get recruiters to initiate contact.
- **UX Rationale:** Friction-free. No complex forms. Direct links + optional form for those who prefer it.

### 6. Footer
- **Purpose:** Social proof and legal.
- **Content:** GitHub contributions, copyright, back-to-top.
- **Conversion Goal:** Secondary engagement (GitHub profile visit).

## Conversion Flow

```
Hero (hook) → About (trust) → Projects (proof) → Experience (validation) → Contact (action)
```

Each section reduces uncertainty and builds toward the conversion event: an interview request.

## UX Decisions

1. **Single-page design:** Recruiters don't want to navigate. One scroll, full picture.
2. **Expandable project details:** Keeps page scannable while allowing depth for interested readers.
3. **Dark mode default:** Signals technical sophistication. Light mode toggle for accessibility.
4. **Framer Motion animations:** Subtle, not distracting. Enhance perceived quality.
5. **Mobile-first:** Many recruiters review on mobile. Responsive design is non-negotiable.
