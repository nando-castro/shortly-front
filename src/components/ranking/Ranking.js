import { useNavigate } from "react-router-dom";
import Logo from "../../shared/logo/Logo";
import Rank from "../../assets/imgs/rank.png";
import { Body, Container, Header, Item, Ranking, Text, Top } from "./styles";
export default function RankingScreen() {
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
      <Ranking>
        <Top>
          <img src={Rank} alt="Trofeu" />
          Ranking
        </Top>
        <Body>
          <Item>Aqui vai o user</Item>
          <Item>Aqui vai o user</Item>
        </Body>
      </Ranking>
      <Text>Crie sua conta para usar nosso serviço!</Text>
    </Container>
  );
}
