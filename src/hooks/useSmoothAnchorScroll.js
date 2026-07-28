import { useEffect } from 'react';

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

export function useSmoothAnchorScroll(duration = 700) {
  useEffect(() => {
    function handleClick(e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const id = anchor.getAttribute('href').slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;

      e.preventDefault();

      const startY = window.scrollY;
      const targetY = target.getBoundingClientRect().top + startY;
      const distance = targetY - startY;
      let startTime = null;

      function step(timestamp) {
        if (startTime === null) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        window.scrollTo(0, startY + distance * easeInOutCubic(progress));
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          window.history.pushState(null, '', `#${id}`);
        }
      }

      requestAnimationFrame(step);
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [duration]);
}
