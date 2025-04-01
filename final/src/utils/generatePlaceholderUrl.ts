interface urlParams {
  width?: number;
  height?: number;
  text: string;
  seed: number;
} 

export function generatePlaceholderUrl({
  width = 300,
  height = 300,
  text,
  seed,
}: urlParams): string {
  const hashColor = (s: number) => {
    const r = (s * 123) % 255;
    const g = (s * 321) % 255;
    const b = (s * 231) % 255;
    return [r, g, b]
      .map((n) => Math.max(50, Math.min(200, Math.round(n))))
      .map((n) => n.toString(16).padStart(2, '0'))
      .join('');
  };

  const bgColor = hashColor(seed);
  const textColor = 'ffffff';
  const formattedText = encodeURIComponent(text);

  return `https://dummyimage.com/${width}x${height}/${bgColor}/${textColor}.png&text=${formattedText}`;
}
