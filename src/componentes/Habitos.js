import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useState, useEffect, useContext } from "react";
import { ThreeDots } from  'react-loader-spinner'
import Topo from './Top'
import Footer from './Footer'
import Contextos from '../contextos/Context'

export default function Hoje(){
    const {foto,token} = useContext(Contextos);
    console.log(foto,token)
    return(
        <Container><div style={{height: 91,}}></div>
            <Topo />
            <div className='inserir_habito'>
            Meus hábitos
            <div className='button'>+</div>
            </div>

            <Novo_habito></Novo_habito>

            <div className='instruction'>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </div>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
    .button{
        width: 40px;
        height: 35px;

        background: #52B6FF;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
        /* identical to box height */

        text-align: center;

        color: #FFFFFF;

    }

    .inserir_habito{
        display: flex;
        width: 100%;
        padding: 0 18px 0 18px;
        align-items: center;
        justify-content: space-between;
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        /* identical to box height */


        color: #126BA5;

    }

    .instruction{
        width: 100%;
        height: 74px;
        margin-top: 30px;
        padding: 0 18px 0 18px;

        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 22px;

        color: #666666;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Novo_habito = styled.div`
    width: 340px;
    height: 180px;
    margin-top: 20px;

    background: #FFFFFF;
    border-radius: 5px;
`