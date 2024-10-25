import { useEffect, useState } from 'react';

function useStickyOnScroll(elementId: string, extraTopOffset = 0, extraBottomOffset = 0) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const scrollY = window.scrollY;
      const elementHeight = element.scrollHeight;
      const elementTopOffset = element.offsetTop + extraTopOffset;
      const elementBottomOffset = scrollY + extraBottomOffset;

      if (scrollY > elementTopOffset && elementBottomOffset < elementHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    let throttleTimeout: string | number | NodeJS.Timeout | null | undefined = null;
    const throttledHandleScroll = () => {
      if (throttleTimeout) return;

      throttleTimeout = setTimeout(() => {
        handleScroll();
        throttleTimeout = null;
      }, 100); // Throttle to execute every 100ms
    };

    window.addEventListener('scroll', throttledHandleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
    };
  }, [elementId, extraTopOffset, extraBottomOffset]);

  return isSticky;
}

export default useStickyOnScroll;
