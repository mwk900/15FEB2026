"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import AnimatedSection from "@/components/AnimatedSection";
import portfolioData from "@/data/portfolio.json";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {};
    if (!data.name.trim()) errs.name = "Name is required";
    if (!data.email.trim()) errs.email = "Email is required";
    else if (!validateEmail(data.email)) errs.email = "Invalid email format";
    if (!data.subject.trim()) errs.subject = "Subject is required";
    if (!data.message.trim()) errs.message = "Message is required";
    else if (data.message.trim().length < 10)
      errs.message = "Message must be at least 10 characters";
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    if (touched[name]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");

    // Netlify Forms submission
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }).toString(),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTouched({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClasses = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-lg border text-sm transition-all outline-none ${
      errors[field] && touched[field]
        ? "border-red-500 focus:border-red-500"
        : isDark
        ? "bg-dark-bg border-dark-border text-dark-text placeholder-dark-text2/50 focus:border-dark-accent"
        : "bg-light-bg border-light-border text-light-text placeholder-light-text2/50 focus:border-light-accent"
    }`;

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Header */}
      <AnimatedSection>
        <div className="mb-12 text-center">
          <h1
            className={`text-3xl md:text-4xl font-bold mb-2 ${
              isDark ? "text-dark-text" : "text-light-text"
            }`}
          >
            Get In Touch
          </h1>
          <div
            className={`h-1 w-16 rounded mx-auto mb-4 ${
              isDark ? "bg-dark-accent" : "bg-light-accent"
            }`}
          />
          <p
            className={`text-lg max-w-xl mx-auto ${
              isDark ? "text-dark-text2" : "text-light-text2"
            }`}
          >
            Have a question or want to work together? Drop me a message and
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Contact Form */}
        <AnimatedSection delay={0.1} className="md:col-span-2">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-8 rounded-xl border text-center ${
                isDark
                  ? "bg-dark-bg2 border-dark-border"
                  : "bg-light-bg2 border-light-border"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  isDark ? "bg-green-500/10" : "bg-green-500/10"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2
                className={`text-xl font-semibold mb-2 ${
                  isDark ? "text-dark-text" : "text-light-text"
                }`}
              >
                Message Sent!
              </h2>
              <p
                className={`mb-6 ${
                  isDark ? "text-dark-text2" : "text-light-text2"
                }`}
              >
                Thanks for reaching out! I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className={`text-sm font-medium ${
                  isDark ? "text-dark-accent" : "text-light-accent"
                }`}
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-1.5 ${
                    isDark ? "text-dark-text" : "text-light-text"
                  }`}
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your name"
                  className={inputClasses("name")}
                  required
                />
                {errors.name && touched.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-1.5 ${
                    isDark ? "text-dark-text" : "text-light-text"
                  }`}
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="you@example.com"
                  className={inputClasses("email")}
                  required
                />
                {errors.email && touched.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className={`block text-sm font-medium mb-1.5 ${
                    isDark ? "text-dark-text" : "text-light-text"
                  }`}
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="What's this about?"
                  className={inputClasses("subject")}
                  required
                />
                {errors.subject && touched.subject && (
                  <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-1.5 ${
                    isDark ? "text-dark-text" : "text-light-text"
                  }`}
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell me about your project or idea..."
                  className={`${inputClasses("message")} resize-y`}
                  required
                />
                {errors.message && touched.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed ${
                  isDark
                    ? "bg-dark-accent text-dark-bg hover:bg-dark-accent/90"
                    : "bg-light-accent text-white hover:bg-light-accent/90"
                }`}
              >
                {status === "submitting" ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </AnimatedSection>

        {/* Contact Info Sidebar */}
        <AnimatedSection delay={0.2}>
          <div className="space-y-6">
            <div
              className={`p-6 rounded-xl border ${
                isDark
                  ? "bg-dark-bg2 border-dark-border"
                  : "bg-light-bg2 border-light-border"
              }`}
            >
              <h3
                className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                  isDark ? "text-dark-text2" : "text-light-text2"
                }`}
              >
                Email
              </h3>
              <a
                href={`mailto:${portfolioData.personal.email === "[EMAIL]" ? "hello@example.com" : portfolioData.personal.email}`}
                className={`text-sm font-medium transition-colors ${
                  isDark
                    ? "text-dark-accent hover:text-dark-accent/80"
                    : "text-light-accent hover:text-light-accent/80"
                }`}
              >
                {portfolioData.personal.email === "[EMAIL]"
                  ? "hello@example.com"
                  : portfolioData.personal.email}
              </a>
            </div>

            <div
              className={`p-6 rounded-xl border ${
                isDark
                  ? "bg-dark-bg2 border-dark-border"
                  : "bg-light-bg2 border-light-border"
              }`}
            >
              <h3
                className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                  isDark ? "text-dark-text2" : "text-light-text2"
                }`}
              >
                Social
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href={portfolioData.social.github === "[GITHUB_URL]" ? "#" : portfolioData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm transition-colors ${
                    isDark
                      ? "text-dark-text2 hover:text-dark-accent"
                      : "text-light-text2 hover:text-light-accent"
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
                <a
                  href={portfolioData.social.linkedin === "[LINKEDIN_URL]" ? "#" : portfolioData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm transition-colors ${
                    isDark
                      ? "text-dark-text2 hover:text-dark-accent"
                      : "text-light-text2 hover:text-light-accent"
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  LinkedIn
                </a>
                <a
                  href={portfolioData.social.twitter === "[TWITTER_URL]" ? "#" : portfolioData.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm transition-colors ${
                    isDark
                      ? "text-dark-text2 hover:text-dark-accent"
                      : "text-light-text2 hover:text-light-accent"
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  Twitter / X
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
