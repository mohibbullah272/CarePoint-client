import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the purpose of this medical camp?",
      answer: "Our medical camp aims to provide free health check-ups, treatments, and awareness about common diseases to the underprivileged.",
    },
    {
      question: "How can I register for the camp?",
      answer: "You can register for the camp by visiting our registration page or contacting us directly through the provided contact details.",
    },
    {
      question: "What services are offered at the camp?",
      answer: "We offer general health check-ups, dental care, eye tests, and basic treatments along with free medicine distribution.",
    },
    {
      question: "Who are the doctors in this camp?",
      answer: "The camp is staffed by certified doctors and specialists from reputed hospitals who volunteer their time for the cause.",
    },
    {
      question: "Is there any cost for attending the camp?",
      answer: "No, all services provided at the medical camp are completely free of cost.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#f7f7f7] text-[#0d0e0e] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center text-[#1a1a1a]"
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-4 rounded-lg shadow-md overflow-hidden"
            >
              <div
                role="button"
                tabIndex={0}
                className="flex justify-between items-center p-5 bg-white hover:bg-[#f9fafb] transition-colors duration-200 cursor-pointer"
                onClick={() => toggleAccordion(index)}
                onKeyPress={(e) => e.key === 'Enter' && toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-[#1a1a1a]">{faq.question}</h3>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  className="text-[#7e9695] text-2xl font-bold"
                >
                  +
                </motion.span>
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-5 bg-[#f9fafb] border-t border-gray-200 text-[#0d0e0e]"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQAccordion;