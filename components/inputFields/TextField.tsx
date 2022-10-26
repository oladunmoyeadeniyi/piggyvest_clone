import React from "react";
import { useFocus } from "../../utilities";

type TextFieldProps = {
  type?: string;
  className?: string;
  children?: React.ReactNode | string | number;
  value: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
  label?: string;
  placeholder?: string;
  Ref?: React.RefObject<HTMLInputElement>
};

const TextField = ({
  type = "text",
  className,
  children,
  name,
  label,
  Ref,
  ...rest
}: TextFieldProps) => {

  return (
    <div className="text-[#4a5568] text-[0.75rem] flex flex-col mb-1">
      {label && (
        <label htmlFor={name} className="mb-1 font-semibold">
          {label}
        </label>
      )}
      <input
        ref={Ref}
        name={name}
        type={type}
        {...rest}
        className={`${className} p-4 rounded w-full bg-[#edf2f7] focus:outline-none`}
      />
    </div>
  );
};

export default React.memo(TextField);
