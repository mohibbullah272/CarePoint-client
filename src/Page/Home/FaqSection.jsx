import React, { useState } from 'react';

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
      answer: "Yes, all services provided at the medical camp are completely take cost.",
    },
  ];

  return (
    <div className="bg-[#F3F9F4] text-[#0A192F] min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center ">Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className="card p-4 flex justify-between items-center cursor-pointer bg-white border border-[#CBD5E1] rounded-lg shadow-md"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-semibold text-[#1E3A8A]">{faq.question}</h3>
              <span className="text-[#0284C7] text-xl font-bold">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="p-4 bg-[#F9FAFB] border-l-4 border-[#0284C7]  rounded-b-lg">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
