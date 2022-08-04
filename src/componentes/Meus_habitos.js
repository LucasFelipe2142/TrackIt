import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect, useContext } from "react";
import Contextos from '../contextos/Context';
import Props_habito from './Props_habito'

const config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
    }
  };

export default function Habitos(){
    const { habitos, setHabitos } = useContext(Contextos)
    console.log(habitos.length)

    useEffect(() => {
        const requisicao = axios.get(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,config
        );

        requisicao.then((Selecione) => { setHabitos(Selecione.data) });
    }, []);

    if (habitos.length === 0) {
         return false
    }

        console.log(habitos)
    return (

        <>
        {habitos.map((h,index)=> <Props_habito key ={index} nome = {h.name} dias = {h.days} id = {h.id} />)}
        </>
    )

}