import { useState, useContext } from "react"
import styled from 'styled-components';
import Contextos from '../contextos/Context'

let dias = []

export default function  Props_dia(props){
    const {setDiaHabito, ativado} = useContext(Contextos);
    const [fundo_dia, setFundo_dia] = useState(true)
    return( fundo_dia ?
        <><Dia cor = {'#DBDBDB'} back = {'#FFFFFF'} onClick={()=> escolher_dia(props.indice)}>{props.dia}</Dia></>
        : <><Dia cor = {'#FFFFFF'} back = {'#DBDBDB'} onClick={()=> escolher_dia(props.indice)}>{props.dia}</Dia></>
    )

    function escolher_dia(dia){
        if(ativado){
            if(fundo_dia === true){
            dias.push(dia+1)
            setFundo_dia(false)
        }else{
            setFundo_dia(true)
            dias = dias.filter(item => item !== (dia+1))
        }
        setDiaHabito(dias)
        }
        
    }
}

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