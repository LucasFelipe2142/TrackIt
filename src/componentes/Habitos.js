
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useContext,useState } from "react";
import Topo from './Top'
import Footer from './Footer'
import Contextos from '../contextos/Context'
import Novo_habito from './Novo_habito'
import Meus_habitos from './Meus_habitos'



export default function Hoje(){
    const {novohab,setNovohab,habitos} = useContext(Contextos)
    let temhabito;

    if(habitos.length === 0){
        temhabito = 'instruction'
    }else temhabito = 'instruction apagar'


    return(
        <Container><div style={{height: 91,}}></div>
            <Topo />
            <div className='inserir_habito'>
            Meus hábitos
            <div onClick={() => ativar()} className='button'>+</div>
            </div>
            <Novo_habito />
            <Meus_habitos />
            <div className={temhabito}>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </div>
            <Footer />
        </Container>
    )
    function ativar(){
        if(novohab === 'apagar')setNovohab("");
        else setNovohab('apagar')
    }

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
        margin-bottom: 20px;
        /* identical to box height */


        color: #126BA5;

    }

    .instruction{
        width: 100%;
        height: 74px;
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

    .apagar{
        display: none;
    }


`
