import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./componentes/Cadrastro";
import Login from './componentes/Login';
import GlobalStyle from './styles/globalStyles';
import Cadastrar from "./componentes/Cadrastro";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastrar />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}