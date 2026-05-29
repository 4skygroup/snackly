export default function Partner({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-y-5">
      <img src={src} alt={alt} />
      <span className="text-t3">{label}</span>
    </div>
  );
}
