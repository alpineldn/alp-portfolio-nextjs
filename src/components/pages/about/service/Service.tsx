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

          <div className="col-span-12 max-xl:pt-xs xl:col-span-4 xl:translate-y-[-2.5rem] mx-6">
            <h3 className="heading-m mb-xs text-lightGray">Brand Development</h3>

            <ul className="pb-[3.5rem] md:pb-[2.5rem]">
                <li className="text-spaced-sm border-gray border-t py-xs">
                    <span>Brand Strategy &amp; Positioning</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-xs">
                    <span>Visual Identity Creation</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-xs">
                    <span>Brand Naming &amp; Messaging</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-xs">
                    <span>Brand Guidelines &amp; Documentation</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-xs">
                    <span>Design Systems</span>
                  </li>
                
            </ul>
          </div>

          <div className="col-span-12 max-xl:pt-xs xl:col-span-4 xl:translate-y-[-2.5rem] mx-6">
            <h3 className="heading-m mb-xs text-lightGray">Design</h3>

            <ul className="pb-[3.5rem] md:pb-[2.5rem]">
                <li className="text-spaced-sm border-gray border-t py-xs">
                    <span>UI/UX Design</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-xs">
                    <span>Website & App Design</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-xs">
                    <span>Prototyping & Wireframing</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-xs">
                    <span>Graphic Design & Visual Assets</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-xs">
                    <span>Packaging & Print Design</span>
                  </li>
                
            </ul>
          </div>

          <div className="col-span-12 max-xl:pt-xs xl:col-span-4 xl:translate-y-[-2.5rem] mx-6">
            <h3 className="heading-m mb-xs text-lightGray">Development</h3>

            <ul className="pb-[3.5rem] md:pb-[2.5rem]">
                <li className="text-spaced-sm border-gray border-t py-xs">
                    <span>Web Development</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-xs">
                    <span>eCommerce Solutions</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-xs">
                    <span>Web & Mobile App Development</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-xs">
                    <span>CMS Implementation & Customization</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-xs">
                    <span>API Integration & Custom Software</span>
                  </li>
                
            </ul>
          </div>

          <div className="col-span-12 max-xl:pt-xs xl:col-span-4 xl:translate-y-[-2.5rem] mx-6">
            <h3 className="heading-m mb-xs text-lightGray">Digital Marketing</h3>

            <ul className="pb-[3.5rem] md:pb-[2.5rem]">
                <li className="text-spaced-sm border-gray border-t py-xs">
                    <span>SEO & SEM</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-xs">
                    <span>Social Media Marketing</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-xs">
                    <span>Content Strategy & Creation</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-xs">
                    <span>Email Marketing & Automation</span>
                  </li>
                  <li className="text-spaced-sm border-gray border-t py-xs">
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
