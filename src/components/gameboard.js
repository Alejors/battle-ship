import React, { useContext } from 'react'
import { Context } from '../store/appContext'

const Gameboard = () => {
  const {store, actions} = useContext(Context);
    return (
    <div className='container bg-dark bg-opacity-25'>
      <div className='row justify-content-center'>
        <div
          onClick={() => actions.assign(0,0)}
          className='d-flex align-items-center justify-content-center col-2 border-bottom border-end tile display-2'
        >
          {store.board[0][0]}
        </div>
        <div
          onClick={() => actions.assign(0,1)}
          className='d-flex align-items-center justify-content-center col-2 border-bottom tile display-2'
        >
          {store.board[1]}
        </div>
        <div
          onClick={() => actions.assign(0,2)}
          className='d-flex align-items-center justify-content-center col-2 border-bottom border-start tile display-2'
        >
          {store.board[2]}
        </div>
      </div>
      <div className='row justify-content-center'>
        <div
          onClick={() => actions.assign(0,3)}
          className='d-flex align-items-center justify-content-center col-2 tile border-bottom border-end display-2'
        >
          {store.board[3]}
        </div>
        <div
          onClick={() => actions.assign(0,4)}
          className='d-flex align-items-center justify-content-center col-2 border-bottom border-end tile display-2'
        >
          {store.board[4]}
        </div>
        <div
          onClick={() => actions.assign(0,5)}
          className='d-flex align-items-center justify-content-center col-2 tile border-bottom display-2'
        >
          {store.board[5]}
        </div>
      </div>
      <div className='row justify-content-center'>
        <div
          onClick={() => actions.assign(0,6)}
          className='d-flex align-items-center justify-content-center col-2 border-end tile display-2'
        >
          {store.board[6]}
        </div>
        <div
          onClick={() => actions.assign(0,7)}
          className='d-flex align-items-center justify-content-center col-2 border-end tile display-2'
        >
          {store.board[7]}
        </div>
        <div
          onClick={() => actions.assign(0,8)}
          className='d-flex align-items-center justify-content-center col-2 tile display-2'
        >
          {store.board[8]}
        </div>
        <div
          onClick={() => actions.assign(0,9)}
          className='d-flex align-items-center justify-content-center col-2 tile display-2'
        >
          {store.board[8]}
        </div>
      </div>
    </div>
  )
}

export default Gameboard
