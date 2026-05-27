import { useState } from "react";
import type { SelectProp } from "../../types/SelectProp";
import type { InputProps } from "../../types/input";

export default function Select({
  options,
  label,
  style,
  labelStyle,
}: SelectProp & Omit<InputProps, "placeholder" | "type">) {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={label} className={labelStyle}>
        {label}
      </label>
      <select
        name={label}
        id={label}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        className={style}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option.option}
            className="bg-snackly-purple/70"
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
