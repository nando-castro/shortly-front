import Logo from "../../shared/logo/Logo";
import { Button, Container, Form, Header } from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useState } from "react";
import axios from "axios";

export default function LoginScreen() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const URL = `${process.env.REACT_APP_API_URL}/signin`;

  if (user !== null) {
    navigate("/");
  }

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  function login(e) {
    e.preventDefault();

    const promise = axios.post(URL, { ...userLogin });
    promise.then((response) => {
      setUser(response.data);
      //user.token = response.data.token;
      navigate("/");
      console.log(response.data);

      const person = {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        token: response.data.token,
      };
      localStorage.setItem("userLogged", JSON.stringify(person));
    });
    promise.catch((err) => {
      console.log("email ou senha inválidos");
    });
  }

  function changeInput(e) {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
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
          type="email"
          placeholder="E-mail"
          value={userLogin.email}
          name="email"
          onChange={changeInput}
        />
        <input
          type="password"
          placeholder="Senha"
          value={userLogin.password}
          name="password"
          onChange={changeInput}
        />
      </Form>
      <Button onClick={login}>Entrar</Button>
    </Container>
  );
}
