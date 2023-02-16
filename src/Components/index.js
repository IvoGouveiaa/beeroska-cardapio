import {Link} from "react-router-dom";
import style from "./style.css";

function Header() {
  return (
   <header>
    Beeroska
    <hr/>
    <div className="menu">
    <Link  to = '/' >Pagina Inicial</Link>
    <Link to = '/cardapiob'> Cardapio de Bebidas </Link>
    <Link to = '/cardapioc'> Cardapio de Comidas </Link>
    </div>
  </header>
  );
}
 export default Header;