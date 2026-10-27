import { Section } from '@/components/layouts/section';
import PhasesAccordion, { PhasesAccordionItem } from '@/components/phases-accordion';
import { serviceProcessData } from '@/constant/services-process-data';

const ServicessProcess = () => {
  return (
    <Section
      title="How We Work"
      subtitle="A structured process to bring your ideas to life—seamless, efficient, and tailored to your needs"
      id="services-process"
    >
      <PhasesAccordion>
        {serviceProcessData.map((item, index) => (
          <PhasesAccordionItem key={index} {...item} />
        ))}
      </PhasesAccordion>
    </Section>
  );
};

export default ServicessProcess;
