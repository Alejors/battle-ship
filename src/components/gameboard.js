import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import '../styles/gameboard.css';
// import Tile from './tile'

const Gameboard = () => {
  const { store, actions } = useContext(Context)
  return (
    <div className='container'>
      {/* <Tile /> */}
      <div className='row d-flex'>
        <div className='tile header'>  
        </div>
        <div className='tile header'>
          A
        </div>
        <div className='tile header'>
          B
        </div>
        <div className='tile header'>
          C
        </div>
        <div className='tile header'>
          D
        </div>
        <div className='tile header'>
          E
        </div>
        <div className='tile header'>
          F
        </div>
        <div className='tile header'>
          G
        </div>
        <div className='tile header'>
          H
        </div>
        <div className='tile header'>
          I
        </div>
        <div className='tile header'>
          F
        </div>
      </div>
      <div className='row d-flex'>
      <aside className='tile header'>0</aside>
        <div
          onClick={() => actions.assign(0, 0)}
          className='tile'
        >
          {store.playerBoard[0][0]}
        </div>
        <div
          onClick={() => actions.assign(0, 1)}
          className='tile'
        >
          {store.playerBoard[0][1]}
        </div>
        <div
          onClick={() => actions.assign(0, 2)}
          className='tile'
        >
          {store.playerBoard[0][2]}
        </div>
        <div
          onClick={() => actions.assign(0, 3)}
          className='tile'
        >
          {store.playerBoard[0][3]}
        </div>
        <div
          onClick={() => actions.assign(0, 4)}
          className='tile'
        >
          {store.playerBoard[0][4]}
        </div>
        <div
          onClick={() => actions.assign(0, 5)}
          className='tile'
        >
          {store.playerBoard[0][5]}
        </div>
        <div
          onClick={() => actions.assign(0, 6)}
          className='tile'
        >
          {store.playerBoard[0][6]}
        </div>
        <div
          onClick={() => actions.assign(0, 7)}
          className='tile'
        >
          {store.playerBoard[0][7]}
        </div>
        <div
          onClick={() => actions.assign(0, 8)}
          className='tile'
        >
          {store.playerBoard[0][8]}
        </div>
        <div
          onClick={() => actions.assign(0, 9)}
          className='tile'
        >
          {store.playerBoard[0][9]}
        </div>
      </div>
      <div className='row d-flex'>
      <aside className='tile header'>1</aside>
        <div
          onClick={() => actions.assign(1, 0)}
          className='tile'
        >
          {store.playerBoard[1][0]}
        </div>
        <div
          onClick={() => actions.assign(1, 1)}
          className='tile'
        >
          {store.playerBoard[1][1]}
        </div>
        <div
          onClick={() => actions.assign(1, 2)}
          className='tile'
        >
          {store.playerBoard[1][2]}
        </div>
        <div
          onClick={() => actions.assign(1, 3)}
          className='tile'
        >
          {store.playerBoard[1][3]}
        </div>
        <div
          onClick={() => actions.assign(1, 4)}
          className='tile'
        >
          {store.playerBoard[1][4]}
        </div>
        <div
          onClick={() => actions.assign(1, 5)}
          className='tile'
        >
          {store.playerBoard[1][5]}
        </div>
        <div
          onClick={() => actions.assign(1, 6)}
          className='tile'
        >
          {store.playerBoard[1][6]}
        </div>
        <div
          onClick={() => actions.assign(1, 7)}
          className='tile'
        >
          {store.playerBoard[1][7]}
        </div>
        <div
          onClick={() => actions.assign(1, 8)}
          className='tile'
        >
          {store.playerBoard[1][8]}
        </div>
        <div
          onClick={() => actions.assign(1, 9)}
          className='tile'
        >
          {store.playerBoard[1][9]}
        </div>
      </div>
      <div className='row d-flex'>
      <aside className='tile header'>2</aside>
        <div
          onClick={() => actions.assign(2, 0)}
          className='tile'
        >
          {store.playerBoard[2][0]}
        </div>
        <div
          onClick={() => actions.assign(2, 1)}
          className='tile'
        >
          {store.playerBoard[2][1]}
        </div>
        <div
          onClick={() => actions.assign(2, 2)}
          className='tile'
        >
          {store.playerBoard[2][2]}
        </div>
        <div
          onClick={() => actions.assign(2, 3)}
          className='tile'
        >
          {store.playerBoard[2][3]}
        </div>
        <div
          onClick={() => actions.assign(2, 4)}
          className='tile'
        >
          {store.playerBoard[2][4]}
        </div>
        <div
          onClick={() => actions.assign(2, 5)}
          className='tile'
        >
          {store.playerBoard[2][5]}
        </div>
        <div
          onClick={() => actions.assign(2, 6)}
          className='tile'
        >
          {store.playerBoard[2][6]}
        </div>
        <div
          onClick={() => actions.assign(2, 7)}
          className='tile'
        >
          {store.playerBoard[2][7]}
        </div>
        <div
          onClick={() => actions.assign(2, 8)}
          className='tile'
        >
          {store.playerBoard[2][8]}
        </div>
        <div
          onClick={() => actions.assign(2, 9)}
          className='tile'
        >
          {store.playerBoard[2][9]}
        </div>
      </div>
      <div className='row d-flex'>
      <aside className='tile header'>3</aside>
        <div
          onClick={() => actions.assign(3, 0)}
          className='tile'
        >
          {store.playerBoard[3][0]}
        </div>
        <div
          onClick={() => actions.assign(3, 1)}
          className='tile'
        >
          {store.playerBoard[3][1]}
        </div>
        <div
          onClick={() => actions.assign(3, 2)}
          className='tile'
        >
          {store.playerBoard[3][2]}
        </div>
        <div
          onClick={() => actions.assign(3, 3)}
          className='tile'
        >
          {store.playerBoard[3][3]}
        </div>
        <div
          onClick={() => actions.assign(3, 4)}
          className='tile'
        >
          {store.playerBoard[3][4]}
        </div>
        <div
          onClick={() => actions.assign(3, 5)}
          className='tile'
        >
          {store.playerBoard[3][5]}
        </div>
        <div
          onClick={() => actions.assign(3, 6)}
          className='tile'
        >
          {store.playerBoard[3][6]}
        </div>
        <div
          onClick={() => actions.assign(3, 7)}
          className='tile'
        >
          {store.playerBoard[3][7]}
        </div>
        <div
          onClick={() => actions.assign(3, 8)}
          className='tile'
        >
          {store.playerBoard[3][8]}
        </div>
        <div
          onClick={() => actions.assign(3, 9)}
          className='tile'
        >
          {store.playerBoard[3][9]}
        </div>
      </div>
      <div className='row d-flex'>
      <aside className='tile header'>4</aside>
        <div
          onClick={() => actions.assign(4, 0)}
          className='tile'
        >
          {store.playerBoard[4][0]}
        </div>
        <div
          onClick={() => actions.assign(4, 1)}
          className='tile'
        >
          {store.playerBoard[4][1]}
        </div>
        <div
          onClick={() => actions.assign(4, 2)}
          className='tile'
        >
          {store.playerBoard[4][2]}
        </div>
        <div
          onClick={() => actions.assign(4, 3)}
          className='tile'
        >
          {store.playerBoard[4][3]}
        </div>
        <div
          onClick={() => actions.assign(4, 4)}
          className='tile'
        >
          {store.playerBoard[4][4]}
        </div>
        <div
          onClick={() => actions.assign(4, 5)}
          className='tile'
        >
          {store.playerBoard[4][5]}
        </div>
        <div
          onClick={() => actions.assign(4, 6)}
          className='tile'
        >
          {store.playerBoard[4][6]}
        </div>
        <div
          onClick={() => actions.assign(4, 7)}
          className='tile'
        >
          {store.playerBoard[4][7]}
        </div>
        <div
          onClick={() => actions.assign(4, 8)}
          className='tile'
        >
          {store.playerBoard[4][8]}
        </div>
        <div
          onClick={() => actions.assign(4, 9)}
          className='tile'
        >
          {store.playerBoard[4][9]}
        </div>
      </div>
      <div className='row d-flex'>
      <aside className='tile header'>5</aside>
        <div
          onClick={() => actions.assign(5, 0)}
          className='tile'
        >
          {store.playerBoard[5][0]}
        </div>
        <div
          onClick={() => actions.assign(5, 1)}
          className='tile'
        >
          {store.playerBoard[5][1]}
        </div>
        <div
          onClick={() => actions.assign(5, 2)}
          className='tile'
        >
          {store.playerBoard[5][2]}
        </div>
        <div
          onClick={() => actions.assign(5, 3)}
          className='tile'
        >
          {store.playerBoard[5][3]}
        </div>
        <div
          onClick={() => actions.assign(5, 4)}
          className='tile'
        >
          {store.playerBoard[5][4]}
        </div>
        <div
          onClick={() => actions.assign(5, 5)}
          className='tile'
        >
          {store.playerBoard[5][5]}
        </div>
        <div
          onClick={() => actions.assign(5, 6)}
          className='tile'
        >
          {store.playerBoard[5][6]}
        </div>
        <div
          onClick={() => actions.assign(5, 7)}
          className='tile'
        >
          {store.playerBoard[5][7]}
        </div>
        <div
          onClick={() => actions.assign(5, 8)}
          className='tile'
        >
          {store.playerBoard[5][8]}
        </div>
        <div
          onClick={() => actions.assign(5, 9)}
          className='tile'
        >
          {store.playerBoard[5][9]}
        </div>
      </div>
      <div className='row d-flex'>
      <aside className='tile header'>6</aside>
        <div
          onClick={() => actions.assign(6, 0)}
          className='tile'
        >
          {store.playerBoard[6][0]}
        </div>
        <div
          onClick={() => actions.assign(6, 1)}
          className='tile'
        >
          {store.playerBoard[6][1]}
        </div>
        <div
          onClick={() => actions.assign(6, 2)}
          className='tile'
        >
          {store.playerBoard[6][2]}
        </div>
        <div
          onClick={() => actions.assign(6, 3)}
          className='tile'
        >
          {store.playerBoard[6][3]}
        </div>
        <div
          onClick={() => actions.assign(6, 4)}
          className='tile'
        >
          {store.playerBoard[6][4]}
        </div>
        <div
          onClick={() => actions.assign(6, 5)}
          className='tile'
        >
          {store.playerBoard[6][5]}
        </div>
        <div
          onClick={() => actions.assign(6, 6)}
          className='tile'
        >
          {store.playerBoard[6][6]}
        </div>
        <div
          onClick={() => actions.assign(6, 7)}
          className='tile'
        >
          {store.playerBoard[6][7]}
        </div>
        <div
          onClick={() => actions.assign(6, 8)}
          className='tile'
        >
          {store.playerBoard[6][8]}
        </div>
        <div
          onClick={() => actions.assign(6, 9)}
          className='tile'
        >
          {store.playerBoard[6][9]}
        </div>
      </div>
      <div className='row d-flex'>
      <aside className='tile header'>7</aside>
        <div
          onClick={() => actions.assign(7, 0)}
          className='tile'
        >
          {store.playerBoard[7][0]}
        </div>
        <div
          onClick={() => actions.assign(7, 1)}
          className='tile'
        >
          {store.playerBoard[7][1]}
        </div>
        <div
          onClick={() => actions.assign(7, 2)}
          className='tile'
        >
          {store.playerBoard[7][2]}
        </div>
        <div
          onClick={() => actions.assign(7, 3)}
          className='tile'
        >
          {store.playerBoard[7][3]}
        </div>
        <div
          onClick={() => actions.assign(7, 4)}
          className='tile'
        >
          {store.playerBoard[7][4]}
        </div>
        <div
          onClick={() => actions.assign(7, 5)}
          className='tile'
        >
          {store.playerBoard[7][5]}
        </div>
        <div
          onClick={() => actions.assign(7, 6)}
          className='tile'
        >
          {store.playerBoard[7][6]}
        </div>
        <div
          onClick={() => actions.assign(7, 7)}
          className='tile'
        >
          {store.playerBoard[7][7]}
        </div>
        <div
          onClick={() => actions.assign(7, 8)}
          className='tile'
        >
          {store.playerBoard[7][8]}
        </div>
        <div
          onClick={() => actions.assign(7, 9)}
          className='tile'
        >
          {store.playerBoard[7][9]}
        </div>
      </div>
      <div className='row d-flex'>
      <aside className='tile header'>8</aside>
        <div
          onClick={() => actions.assign(8, 0)}
          className='tile'
        >
          {store.playerBoard[8][0]}
        </div>
        <div
          onClick={() => actions.assign(8, 1)}
          className='tile'
        >
          {store.playerBoard[8][1]}
        </div>
        <div
          onClick={() => actions.assign(8, 2)}
          className='tile'
        >
          {store.playerBoard[8][2]}
        </div>
        <div
          onClick={() => actions.assign(8, 3)}
          className='tile'
        >
          {store.playerBoard[8][3]}
        </div>
        <div
          onClick={() => actions.assign(8, 4)}
          className='tile'
        >
          {store.playerBoard[8][4]}
        </div>
        <div
          onClick={() => actions.assign(8, 5)}
          className='tile'
        >
          {store.playerBoard[8][5]}
        </div>
        <div
          onClick={() => actions.assign(8, 6)}
          className='tile'
        >
          {store.playerBoard[8][6]}
        </div>
        <div
          onClick={() => actions.assign(8, 7)}
          className='tile'
        >
          {store.playerBoard[8][7]}
        </div>
        <div
          onClick={() => actions.assign(8, 8)}
          className='tile'
        >
          {store.playerBoard[8][8]}
        </div>
        <div
          onClick={() => actions.assign(8, 9)}
          className='tile'
        >
          {store.playerBoard[8][9]}
        </div>
      </div>
      <div className='row d-flex'>
      <aside className='tile header'>9</aside>
        <div
          onClick={() => actions.assign(9, 0)}
          className='tile'
        >
          {store.playerBoard[9][0]}
        </div>
        <div
          onClick={() => actions.assign(9, 1)}
          className='tile'
        >
          {store.playerBoard[9][1]}
        </div>
        <div
          onClick={() => actions.assign(9, 2)}
          className='tile'
        >
          {store.playerBoard[9][2]}
        </div>
        <div
          onClick={() => actions.assign(9, 3)}
          className='tile'
        >
          {store.playerBoard[9][3]}
        </div>
        <div
          onClick={() => actions.assign(9, 4)}
          className='tile'
        >
          {store.playerBoard[9][4]}
        </div>
        <div
          onClick={() => actions.assign(9, 5)}
          className='tile'
        >
          {store.playerBoard[9][5]}
        </div>
        <div
          onClick={() => actions.assign(9, 6)}
          className='tile'
        >
          {store.playerBoard[9][6]}
        </div>
        <div
          onClick={() => actions.assign(9, 7)}
          className='tile'
        >
          {store.playerBoard[9][7]}
        </div>
        <div
          onClick={() => actions.assign(9, 8)}
          className='tile'
        >
          {store.playerBoard[9][8]}
        </div>
        <div
          onClick={() => actions.assign(9, 9)}
          className='tile'
        >
          {store.playerBoard[9][9]}
        </div>
      </div>
    </div>
  )
}

export default Gameboard
