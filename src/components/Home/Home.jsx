import "./Home.css";

const home = () => {
  return (
    <div className="Home">
      <div className="OsyrisImage">
        <img src="../Images/Osyris.png" />
      </div>
      <div className="OsyrisDescription">
        <h1>OSYRIS WATCH</h1>
        <h2>O MAIS NOVO E MODERNO</h2>
        <button type="button">
          <a href="#">COMPRE AGORA</a>
        </button>
      </div>
    </div>
  );
};

export default home;
