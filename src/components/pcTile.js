import React, { useContext } from 'react'
import { Context } from '../store/appContext';

const PcTile = () => {
    const {store} = useContext(Context);
    return store.pcBoard.map((row, i) => {        
       return(
        <div key={i} className='row d-flex'>
            <aside className='tile header'>{i}</aside>
            {
                row.map((tile, j) => {
                    return (
                    <div key={j} 
                    className='pctile' 
                    style={{ color: store.pcBoard[i][j] === '~~' ? 'blue' : 'red' }}
                    >
                        {store.pcBoard[i][j]}
                    </div>
                    )
                })
            }
        </div>
    )}
    );
};

export default PcTile;