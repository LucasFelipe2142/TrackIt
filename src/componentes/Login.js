import axios from 'axios';
import styled from 'styled-components';
import Logo from './Logo_nome'
import { useNavigate } from 'react-router';
import { useState, useEffect } from "react";
import { ThreeDots } from  'react-loader-spinner'

export default function Login(){
    const navigate = useNavigate();
    const [login,setLogin] = useState('')
    const [senha,setSenha] = useState('')
    const [mostrar,setMostrar] = useState("password")
    const [icon,setIcon] = useState("eye-outline")
    const [botao,setBotao] = useState("")
    const [loader,setLoader] = useState("apagar")

    return(
        <Container>
            <Logo></Logo>
            <input type="text" name="input" placeholder="email" value={login} onChange={e => setLogin(e.target.value)} />
            <input type={mostrar} name="input" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} />
            <div className='mostrar_senha'>
                Mostrar senha
                <Mostrar onClick={() => toggle()}> <ion-icon name={icon}></ion-icon></Mostrar>
            </div>
            <Button onClick={() => Enviar()}>
                <div className={botao}>Entrar</div>
                <div className = {loader} ><ThreeDots color="#FFFFFF" height={60} width={60} /></div>   
            </Button>

            <p onClick={() => navigate('/cadastro')} >Não tem uma conta? Cadastre-se!</p>
            
        </Container>
    )

    function toggle() {
        console.log(mostrar)
        if (mostrar === "password") {
            setMostrar("text")
            setIcon('eye')
        }
        else {
            setMostrar("password")
            setIcon('eye-outline')
        }
    }

    function Enviar(){
        if(login !== '' && senha !== ''){
            let dados = {
                email: login,
                password: senha
            }

            // const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', dados);
            // promise.then(()=> (console.log(promise)))
            // promise.catch(()=> (console.log('nao foi')))


       } 
    }
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input{
        width: 303px;
        height: 45px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        outline: none;
        padding-left: 11px;

        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }

    p{
        margin-top: 25px;
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;

        color: #52B6FF;
    }

    .mostrar_senha{
        width: 303px;
        display: flex;
        justify-content: end;
        margin-bottom: 6px;
        font-size: 15px;
        align-items: center;
    }

    .apagar{
        display: none;
    }
`
const Button = styled.div`
    width: 303px;
    height: 45px;

    background: #52B6FF;
    border-radius: 4.63636px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;

    color: #FFFFFF;
`

const Mostrar = styled.div`
    display: flex;
    align-items: center;
    margin-left: 5px;
    font-size: 20px;
`