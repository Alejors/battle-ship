import { useContext } from "react";
import Gameboard from "./components/gameboard";
import Pcboard from "./components/pcBoard";
import injectContext, { Context } from "./store/appContext";
import './styles/App.css';
import Pickingboard from "./components/pickingBoard";

const App = () => {
  const { store } = useContext(Context);
  return (
    <div className="App">
      <header className="App-header">
        <h1> -- Combate Naval --</h1>
        {store.ready ? 
          <h3 style={{'textTransform': 'capitalize', 'textAlign': 'center'}}>Es el turno de {store.turn}</h3> :
          <h3 style={{'textAlign': 'center', 'color': 'red'}}>Escoge la ubicación de {
            store.playerShips.carrier.length < 5 ? 'tu Portaaviones (5 Espacios)' :
            store.playerShips.vessel.length < 4 ? 'tu Carguero (4 Espacios)' :
            store.playerShips.submarine.length < 3 ? 'tu Submarino (3 Espacios)' :
            store.playerShips.cruiser.length < 3 ? 'tu Crusero (3 Espacios)' :
            'tu Bote (2 Espacios)'
          }</h3>
        }
      </header>
      { 
      store.ready === false ? 
      <Pickingboard /> :
        store.turn === 'Jugador' ? 
        <Gameboard /> : 
        <Pcboard />
        }
    <small className="fixed-bottom ms-3 mb-2">Imagen de fondo de <a href="https://unsplash.com/@mafonso?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Afonso</a> en <a href="https://unsplash.com/es/s/fotos/navy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </small>
    </div>
  );
}

export default injectContext(App);
