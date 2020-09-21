/*
 * Taken from: https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
 */
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function typeForPath(path) {
  let type;
  path = path.trim();
  switch (true) {
    case /\.((png)|(jpg)|(jpeg))$/.test(path):
      type = "Image";
      break;
    case /\.(mp4)$/.test(path):
      type = "Video";
      break;
    case /\.(md)$/.test(path):
      type = "Text";
      break;
    case /\.(pdf)$/.test(path):
      type = "Document";
      break;
    default:
      type = "Unknown";
      break;
  }
  return type;
}

/**
 * Return whether the variable is neither null nor undefined
 * @param {object} variable
 */
export function isNotNullNorUndefined(variable) {
  return typeof variable !== "undefined" && variable !== null;
}

export function makeNiceDate(datetime) {
  if (datetime === null) return null;
  // see https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: year },
  ] = dateTimeFormat.formatToParts(datetime);

  return `${day} ${month}, ${year}`;
}
