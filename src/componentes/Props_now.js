import styled from 'styled-components'
import { useState, useContext } from 'react'
import dayjs from 'dayjs'
import Contextos from '../contextos/Context';
import axios from 'axios'
let aux2 = 0;

const config = {
    headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
    }
};

export default function Now({ h }) {
    const { aux, setAux } = useContext(Contextos)
    const [click, setClick] = useState('#666666')
    const [cu, setCu] = useState()

    return (h.done ?

        <Box cor={'#8FC549'}>
            <ul className='text'>
                <li><h2>{h.name}</h2></li>
                <li>Sequência atual: <h1>..</h1> <Aux cor2={'#8FC549'}> {` ${verifica(h.currentSequence)}`}</Aux></li>
                <li>Seu recorde: {igual()} </li>

            </ul>

            <div onClick={() => desfaz(h.id)}><ion-icon name="checkbox"></ion-icon></div>


        </Box> :

        <Box cor={'#EBEBEB'}>
            <ul className='text'>
                <li><h2>{h.name}</h2></li>
                <li>Sequência atual: <h1>..</h1> <Aux cor2={'#666666'}> {` ${verifica(h.currentSequence)}`}</Aux></li>
                <li>Seu recorde: {verifica(h.highestSequence)} </li>

            </ul>

            <div onClick={() => conclui(h.id)}><ion-icon name="checkbox"></ion-icon></div>


        </Box>

    )

    function igual() {
        if (h.currentSequence === h.highestSequence)
            return (<><h1>..</h1> <Aux cor2={'#8FC549'}> {` ${verifica(h.highestSequence)}`}</Aux></>)
        else return verifica(h.highestSequence)

    }

    function desfaz(id) {
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config);
        promise.then(() => document.location.reload(true))
    }

    function verifica(qtd) {
        if (qtd > 1) return `${qtd} dias`
        else if (qtd === 1) return `${qtd} dia`
        else return `${qtd} dias`
    }

    function conclui(id) {


        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config);
        promise.then(() => document.location.reload(true))
    }

}



const Box = styled.div`
    min-width: 340px;
    height: 94px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    background: #FFFFFF;
    border-radius: 5px;
    padding: 0 8px 0 15px;
    
    
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;

    color: #666666;

    h2{
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: #666666;

    margin-bottom: 7px;
    }

    ion-icon{
        color: ${props => props.cor};
        font-size: 90px;
    }

    li{
        display: flex;
    }

    h1{
        opacity: 0;
    }
`
const Aux = styled.div`
    color: ${props => props.cor2};
` 