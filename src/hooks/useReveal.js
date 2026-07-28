import { useLayoutEffect } from 'react';

export function useReveal(containerRef, deps = []) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const els = Array.from(container.querySelectorAll('[data-reveal]'));
    els.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(26px)';
      if (el.dataset.delay) el.style.transitionDelay = el.dataset.delay;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'none';
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
