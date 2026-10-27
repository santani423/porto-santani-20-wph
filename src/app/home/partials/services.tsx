import { Section } from '@/components/layouts/section';
import { servicesData } from '@/constant/services-data';

const Services = () => {
  return (
    <Section
      title="Innovative IT Solutions for Your Business Growth"
      subtitle="We provide tailored, high-performance technology solutions to streamline operations, enhance security, and drive success."
      id="services"
    >
      <div className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {servicesData.map((service) => (
          <div
            key={service.title}
            className="rounded-xl border border-neutral-900 bg-neutral-950 p-6 text-center"
          >
            <div className="bg-primary-300 mx-auto flex size-10 items-center justify-center rounded-full text-white shadow-[0_0_17px_rgba(0,147,221,0.6)] [&>svg]:size-5">
              {service.icon}
            </div>
            <h3 className="text-md-semibold md:text-lg-semibold text-neutral-25 mt-4">
              {service.title}
            </h3>
            <p className="text-sm-regular mt-2 text-neutral-400">{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
