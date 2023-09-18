import styled from "styled-components";

export const ContainerBackground = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 110%;
  background-color: #b2a2c0;
`;

export const ContainerSignIn = styled.div`
  width: 40%;
  height: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12%;
  border-radius: 5%;
  background-color: #2a0134;
  display: flex;
`;

export const MainText = styled.text`
  font-size: 5vh;
  font-family: Poppins;
  color: #ff59bd;
  margin: auto;
`;

export const Input = styled.input`
  background: #dbb9d5;
  border-radius: 30px;
  border-color: gray;
  width: 100%;
  height: 20px;
`;

export const Button = styled.button`
  background: #dbb9d5;
  border-radius: 30px;
  width: 75%;
  height: 35px;
  cursor: pointer;
`;
