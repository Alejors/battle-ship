const getState = ({ getStore, getActions, setStore }) => {
    
    const row = Array.from(Array(10)).map((e, i) => '');
    const boardMatrix = row.map((ele) => Array.from(row));
    const pcBoard = row.map((ele) => Array.from(row));

	return {
		store: {
            'turn': 'player',
            'playerBoard': boardMatrix,
            'pcBoard': pcBoard,
            'playerShips': {
                'carrier':[[],[],[],[],[]],
                'vessel':[[],[],[],[]],
                'submarine': [[],[],[]],
                'cruiser':[[],[],[]],
                'boat':[[],[]]
            },
            'pcShips': {
                'carrier':[[],[],[],[],[]],
                'vessel':[[],[],[],[]],
                'submarine': [[],[],[]],
                'cruiser':[[],[],[]],
                'boat':[[],[]]
            }
		},
		actions: {
            tileMark: () => {
                const { pcBoard } = getStore();
                let aux = [...pcBoard];
                let indexX = Math.floor(Math.random()*10);
                let indexY = Math.floor(Math.random()*10);
                if(aux[indexX][indexY] === 'X'){
                    const {tileMark} = getActions();
                    window.alert('REPEATED!');
                    tileMark();
                }else{
                    aux[indexX][indexY] = 'X';
                    setStore({
                        pcBoard: aux,
                        'turn': 'player'
                    });
                }
            },
            assign: (x,y) => {
                const { playerBoard } = getStore();
                if (playerBoard[x][y] !== '') {
                    window.alert('Tile already filled');
                } else {
                    let auxBoard = [...playerBoard];
                    auxBoard[x][y] = 'X';
                    setStore({
                        turn: 'pc',
                        playerBoard: auxBoard
                    })
                }
            }
		}
	}
};

export default getState;