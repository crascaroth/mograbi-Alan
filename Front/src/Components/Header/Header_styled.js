import {
    Col,
    Row,
    Form,
    FormControl,
    Button
  } from "react-bootstrap";
  import styled from "styled-components"


export const ColLogoMograbi = styled(Col)`
display:flex;
align-items: center;
justify-content: center;
height: 40vh;
width: 100%;
:hover{
  cursor:pointer;
}
`

export const ColLadoLogo = styled(Col)`
display:flex;
flex-direction: column;
justify-content:center;
align-items:left;
height: 40vh;
width: 100%;
padding-bottom: 10vh;

`

export const RowSearchEBotoes = styled(Row)`
display: flex;
height: 25vh;
width: 100%;
justify-content: left;
align-items: center;
`

export const FormSearch = styled(Form)`
background-color: black;
padding: 0.25em;
width: 25vw;
` 
export const InputSearchBar = styled.input`
border-radius: 0;
width: 20vw;
height: 7vh;
margin-right: 1vw;
font-size: 1.5em;
`

const ButtonBase = styled(Button)`
display:flex;
justify-content: space-evenly;
align-items: center;
border: 0.15em solid black;
border-radius: 0;
height: 8vh;
width: 10vw;
font-size: 1.5em;
`

export const ButtonMinhaConta = styled(ButtonBase)`

`
export const ButtonWishList = styled(ButtonBase)`

`

export const ButtonCart = styled(ButtonBase)`
width: 5vw;
`

export const RowResponsiveMenu = styled(Row)`
display:flex;


`