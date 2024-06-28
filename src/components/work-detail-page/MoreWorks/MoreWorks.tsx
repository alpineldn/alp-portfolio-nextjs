'use client';

import RoundedButton from '@/components/common/ui/RoundedButton';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { NextProject } from '@/app/(app)/work/[slug]/page';
import ContactInfo from '../../common/ContactInfoLinks/ContactInfo';
import NextCase from './NextCase';

interface MoreWorksProps extends NextProject {}

const MoreWorks: React.FC<MoreWorksProps> = ({ mainImage, slug, title }) => {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <motion.section
      style={{ y }}
      ref={container}
      className="relative flex flex-col items-center justify-center bg-[#141516] text-white"
    >
      <div className="container w-full bg-[#141516] pt-[400px] md:pt-[200px]">
        <NextCase title={title} mainImage={mainImage} slug={slug} />

        <div className="mt-20 flex items-center justify-center">
          <Link href="/work">
            <RoundedButton backgroundColor="#334BD3">
              <p>All Work</p>
            </RoundedButton>
          </Link>
        </div>

        <ContactInfo />
      </div>
    </motion.section>
  );
};

export default MoreWorks;
