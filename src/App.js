import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hoje from "./componentes/Hoje";
import Login from './componentes/Login';
import GlobalStyle from './styles/globalStyles';
import Cadastrar from "./componentes/Cadrastro";
import { useState, useEffect } from "react";
import Contextos from './contextos/Context'
import Habitos from './componentes/Habitos'
import Historico from './componentes/Historico'
import PrivatePage from "./componentes/Private_Pages";

export default function App() {
    const [diaHabito, setDiaHabito] = useState("")
    const [novohab, setNovohab] = useState('apagar')
    const [ativado, setAtivado] = useState(true);
    const [habitos, setHabitos] = useState([])
    const [aux, setAux] = useState([])

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Contextos.Provider value={{
                    diaHabito,
                    setDiaHabito,
                    novohab,
                    setNovohab,
                    ativado,
                    setAtivado,
                    habitos,
                    setHabitos,
                    aux,
                    setAux
                }}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<Cadastrar />} />

                        <Route path="/hoje"
                            element={
                                <PrivatePage>
                                    <Hoje />
                                </PrivatePage>
                            } />

                        <Route path="/habitos"
                            element={
                                <PrivatePage>
                                    <Habitos />
                                </PrivatePage>
                            } />

                        <Route path="/historico"
                            element={
                                <PrivatePage>
                                    <Historico />
                                </PrivatePage>
                            } />

                    </Routes>
                </Contextos.Provider>
            </BrowserRouter>
        </>
    );
}