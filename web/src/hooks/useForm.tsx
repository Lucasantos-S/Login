import React, { useState } from "react";

function useForm() {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  function validate(value:string){
    if(value.length ===0) {
        setError('Preencha um valor')
        return false
    } else {
        setError(null)
    }
  }

  const onChange = (event: { target: HTMLInputElement }) => {
    validate(event.target.value)
    setValue(event.target.value);
  };

  return {
    onChange,
    value,
    error,
    validade: () => validate(value),
    onBlur: () => validate(value),

    
  };
}

export default useForm;
