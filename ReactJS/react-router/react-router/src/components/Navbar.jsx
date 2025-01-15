import React from "react";
// Importando Link para usar links dentro de páginas
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"contact"}>Contato</Link>
    </div>
  );
};

export default Navbar;
