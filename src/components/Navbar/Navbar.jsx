import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="Topo">
        <div className="Rolex">
          <img className="LogoRolex" src="../Logos/Rolex.png" />
        </div>
        <div className="Login">
          <img className="LoginLogo" src="../Logos/Perfil.png" />
          <a href="#">Login</a>
        </div>
      </div>
      <div >
        <ul className="Category">
          <li>RELÓGIOS</li>
          <li>SOBRE</li>
          <li>DISTRIBUIDORAS</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
