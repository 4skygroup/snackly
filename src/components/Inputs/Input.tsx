import type { InputProps } from "../../types/input";

export default function Input({
  label,
  placeholder,
  style,
  type,
  labelStyle,
}: InputProps) {
  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={label} className={labelStyle}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={label}
        className={style}
      />
    </div>
  );
}
