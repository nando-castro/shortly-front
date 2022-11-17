import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Form, Header, Item, Links, Logged } from "./styles";
import axios from "axios";
import Logo from "../../shared/logo/Logo";
import { useAuth } from "../../context/auth";
import { api } from "../../service/api";

export default function HomeScreen() {
  const [update, setUpdate] = useState(false);
  const { user } = useAuth();
  const [url, setUrl] = useState("");
  const { urls, setUrls } = useAuth();
  const navigate = useNavigate();

  function shorten(e) {
    e.preventDefault();

    api
      .post(
        "urls/shorten",
        { ...url },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )

      .then((res) => {
        console.log(res.data);
        setUrl(res.data);
        setUpdate(!update);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (user) {
      function getUrls() {
        api
          .get("users/me", {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            setUrls(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      getUrls();
    }
  }, [update]);

  function renderUrls() {
    if (urls.shortenedUrls !== undefined) {
      return urls.shortenedUrls.map((i, index) => (
        <Item key={index}>
          <div className="main">
            <div>
              <p>{i.url}</p>
              <p>{i.shortUrl}</p>
              <p>quantidade de visitantes: {i.visitCount}</p>
            </div>
            <div className="remove">
              <ion-icon onClick={deleteUrl} name="trash"></ion-icon>
            </div>
          </div>
        </Item>
      ));
    }
  }

  function deleteUrl() {
    console.log("delete");
  }

  function changeInput(e) {
    setUrl({ ...url, url: e });
  }
  function exitApp() {
    navigate("/");
    localStorage.clear();
    window.location.reload();
  }
  return (
    <Container>
      <Logged>Seja bem-vindo(a), {urls.name}</Logged>
      <Header>
        <p>Home</p>
        <Link to="/">
          <p>Ranking</p>
        </Link>
        <p className="exit" onClick={exitApp}>
          Sair
        </p>
      </Header>
      <Logo />
      <Form>
        <input
          type="text"
          placeholder="Links que cabem no bolso"
          value={url.url}
          name="url"
          onChange={(e) => changeInput(e.target.value)}
        />
        <Button onClick={shorten}>Encurtar Link</Button>
      </Form>
      <Links>{renderUrls()}</Links>
    </Container>
  );
}
