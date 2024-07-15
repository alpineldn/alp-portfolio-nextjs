'use client';
import { motion } from 'framer-motion';
import ContactInfo from '../common/contact-info-links/ContactInfo';
import UnderlineLink from '../common/ui/UnderlineLink';
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroText1Ref = useRef<HTMLHeadingElement>(null);
  const heroText2Ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (!containerRef?.current) return;

      gsap.registerPlugin(ScrollTrigger);

      const emailEl =
        containerRef.current.querySelector<HTMLDivElement>('#contact-cta');
      const infoEl =
        containerRef.current.querySelector<HTMLDivElement>('#info');

      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: 'power4.inOut',
        },
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: '12.5% bottom',
        onEnter: () => {
          tl.to(heroText1Ref.current, {
            y: 0,
            opacity: 1,
          })
            .to(
              heroText2Ref.current,
              {
                y: 0,
                opacity: 1,
              },
              '-=0.6',
            )
            .to(
              emailEl,
              {
                y: 0,
                opacity: 1,
              },
              '-=0.6',
            )
            .to(
              infoEl,
              {
                y: 0,
                opacity: 1,
              },
              '-=0.6',
            );
        },
      });
    });

    return () => context.revert();
  }, [containerRef]);

  return (
    <motion.section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-dark to-black/90 text-light"
    >
      <div className="container w-full pt-[100px]">
        <div className="relative border-b border-solid border-b-[rgb(134,134,134)]/50 pb-[100px]">
          <span className="flex items-center">
            <h2 ref={heroText1Ref} className="h2 translate-y-[25px] opacity-0">
              Let's work
            </h2>
          </span>
          <h2 ref={heroText2Ref} className="h2 translate-y-[25px] opacity-0">
            together
          </h2>
        </div>

        <CTAs />
        <ContactInfo id="info" className="translate-y-[25px] opacity-0" />
      </div>
    </motion.section>
  );
};

export default Contact;

const CTAs = () => {
  return (
    <div
      id="contact-cta"
      className="mt-[120px] flex translate-y-[25px] gap-5 opacity-0 max-lg:flex max-lg:flex-col md:mt-[100px]"
    >
      <UnderlineLink
        className="h4 interactable"
        href="mailto:info@dennissnellenberg.com"
      >
        info@dennissnellenberg.com
      </UnderlineLink>
    </div>
  );
};
