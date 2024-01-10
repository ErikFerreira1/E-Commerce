import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="Topo">
        <div>
          <img className="LogoRolex" src="../Logos/Rolex.png" />
        </div>
        <div>
          <img className="LoginHome" src="../Logos/Perfil.png" />
          <a>Login</a>
        </div>
      </div>
      <div>
        <ul>
          <li>RELÓGIOS</li>
          <li>SOBRE</li>
          <li>DISTRIBUIDORAS</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
