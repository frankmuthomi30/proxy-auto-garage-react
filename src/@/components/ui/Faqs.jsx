import React from 'react';

const faqs = [
  {
    id: 1,
    question: 'How can I schedule a car service?',
    answer: 'You can schedule a car service by visiting our website and filling out the appointment form. Alternatively, you can call our service center to book an appointment.',
  },
  {
    id: 2,
    question: 'What types of services do you offer?',
    answer: 'We offer a wide range of automotive services, including regular maintenance, repairs, inspections, and more. Check our Services page for a detailed list.',
  },
  {
    id: 3,
    question: 'Are your mechanics certified?',
    answer: 'Yes, all our mechanics are certified professionals with extensive experience and expertise in automotive repair and maintenance.',
  },
  // Add more FAQs as needed
];

const FAQs = () => {
  return (
    <div className="bg-gray-100 py-8 md:py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-8">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white p-8 md:p-6 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
