import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ = () => {
  const faqs = [
    {
      question: "Test Question",
      answer: "What makes this platform better than a traditional marketing agency."
    },
    { question: "Test Question", answer: "What makes this platform better than a traditional marketing agency." },
    { question: "Test Question", answer: "What makes this platform better than a traditional marketing agency." },
    { question: "Test Question", answer: "What makes this platform better than a traditional marketing agency." },
    { question: "Test Question", answer: "What makes this platform better than a traditional marketing agency." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-aloevera font-bold text-center mb-16">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#161729] rounded-lg">
            <div
              className="flex items-center justify-between p-6 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-base font-semibold font-aloevera">{faq.question}</h3>
              <button className="text-gray-400 hover:text-white">
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-white" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-white" />
                )}
              </button>
            </div>
            {openIndex === index && (
              <div className="px-6 pb-6">
                <p className="text-gray-300 text-sm font-aloevera-light">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};