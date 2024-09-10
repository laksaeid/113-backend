/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes } from "react";
import { useController } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  control: any;
}

export const CustomInput = ({ label, name, control, ...rest }: InputProps) => {
  const { field } = useController({
    name: name,
    control,
  });
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold">{label}</label>
      <input
        {...rest}
        value={field.value}
        onChange={(e) => {
          if (rest.type === "number") {
            field.onChange(Number(e.target.value));
          } else {
            field.onChange(e.target.value);
          }
        }}
        ref={field.ref}
        name={field.name}
        className={
          `outline-none ring-1 ring-slate-500 rounded-md px-4 py-2 focus:shadow-lg ` +
          rest.className
        }
      />
    </div>
  );
};
