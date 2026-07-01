export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

export function getAssetPath(path) {
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
}
