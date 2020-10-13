// t = current time
// b = start value
// c = change in value
// d = duration
export const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t -= 1;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};
