import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import '../style/components/login.sass'

function Login() {
  return (
    <section id="login">
      <div id="forms">
      <Routes>
        <Route path="/" element={<LoginForm/>}></Route>
      </Routes>
      </div>
    </section>
  );
}

export default Login;
