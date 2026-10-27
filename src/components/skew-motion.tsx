'use client';
import { HTMLMotionProps, motion } from 'motion/react';
import { Slot } from 'radix-ui/slot';

interface SkewMotionProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  asChild: boolean;
}

const MotionSlot = motion.create(Slot);
const MotionDiv = motion.div;

const SkewMotion: React.FC<SkewMotionProps> = ({
  children,
  duration = 1,
  delay = 0,
  asChild = false,
  ...motionProps
}) => {
  const Comp = asChild ? MotionSlot : MotionDiv;
  return (
    <Comp transition={{ duration, delay }} animate={{ skewX: -7 }} {...motionProps}>
      {children}
    </Comp>
  );
};

export default SkewMotion;
