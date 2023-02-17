import useForm from '../hooks/useForm'
import '../style/components/loginForm.sass'
import Input from './forms/Input'
function LoginForm() {
    const login = useForm()
    const password = useForm()
  return (
    <section id="login-contend">
        <span>Bem vindo de volta</span>
        <h1>Faça Login na sua conta</h1>
        <form id="login-form">
           <Input name="login" type="text" label='Login'  {...login}/>
           <Input name="login" type="password" label='Senha'  {...password}/>
           
        </form>
    </section>
  )
}

export default LoginForm