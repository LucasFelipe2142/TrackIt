import styled from 'styled-components';
import { useContext } from 'react';
import Contextos from '../contextos/Context';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router';

const semana = []
semana.push('S')
semana.push('T')
semana.push('Q')
semana.push('Q')
semana.push('S')
semana.push('S')
semana.push('D')

const config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
    }
  };

export default function Habito({nome,dias,id}){
    const navigate = useNavigate();

    return(
        <Habit>
            <div onClick={()=> Delete()}><ion-icon name="trash-outline"></ion-icon></div>
            {nome}
            <Dias>
            {semana.map((h,index)=><Props_dia key = {index} indice = {index} dia = {h} />)}
            </Dias>
        </Habit>
    )

    function Props_dia(props){
        for(let i = 0; i < dias.length; i++){
            if(dias[i] === (props.indice+1)) return <Dia cor = {'#FFFFFF'} back = {'#DBDBDB'} >{props.dia}</Dia>
        }
        return(
            <Dia cor = {'#DBDBDB'} back = {'#FFFFFF'} >{props.dia}</Dia>
        )
    }

    function Delete(){
        console.log(id)
            const requisicao = axios.delete(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,config
            );
    
            requisicao.then(() => navigate('/habitos'));
    }
}

const Habit = styled.div `
    width: 340px;
    height: 91px;

    background: #FFFFFF;
    border-radius: 5px;

    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    /* identical to box height */


    color: #666666;
    padding-left:15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    ion-icon{
        position: absolute;
        top: 11px;
        right: 10px;
    }

`

const Dia = styled.div`
    width: 30px;
        height: 30px;

        display: flex;
        justify-content: center;
        align-items: center;

        background: ${props => props.back};
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        /* identical to box height */


        color: ${props => props.cor};

`

const Dias = styled.div`

        display: flex;
        width: 234px;
        justify-content: space-between;
        margin-top: 8px;

`