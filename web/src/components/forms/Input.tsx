import '../../style/components/input.sass'

interface InputPorps{
  name: string;
  value: string;
  label: string;
  type: string;
}

function Input({ name, value, label, type }: InputPorps) {
  return (
    <>
      <label id="label" htmlFor={name}>{label}</label>
      <input id="input" name={name} type={type} value={value} />
    </>
  );
}

export default Input;
