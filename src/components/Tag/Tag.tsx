export default function Tag({
  content,
  style = "text-white text-t3 px-7.5 py-6.25 rounded-full bg-snackly-purple",
  isOpaque = false,
}: {
  style?: string;
  content: string;
  isOpaque?: boolean;
}) {
  return (
    <span className={`${isOpaque ? style + "/70" : style} `}>{content}</span>
  );
}
