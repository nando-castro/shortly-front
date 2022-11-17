import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 80%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding: 5px;
  margin-top: 60px;

  p {
    width: 95px;
    height: 18px;
    padding: 2px;
    cursor: pointer;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: #5d9040;
  }

  .login {
    width: 50px;
    margin-right: 10px;
    color: #9c9c9c;
  }
`;

const Ranking = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: right;
  padding: 30px;
  margin-top: 40px;
`;

const Top = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;

  color: #000000;
`;

const Body = styled.div`
  box-sizing: border-box;
  width: 1017px;
  height: 241px;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  margin-top: 50px;

  overflow-y: hidden;

  background: #ffffff;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px 24px 0px 0px;
`;

const Item = styled.div`
  width: 496px;
  height: 28px;
  padding: 10px;
  margin-bottom: 12px;

  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;

  color: #000000;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Text = styled.p`
  width: 728px;
  height: 45px;

  margin-top: 80px;

  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;

  color: #000000;
`;

export { Container, Header, Ranking, Text, Top, Body, Item };
