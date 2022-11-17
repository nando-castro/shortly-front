import Logo from "../../shared/logo/Logo";
import { Button, Container, Form, Header } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../service/api";

export default function RegisterScreen() {
  const navigate = useNavigate();
  const [userRegister, setUserregister] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function register(e) {
    e.preventDefault();
    api
      .post("signup", { ...userRegister })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        navigate("/login");
      })
      .catch((res, err) => {
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
          value={userRegister.confirmPassword}
          name="confirmPassword"
          onChange={changeInput}
        />
      </Form>
      <Button onClick={register}>Criar Conta</Button>
    </Container>
  );
}
