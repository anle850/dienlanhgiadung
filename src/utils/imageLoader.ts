import nextConfig from '../../next.config';

export function getImagePath(src: string): string {
  // If the src is an absolute URL or data URL, return it as is
  if (src.startsWith('http') || src.startsWith('data:')) {
    return src;
  }

  // If src starts with a slash, remove it
  const path = src.startsWith('/') ? src.slice(1) : src;
  return `${nextConfig.basePath}/${path}`;
}

export default function imageLoader({ src}: { src: string; width: number; quality?: number }) {
  // Handle Next.js image optimization
  if (src.startsWith('/_next')) {
    return `${nextConfig.basePath}${src}`;
  }
  
  // For static images in public folder
  return getImagePath(src);
} 