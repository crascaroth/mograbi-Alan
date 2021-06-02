import styled from 'styled-components';
import {Col} from "react-bootstrap"

export const Container = styled.div`
display:flex;
justify-content: center;
width: 100vw;
height: 30vh;

margin: 0 0 5vh 0;
padding: 0;
`
export const CaixaTextoESetas = styled.div`
width: 90vw;
background-color: black;

margin:0;
padding:0;
`

export const ColunasGrid = styled(Col)`
margin: 0 2vw;
justify-content:left;
font-size: 1.5em;
color:white;
` 

export const SetaEsquerda = styled(Col)`
display:flex;
justify-content: left;
align-items: center;
width:100%;
`
export const SetaDireita = styled(Col)`
display:flex;
justify-content: flex-end;
align-items: center;
width:100%;


`
