import Header from '@/components/Header';
import './globals.css';
import localFont from '@next/font/local';
import cn from '@/utils/cn';
import SmoothScroll from '@/components/common/SmoothScroll/SmoothScroll';

interface RootLayoutProps {
  children: React.ReactNode;
}

const ppNeueMontreal = localFont({
  src: [
    {
      path: '../../../public/fonts/neue-montreal/PPNeueMontreal-Variable.woff2',
    },
    {
      path: '../../../public/fonts/neue-montreal/PPNeueMontreal-Variable.woff',
    },
    {
      path: '../../../public/fonts/neue-montreal/PPNeueMontreal-Variable.ttf',
    },
  ],
  variable: '--font-ppneuemontreal',
});

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn(ppNeueMontreal.variable, 'font-ppneuemontreal')}>
        <SmoothScroll>
          <Header />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
};

export default RootLayout;
