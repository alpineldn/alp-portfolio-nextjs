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
    <div className="prose-invert prose mx-auto max-w-screen-xl px-5 pb-[100px]">
      <div>
        <Image
          className="aspect-video max-h-[500px] rounded-lg object-cover"
          width={1920}
          height={500}
          alt="flower"
          src="/images/flowers.jpg"
        />
      </div>
      <section>
        <h1>Privacy policy</h1>
        <div>Last updated on November 2, 2021</div>
      </section>
      <section>
        This privacy policy ("Policy") describes how Tailwind Labs Inc.
        ("Tailwind", "we", "us" or "our") collects, protects and uses the
        personally identifiable information ("Personal Information") you
        ("User", "you" or "your") may provide through the Tailwind UI website
        (tailwindui.com) or in the course of purchasing any Tailwind UI products
        (collectively, "Website"). The Policy also describes the choices
        available to you regarding our use of your Personal Information and how
        you can access and update this information. This Policy does not apply
        to the practices of companies that we do not own or control, or to
        individuals that we do not employ or manage.
        <div>
          <h2>Collection of personal information</h2>
          <p>
            We receive and store any information you knowingly provide to us
            when you make a purchase through the Website. Currently this is
            limited to your email address, which is required for you to be able
            to login to the Website and access any purchased Tailwind UI
            products.
          </p>
        </div>
        <div>
          <h2>Collection of non-personal information</h2>
          <p>
            When you visit the Website our servers automatically record
            information that your browser sends. This data may include
            information such as your device's IP address, browser type and
            version, operating system type and version, language preferences or
            the webpage you were visiting before you came to our Website, pages
            of our Website that you visit, the time spent on those pages,
            information you search for on our Website, access times and dates,
            and other statistics.
          </p>
        </div>
        <div>
          <h2>Purchases</h2>
          <p>
            All purchases made through the Website are processed by a third
            party payment processor, Paddle <Link href="/">(paddle.com)</Link>.
            Paddle may ask you for personal and/or non-personal information,
            such as your name, address, email address, credit card information,
            or other Personal Information. Paddle has a privacy policy
            <Link href="/">(paddle.com/legal-buyers/)</Link> that describes
            their collection and use of personal information. Tailwind does not
            control Paddle or its collection or use of information. Any
            questions or concerns about Paddle’s practices should be directed to
            Paddle. Paddle provides us with certain non-personal information
            relating to purchases made by visitors to the Website. The
            non-personal information may include details of the purchase such as
            the date, amount paid, and product purchased. The non-personal
            purchase information may be linked to the Personal Information you
            provide to us (typically limited to your email address, as stated
            above). Paddle does not supply us with any of your other Personal
            Information such as your name, street address, or credit card
            information.
          </p>
        </div>{' '}
        <div>
          <h2>Managing personal information</h2>
          <p>
            You are able to update your Personal Information in your "Account
            Settings" on the Website. Currently this is limited to just your
            email address, as described above. You may also request that we
            delete your email address, but this will prevent you from accessing
            the products you have purchased from Tailwind. When you update
            information, we may maintain a copy of the unrevised information in
            our records. Some information may remain in our private records
            after deletion of such information from your account for a retention
            period. Once the retention period expires, Personal Information
            shall be deleted. Therefore, the right to access, the right to
            erasure, your rights to access, add to, and update your information
            cannot be enforced after the expiration of the retention period. We
            will retain and use your information as necessary to comply with our
            legal obligations, resolve disputes, and enforce our agreements. We
            may use any aggregated data derived from or incorporating your
            Personal Information after you update or delete it, but not in a
            manner that would identify you personally.
          </p>
        </div>
        <div>
          <h2>Collection of personal information</h2>
          <p>
            We receive and store any information you knowingly provide to us
            when you make a purchase through the Website. Currently this is
            limited to your email address, which is required for you to be able
            to login to the Website and access any purchased Tailwind UI
            products.
          </p>
          <ul>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default PrivacyPolicy;
