import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  emoji: string;
  className?: string;
}

export default function RecipeImage({ src, alt, emoji, className = "" }: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return <div className={`img-fallback ${className}`}>{emoji}</div>;
  }
  return (
    <img className={className} src={src} alt={alt} onError={() => setError(true)} />
  );
}
