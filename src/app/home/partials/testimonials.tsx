'use client';

import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';
import { testimonialsData } from '@/constant/testimonials-data';
import { cn } from 'cn';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useEffect, useRef } from 'react';

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2);

const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const pausedRef = useRef(false);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 20 : track.clientWidth;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    const atStart = track.scrollLeft <= 4;

    if (direction === 1 && atEnd) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (direction === -1 && atStart) {
      track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: direction * step, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pausedRef.current) scroll(1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section
      title="What Our Clients Say"
      subtitle="Real stories from businesses that have transformed with our IT solutions."
      id="testimonials"
    >
      <div
        ref={trackRef}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonialsData.map((item) => (
          <div
            key={item.name}
            className="w-full shrink-0 snap-start rounded-xl border border-neutral-900 bg-neutral-950 p-5 md:w-[calc((100%-2.5rem)/3)] md:min-w-72"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={cn(
                    'size-4',
                    index < item.rating
                      ? 'fill-amber-400 text-amber-400'
                      : 'fill-neutral-800 text-neutral-800'
                  )}
                />
              ))}
            </div>
            <p className="text-sm-regular text-neutral-25 mt-4">{item.quote}</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="text-sm-semibold text-neutral-25 flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-800">
                {getInitials(item.name)}
              </div>
              <div>
                <p className="text-sm-semibold text-neutral-25">{item.name}</p>
                <p className="text-sm-regular text-neutral-400">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-3 md:mt-8">
        <Button variant="outline" size="icon" aria-label="Previous" onClick={() => scroll(-1)}>
          <ChevronLeft className="size-5 text-neutral-400" />
        </Button>
        <Button variant="outline" size="icon" aria-label="Next" onClick={() => scroll(1)}>
          <ChevronRight className="text-neutral-25 size-5" />
        </Button>
      </div>
    </Section>
  );
};

export default Testimonials;
