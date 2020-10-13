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

export function selectTypeFromPathWithPoster(path, poster) {
  return { type: typeForPath(path), path, poster };
}
