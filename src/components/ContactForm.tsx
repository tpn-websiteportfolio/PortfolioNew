import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-800">
      <div className="container-custom max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-300">
            Have a task, project, or business support need? Let&apos;s connect and see how I can help.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-dark-800 rounded-xl p-8 md:p-10 border border-primary-500/20 mb-8"
        >
          {/* Full Name */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Full Name *</label>
            <input
              {...register("fullName")}
              type="text"
              placeholder="Stephen Ilustre"
              className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-all"
            />
            {errors.fullName && (
              <p className="text-red-400 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Email Address *</label>
            <input
              {...register("email")}
              type="email"
              placeholder="stephenilustre12@gmail.com"
              className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-all"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Subject */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Subject *</label>
            <input
              {...register("subject")}
              type="text"
              placeholder="How can I help you?"
              className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-all"
            />
            {errors.subject && (
              <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className="block text-white font-semibold mb-2">Message *</label>
            <textarea
              {...register("message")}
              placeholder="Tell me about your project, task, or support needs."
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-all resize-none"
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white rounded-lg font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Sending...
              </>
            ) : (
              <>
                <Send size={20} />
                Send Message
              </>
            )}
          </motion.button>

          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center font-semibold"
            >
              ✓ Message sent! I'll get back to you within 24 hours.
            </motion.div>
          )}
        </motion.form>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Responsive", "Professional", "Flexible"].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark-800 rounded-lg p-6 border border-dark-700 text-center"
            >
              <p className="text-white text-xl font-bold">{item}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Prefer direct contact?</p>
          <a
            href="mailto:stephenilustre12@gmail.com"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold text-lg transition-colors"
          >
            <Mail size={24} />
            stephenilustre12@gmail.com
          </a>
          <p className="mt-5 text-sm leading-relaxed text-gray-400">
            Supporting remote work across administrative support, outreach, lead generation, email and communication, research, data management, and general virtual assistance.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-2 text-sm text-slate-300 sm:flex-row sm:gap-5">
            <span>Based in: Philippines</span>
            <span className="hidden text-slate-600 sm:inline">•</span>
            <span>Available for: Remote Work</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
