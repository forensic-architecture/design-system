import { easeInOutQuad } from "./math";

export const scrollToElement = ({ to = null, duration = 500 }) => {
  const element = to;
  const cardScroll = window.offsetTop;

  let start = element.scrollTop;
  let change = cardScroll - start;
  let currentTime = 0;
  const increment = 20;

  const animateScroll = function () {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration) setTimeout(animateScroll, increment);
  };

  animateScroll();
};
