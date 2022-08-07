import axios from 'axios';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useState, useEffect, useContext } from "react";
import Topo from './Top'
import Footer from './Footer'
import Props_hoje from './Habitos_hoje'
import Contextos from '../contextos/Context'



let now = dayjs()

const config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
    }
  };
let aux2 = 0;
export default function Hoje(){  
    const [hoje,setHoje] = useState(null)

    useEffect(() => {
        const requisicao = axios.get(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,config
        );

        requisicao.then((Selecione) =>  (setHoje(Selecione.data)));
    }, []);

    if (hoje === null) {
         return false
    }
    console.log(hoje[1].done)
    for(let i = 0; i < hoje.length; i++){
        if(hoje[i].done === true) aux2++;
    }
    console.log(aux2)
    let porcentagem = ((aux2*100)/hoje.length);
    localStorage.setItem("porcentagem", JSON.stringify(porcentagem));

    return(
        <Container>
            <Topo />
            <Props_hoje hoje ={hoje} porcentagem = {porcentagem} />
            <Footer />
        </Container>
    )
}

const Container = styled.div`

`