"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedOnScroll({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
  threshold = 0.15,
  once = true,
  style = {},
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? `animate-${animation}` : "opacity-0"}`}
      style={{ animationDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}
