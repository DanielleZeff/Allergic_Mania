import React from "react";
import {
  Button,
  ContainerBackground,
  ContainerSignIn,
  Input,
  MainText,
} from "./styles";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <ContainerBackground>
      <ContainerSignIn>
        <div
          style={{
            marginTop: "5%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <MainText>
            <strong>SIGN IN</strong>
          </MainText>
          <div
            style={{
              color: "#FF59BD",
              marginTop: "20%",
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: "3.5vh",
              fontFamily: "Poppins",
            }}
          >
            Nome de usuário:
          </div>
          <div
            style={{
              marginTop: "5%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Input placeholder="Digite o seu nome..."></Input>
          </div>
          <div
            style={{
              color: "#FF59BD",
              marginTop: "20%",
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: "3.5vh",
              fontFamily: "Poppins",
            }}
          >
            Senha:
          </div>
          <div
            style={{
              marginTop: "5%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Input placeholder="Digite a sua senha..."></Input>
          </div>
          <div
            style={{
              marginTop: "30%",
              marginLeft: "20%",
            }}
          >
            <Button>
              <div>
                <Link
                  to="/home"
                  style={{
                    color: "#FF59BD",
                    fontSize: "2.8vh",
                    fontFamily: "Poppins",
                    textDecoration: "none",
                  }}
                >
                  <strong>SIGN IN</strong>
                </Link>
              </div>
            </Button>
          </div>
          <div
            style={{
              color: "#FF59BD",
              marginTop: "20%",
              marginLeft: "14%",
              fontSize: "2.5vh",
              fontFamily: "Poppins",
            }}
          >
            Esqueceu a senha?
          </div>
          <hr
            width="100%"
            color="#FF59BD"

            // style={{ marginLeft: "-45%" }}
          ></hr>
        </div>
      </ContainerSignIn>
    </ContainerBackground>
  );
}

export default SignIn;
