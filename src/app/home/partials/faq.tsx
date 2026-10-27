import { Section } from '@/components/layouts/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqData } from '@/constant/faq-data';

const Faq = () => {
  return (
    <Section
      title="Got Questions? We've Got Answers!"
      subtitle="We've compiled answers to the most common questions to help you understand our services better"
      id="faq"
    >
      <Accordion
        type="single"
        collapsible
        defaultValue="faq-0"
        className="mx-auto max-w-[53rem]"
      >
        {faqData.map((item, index) => (
          <AccordionItem
            key={item.question}
            value={`faq-${index}`}
            className="mb-3 md:mb-4 md:rounded-3xl md:py-5"
          >
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

export default Faq;
