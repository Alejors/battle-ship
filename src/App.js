import { useContext } from "react";
import Gameboard from "./components/gameboard";
import Pcboard from "./components/pcBoard";
import injectContext, { Context } from "./store/appContext";
import './styles/App.css';

const App = () => {
  const { store } = useContext(Context);
  return (
    <div className="App">
      <header className="App-header">
        <h1> -- Combate Naval --</h1>
        <h3 style={{'textTransform': 'capitalize', 'textAlign': 'center'}}>Es el turno de {store.turn}</h3>
      </header>
      {store.turn === 'player' ? 
        <Gameboard /> : 
        <Pcboard />
        }
    <small className="fixed-bottom ms-3 mb-2">Imagen de fondo de <a href="https://unsplash.com/@mafonso?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Afonso</a> en <a href="https://unsplash.com/es/s/fotos/navy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </small>
    </div>
  );
}

export default injectContext(App);
