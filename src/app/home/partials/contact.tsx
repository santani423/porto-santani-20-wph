'use client';

import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Checkbox } from 'radix-ui';
import { useState } from 'react';

const services = [
  'Web Development',
  'Cloud Solutions',
  'Mobile App Development',
  'Software Development',
  'UI/UX Design',
  'Other',
];

const fieldClass =
  'text-sm-regular text-neutral-25 w-full rounded-lg bg-neutral-900 px-4 outline-none placeholder:text-neutral-600 focus-visible:ring-1 focus-visible:ring-primary-300';

const Contact = () => {
  const [selected, setSelected] = useState<string[]>(['Web Development']);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (service: string, checked: boolean) =>
    setSelected((prev) => (checked ? [...prev, service] : prev.filter((s) => s !== service)));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // TODO: kirim ke backend / email service
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
      services: selected,
    });
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <Section
      title="Let's Build Something Great Together"
      subtitle="Have a project in mind? Fill out the form below, and our team will get back to you shortly"
      id="contact"
    >
      <form onSubmit={handleSubmit} className="mx-auto max-w-[41rem] space-y-5">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs-medium text-neutral-25">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Input your name"
            className={`${fieldClass} h-11`}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-xs-medium text-neutral-25">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Input your email"
            className={`${fieldClass} h-11`}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-xs-medium text-neutral-25">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Input your message"
            className={`${fieldClass} h-32 resize-none py-3`}
          />
        </div>

        <fieldset className="space-y-3">
          <legend className="text-xs-medium text-neutral-25 mb-3">Service</legend>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <label
                key={service}
                className="text-sm-regular text-neutral-25 flex cursor-pointer items-center gap-3"
              >
                <Checkbox.Root
                  checked={selected.includes(service)}
                  onCheckedChange={(checked) => toggle(service, checked === true)}
                  className="data-[state=checked]:bg-primary-300 data-[state=checked]:border-primary-300 flex size-4 shrink-0 items-center justify-center rounded-sm border border-neutral-700 outline-none"
                >
                  <Checkbox.Indicator>
                    <Check className="size-3 text-white" strokeWidth={3} />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                {service}
              </label>
            ))}
          </div>
        </fieldset>

        <Button type="submit" className="w-full">
          Send
        </Button>

        {submitted && (
          <p className="text-sm-regular text-primary-200 text-center">
            Thank you! Your message has been sent.
          </p>
        )}
      </form>
    </Section>
  );
};

export default Contact;
