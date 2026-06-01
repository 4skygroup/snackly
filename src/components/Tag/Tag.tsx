export default function Tag({
  content,
  style = "text-white max-mdpp:text-t5 mdpp:text-t3 mdpp:px-7.5 mdpp:py-6.25 max-mdpp:px-5 max-mdpp:py-4 rounded-full max-sm:w-fit bg-snackly-purple",
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
