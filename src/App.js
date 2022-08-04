import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hoje from "./componentes/Hoje";
import Login from './componentes/Login';
import GlobalStyle from './styles/globalStyles';
import Cadastrar from "./componentes/Cadrastro";
import { useState, useEffect } from "react";
import Contextos from './contextos/Context'
import Habitos from './componentes/Habitos'

export default function App() {
    const [diaHabito, setDiaHabito] = useState("")
    const [token, setToken] = useState("")
    const [novohab,setNovohab] = useState('apagar')
    const [ativado,setAtivado] = useState(true);
    const [habitos, setHabitos] = useState([])
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Contextos.Provider value={{ diaHabito, setDiaHabito, novohab, setNovohab, ativado, setAtivado, habitos, setHabitos }}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<Cadastrar />} />
                        <Route path="/hoje" element={<Hoje />} />
                        <Route path="/habitos" element={<Habitos />} />
                    </Routes>
                </Contextos.Provider>
            </BrowserRouter>
        </>
    );
}