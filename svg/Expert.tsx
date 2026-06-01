import type { ExpertProp } from "../../types/ExpertProp";

export default function Expert({ name, description, link }: ExpertProp) {
  return (
    <a href={link}>
      <article className="flex flex-col items-center max-md:gap-y-15 md:gap-y-26.25 px-15 py-12.5 bg-snackly-blue w-fit h-fit rounded-r3 text-white">
        <img src="/icons/LinkedIn.svg" alt="LinkedIn Logo" width="98px" />
        <div className="w-45 h-fit max-md:gap-y-10 md:gap-y-15 flex flex-col items-center text-center text-t3">
          <span className="underline lg:text-t4 max-lg:text-t5">{name}</span>
          <span className="lg:text-t4 max-lg:text-t5">{description}</span>
        </div>
      </article>
    </a>
  );
}
