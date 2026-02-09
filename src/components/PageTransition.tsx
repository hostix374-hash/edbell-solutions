'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Trigger animation on route change
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div 
      className={`page-transition ${isAnimating ? 'animating' : ''}`}
      style={{
        animation: 'pageSlideUp 0.6s ease-out'
      }}
    >
      {children}
    </div>
  );
}
