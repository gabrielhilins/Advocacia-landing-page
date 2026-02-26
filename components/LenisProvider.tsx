"use client"

import Lenis from 'lenis'
import { useEffect } from 'react'

// Define a local interface to satisfy TypeScript regarding LenisOptions
interface LenisOptions {
  duration: number;
  easing: (t: number) => number;
  direction: 'vertical' | 'horizontal';
  gestureDirection: 'vertical' | 'horizontal' | 'both';
  smoothWheel: boolean;
  mouseMultiplier: number;
  smoothTouch: boolean;
  touchMultiplier: number;
  infinite: boolean;
}

export default function LenisProvider({ children }: { children: React.ReactNode }) { // Added type for children
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4emx
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smoothWheel: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    } as LenisOptions); // Cast to local LenisOptions to satisfy TS

    function raf(time: number) { // Added type for time parameter
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {children}
    </>
  );
}
