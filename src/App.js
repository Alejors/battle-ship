import { useContext } from "react";
import Gameboard from "./components/gameboard";
import Pcboard from "./components/pcBoard";
import injectContext, { Context } from "./store/appContext";
import './styles/App.css';

const App = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="App">
      <header className="App-header">
        <h1> -- Combate Naval --</h1>
        {store.turn === 'pc' ?
          <button onClick={() => actions.tileMark()}>MARK A TILE</button> : null}
      </header>
      {store.turn === 'player' ? 
        <Gameboard /> : 
        <Pcboard />
        }

    </div>
  );
}

export default injectContext(App);
