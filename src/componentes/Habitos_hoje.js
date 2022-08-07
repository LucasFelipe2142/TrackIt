import styled from 'styled-components'
import { useState, useContext } from 'react'
import dayjs from 'dayjs'
import Props_now from './Props_now'
import Contextos from '../contextos/Context'

let now = dayjs()

let d = new Date()
let diaSemana = d.getDay()



export default function Props_hoje({ hoje }) {

    return (
        <>
            <Container >
                <div className='texto'>
                    <p>{`${verificardia()}, ${verificardata(now.$D)}/${verificardata(now.$M)}`}</p>
                    {verificaConcluidos()}
                </div>


                {hoje.map((h, index) => <Props_now key = {index} h={h} />)}
            </Container>

        </>
    )
    function verificaConcluidos() {
        if (JSON.parse(localStorage.getItem("porcentagem")) === null || JSON.parse(localStorage.getItem("porcentagem")) === 0) {
            return <Sub cor={'#BABABA'}>Nenhum hábito concluído ainda</Sub>

        }else{
            return <Sub cor={'#8FC549'}>{`${JSON.parse(localStorage.getItem("porcentagem"))}% dos hábitos concluídos`}</Sub>
        }
    }

}

function verificardata(data) {
    if (data < 10) return `0${data}`;
    else return data;
}

function verificardia() {
    switch (diaSemana) {
        case 1:
            return "Segunda"
            break;

        case 2:
            return "Terça"
            break;

        case 3:
            return "Quarta"
            break;

        case 4:
            return "Quinta"
            break;

        case 5:
            return "Sexta"
            break;

        case 6:
            return "Sabado"
            break;

        case 0:
            return "Domingo"
            break;

        default:
            break;



    }
}

const Container = styled.div`
    margin-top: 70px;
    padding-top: 28px;
    padding-bottom: 100px;
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;

    color: #BABABA;

    .texto{
        width: 340px;
        margin-bottom: 28px;
    }

    .texto>p{
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    /* identical to box height */
    color: #126BA5;
    }
`

const Sub = styled.div`
    color: ${props => props.cor};
`