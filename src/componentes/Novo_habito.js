import styled from 'styled-components';
import axios from 'axios';
import { useState , useContext } from 'react';
import Props_dia from './Props_dia'
import Contextos from '../contextos/Context';
import { ThreeDots } from  'react-loader-spinner'
import { useNavigate } from 'react-router-dom';

const semana = []
semana.push('S')
semana.push('T')
semana.push('Q')
semana.push('Q')
semana.push('S')
semana.push('S')
semana.push('D')

export default function Habito(){ 
    const navigate = useNavigate();  
    const {diaHabito,novohab,ativado,setAtivado,setNovohab} = useContext(Contextos);
    
    const [habito, setHabito] = useState('')
    const [botao,setBotao] = useState("")
    const [loader,setLoader] = useState("apagar")
    const [cor,setCor] = useState(1);
    const [espera,setEspera] = useState(true);
    const [desabilitarinput,setDesabilitarinput] = useState(false)

    const config = {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      };

console.log(diaHabito)
    return(
        <Novo_habito className={novohab}>
            <input disabled={desabilitarinput} type="text" name="input" placeholder="nome do hábito" value={habito} onChange={e => setHabito(e.target.value)} />
            <div className='dias'>
               {semana.map((day,index)=> (<Props_dia key = {index} dia = {day} indice = {index} />))}
            </div>
            <div className='salvar_cancelar'>
                <div onClick={()=> (setNovohab('apagar'))}>Cancelar</div>
                <div cor={cor} onClick={()=> (mandarAPI())} className='salvar'>
                    <div className={botao}>Salvar</div>
                    <div className = {loader} ><ThreeDots color="#FFFFFF" height={45} width={45} /></div>
                </div>
            </div>
        </Novo_habito>
    )

    function mandarAPI(){
        if(ativado){
            console.log('ativado')
            if(habito !== '' && diaHabito.length > 0){
                setDesabilitarinput(true)
                setAtivado(!true)
                setBotao("apagar")
                setLoader("")
                setCor(0.7)
                let dados = {
                    name: habito,
                    days: diaHabito
                }
                    
    
                const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', dados,config);
                promise.then(()=>document.location.reload(true))
                promise.catch(()=> (setEspera(!true),alert("Algo de errado não está certo")))
    
                 if(espera !== true){
                    setTimeout(()=>(
                        setDesabilitarinput(false),
                        setAtivado(true),
                        setBotao(""),
                        setLoader("apagar"),
                        setCor(1),
                        setEspera(true)
                    ), 1000)
                 }
            } else alert("Preench todos os campos");
        } else console.log('desativado')
    }
}

const Novo_habito = styled.div`
    min-width: 340px;
    min-height: 180px;
    margin-bottom: 20px;

    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    padding: 0 18px 0 18px;
    flex-direction: column;

    input{
        width: 303px;
        height: 45px;
        margin-top: 18px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 11px;

        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        /* identical to box height */


        color: #DBDBDB;
    }

    input::placeholder {
        color: #DBDBDB;
    }

    .dias{
        display: flex;
        width: 234px;
        justify-content: space-between;
        margin-top: 8px;
    }

    .salvar{
        width: 84px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;

        background: #52B6FF;
        border-radius: 4.63636px;

        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;

        opacity: ${props => props.cor};
        color: #FFFFFF;
        margin-left: 23px;
    }

    .salvar_cancelar{
        width: 303px;
        display: flex;
        align-items: center;
        justify-content: end;

        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;

        color: #52B6FF;

        margin-top: 32px;

    }

    .apagar{
        display: none;
    }
`

