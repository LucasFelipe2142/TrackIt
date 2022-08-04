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
        <Container>
            <Topo />
            
            <Footer />
        </Container>
    )
}

const Container = styled.div`

`