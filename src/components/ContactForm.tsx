import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  phone: z.string().optional(),
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
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-800">
      <div className="container-custom max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Talk</h2>
          <p className="text-xl text-gray-300">
            Ready to streamline your workflow? Get in touch and let's discuss how I can help
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
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-all"
            />
            {errors.fullName && (
              <p className="text-red-400 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Email *</label>
            <input
              {...register("email")}
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-all"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Company */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Company *</label>
            <input
              {...register("company")}
              type="text"
              placeholder="Your company name"
              className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-all"
            />
            {errors.company && (
              <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Phone (Optional)</label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="Your phone number"
              className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-all"
            />
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className="block text-white font-semibold mb-2">Message *</label>
            <textarea
              {...register("message")}
              placeholder="Tell me about your project and goals..."
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
          {[
            { title: "Response Time", value: "24 Hours" },
            { title: "Consultation", value: "Free" },
            { title: "Timezone", value: "Flexible" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark-800 rounded-lg p-6 border border-dark-700 text-center"
            >
              <p className="text-gray-400 text-sm mb-2">{item.title}</p>
              <p className="text-white text-2xl font-bold">{item.value}</p>
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
            href="mailto:hello@vaoperations.com"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold text-lg transition-colors"
          >
            <Mail size={24} />
            hello@vaoperations.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
