'use client';

import LinkEl from '@/components/common/ui/LinkEl';
import zeroPad from '@/utils/zero-pad';
import Image from 'next/image';

interface ServiceProps {}

const Service: React.FC<ServiceProps> = ({}) => {
  return (
    <section>
      <div className="container mx-auto border-t border-white/50 py-sm">
        
        <div className="grid grid-cols-12">

          <div className="col-span-12 max-xl:pt-xs xl:col-span-3 xl:translate-y-[-2.5rem] mx-6">
            <h3 className="heading-m mb-xs text-lightGray">Brand Development</h3>

            <ul className="pb-[3.5rem] md:pb-[2.5rem]">
                <li className="text-spaced-sm border-gray border-t py-4">
                    <span>Brand Strategy &amp; Positioning</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-4">
                    <span>Visual Identity Creation</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-4">
                    <span>Brand Naming &amp; Messaging</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-4">
                    <span>Brand Guidelines &amp; Documentation</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-4">
                    <span>Design Systems</span>
                  </li>
                
            </ul>
          </div>

          <div className="col-span-12 max-xl:pt-xs xl:col-span-3 xl:translate-y-[-2.5rem] mx-6">
            <h3 className="heading-m mb-xs text-lightGray">Design</h3>

            <ul className="pb-[3.5rem] md:pb-[2.5rem]">
                <li className="text-spaced-sm border-gray border-t py-4">
                    <span>UI/UX Design</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-4">
                    <span>Website & App Design</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-4">
                    <span>Prototyping & Wireframing</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-4">
                    <span>Graphic Design & Visual Assets</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-4">
                    <span>Packaging & Print Design</span>
                  </li>
                
            </ul>
          </div>

          <div className="col-span-12 max-xl:pt-xs xl:col-span-3 xl:translate-y-[-2.5rem] mx-6">
            <h3 className="heading-m mb-xs text-lightGray">Development</h3>

            <ul className="pb-[3.5rem] md:pb-[2.5rem]">
                <li className="text-spaced-sm border-gray border-t py-4">
                    <span>Web Development</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-4">
                    <span>eCommerce Solutions</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-4">
                    <span>Web & Mobile App Development</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-4">
                    <span>CMS Implementation & Customization</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-4">
                    <span>API Integration & Custom Software</span>
                  </li>
                
            </ul>
          </div>

          <div className="col-span-12 max-xl:pt-xs xl:col-span-3 xl:translate-y-[-2.5rem] mx-6">
            <h3 className="heading-m mb-xs text-lightGray">Digital Marketing</h3>

            <ul className="pb-[3.5rem] md:pb-[2.5rem]">
                <li className="text-spaced-sm border-gray border-t py-4">
                    <span>SEO & SEM</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-4">
                    <span>Social Media Marketing</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-4">
                    <span>Content Strategy & Creation</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-4">
                    <span>Email Marketing & Automation</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-4">
                    <span>Paid Media & Campaign Management</span>
                  </li>
                
            </ul>
          </div>

        </div>
      </div>
    </section>
    
  );
};

export default Service;
