'use client';

import cn from '@/utils/cn';
import { useRef } from 'react';
import { services } from './data';
import ServiceSection from './service-section/ServiceSection';
import FadeInAndSlideUpOnViewAnimation from '@/components/common/animations/FadeInAndSlideUpOnViewAnimation';

interface ServiceProps {}

const Services: React.FC<ServiceProps> = ({}) => {
  return (
    <section>
      <div className="relative overflow-hidden bg-darkGray py-section md:py-section-lg">
        <div className="container mx-auto">
          <h2
            className={cn(
              'text-section-subtitle text-lightGray',
              'pb-[calc(96px/2)] md:pb-[calc(144px/2)]', // pb is half of the pt values
            )}
          >
            Services
          </h2>
        </div>
        <div className="container mx-auto flex grid grid-cols-2 gap-10 max-lg:grid-cols-1 max-lg:gap-y-8 lg:gap-x-10">
          <div className="service-container h-full">
            <div className="space-y-8">
              <FadeInAndSlideUpOnViewAnimation initial={{ y: 65 }} delay={0.02}>
                <h3 className="text-m">
                  <span className="text-m text-gray">1. </span>Brand Development
                </h3>
              </FadeInAndSlideUpOnViewAnimation>
              <FadeInAndSlideUpOnViewAnimation initial={{ y: 65 }} delay={0.1}>
                <p className="text-s">
                  Differentiate your brand from the competition, delivering a
                  unique experience for your audience. Strategy drives momentum,
                  deepens customer loyalty and enhances brand value.
                </p>
              </FadeInAndSlideUpOnViewAnimation>
            </div>
          </div>
          <div className="service-container">
            <div className="space-y-8">
              <FadeInAndSlideUpOnViewAnimation initial={{ y: 65 }} delay={0.02}>
                <h3 className="text-m">
                  <span className="text-m text-gray">1. </span>Brand Development
                </h3>
              </FadeInAndSlideUpOnViewAnimation>
              <FadeInAndSlideUpOnViewAnimation initial={{ y: 65 }} delay={0.1}>
                <p className="text-s">
                  Differentiate your brand from the competition, delivering a
                  unique experience for your audience. Strategy drives momentum,
                  deepens customer loyalty and enhances brand value.
                </p>
              </FadeInAndSlideUpOnViewAnimation>
            </div>
          </div>
          <div className="service-container">
            <div className="space-y-8">
              <FadeInAndSlideUpOnViewAnimation initial={{ y: 65 }} delay={0.02}>
                <h3 className="text-m">
                  <span className="text-m text-gray">1. </span>Brand Development
                </h3>
              </FadeInAndSlideUpOnViewAnimation>
              <FadeInAndSlideUpOnViewAnimation initial={{ y: 65 }} delay={0.1}>
                <p className="text-s">
                  Differentiate your brand from the competition, delivering a
                  unique experience for your audience. Strategy drives momentum,
                  deepens customer loyalty and enhances brand value.
                </p>
              </FadeInAndSlideUpOnViewAnimation>
            </div>
          </div>
          <div className="service-container">
            <div className="space-y-8">
              <FadeInAndSlideUpOnViewAnimation initial={{ y: 65 }} delay={0.02}>
                <h3 className="text-m">
                  <span className="text-m text-gray">1. </span>Brand Development
                </h3>
              </FadeInAndSlideUpOnViewAnimation>
              <FadeInAndSlideUpOnViewAnimation initial={{ y: 65 }} delay={0.1}>
                <p className="text-s">
                  Differentiate your brand from the competition, delivering a
                  unique experience for your audience. Strategy drives momentum,
                  deepens customer loyalty and enhances brand value.
                </p>
              </FadeInAndSlideUpOnViewAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
