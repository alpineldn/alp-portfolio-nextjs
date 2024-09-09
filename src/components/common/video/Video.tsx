import cn from '@/utils/cn';
import { useEffect, useRef } from 'react';

export interface IVideo {
  webm?: string;
  mov?: string;
}

interface VideoProps extends IVideo {
  className?: string;
  active: boolean;
}

const Video: React.FC<VideoProps> = ({ mov, webm, className, active }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (active) {
      videoRef?.current?.play();
    } else {
      videoRef?.current?.pause();
    }
  }, [active]);

  return (
    <video
      className={cn('h-full w-full object-cover', className)}
      ref={videoRef}
      width="100%"
      muted
      height="100%"
      disablePictureInPicture
      controlsList="nodownload noplaybackrate"
    >
      <source src={webm} type="video/webm" />
      <source src={mov} type="video/mp4" />
      Sorry, your browser doesn&apos;t support embedded videos.
    </video>
  );
};
export default Video;
