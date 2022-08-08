import styled from 'styled-components';
import { useNavigate } from 'react-router';

import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";




export default function Topo() {
    const navigate = useNavigate();
    return (
        <>
            <Footer>
                <div onClick={() => navigate('/habitos')} >Hábitos</div>
                <div onClick={() => navigate('/historico')} >Histórico</div>
                <div onClick={() => (localStorage.setItem("porcentagem", 0), navigate('/hoje'))} className='loaderCentral'>
                    <CircularProgressbar
                        value={JSON.parse(localStorage.getItem("porcentagem"))}
                        text={'Hoje'}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                </div>
            </Footer>
            <Compensando></Compensando>
        </>
    )
}

const Footer = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0px;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px 0 36px;

    background: #FFFFFF;;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #52B6FF;

    .loaderCentral{
         width: 91px;
         height: 91px;
         position: fixed;
         bottom: 10px;
         left: calc(50% - 45.5px);
        
     }


`

const Compensando = styled.div`
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
`