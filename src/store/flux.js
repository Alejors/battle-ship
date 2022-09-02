import { Confirm, Loading, Notify, Report } from 'notiflix'

const row = Array.from(Array(10)).map((e, i) => '')
const boardMatrix = row.map(ele => Array.from(row))
const pcBoard = row.map(ele => Array.from(row))
const shipPicker = row.map(ele => Array.from(row))

const getState = ({ getStore, getActions, setStore }) => {

  return {
    store: {
      turn: 'player',
      playerBoard: [...boardMatrix],
      pcBoard: [...pcBoard],
      playerShips: {
        carrier: [],
        vessel: [],
        submarine: [],
        cruiser: [],
        boat: []
      },
      pcShips: {
        carrier: null,
        vessel: null,
        submarine: null,
        cruiser: null,
        boat: null
      },
      shipPicker: [...shipPicker],
      ready: false
    },
    actions: {
      //FUNCION QUE DISPARA DE MANERA ALEATORIA

      tileMark: () => {
        const { pcBoard, playerShips } = getStore()
        let aux = [...pcBoard]
        let indexX = Math.floor(Math.random() * 10)
        let indexY = Math.floor(Math.random() * 10)
        if (aux[indexY][indexX] !== '') {
          const { tileMark } = getActions()
          tileMark()
        } else {
          let fired = false
          for (let ships in playerShips) {
            // eslint-disable-next-line
            playerShips[ships].forEach(part => {
              if (part[0] === indexY && part[1] === indexX) {
                Notify.failure('Te Dieron!')
                part = 'X'
                fired = true
                return
              }
            })
          }
          fired ? (aux[indexY][indexX] = 'X') : (aux[indexY][indexX] = '~~')
          setStore({
            pcBoard: aux,
            turn: 'player'
          })
        }
      },

      //FUNCION QUE MARCA UNA LOSETA... FALTA DEFINICION DE QUÉ HACER SI HAY UN BARCO.

      assign: (y, x) => {
        const { playerBoard, pcShips } = getStore()
        const { tileMark, checkSunken } = getActions()
        if (playerBoard[y][x] !== '') {
          Report.failure('Ya se disparó ahí', 'Disparar en otro espacio', 'OK!')
        } else {
          let auxBoard = [...playerBoard]
          let fired = false
          let auxShips = pcShips
          for (let ships in auxShips) {
            // eslint-disable-next-line
            auxShips[ships].forEach((part, i) => {
              if (part[0] === y && part[1] === x) {
                Notify.success('FUEGO!')
                auxShips[ships][i] = null
                let auxNew = auxShips[ships].filter(ele => ele !== null)
                auxShips[ships] = auxNew
                fired = true
                checkSunken(pcShips[ships], 'player')
                setStore({
                  pcShips: auxShips
                })
              }
            })
          }
          fired ? (auxBoard[y][x] = 'X') : (auxBoard[y][x] = '~~')
          setStore({
            playerBoard: auxBoard
          })
        }
        let randomTime = Math.random() * 9000
        Loading.dots()
        setTimeout(tileMark, randomTime)
        Loading.remove(randomTime - 1000)
        setTimeout(setStore({ turn: 'pc' }), 2000)
      },

      //FUNCION QUE UBICA LOS BARCOS DEL PC DE MANERA AUTOMÁTICA... ERRORES: EN OCASIONES SUPERPONE BARCOS

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
      },

      //FUNCION QUE ESTABLECE BARCOS DE JUGADOR... ERRORES: permite seleccionar con espacios... permite seleccionar más allá del tamaño del tablero.

      pick: (y, x) => {
        const { playerShips, shipPicker } = getStore()
        if (shipPicker[y][x] !== '') {
          Report.failure('Loseta Ocupada', 'Debes Escoger Otra', 'OK!')
        } else {
          let auxBoard = [...shipPicker]
          let aux = playerShips
          if (aux['carrier'].length < 5) {
            if (playerShips['carrier'].length === 0) {
              if (y > 5 && x > 5) {
                Report.failure(
                  'No Hay Suficiente Espacio',
                  'Escoge un Lugar con Al menos 5 Espacios Hasta el Final',
                  'Entendido!'
                )
              } else {
                auxBoard[y][x] = '#'
                aux['carrier'].push([y, x])
                setStore({
                  playerShips: aux,
                  shipPicker: auxBoard
                })
              }
            } else if (aux['carrier'].length === 1) {
              if (y !== aux['carrier'][0][0] && x !== aux['carrier'][0][1]) {
                Report.failure(
                  'Selección No Permitida',
                  'Elige la Siguiente Loseta Vertical u Horizontal',
                  'Entendido!'
                )
              } else if (y === aux['carrier'][0][0]) {
                auxBoard[y][x] = '#'
                auxBoard[y][x + 1] = '#'
                auxBoard[y][x + 2] = '#'
                auxBoard[y][x + 3] = '#'
                aux['carrier'].push([y, x], [y, x + 1], [y, x + 2], [y, x + 3])
                setStore({
                  playerShips: aux,
                  shipPicker: auxBoard
                })
              } else {
                auxBoard[y][x] = '#'
                auxBoard[y + 1][x] = '#'
                auxBoard[y + 2][x] = '#'
                auxBoard[y + 3][x] = '#'
                aux['carrier'].push([y, x], [y + 1, x], [y + 2, x], [y + 3, x])
                setStore({
                  playerShips: aux,
                  shipPicker: auxBoard
                })
              }
            }
          } else if (aux['vessel'].length < 4) {
            if (aux['vessel'].length === 0) {
              if (y > 6 && x > 6) {
                Report.failure(
                  'No Hay Suficiente Espacio',
                  'Escoge un Lugar con Al menos 4 Espacios Hasta el Final',
                  'Entendido!'
                )
              } else {
                auxBoard[y][x] = '#'
                aux['vessel'].push([y, x])
                setStore({
                  playerShips: aux,
                  shipPicker: auxBoard
                })
              }
            } else if (aux['vessel'].length === 1) {
              if (y !== aux['vessel'][0][0] && x !== aux['vessel'][0][1]) {
                Report.failure(
                  'Selección No Permitida',
                  'Elige la Siguiente Loseta Vertical u Horizontal',
                  'Entendido!'
                )
              } else if (y === aux['vessel'][0][0]) {
                auxBoard[y][x] = '#'
                auxBoard[y][x + 1] = '#'
                auxBoard[y][x + 2] = '#'
                aux['vessel'].push([y, x], [y, x + 1], [y, x + 2])
                setStore({
                  playerShips: aux,
                  shipPicker: auxBoard
                })
              } else {
                auxBoard[y][x] = '#'
                auxBoard[y + 1][x] = '#'
                auxBoard[y + 2][x] = '#'
                aux['vessel'].push([y, x], [y + 1, x], [y + 2, x])
                setStore({
                  playerShips: aux,
                  shipPicker: auxBoard
                })
              }
            }
          } else if (aux['submarine'].length < 3) {
            if (aux['submarine'].length === 0) {
              if (y > 7 && x > 7) {
                Report.failure(
                  'No Hay Suficiente Espacio',
                  'Escoge un Lugar con Al menos 3 Espacios Hasta el Final',
                  'Entendido!'
                )
              } else {
                aux['submarine'].push([y, x])
                auxBoard[y][x] = '#'
                setStore({
                  playerShips: aux,
                  shipPicker: auxBoard
                })
              }
            } else if (aux['submarine'].length === 1) {
              if (
                y !== aux['submarine'][0][0] &&
                x !== aux['submarine'][0][1]
              ) {
                Report.failure(
                  'Selección No Permitida',
                  'Elige la Siguiente Loseta Vertical u Horizontal',
                  'Entendido!'
                )
              } else if (y === aux['submarine'][0][0]) {
                auxBoard[y][x] = '#'
                auxBoard[y][x + 1] = '#'
                aux['submarine'].push([y, x], [y, x + 1])
                setStore({
                  playerShips: aux,
                  shipPicker: auxBoard
                })
              } else {
                auxBoard[y][x] = '#'
                auxBoard[y + 1][x] = '#'
                aux['submarine'].push([y, x], [y + 1, x])
                setStore({
                  playerShips: aux,
                  shipPicker: auxBoard
                })
              }
            }
          } else if (aux['cruiser'].length < 3) {
            if (aux['cruiser'].length === 0) {
              if (y > 7 && x > 7) {
                Report.failure(
                  'No Hay Suficiente Espacio',
                  'Escoge un Lugar con Al menos 3 Espacios Hasta el Final',
                  'Entendido!'
                )
              } else {
                auxBoard[y][x] = '#'
                aux['cruiser'].push([y, x])
                setStore({
                  playerShips: aux,
                  shipPicker: auxBoard
                })
              }
            } else if (aux['cruiser'].length === 1) {
              if (y !== aux['cruiser'][0][0] && x !== aux['cruiser'][0][1]) {
                Report.failure(
                  'Selección No Permitida',
                  'Elige la Siguiente Loseta Vertical u Horizontal',
                  'Entendido!'
                )
              } else if (y === aux['cruiser'][0][0]) {
                auxBoard[y][x] = '#'
                auxBoard[y][x + 1] = '#'
                aux['cruiser'].push([y, x], [y, x + 1])
                setStore({
                  playerShips: aux,
                  shipPicker: auxBoard
                })
              } else {
                auxBoard[y][x] = '#'
                auxBoard[y + 1][x] = '#'
                aux['cruiser'].push([y, x], [y + 1, x])
                setStore({
                  playerShips: aux,
                  shipPicker: auxBoard
                })
              }
            }
          } else if (aux['boat'].length < 2) {
            if (aux['boat'].length === 0) {
              if (y > 8 && x > 8) {
                Report.failure(
                  'No Hay Suficiente Espacio',
                  'Escoge un Lugar con Al menos 3 Espacios Hasta el Final',
                  'Entendido!'
                )
              } else {
                aux['boat'].push([y, x])
                auxBoard[y][x] = '#'
                setStore({
                  playerShips: aux,
                  shipPicker: auxBoard
                })
              }
            } else if (aux['boat'].length === 1) {
              if (y !== aux['boat'][0][0] && x !== aux['boat'][0][1]) {
                Report.failure(
                  'Selección No Permitida',
                  'Elige la Siguiente Loseta Vertical u Horizontal',
                  'Entendido!'
                )
              } else if (
                y === aux['boat'][0][0] + 1 ||
                x === aux['boat'][0][1] + 1
              ) {
                auxBoard[y][x] = '#'
                aux['boat'].push([y, x])
                setStore({
                  playerShips: aux,
                  shipPicker: auxBoard
                })
                setTimeout(setStore({ ready: true }), 3000)
              } else {
                Report.failure(
                  'Selección No Permitida',
                  'Elige la Siguiente Loseta Vertical u Horizontal',
                  'Entendido!'
                )
              }
            }
          }
        }
      },

      //FUNCION QUE REVISA SI UN BARCO FUE HUNDIDO

      checkSunken: (ship, who) => {
        const { checkWinner, restart } = getActions()
        if (ship.length === 0) {
          Notify.warning('Barco Hundido!')
          if (checkWinner(who) !== null) {
            Confirm.show(
              checkWinner(who),
              'Quieres Jugar de Nuevo?',
              'Si',
              'No',
              () => {
                restart()
              },
              () => {
                Loading.pulse('Ok, Nos Vemos...')
              }
            )
          }
        }
      },

      //FUNCION QUE VERIFICA GANADOR

      checkWinner: who => {
        const { pcShips, playerShips } = getStore()
        if (who === 'player') {
          for (let ship in pcShips) {
            if (pcShips[ship].length !== 0) {
              return null
            }
          }
          return 'Player Gana!'
        } else {
          playerShips.forEach(ship => {
            if (ship.length !== 0) {
              return null
            }
          })
          return 'PC Gana!'
        }
      },

      restart: () => {
        const { autoSetships } = getActions()
        const newPickingBoard = row.map(ele => Array.from(row));
        const newPlayerBoard = row.map(ele => Array.from(row));
        const newPCBoard = row.map(ele => Array.from(row));
        setStore({
          turn: 'player',
          playerBoard: newPlayerBoard,
          pcBoard: newPCBoard,
          playerShips: {
            carrier: [],
            vessel: [],
            submarine: [],
            cruiser: [],
            boat: []
          },
          pcShips: {
            carrier: null,
            vessel: null,
            submarine: null,
            cruiser: null,
            boat: null
          },
          shipPicker: newPickingBoard,
          ready: false
        })
        autoSetships()
      }
    }
  }
}

export default getState
