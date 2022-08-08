import Logo from "../../shared/logo/Logo";
import { Button, Container, Form, Header } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterScreen() {
  const navigate = useNavigate();
  const [userRegister, setUserregister] = useState({
    name: "",
    email: "",
    password: "",
    passconfirm: "",
  });

  const URL = `http://localhost:4000/signup`;

  function register(e) {
    e.preventDefault();

    const promise = axios.post(URL, { ...userRegister });

    promise
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function changeInput(e) {
    setUserregister({ ...userRegister, [e.target.name]: e.target.value });
  }

  function loginRoute() {
    navigate("/login");
  }
  function registerRoute() {
    navigate("/register");
  }
  return (
    <Container>
      <Header>
        <p className="login" onClick={loginRoute}>
          Entrar
        </p>
        <p onClick={registerRoute}>Cadastrar-se</p>
      </Header>
      <Logo />
      <Form>
        <input
          type="name"
          placeholder="Nome"
          value={userRegister.name}
          name="name"
          onChange={changeInput}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={userRegister.email}
          name="email"
          onChange={changeInput}
        />
        <input
          type="password"
          placeholder="Senha"
          value={userRegister.password}
          name="password"
          onChange={changeInput}
        />
        <input
          type="password"
          placeholder="Confirmar senha"
          value={userRegister.passconfirm}
          name="passconfirm"
          onChange={changeInput}
        />
      </Form>
      <Button onClick={register}>Criar Conta</Button>
    </Container>
  );
}
