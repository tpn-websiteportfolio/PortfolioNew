import { motion } from "framer-motion";
import { ExternalLink, Share2, Globe, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      "Administrative Support",
      "Social Media Management",
      "KPI Tracking & Reporting",
      "Data Entry & Notion Systems",
    ],
    resources: [
      "Google Workspace",
      "SOP Creation",
      "Lead Generation",
      "Customer Support",
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: Share2,
      url: "https://www.facebook.com",
    },
    {
      name: "LinkedIn",
      icon: Globe,
      url: "https://www.linkedin.com",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:stephenilustre90@gmail.com",
    },
  ];

  return (
    <footer className="border-t border-slate-800 bg-[#021b2a]">
      <div className="px-6 py-16 md:px-12">
        <div className="container-custom">
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-1"
            >
              <h3 className="mb-2 text-2xl font-bold text-white">Stephen Ilustre</h3>
              <p className="text-sm text-slate-400">
                Administrative Virtual Assistant focused on efficient workflows, KPI visibility, and daily operations support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="mb-4 font-bold text-white">Services</h4>
              <ul className="space-y-3">
                {links.services.map((link) => (
                  <li key={link}>
                    <a
                      href="#services"
                      className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-sky-400"
                    >
                      {link}
                      <ExternalLink size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="mb-4 font-bold text-white">Core Skills</h4>
              <ul className="space-y-3">
                {links.resources.map((link) => (
                  <li key={link}>
                    <a
                      href="#about"
                      className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-sky-400"
                    >
                      {link}
                      <ExternalLink size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="mb-4 font-bold text-white">Get In Touch</h4>
              <a
                href="mailto:stephenilustre90@gmail.com"
                className="mb-6 inline-flex items-center gap-2 font-semibold text-sky-400 transition-colors hover:text-sky-300"
              >
                <Mail size={20} />
                stephenilustre90@gmail.com
              </a>
              <p className="text-sm text-slate-400">Bacolod City, Negros Occidental, Philippines</p>
            </motion.div>
          </div>

          <div className="border-t border-slate-800 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex justify-center gap-6"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-lg border border-slate-700 bg-slate-900 p-3 text-slate-400 transition-all hover:border-sky-500 hover:text-sky-400"
                    title={social.name}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center text-sm text-slate-500"
            >
              <p>© {currentYear} Stephen Ilustre. All rights reserved.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
