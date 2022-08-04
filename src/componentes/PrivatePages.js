import Header from "./Header";
import { useNavigate } from "react-router-dom";

const SEC = 1000;
const MIN_5 = SEC * 60 * 5;
const MIN_1 = SEC * 60 * 1;

function renderError() {

  localStorage.clear("trackit");
  alert('VOCÊ NÃO É AUTORIZADO')
}

export default function PrivatePage({ children }) {


  const auth = JSON.parse(localStorage.getItem("trackit"));

  if (!auth) {
    return renderError();
  }

  const now = +new Date();
  const timeLogged = auth.timestamp;

  if (now - timeLogged <= MIN_1) {
    return (
      <>
        <Header />
        {children}
      </>
    );
  } else {
    //navigate("/");
    renderError();
  }
}