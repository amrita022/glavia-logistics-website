"use client";

import { useEffect } from "react";

export function CardEntrance() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.setAttribute("data-arrived", "");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.18 });

    document.querySelectorAll("#transport .freight-enter, #services .service-enter").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
