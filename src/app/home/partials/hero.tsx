import FeatureCard from '@/components/feature-card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import SkewMotion from '@/components/skew-motion';

const Hero = () => {
  return (
    <section className="custom-container items-center gap-7 overflow-hidden flex flex-wrap pt-28 md:pt-36.75">
      {/* kiri */}
      <div className="flex-[5.3] basis-80">
        <h1 className="md:text-display-2xl text-display-lg font-bold text-neutral-25">
          Your Trusted IT <span className="text-primary-300">Partner for Digital</span> Success
        </h1>

        <p className="text-sm font-regular md:text-md mt-3 text-neutral-400">
          We craft custom IT solutions that align with your goals, ensuring efficiency, security,
          and innovation
        </p>

        <Button asChild className="mt-6 w-full md:mt-12 md:w-fit ">
          <Link href="#contact">Get Started</Link>
        </Button>
      </div>

      {/* kanan */}
      <div
        className="relative flex-[4.7] basis-80"
        style={{ height: 'clamp(21.25rem, 52.73vw, 39.81rem)' }}
      >
        <SkewMotion asChild>
          <Image alt="hero-image" className="object-contain" fill src="/images/hero-image.png" />
        </SkewMotion>

        <FeatureCard
          icon={<Icon icon="mingcute:flash-fill" />}
          title="Elite Solutions"
          description="Cutting-edge tech, flawless execution"
          className="absolute -translate-x-[6.25%] top-[10%] right-1/2"
        />

        <FeatureCard
          icon={<Icon icon="ri:brain-fill" />}
          title="Smart Tech"
          description="Innovation that drives real growth."
          className="absolute top-[43%] left-1/2 translate-x-[37.5%]"
        />

        <FeatureCard
          className="absolute top-[49%] right-1/2 -translate-x-[48%]"
          title="Real Impact"
          description="We turn ideas into measurable success"
          icon={<Icon icon="bi:bar-chart-fill" />}
        />
      </div>

      {/* decoration */}

      <div className="from-base-background absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t to-transparent" />
    </section>
  );
};

export default Hero;
