'use client';

import { NextProject } from '@/app/(app)/work/[slug]/page';
import NextCase from './NextCase';

interface MoreWorksProps extends NextProject {}

const MoreWorks: React.FC<MoreWorksProps> = ({ mainImage, slug, title }) => {
  return (
    <section className="relative bg-[#141516] text-white">
      <div className="h-full w-full bg-[#141516]">
        <NextCase title={title} mainImage={mainImage} slug={slug} />
      </div>
    </section>
  );
};

export default MoreWorks;
