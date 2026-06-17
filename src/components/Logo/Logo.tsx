export default function Logo({
  src = "/logo/Snackly.webp",
  alt = "Snackly logo",
  width = 350,
  height = 150,
  className = "",
  format = "small",
}: {
  src?: string;
  alt?: string;
  width?: number;
  className?: string;
  height?: number;
  format?: "small" | "wide";
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={format !== "small" ? width : ""}
      height={format !== "small" ? height : ""}
      className={
        format === "small"
          ? "object-center object-cover w-52.5 h-18.75"
          : className
      }
      loading="lazy"
    />
  );
}
