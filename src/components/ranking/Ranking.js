import { Link, useNavigate } from "react-router-dom";
import Logo from "../../shared/logo/Logo";
import Rank from "../../assets/imgs/rank.png";
import { Body, Container, Header, Item, Ranking, Text, Top } from "./styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { Links, Logged } from "../home/styles";
import { useAuth } from "../../context/auth";

export default function RankingScreen() {
  const navigate = useNavigate();
  const [ranking, setRanking] = useState([]);
  const { user, urls } = useAuth();

  //const URL = `https://shortly-back-app.herokuapp.com/ranking`;
  const URL = `http://localhost:4000/ranking`;

  useEffect(() => {
    function getRanking() {
      const promise = axios.get(URL);
      promise
        .then((res) => {
          setRanking(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getRanking();
  }, []);

  function renderRanking() {
    return ranking.map((i, index) => (
      <Item key={index}>
        <span>
          {index + 1}. {i.name} - {i.linksCount} links - {i.visitCount}{" "}
          visualizações
        </span>
      </Item>
    ));
  }

  function login() {
    navigate("/login");
  }
  function register() {
    navigate("/register");
  }
  function exitApp() {
    navigate("/");
    localStorage.clear();
    window.location.reload();
  }
  return (
    <>
      {user && urls ? (
        <Container>
          <Logged>Seja bem-vindo(a), {urls.name}</Logged>
          <Header>
            <Link to="/home">
              <p>Home</p>
            </Link>
            <Link to="/">
              <p>Ranking</p>
            </Link>
            <p className="exit" onClick={exitApp}>
              Sair
            </p>
          </Header>
          <Logo />
          <Ranking>
            <Top>
              <img src={Rank} alt="Trofeu" />
              Ranking
            </Top>
            <Body>{renderRanking()}</Body>
          </Ranking>
        </Container>
      ) : (
        <Container>
          <Header>
            <p className="login" onClick={login}>
              Entrar
            </p>
            <p onClick={register}>Cadastrar-se</p>
          </Header>
          <Logo />
          <Ranking>
            <Top>
              <img src={Rank} alt="Trofeu" />
              Ranking
            </Top>
            <Body>{renderRanking()}</Body>
          </Ranking>
          <Text>Crie sua conta para usar nosso serviço!</Text>
        </Container>
      )}
    </>
  );
}
