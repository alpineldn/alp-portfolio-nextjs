import gsap from 'gsap';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const animatePageIn = (
  delay: number,
  firstVisit: boolean,
  setFirstVisit: () => void,
) => {
  const loadingBanner = document.getElementById('loading-banner-1');
  const pageNameText = loadingBanner?.querySelector('#page-name');

  if (!!loadingBanner) {
    const tl = gsap.timeline({
      defaults: {
        ease: 'power4.inOut',
      },
    });

    tl.set(loadingBanner, {
      yPercent: 0,
    }).to(loadingBanner, {
      delay: delay,
      yPercent: 100,
      duration: 1.5,
      onComplete: () => {
        document.body.style.cursor = 'default';
        // window.scrollTo(0, 0);
        setFirstVisit();
      },
    });

    if (!firstVisit && !!pageNameText) {
      tl.to(pageNameText, { opacity: 1 }, 0).to(
        pageNameText,
        { opacity: 0 },
        '-=0.8',
      );
    }
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const loadingBanner = document.getElementById('loading-banner-1');
  const pageNameText = loadingBanner?.querySelector('#page-name');

  if (!!loadingBanner) {
    const tl = gsap.timeline({
      defaults: {
        ease: 'power4.inOut',
      },
    });

    tl.set([loadingBanner], {
      yPercent: 100,
    }).to(loadingBanner, {
      duration: 1,
      yPercent: 0,
      onComplete: () => {
        gsap.to(pageNameText as HTMLParagraphElement, { opacity: 0 });
        router.push(href);
      },
    });
  }
};
