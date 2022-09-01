import { useContext } from "react";
import Gameboard from "./components/gameboard";
import injectContext, { Context } from "./store/appContext";
import './styles/App.css';

const App = () => {
  const { actions } = useContext(Context);
  return (
    <div className="App">
      <header className="App-header">       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => actions.tileMark()}>MARK A TILE</button>
      </header>
      <Gameboard />

    </div>
  );
}

export default injectContext(App);
