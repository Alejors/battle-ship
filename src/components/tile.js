import React, { useContext } from 'react'
import { Context } from '../store/appContext';

const Tile = () => {
    const {store, actions} = useContext(Context);
    const tilesRow = store.playerBoard.map((row, i) => {
        let singleTile = row.map((tile, j) => {
            return(
                <div key={`${i}${j}`} onClick={() => actions.assign(i, j)} className='tile'>
                    {store.playerBoard[i][j]}
                </div>      
            )
        })
        tilesRow.unshift(`<div className='row d-flex'>`);
        tilesRow.push('</div>');
        return(singleTile);
    })
    return (tilesRow)
};

export default Tile;
