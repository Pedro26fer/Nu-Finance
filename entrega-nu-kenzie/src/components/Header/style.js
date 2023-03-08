import styled from "styled-components";

export const HeaderStyled = styled.header`

  background-color: #F8F9FA;
  min-height: 88px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50%;
  font-size: calc(10px + 2vmin);

  h1{
    background-image: linear-gradient(90deg, #FD377E 28.84%, #212529 29.25%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 35px;
  }

  button{
    border: none;
    border-radius: 8px;
    background-color: #E9ECEF;
    font-size: 14px;
    width: 64px;
    height: 40px;
    padding: 10px;
    text-align: center;
    font-family: sans-serif;
    font-weight: 550;
    margin-top: 10px;
    color: #212529;
    margin-right: 3%;

    :hover{
        background-color: #FD377E;
        color: #F8F9FA;
        cursor: pointer;
    }
  }


`