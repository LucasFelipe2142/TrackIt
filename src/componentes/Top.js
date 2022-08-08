import Contextos from '../contextos/Context'
import styled from 'styled-components';
import { useContext } from 'react';

export default function Topo() {
    const { foto, token } = useContext(Contextos);
    return (
        <>
            <Top>
                TrackIt
                <img src={JSON.parse(localStorage.getItem("perfil"))} />
            </Top>

            <Compensando></Compensando>
        </>

    )
}

const Top = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;
    padding-left: 18px;
    padding-right: 18px;
    z-index: 1;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 51px;
        height: 51px;
        

        background: url(image.png);
        border-radius: 98.5px;
    }

    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    /* identical to box height */


    color: #FFFFFF;
`
const Compensando = styled.div`
    height: 70px;
    position: absolute;
    top: 0;
    left: 0;
`