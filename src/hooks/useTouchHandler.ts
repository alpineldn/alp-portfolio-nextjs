import { useState, useEffect } from 'react';

function useTouchHandler(): boolean {
  const [isTouched, setIsTouched] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleTouch = () => {
      setIsTouched(true);
    };

    window.addEventListener('touchstart', handleTouch);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('touchstart', handleTouch);
    };
  }, [isTouched]);

  // Handle window resize to update the width and reset the touch state
  useEffect(() => {
    const handleResize = () => {
      setIsTouched(false); // Reset touch state when window width changes
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isTouched;
}

export default useTouchHandler;
