import { useNavigate } from "react-router-dom";

export default function PrivatePage({ children }) {
  const navigate = useNavigate()

  const auth = JSON.parse(localStorage.getItem("token"));

  if (!auth) {
    alert('Você não está mais logado, faça novamente o login para continuar')
    navigate('/')

  }

  return (
    <>
      {children}
    </>
  );

}
