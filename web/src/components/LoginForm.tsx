import '../style/components/loginForm.sass'
function LoginForm() {
  return (
    <section id="login-contend">
        <span>Bem vindo de volta</span>
        <h1>Faça Login na sua conta</h1>
        <form id="login-form">
            <label htmlFor="login">Login</label>
            <input type="text" />
            <label htmlFor="password">Senha</label>
            <input id="password" type="password"/>
        </form>
    </section>
  )
}

export default LoginForm