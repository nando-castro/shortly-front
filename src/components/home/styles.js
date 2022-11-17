import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.div`
  width: 80%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding: 5px;
  margin-top: 50px;

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

    color: #9c9c9c;
  }

  .exit {
    text-decoration: underline;
  }
`;

const Logged = styled.div`
  position: absolute;
  width: 185px;
  height: 18px;
  left: 248px;
  top: 69px;

  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: #5d9040;
`;

const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 30px;
  margin-top: 40px;

  input {
    width: 769px;
    height: 60px;

    padding-left: 20px;

    background: #ffffff;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;

    input::placeholder {
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;

      margin-left: 100px;
      color: #9c9c9c;
    }
  }
`;

const Button = styled.div`
  width: 182px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 70px;

  background: #5d9040;
  border-radius: 12px;

  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  text-align: center;

  color: #ffffff;
  cursor: pointer;
`;

const Item = styled.div`
  width: 1020px;
  height: 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  .main {
    width: 1020px;
    height: 62px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    div {
      width: 887px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      background: #80cc74;
      box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
      border-radius: 12px 0px 0px 12px;

      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;

      color: #ffffff;

      flex: none;
      order: 0;
      flex-grow: 0;
    }

    .remove {
      width: 130px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;

      background: #ffffff;
      box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
      border-radius: 0px 12px 12px 0px;

      ion-icon {
        color: #ea4f4f;
        font-size: 30px;
        cursor: pointer;
      }
    }
  }
`;

const Links = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 25px;
`;

export { Container, Header, Form, Button, Item, Logged, Links };
