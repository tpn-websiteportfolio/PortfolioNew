import { motion } from "framer-motion";

const experiences = [
  {
    period: "Feb 2025 – Feb 2026",
    company: "Uncvrd Management",
    location: "Remote",
    title: "Administrative Virtual Assistant",
    responsibilities: [
      "Managed Google Calendar for managers and virtual assistants, scheduling meetings and reducing conflicts through proactive organization and reminders.",
      "Monitored daily performance of social media managers, created ranking Notion dashboards to track progress, and ensured on-time delivery of tasks.",
      "Developed SOPs, worksheets, and tracking systems in Notion to streamline account management, task assignment, and monthly KPI/expense reporting to leadership.",
      "Created and organized new social media accounts as needed, improving team efficiency and enabling faster onboarding of new projects.",
    ],
    tools: ["Google Calendar", "Notion"],
  },
  {
    period: "July 2023 – Jan 2025",
    company: "Traivtus Inc.",
    location: "Remote",
    title: "Team Leader / Outreach Specialist",
    responsibilities: [
      "Led outreach initiatives and lead generation for the team, training members on effective strategies to identify and nurture potential clients/leads.",
      "Monitored team performance against goals, provided coaching to improve skills, and prepared detailed reports on progress, conversions, and results to support data-driven decisions.",
      "Coordinated outreach campaigns, resulting in consistent lead flow and team achievement of monthly targets through organized tracking and follow-up processes.",
      "Guided the team in using tools and best practices for lead generation, enhancing overall outreach efficiency and contributing to business growth.",
    ],
    tools: [],
  },
  {
    period: "Feb 2018 – Dec 2024",
    company: "Abest Express Inc.",
    title: "Checker - Counter & Check Releasing",
    responsibilities: [
      "Inspected and verified incoming/outgoing shipments for quantity, condition, labeling, and tagging, ensuring 100% accuracy and compliance with delivery standards.",
      "Performed accurate data entry and tracking of inventory records, shipment details, and transaction logs to minimize errors and support reliable delivery timelines.",
      "Processed client payments, released checks/bank transactions promptly, and handled customer inquiries with quick resolutions to maintain high satisfaction levels.",
      "Conducted regular inventory checks and reconciled discrepancies between physical stock and records, contributing to smooth logistics operations and reduced losses.",
    ],
    tools: [],
  },
];

export function WorkExperience() {
  return (
    <section id="work-experience" className="bg-dark-800/30 py-20 md:py-32">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Career History</p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Work Experience</h2>
        </motion.div>

        <div className="relative space-y-8 before:absolute before:bottom-6 before:left-[11px] before:top-6 before:w-px before:bg-sky-400/20 md:before:left-1/2">
          {experiences.map((experience, index) => (
            <motion.article key={`${experience.company}-${experience.period}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.08 }} className="relative pl-9 md:grid md:grid-cols-2 md:gap-12 md:pl-0">
              <span className="absolute left-0 top-8 z-10 h-6 w-6 rounded-full border-4 border-dark-800 bg-sky-400 shadow-[0_0_0_5px_rgba(56,189,248,0.12)] md:left-1/2 md:-translate-x-1/2" />
              <div className={`mb-4 md:mb-0 ${index % 2 === 0 ? "md:col-start-1 md:text-right" : "md:col-start-2"}`}>
                <p className="text-sm font-semibold uppercase tracking-wide text-sky-300">{experience.period}</p>
                <p className="mt-1 text-sm text-slate-400">{experience.company}{experience.location ? ` · ${experience.location}` : ""}</p>
              </div>
              <div className={`rounded-2xl border border-white/10 bg-[#061c2d]/65 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.2)] transition-colors hover:border-sky-400/30 md:p-8 ${index % 2 === 0 ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}`}>
                <h3 className="mb-5 text-xl font-bold text-white md:text-2xl">{experience.title}</h3>
                <ul className="space-y-3 text-sm leading-relaxed text-slate-300 md:text-base">
                  {experience.responsibilities.map((responsibility) => <li key={responsibility} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" /><span>{responsibility}</span></li>)}
                </ul>
                {experience.tools.length > 0 && <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">{experience.tools.map((tool) => <span key={tool} className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-200">{tool}</span>)}</div>}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
