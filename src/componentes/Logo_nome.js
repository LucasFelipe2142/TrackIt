import logo from '../img/logo.png'
import styled from 'styled-components';

export default function Logo_img(){
    return(
        <Imagem>
            <img src={logo} />
            TrackIt
        </Imagem>
    )
}

const Imagem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 33px;

   img{
    width: 154px;
   } 

    font-family: 'Playball',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 68.982px;
    line-height: 86px;
    color: #126BA5;
`