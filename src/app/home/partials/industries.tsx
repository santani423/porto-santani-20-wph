'use client';

import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';
import { industriesData } from '@/constant/industries-data';
import Image from 'next/image';
import { Tabs } from 'radix-ui';

const Industries = () => {
  return (
    <Section
      title="Tailored IT Solutions for Every Industry"
      subtitle="From finance to healthcare and retail, we provide cutting-edge technology solutions to drive efficiency, security, and growth in your industry"
      id="industries"
    >
      <Tabs.Root defaultValue={industriesData[0].value}>
        <Tabs.List className="flex border-b border-neutral-900">
          {industriesData.map((item) => (
            <Tabs.Trigger
              key={item.value}
              value={item.value}
              className="text-xs-medium md:text-sm-medium text-neutral-25 data-[state=active]:border-primary-300 data-[state=active]:text-primary-300 -mb-px flex-1 cursor-pointer border-b-2 border-transparent px-2 py-3 outline-none transition-colors"
            >
              {item.tab}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {industriesData.map((item) => (
          <Tabs.Content
            key={item.value}
            value={item.value}
            className="mt-8 flex flex-wrap items-center justify-between gap-8 md:mt-12 md:px-20"
          >
            <div className="flex-1 basis-80">
              <h3 className="display-sm-bold md:display-lg-bold text-neutral-25">{item.title}</h3>
              <p className="text-sm-regular md:text-md-regular mt-4 text-neutral-400 md:mt-6">
                {item.description}
              </p>
              <Button className="mt-6 px-10 md:mt-8">Detail</Button>
            </div>

            <Image
              width={360}
              height={340}
              alt={item.title}
              src={item.image}
              className="aspect-[360/340] w-full max-w-90 flex-1 basis-72 rounded-2xl object-cover"
            />
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Section>
  );
};

export default Industries;
