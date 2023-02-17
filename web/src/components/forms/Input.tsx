import "../../style/components/input.sass";
import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  value: string;
  error:string | null
}

const Input: React.FC<InputProps> = ({ label, name, value, error, ...rest }) => {
  return (
    <>
      <label id="label" htmlFor={name}>
        {label}
      </label>
      <input id="input" name={name} value={value} {...rest} />
      {error? <p>{error}</p> : null}
    </>
  );
};

export default Input;
