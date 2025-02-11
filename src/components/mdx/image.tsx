/* eslint-disable @next/next/no-img-element */
export interface ImageProps {
  src: string;
  alt: string;
}

export default function Image({ src, alt }: ImageProps) {
  return (
    <>
      <img src={src} alt={alt} className="w-full rounded-xl border" />
      {alt && <span className="mt-[6px] block w-full text-center text-xs text-secondary-foreground">{alt}</span>}
    </>
  );
}
