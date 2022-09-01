import React, { useContext } from 'react'
import { Context } from '../store/appContext'

const Pcboard = () => {
  const { store } = useContext(Context)
  return (
    <div
      className='container'
    >
      {/* <pctile /> */}
      <div className='row d-flex'>
        <div className='pctile header'></div>
        <div className='pctile header'>A</div>
        <div className='pctile header'>B</div>
        <div className='pctile header'>C</div>
        <div className='pctile header'>D</div>
        <div className='pctile header'>E</div>
        <div className='pctile header'>F</div>
        <div className='pctile header'>G</div>
        <div className='pctile header'>H</div>
        <div className='pctile header'>I</div>
        <div className='pctile header'>F</div>
      </div>
      <div className='row d-flex'>
        <aside className='pctile header'>0</aside>
        <div className='pctile'>{store.pcBoard[0][0]}</div>
        <div className='pctile'>{store.pcBoard[0][1]}</div>
        <div className='pctile'>{store.pcBoard[0][2]}</div>
        <div className='pctile'>{store.pcBoard[0][3]}</div>
        <div className='pctile'>{store.pcBoard[0][4]}</div>
        <div className='pctile'>{store.pcBoard[0][5]}</div>
        <div className='pctile'>{store.pcBoard[0][6]}</div>
        <div className='pctile'>{store.pcBoard[0][7]}</div>
        <div className='pctile'>{store.pcBoard[0][8]}</div>
        <div className='pctile'>{store.pcBoard[0][9]}</div>
      </div>
      <div className='row d-flex'>
        <aside className='pctile header'>1</aside>
        <div className='pctile'>{store.pcBoard[1][0]}</div>
        <div className='pctile'>{store.pcBoard[1][1]}</div>
        <div className='pctile'>{store.pcBoard[1][2]}</div>
        <div className='pctile'>{store.pcBoard[1][3]}</div>
        <div className='pctile'>{store.pcBoard[1][4]}</div>
        <div className='pctile'>{store.pcBoard[1][5]}</div>
        <div className='pctile'>{store.pcBoard[1][6]}</div>
        <div className='pctile'>{store.pcBoard[1][7]}</div>
        <div className='pctile'>{store.pcBoard[1][8]}</div>
        <div className='pctile'>{store.pcBoard[1][9]}</div>
      </div>
      <div className='row d-flex'>
        <aside className='pctile header'>2</aside>
        <div className='pctile'>{store.pcBoard[2][0]}</div>
        <div className='pctile'>{store.pcBoard[2][1]}</div>
        <div className='pctile'>{store.pcBoard[2][2]}</div>
        <div className='pctile'>{store.pcBoard[2][3]}</div>
        <div className='pctile'>{store.pcBoard[2][4]}</div>
        <div className='pctile'>{store.pcBoard[2][5]}</div>
        <div className='pctile'>{store.pcBoard[2][6]}</div>
        <div className='pctile'>{store.pcBoard[2][7]}</div>
        <div className='pctile'>{store.pcBoard[2][8]}</div>
        <div className='pctile'>{store.pcBoard[2][9]}</div>
      </div>
      <div className='row d-flex'>
        <aside className='pctile header'>3</aside>
        <div className='pctile'>{store.pcBoard[3][0]}</div>
        <div className='pctile'>{store.pcBoard[3][1]}</div>
        <div className='pctile'>{store.pcBoard[3][2]}</div>
        <div className='pctile'>{store.pcBoard[3][3]}</div>
        <div className='pctile'>{store.pcBoard[3][4]}</div>
        <div className='pctile'>{store.pcBoard[3][5]}</div>
        <div className='pctile'>{store.pcBoard[3][6]}</div>
        <div className='pctile'>{store.pcBoard[3][7]}</div>
        <div className='pctile'>{store.pcBoard[3][8]}</div>
        <div className='pctile'>{store.pcBoard[3][9]}</div>
      </div>
      <div className='row d-flex'>
        <aside className='pctile header'>4</aside>
        <div className='pctile'>{store.pcBoard[4][0]}</div>
        <div className='pctile'>{store.pcBoard[4][1]}</div>
        <div className='pctile'>{store.pcBoard[4][2]}</div>
        <div className='pctile'>{store.pcBoard[4][3]}</div>
        <div className='pctile'>{store.pcBoard[4][4]}</div>
        <div className='pctile'>{store.pcBoard[4][5]}</div>
        <div className='pctile'>{store.pcBoard[4][6]}</div>
        <div className='pctile'>{store.pcBoard[4][7]}</div>
        <div className='pctile'>{store.pcBoard[4][8]}</div>
        <div className='pctile'>{store.pcBoard[4][9]}</div>
      </div>
      <div className='row d-flex'>
        <aside className='pctile header'>5</aside>
        <div className='pctile'>{store.pcBoard[5][0]}</div>
        <div className='pctile'>{store.pcBoard[5][1]}</div>
        <div className='pctile'>{store.pcBoard[5][2]}</div>
        <div className='pctile'>{store.pcBoard[5][3]}</div>
        <div className='pctile'>{store.pcBoard[5][4]}</div>
        <div className='pctile'>{store.pcBoard[5][5]}</div>
        <div className='pctile'>{store.pcBoard[5][6]}</div>
        <div className='pctile'>{store.pcBoard[5][7]}</div>
        <div className='pctile'>{store.pcBoard[5][8]}</div>
        <div className='pctile'>{store.pcBoard[5][9]}</div>
      </div>
      <div className='row d-flex'>
        <aside className='pctile header'>6</aside>
        <div className='pctile'>{store.pcBoard[6][0]}</div>
        <div className='pctile'>{store.pcBoard[6][1]}</div>
        <div className='pctile'>{store.pcBoard[6][2]}</div>
        <div className='pctile'>{store.pcBoard[6][3]}</div>
        <div className='pctile'>{store.pcBoard[6][4]}</div>
        <div className='pctile'>{store.pcBoard[6][5]}</div>
        <div className='pctile'>{store.pcBoard[6][6]}</div>
        <div className='pctile'>{store.pcBoard[6][7]}</div>
        <div className='pctile'>{store.pcBoard[6][8]}</div>
        <div className='pctile'>{store.pcBoard[6][9]}</div>
      </div>
      <div className='row d-flex'>
        <aside className='pctile header'>7</aside>
        <div className='pctile'>{store.pcBoard[7][0]}</div>
        <div className='pctile'>{store.pcBoard[7][1]}</div>
        <div className='pctile'>{store.pcBoard[7][2]}</div>
        <div className='pctile'>{store.pcBoard[7][3]}</div>
        <div className='pctile'>{store.pcBoard[7][4]}</div>
        <div className='pctile'>{store.pcBoard[7][5]}</div>
        <div className='pctile'>{store.pcBoard[7][6]}</div>
        <div className='pctile'>{store.pcBoard[7][7]}</div>
        <div className='pctile'>{store.pcBoard[7][8]}</div>
        <div className='pctile'>{store.pcBoard[7][9]}</div>
      </div>
      <div className='row d-flex'>
        <aside className='pctile header'>8</aside>
        <div className='pctile'>{store.pcBoard[8][0]}</div>
        <div className='pctile'>{store.pcBoard[8][1]}</div>
        <div className='pctile'>{store.pcBoard[8][2]}</div>
        <div className='pctile'>{store.pcBoard[8][3]}</div>
        <div className='pctile'>{store.pcBoard[8][4]}</div>
        <div className='pctile'>{store.pcBoard[8][5]}</div>
        <div className='pctile'>{store.pcBoard[8][6]}</div>
        <div className='pctile'>{store.pcBoard[8][7]}</div>
        <div className='pctile'>{store.pcBoard[8][8]}</div>
        <div className='pctile'>{store.pcBoard[8][9]}</div>
      </div>
      <div className='row d-flex'>
        <aside className='pctile header'>9</aside>
        <div className='pctile'>{store.pcBoard[9][0]}</div>
        <div className='pctile'>{store.pcBoard[9][1]}</div>
        <div className='pctile'>{store.pcBoard[9][2]}</div>
        <div className='pctile'>{store.pcBoard[9][3]}</div>
        <div className='pctile'>{store.pcBoard[9][4]}</div>
        <div className='pctile'>{store.pcBoard[9][5]}</div>
        <div className='pctile'>{store.pcBoard[9][6]}</div>
        <div className='pctile'>{store.pcBoard[9][7]}</div>
        <div className='pctile'>{store.pcBoard[9][8]}</div>
        <div className='pctile'>{store.pcBoard[9][9]}</div>
      </div>
    </div>
  )
}

export default Pcboard
