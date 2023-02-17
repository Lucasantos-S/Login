import '../style/components/loginForm.sass'
import Input from './forms/Input'
function LoginForm() {
  return (
    <section id="login-contend">
        <span>Bem vindo de volta</span>
        <h1>Faça Login na sua conta</h1>
        <form id="login-form">
           <Input name="login" type="text" label='Login' value="ok"/>
            <label htmlFor="password">Senha</label>
            <input id="password" type="password"/>
        </form>
    </section>
  )
}

export default LoginForm