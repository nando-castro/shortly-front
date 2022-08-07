import Logo from "../../shared/logo/Logo";
import { Button, Container, Form, Header } from "./styles";
import { useNavigate } from "react-router-dom";

export default function RegisterScreen() {
  const navigate = useNavigate();
  function login() {
    navigate("/login");
  }
  function register() {
    navigate("/register");
  }
  return (
    <Container>
      <Header>
        <p className="login" onClick={login}>
          Entrar
        </p>
        <p onClick={register}>Cadastrar-se</p>
      </Header>
      <Logo />
      <Form>
        <input type="name" placeholder="Nome" name="name" />
        <input type="email" placeholder="E-mail" name="email" />
        <input type="password" placeholder="Senha" name="password" />
        <input type="password" placeholder="Confirmar ssenha" name="password" />
      </Form>
      <Button>Criar Conta</Button>
    </Container>
  );
}
