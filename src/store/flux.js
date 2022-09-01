const getState = ({ getStore, getActions, setStore }) => {
    const row = Array.from(Array(10)).map((e, i) => '');
    const boardMatrix = row.map((ele) => Array.from(row));
	return {
		store: {
            board: boardMatrix
		},
		actions: {
            tileMark: () => {
                const { board } = getStore();
                let aux = board;
                let index = Math.floor(Math.random() * 10);
                aux[index][index] = 'X';
                setStore({
                    board: aux
                });
            },
            assign: (x,y) => {
                const { board } = getStore();

                if (board[y][x] !== '') {
                    window.alert('Tile already filled');
                } else {
                    let auxBoard = [...board];
                    auxBoard[y][x] = 'X';
                    setStore({
                        board: auxBoard
                    })
                }
            }
		}
	}
};

export default getState;