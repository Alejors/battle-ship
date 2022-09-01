import { Loading, Notify, Report } from "notiflix";

const getState = ({ getStore, getActions, setStore }) => {
  const row = Array.from(Array(10)).map((e, i) => '')
  const boardMatrix = row.map(ele => Array.from(row))
  const pcBoard = row.map(ele => Array.from(row))

  return {
    store: {
      turn: 'player',
      playerBoard: boardMatrix,
      pcBoard: pcBoard,
      'playerShips': {
        carrier: [[], [], [], [], []],
        vessel: [[], [], [], []],
        submarine: [[], [], []],
        cruiser: [[], [], []],
        boat: [[], []]
      },
      'pcShips': {
        carrier: null,
        vessel: null,
        submarine: null,
        cruiser: null,
        boat: null
      }
    },
    actions: {
      //FUNCION QUE DISPARA DE MANERA ALEATORIA

      tileMark: () => {
        const { pcBoard } = getStore()
        let aux = [...pcBoard]
        let indexX = Math.floor(Math.random() * 10)
        let indexY = Math.floor(Math.random() * 10)
        if (aux[indexY][indexX] === 'X') {
          const { tileMark } = getActions();
          tileMark()
        } else {
          aux[indexY][indexX] = 'X'
          setStore({
            pcBoard: aux,
            turn: 'player'
          })
        }
      },

      //FUNCION QUE MARCA UNA LOSETA... FALTA DEFINICION DE QUÉ HACER SI HAY UN BARCO.

      assign: (y, x) => {
        const { playerBoard, pcShips } = getStore();
        const { tileMark } = getActions();
        if (playerBoard[y][x] !== '') {
          Report.failure('Ya se disparó ahí', 'Disparar en otro espacio', 'OK!');
        } else {
          let auxBoard = [...playerBoard];
          let fired = false;
          for(let ships in pcShips){
            // eslint-disable-next-line
            pcShips[ships].forEach(part => {
                if(part[0] === y && part[1] === x){
                    Notify.success('FUEGO!');
                    part = 'X'
                    fired = true;
                    return;
                }
            })
          }
          fired ? auxBoard[y][x] = 'X' : auxBoard[y][x] = '~~';
          setStore({
            turn: 'pc',
            playerBoard: auxBoard
          })
        }
        let randomTime = Math.random() * 9000;
        Loading.dots();
        setTimeout(tileMark, randomTime);
        Loading.remove(randomTime-1000);
        
      },

      //FUNCION QUE UBICA LOS BARCOS DEL PC DE MANERA AUTOMÁTICA

      autoSetships: () => {
        let pcCarrier = []
        let pcVessel = []
        let pcSub = []
        let pcCruiser = []
        let pcBoat = []

        let carrierDirection = Math.round(Math.random())
        if (carrierDirection === 1) {
          let indexY = Math.floor(Math.random() * 10)
          let indexX = Math.floor(Math.random() * 5)
          for (let i = 0; i < 5; i++) {
            pcCarrier.push([indexY, indexX + i])
          }
        } else {
          let indexX = Math.floor(Math.random() * 10)
          let indexY = Math.floor(Math.random() * 5)
          for (let i = 0; i < 5; i++) {
            pcCarrier.push([indexY + i, indexX])
          }
        }

        let vesselDirection = Math.round(Math.random())
        if (vesselDirection === 1) {
          let indexY = Math.floor(Math.random() * 10)
          let indexX = Math.floor(Math.random() * 6)
          for (let i = 0; i < 4; i++) {
            pcVessel.push([indexY, indexX + i])
          }
        } else {
          let indexX = Math.floor(Math.random() * 10)
          let indexY = Math.floor(Math.random() * 6)
          for (let i = 0; i < 4; i++) {
            pcVessel.push([indexY + i, indexX])
          }
        }
        let subDirection = Math.round(Math.random())
        if (subDirection === 1) {
          let indexY = Math.floor(Math.random() * 10)
          let indexX = Math.floor(Math.random() * 7)
          for (let i = 0; i < 3; i++) {
            pcSub.push([indexY, indexX + i])
          }
        } else {
          let indexX = Math.floor(Math.random() * 10)
          let indexY = Math.floor(Math.random() * 7)
          for (let i = 0; i < 3; i++) {
            pcSub.push([indexY + i, indexX])
          }
        }
        let cruiserDirection = Math.round(Math.random())
        if (cruiserDirection === 1) {
          let indexY = Math.floor(Math.random() * 10)
          let indexX = Math.floor(Math.random() * 7)
          for (let i = 0; i < 3; i++) {
            pcCruiser.push([indexY, indexX + i])
          }
        } else {
          let indexX = Math.floor(Math.random() * 10)
          let indexY = Math.floor(Math.random() * 7)
          for (let i = 0; i < 3; i++) {
            pcCruiser.push([indexY + i, indexX])
          }
        }
        let boatDirection = Math.round(Math.random())
        if (boatDirection === 1) {
          let indexY = Math.floor(Math.random() * 10)
          let indexX = Math.floor(Math.random() * 8)
          for (let i = 0; i < 2; i++) {
            pcBoat.push([indexY, indexX + i])
          }
        } else {
          let indexX = Math.floor(Math.random() * 10)
          let indexY = Math.floor(Math.random() * 8)
          for (let i = 0; i < 2; i++) {
            pcBoat.push([indexY + i, indexX])
          }
        }
        setStore({
          pcShips: {
            carrier: pcCarrier,
            vessel: pcVessel,
            submarine: pcSub,
            cruiser: pcCruiser,
            boat: pcBoat
          }
        })
      }
    }
  }
}

export default getState
