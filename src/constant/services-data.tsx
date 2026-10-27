import Image from 'next/image';
import React from 'react';

type ServiceItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const servicesData: ServiceItem[] = [
  {
    icon: (
      <Image src="/icons/icon-web-development.png" alt="" width={20} height={20} />
    ),
    title: 'Web Development',
    description:
      'We build fast, secure, and user-friendly websites to boost your online presence.',
  },
  {
    icon: (
      <Image src="/icons/icon-mobile-app-development.png" alt="" width={20} height={20} />
    ),
    title: 'Mobile App Development',
    description:
      'We create smooth, feature-rich mobile apps optimized for user experience.',
  },
  {
    icon: <Image src="/icons/icon-ui-ux-design.png" alt="" width={20} height={20} />,
    title: 'UI/UX Design',
    description:
      'We craft beautiful and user-friendly interfaces to enhance customer experience.',
  },
  {
    icon: <Image src="/icons/icon-cloud-solutions.png" alt="" width={20} height={20} />,
    title: 'Cloud Solutions',
    description: 'Optimize efficiency with flexible and cost-effective cloud solutions.',
  },
  {
    icon: <Image src="/icons/icon-software-development.png" alt="" width={20} height={20} />,
    title: 'Software Development',
    description: 'We develop innovative, scalable, and tailored software solutions.',
  },
  {
    icon: <Image src="/icons/icon-it-infrastructure.png" alt="" width={20} height={20} />,
    title: 'IT Infrastructure',
    description:
      'Improve system performance with DevOps, CI/CD, and optimized infrastructure.',
  },
  {
    icon: <Image src="/icons/icon-cybersecurity-services.png" alt="" width={20} height={20} />,
    title: 'Cybersecurity Services',
    description: 'We provide reliable security solutions to safeguard your data and systems.',
  },
  {
    icon: <Image src="/icons/icon-ai-solutions.png" alt="" width={20} height={20} />,
    title: 'AI Solutions',
    description: 'Leverage AI and big data to drive business growth and insights.',
  },
  {
    icon: <Image src="/icons/icon-it-consulting-support.png" alt="" width={20} height={20} />,
    title: 'IT Consulting & Support',
    description:
      'We help businesses optimize technology with strategic consulting and reliable support.',
  },
];
