'use client';

import { useStore } from '@/store/store';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

interface PrivacyPolicyProps {}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({}) => {
  const { setShowMenuButton } = useStore((store) => store);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 150) setShowMenuButton(true);
      else setShowMenuButton(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container mx-auto pt-sm">
      <div>
        <Image
          className="aspect-video max-h-[500px] rounded-lg object-cover"
          width={1920}
          height={500}
          alt="flower"
          src="/images/flowers.jpg"
        />
      </div>
      <div>
        <h1 className="heading-xl pt-sm">Privacy policy</h1>
        <p>Effective Date: 04.07.2024</p>
      </div>
      <section className="mx-auto max-w-none">
        This Privacy Policy explains how Alpine collects, uses, and discloses
        information about you when you visit our website alpineldn.com (the
        "Site"). We are committed to protecting your privacy and complying with
        the General Data Protection Regulation (GDPR).
        <div>
          <h2>Information We Collect</h2>
          <p>
            We may collect the following types of information about you when you
            visit the Site:
          </p>
          <ul>
            <li>
              Personal Information: This includes information that can identify
              you, such as your name, email address, and any other information
              you voluntarily provide to us.
            </li>
            <li>
              Usage Data: This includes information about how you use the Site,
              such as the pages you visit, the links you click, and the time you
              spend on each page.
            </li>
            <li>
              Technical Data: This includes information about your device,
              browser, and internet connection, such as your IP address,
              operating system, and device type.
            </li>
          </ul>
        </div>
        <div>
          <h2> How We Use Your Information</h2>
          <p>We may use your information for the following purposes:</p>
          <ul>
            <li>To provide and maintain the Site.</li>
            <li>
              To analyze your use of the Site and improve its content and
              functionality.
            </li>
            <li>To personalize your experience on the Site.</li>
            <li>
              To communicate with you, such as to respond to your inquiries or
              send you newsletters.
            </li>
            <li>To comply with legal obligations.</li>
          </ul>
        </div>
        <div>
          <h2>Google Analytics</h2>
          <p>
            We use Google Analytics, a web analytics service provided by Google,
            to collect information about how you use the Site. Google Analytics
            uses cookies, which are small text files placed on your device, to
            help us analyze how visitors use the Site. The information generated
            by the cookie about your use of the Site (including your IP address)
            will be transmitted to and stored by Google on servers in the United
            States. Google will use this information for the purpose of
            evaluating your use of the Site, compiling reports on website
            activity for us, and providing other services relating to website
            activity and internet usage.
          </p>
        </div>
        <div>
          <h2>Your Rights</h2>
          <p>You have the following rights under the GDPR:</p>
          <ul>
            <li>The right to access your personal information.</li>
            <li>The right to rectify inaccurate personal information.</li>
            <li>The right to erase your personal information.</li>
            <li>
              The right to restrict the processing of your personal information.
            </li>
            <li>The right to data portability.</li>
            <li>
              The right to object to the processing of your personal
              information.
            </li>
            <li>The right to withdraw your consent at any time.</li>
          </ul>
          <p>
            To exercise your rights, please contact us at studio@alpineldn.com.
          </p>
        </div>
        <div>
          <h2> Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on the Site.
            You are advised to review this Privacy Policy periodically for any
            changes.
          </p>
        </div>
        <div>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at studio@alpineldn.com.
          </p>
        </div>
      </section>
    </div>
  );
};
export default PrivacyPolicy;
