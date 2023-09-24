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
  @media (max-width: 768px) {
    width: 60%;
    height: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 12%;
    border-radius: 5%;
    background-color: #2a0134;
    display: flex;
  }
`;

export const MainText = styled.text`
  @media (min-width: 768px) {
    font-size: 5vh;
    font-family: Poppins;
    color: #ff59bd;
    margin: auto;
  }
  @media (max-width: 767px) {
    font-size: 4vh;
    font-family: Poppins;
    color: #ff59bd;
    margin: auto;
  }
`;

export const Input = styled.input`
  @media (min-width: 768px) {
    background: #dbb9d5;
    border-radius: 30px;
    border-color: transparent;
    width: 100%;
    height: 20px;
  }
  @media (max-width: 767px) {
    background: #dbb9d5;
    border-radius: 30px;
    border-color: transparent;
    width: 100%;
    height: 20px;
  }
`;

export const Button = styled.button`
  @media (min-width: 768px) {
    background: #dbb9d5;
    border-radius: 30px;
    border-color: transparent;
    width: 75%;
    height: 35px;
    cursor: pointer;
  }
  @media (max-width: 767px) {
    background: #dbb9d5;
    border-radius: 30px;
    border-color: transparent;
    width: 75%;
    height: 35px;
    cursor: pointer;
  }
`;
