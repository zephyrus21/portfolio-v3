'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Home() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.fromTo(
        '#intro',
        {
          y: '200%',
          opacity: 0,
        },
        {
          y: '0%',
          opacity: 1,
          duration: 2,
          ease: 'expo.out',
          display: 'block',
        }
      )
        .to('#intro', {
          y: '-300%',
          opacity: 0,
          duration: 2,
          ease: 'expo.in',
          display: 'hidden',
        })
        .to('#intro-slider', {
          y: '-100%',
          duration: 2,
          delay: -1,
          ease: 'power4.inOut',
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className='relative' ref={comp}>
      <div
        id='intro-slider'
        className='h-screen bg-neutral-900 absolute z-10 w-full flex justify-center place-items-center text-center'>
        <h1 id='intro' className='text-9xl font-medium text-gray-100 hidden'>
          Piyush Pandey
        </h1>
      </div>
      <div
        id='welcome'
        className='h-screen bg-gray-50 flex justify-center place-items-center text-center'>
        <h1 className='text-8xl'>Software Engineer</h1>
      </div>
    </div>
  );
}
