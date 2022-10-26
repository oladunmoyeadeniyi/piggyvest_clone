import { useRef, useEffect } from "react";

export const handleInput = (
  e: React.ChangeEvent<HTMLInputElement>,
  form: any,
  setForm: (form: any) => void,
  Array: boolean = false
) => {
  Array
    ? setForm([...form, e.target.value])
    : setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
};

export const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);
  return ref;
};

export const inputFocus = useFocus;
