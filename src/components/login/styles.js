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

    color: #9c9c9c;
  }

  .login {
    width: 50px;
    margin-right: 10px;
    color: #5d9040;
  }
`;

const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: right;
  padding: 30px;
  margin-top: 40px;

  input {
    width: 769px;
    height: 60px;
    margin-top: 25px;

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
  margin-top: 15px;

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

export { Container, Header, Form, Button };
