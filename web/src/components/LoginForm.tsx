import useForm from '../hooks/useForm'
import '../style/components/loginForm.sass'
import Button from './forms/Button'
import Input from './forms/Input'
function LoginForm() {
    const login = useForm()
    const password = useForm()

    function handleSubmit(event:React.SyntheticEvent) {
      event.preventDefault()
      console.log('ok');
      
    }
  return (
    <section id="login-contend">
        <span>Bem vindo de volta</span>
        <h1>Faça Login na sua conta</h1>
        <form id="login-form" onSubmit={handleSubmit}>
           <Input name="login" type="text" label='Login'  {...login}/>
           <Input name="login" type="password" label='Senha'  {...password}/>
           <Button>Entrar</Button> 
        </form>
    </section>
  )
}

export default LoginForm