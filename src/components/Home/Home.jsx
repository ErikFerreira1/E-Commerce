import "./Home.css";

const home = () => {
  return (
    <div>
      <ul>
        <li>
          <div className="OsyrisImage">
            <img src="../Images/Osyris.png" />
            <div className="OsyrisDescription">
              <h1>OSYRIS WATCH</h1>
              <h2>O MAIS NOVO E MODERNO</h2>
              <button type="button">
                <a href="#">COMPRE AGORA</a>
              </button>
            </div>
          </div>
        </li>
        <li>
        <div className="VoguezImage">
          <img src="../Images/Voguez.jpg"  />
          <div className="VoguezDescription">
              <h1>OSYRIS WATCH</h1>
              <h2>O MAIS NOVO E MODERNO</h2>
              <button type="button">
                <a href="#">COMPRE AGORA</a>
              </button>
            </div>
        </div>
        </li>
      </ul>
    </div>
  );
};

export default home;
