export function url(pathname: string): string {
  if (
    pathname.startsWith("http://") ||
    pathname.startsWith("https://") ||
    pathname.startsWith("mailto:") ||
    pathname.startsWith("tel:") ||
    pathname.startsWith("#")
  ) {
    return pathname;
  }

  const clean = pathname.startsWith("/") ? pathname : `/${pathname}`;
  // Next.js applies configured basePath automatically for next/link routes.
  return clean;
}
