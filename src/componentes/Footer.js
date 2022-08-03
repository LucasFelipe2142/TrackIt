import axios from 'axios';
import styled from 'styled-components';
import Logo from './Logo_nome'
import { useNavigate } from 'react-router';
import { useState, useEffect } from "react";
import { ThreeDots } from 'react-loader-spinner'

import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";




export default function Topo() {
    return (
        <>
            <Footer>
                

            </Footer>
<Alinhar>
                    <div className='loaderCentral'>
                        <CircularProgressbar
                            value={50}
                            text={'50%'}
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
                </Alinhar>
            <Compensando></Compensando>
        </>
    )
}

const Footer = styled.div`
    position: fixed;
    min-width: 375px;
    height: 70px;
    left: 0px;
    bottom: 0;

    background: #FFFFFF;;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

`

const Compensando = styled.div`
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
`


const Alinhar =styled.div`
    position: fixed;
    width: 100%;
    height: 91px;
    display: flex;
    justify-content: center;
    bottom: 0;
    margin-bottom: 10px;

    .loaderCentral{
        width: 91px;
        height: 91px;
        
    }
`