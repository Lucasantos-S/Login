import "../../style/components/button.sass";
type Props = {
  children?: JSX.Element | string
};

function Button({children}:Props) {
  return (
    <button id='button'>{children}</button>
  )
}

export default Button