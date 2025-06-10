
export default function Avatar({ src, alt, size = 40 }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: size, height: size }}
      className="rounded-full object-cover"
    />
  );
}

