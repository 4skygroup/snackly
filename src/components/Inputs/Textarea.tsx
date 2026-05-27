import type { InputProps } from "../../types/input";

export default function Textarea({
  label,
  placeholder,
  style,
  labelStyle,
}: InputProps) {
  return (
    <div className="flex flex-col gap-y-1 grow-1">
      <label htmlFor={label} className={labelStyle}>
        {label}
      </label>
      <textarea placeholder={placeholder} id={label} className={style} />
    </div>
  );
}
