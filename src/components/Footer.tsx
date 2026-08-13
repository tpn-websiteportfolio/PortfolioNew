import { motion } from "framer-motion";
import { Mail, Settings } from "lucide-react";
import { ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      "Email Management",
      "Workflow Automation",
      "Project Coordination",
      "Data Management",
    ],
    resources: [
      "Blog",
      "Case Studies",
      "Tools Directory",
      "FAQ",
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Settings,
      url: "https://linkedin.com",
    },
    {
      name: "GitHub",
      icon: Settings,
      url: "https://github.com",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:hello@vaoperations.com",
    },
  ];

  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="px-6 md:px-12 py-16">
        <div className="container-custom">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-1"
            >
              <h3 className="text-2xl font-bold text-white mb-2">My Portfolio</h3>
              <p className="text-gray-400 text-sm">
                Transforming business chaos into organized workflows through strategic virtual assistance.
              </p>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-3">
                {links.services.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                    >
                      {link}
                      <ExternalLink
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-3">
                {links.resources.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                    >
                      {link}
                      <ExternalLink
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-bold text-white mb-4">Get In Touch</h4>
              <a
                href="mailto:hello@vaoperations.com"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors mb-6"
              >
                <Mail size={20} />
                hello@vaoperations.com
              </a>
              <p className="text-gray-400 text-sm">
                Let's discuss how I can help streamline your workflow.
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-dark-700 py-8">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center gap-6 mb-8"
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
                    className="p-3 rounded-lg bg-dark-800 border border-dark-700 hover:border-primary-500 text-gray-400 hover:text-primary-400 transition-all"
                    title={social.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Bottom Text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center text-gray-500 text-sm"
            >
              <p>
                © {currentYear} VA Operations. All rights reserved. |{" "}
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
                {" "} |{" "}
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
