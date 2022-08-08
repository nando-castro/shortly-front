import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Header, Item } from "./styles";
import axios from "axios";
import Logo from "../../shared/logo/Logo";

export default function HomeScreen() {
  const navigate = useNavigate();
  const URL = `http://localhost:4000/signin`;

  //const URL = `https://app-shortly-back.herokuapp.com/`;

  const [url, setUrl] = useState({
    url: "",
  });

  function shorten(e) {
    e.preventDefault();

    const promise = axios.post(URL, { ...url });
    promise.then((res) => {
      setUrl(res.data);
      //user.token = response.data.token;
      navigate("/");
    });
    promise.catch((err) => {
      console.log("email ou senha inválidos");
    });
  }

  function changeInput(e) {
    setUrl({ ...url, [e.target.url]: e.target.value });
  }
  return (
    <Container>
      <Header>
        <p className="login">Entrar</p>
        <p>Cadastrar-se</p>
      </Header>
      <Logo />
      <Form>
        <input
          type="text"
          placeholder="Links que cabem no bolso"
          value={url.url}
          name="email"
          onChange={changeInput}
        />
        <Button onClick={shorten}>Encurtar Link</Button>
      </Form>
      <Item>
        <div>
          <p>Site</p>
          <p>link-curto</p>
          <p>quantidade de visitantes: 01</p>
        </div>
        <div className="remove">
          <ion-icon name="trash"></ion-icon>
        </div>
      </Item>
    </Container>
  );
}
