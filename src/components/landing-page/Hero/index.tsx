'use client';

import Image from 'next/image';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const heroText = useRef<HTMLHeadingElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  let xPercent = 0;
  let yPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: '-500px',
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  const animateHeroText = () => {
    if (yPercent < -100) {
      yPercent = 0;
    } else if (yPercent > 0) {
      yPercent = -100;
    }
    gsap.set(heroText.current, { yPercent: yPercent });
    gsap.set(heroText.current, { yPercent: yPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="enter"
      className="relative flex h-screen overflow-hidden"
    >
      {/* <video
        autoPlay
        loop
        muted
        className="absolute h-full w-full object-cover"
      >
        <source src="/images/mountains_video.mp4" type="video/mp4" />
      </video> */}
      <Image
        priority
        className="object-cover"
        src="/images/background.jpg"
        fill={true}
        alt="background"
      />

      <div className="flex h-screen flex-col justify-center max-lg:px-5 lg:max-w-7xl lg:pl-[8vw]">
        <h1
          ref={heroText}
          className="relative m-0 hidden text-[clamp(3.5rem,5.5vw+1rem,7.5rem)] font-medium leading-[1.2] text-white sm:block"
        >
          Brand + Digital Design Studio
        </h1>
      </div>
      <div className="absolute top-[calc(100vh-500px)] sm:top-[calc(100vh-350px)]">
        <div ref={slider} className="relative whitespace-nowrap">
          <p
            ref={firstText}
            className="relative m-0 p-[50px] text-[clamp(6.5rem,11vw+1rem,13rem)] font-medium text-white"
          >
            Brand + Digital Design Studio
          </p>
          <p
            ref={secondText}
            className="absolute left-full top-0 m-0 p-[50px] text-[clamp(6.5rem,11vw+1rem,13rem)] font-medium text-white"
          >
            Brand + Digital Design Studio
          </p>
        </div>
      </div>
      <div
        data-scroll
        data-scroll-speed={0.1}
        className="absolute bottom-[10%] text-lg font-light text-white max-sm:px-5 sm:left-[65%] sm:top-[35%]"
      >
        {/* <svg
          className="mb-[100px] scale-[2]"
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
            fill="white"
          />
        </svg> */}
        <h1
          ref={heroText}
          className="relative m-0 pb-5 text-4xl font-medium leading-[1.2] text-white sm:hidden"
        >
          Brand + Digital Design Studio
        </h1>
        <p className="m-0 mb-[10px]">Born in London, working Globally</p>
        {/* <p className="m-0 mb-[10px]">Designer & Developer</p> */}
      </div>
    </motion.div>
  );
};

export default Hero;
