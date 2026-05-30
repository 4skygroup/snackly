export default function Tag({
  content,
  style = "text-white text-t3 px-7.5 py-6.25 rounded-full bg-snackly-purple",
  isOpaque = false,
  onClick,
}: {
  style?: string;
  content: string;
  isOpaque?: boolean;
  onClick: () => void;
}) {
  return (
    <span
      className={`${isOpaque ? style + "/70" : style} cursor-pointer`}
      onClick={() => onClick()}
    >
      {content}
    </span>
  );
}
