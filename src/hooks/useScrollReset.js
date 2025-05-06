import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollReset() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Force immediate scroll to top (no smooth behavior)
    window.scrollTo(0, 0);

    // 2. Add a tiny delay for stubborn browsers (Safari, Firefox)
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 10);

    // 3. Fallback: Scroll again after layout is fully rendered
    const fallbackTimer = setTimeout(() => {
      const hasScrolled = window.scrollY === 0;
      if (!hasScrolled) window.scrollTo(0, 0);
    }, 100);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, [pathname]);
}