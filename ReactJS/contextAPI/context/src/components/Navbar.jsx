// Importando Link para usar na barra de navegação
import { Link, NavLink } from "react-router-dom";
// Estilização do Link Ativo
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      {/* <Link to="/">Home</Link>
      <Link to="contact">Contatos</Link> */}
      {/* Link Ativo */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contatos</NavLink>
    </div>
  );
};

export default Navbar;
