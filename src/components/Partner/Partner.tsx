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
      <img src={src} alt={alt} loading="lazy" />
      <span className="mdpp:text-t3 max-mdpp:text-t4 text-center">{label}</span>
    </div>
  );
}
