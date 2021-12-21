import "./css/style.css";
import "./css/responsive.css";
import Playerinfo from "./components/player-info";
import Player from "./components/Player";

function App() {
  return (
    <div className="container myPlayer">
      <Playerinfo></Playerinfo>
      <Player></Player>
    </div>
  );
}

export default App;
