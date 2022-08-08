import Topo from './Top'
import Footer from './Footer'
import styled from 'styled-components';

export default function Historico() {
    return (
        <>
            <Topo />
            <Texto>
                <p>Histórico</p>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </Texto>
            <Footer />
        </>
    )
}

const Texto = styled.div`
    margin-top: 98px;
    width: 338px;
    margin-left: 17px;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        margin-bottom: 17px;
        /* identical to box height */


        color: #126BA5;

    }
`