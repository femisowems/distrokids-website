"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import { faqItems } from "@/data/distrokid-data";

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const featuredQuestions = useMemo(
    () => faqItems.filter((item) => item.featured).slice(0, 3),
    []
  );

  const featuredQuestionSet = useMemo(
    () => new Set(featuredQuestions.map((item) => item.question)),
    [featuredQuestions]
  );

  const standardQuestions = useMemo(() => {
    const remaining = faqItems.filter(
      (item) => !featuredQuestionSet.has(item.question)
    );

    return remaining.length > 0 ? remaining : faqItems;
  }, [featuredQuestionSet]);

  return (
    <section
      id="faq"
      className="relative w-full px-6 py-24 md:px-12 lg:px-24 bg-bg-dark border-t border-black/10 dark:border-white/5"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_45%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mb-12 text-left">
          <span className="mb-3 block font-mono text-xs uppercase tracking-[0.2em] text-electric-blue">
            Support
          </span>
          <h2 className="max-w-[14ch] text-[9vw] font-black uppercase leading-[0.88] tracking-tight sm:text-[6vw] lg:text-[3.7vw]">
            Answers Before
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-purple">
              You Need Support
            </span>
          </h2>
        </div>

        {featuredQuestions.length > 0 && (
          <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {featuredQuestions.map((item, index) => (
              <motion.article
                key={item.question}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm"
              >
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
                  Most Asked
                </p>
                <h3 className="mb-3 text-base font-semibold text-foreground">{item.question}</h3>
                <p className="text-sm leading-relaxed text-white/60">{item.answer}</p>
              </motion.article>
            ))}
          </div>
        )}

        <div className="rounded-2xl border border-white/5 bg-white/5 p-3 md:p-4">
          {standardQuestions.map((item) => {
            const isOpen = openQuestion === item.question;

            return (
              <div key={item.question} className="border-b border-white/5 last:border-b-0">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-5 px-3 py-5 text-left"
                  onClick={() =>
                    setOpenQuestion((current) =>
                      current === item.question ? null : item.question
                    )
                  }
                >
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-foreground">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-white/60 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-3 pb-5 text-sm leading-relaxed text-white/60">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
