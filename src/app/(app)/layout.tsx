import SmoothScroll from '@/components/common/smooth-scrool/SmoothScroll';
import Header from '@/components/header';
import MouseTrailer from '@/components/mouse-trailer/MouseTrailer';
import cn from '@/utils/cn';
import localFont from 'next/font/local';
import './globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

const ppNeueMontreal = localFont({
  src: [
    {
      path: '../../../public/fonts/neue-montreal/PPNeueMontreal-Variable.woff2',
      weight: '100 900',
    },
    {
      path: '../../../public/fonts/neue-montreal/PPNeueMontreal-Variable.woff',
      weight: '100 900',
    },
    {
      path: '../../../public/fonts/neue-montreal/PPNeueMontreal-Variable.ttf',
      weight: '100 900',
    },
  ],
  variable: '--font-ppneuemontreal',
});

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn(ppNeueMontreal.variable, 'font-ppneuemontreal')}>
        <SmoothScroll>
          <MouseTrailer />
          <Header />
          {children}
        </SmoothScroll>
        <div className="bg-gradient-to-r from-blue-500 to-purple-600"></div>
      </body>
    </html>
  );
};

export default RootLayout;
