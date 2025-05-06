import NextImage, { ImageProps as NextImageProps } from "next/image";
import imageLoader, { getImagePath } from "@/utils/imageLoader";

interface ImageProps extends Omit<NextImageProps, "src"> {
  src: string;
  useLoader?: boolean;
}

export default function Image({ src, useLoader = true, ...props }: ImageProps) {
  if (useLoader) {
    return <NextImage loader={imageLoader} src={src} {...props} />;
  }

  return <NextImage src={getImagePath(src)} {...props} />;
}

// For regular img tags
export function getStaticImagePath(src: string): string {
  return getImagePath(src);
}
