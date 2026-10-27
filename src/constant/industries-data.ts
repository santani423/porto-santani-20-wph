type IndustryItem = {
  value: string;
  tab: string;
  title: string;
  description: string;
  image: string;
};

export const industriesData: IndustryItem[] = [
  {
    value: 'finance',
    tab: 'Finance & FinTech',
    title: 'Secure & Scalable Financial Solutions',
    description:
      'We help financial institutions with secure, data-driven, and compliant technology solutions to enhance transactions and customer experiences',
    image: '/images/industry-finance.jpg',
  },
  {
    value: 'healthcare',
    tab: 'Healthcare',
    title: 'Innovative Tech for Better Healthcare',
    description:
      'We build HIPAA-compliant, AI-powered healthcare solutions for better patient care, data management, and operational efficiency',
    image: '/images/industry-healthcare.jpg',
  },
  {
    value: 'ecommerce',
    tab: 'E-commerce',
    title: 'Seamless Shopping & Smart Retail Tech',
    description:
      'Enhance customer experience and streamline operations with AI-powered e-commerce platforms, smart inventory systems, and payment solutions',
    image: '/images/industry-ecommerce.jpg',
  },
];
