import { useEffect } from "react";

export const useStaggeredAnimation = (selector) => {
  useEffect(() => {
    const cards = document.querySelectorAll(selector);
    cards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(50px) scale(0.95)";
      setTimeout(() => {
        card.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
        card.style.opacity = "1";
        card.style.transform = "translateY(0) scale(1)";
      }, index * 100 + 200);
    });
  }, []);
};

export const useSlideAnimation = (selector) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      setTimeout(() => {
        el.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 150);
    });
  }, [selector]);
};
