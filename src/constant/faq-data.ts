type FaqItem = {
  question: string;
  answer: string;
};

export const faqData: FaqItem[] = [
  {
    question: 'What services do you offer?',
    answer:
      "We provide end-to-end IT solutions, including web & mobile app development, cloud solutions, cybersecurity, AI & data analytics, and IT consulting. Whether you need a custom-built platform or infrastructure optimization, we've got you covered.",
  },
  {
    question: 'How do you ensure the quality of your solutions?',
    answer:
      'We follow industry best practices, agile methodologies, and rigorous testing to ensure high-quality, secure, and scalable solutions. Our team continuously improves and optimizes based on feedback and performance analytics.',
  },
  {
    question: 'How long does it take to complete a project?',
    answer:
      'It depends on the complexity and scope of the project. Small projects may take a few weeks, while larger enterprise solutions can take several months. We provide a detailed project timeline during the consultation phase.',
  },
  {
    question: 'What industries do you serve?',
    answer:
      'We work across various industries, including finance, healthcare, e-commerce, retail, and technology startups. Our solutions are tailored to meet the unique challenges and opportunities of each sector.',
  },
  {
    question: 'How can we start working together?',
    answer:
      "It's simple! Just contact us through our website or email, and we'll schedule a consultation to discuss your needs, propose a tailored solution, and outline the next steps.",
  },
];
