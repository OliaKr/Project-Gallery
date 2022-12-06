'use strict'
const WALL = '✖️'
const FOOD = '▫️'
const EMPTY = ' '
const SUPER_FOOD = '🍉'
const CHERRY = '🍒'

var SIZE = 10
var foodCount
var gScore = 0
var gCherryInterval
var gBoard;

var gGame = {
    score: 0,
    isOn: false
}

function onInit() {
    gGame.score = 0
    gScore = 0
    foodCount = -1
    document.querySelector(".lose").style.display = 'none'
    document.querySelector(".win").style.display = 'none'

    gBoard = buildBoard()
    createPacman(gBoard)
    renderBoard(gBoard, '.board-container')
    createGhosts(gBoard)
    gGame.isOn = true
    gCherryInterval = setInterval(putCherry, 15000)
}

function buildBoard() {
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = FOOD;
            if (i === 0 || i === SIZE - 1 ||
                j === 0 || j === SIZE - 1 ||
                (j === 3 && i > 4 && i < SIZE - 2)) {
                board[i][j] = WALL;
            }
            if (i === 1 && j === 1 || i === 1 && j === 8 || i === 8 && j === 1 || i === 8 && j === 8) {
                board[i][j] = SUPER_FOOD
            }
            if (board[i][j] === FOOD) {
                foodCount++
            }
        }
    }
    return board;
}


function updateScore(diff) {
    gGame.score += diff
    if (diff === 1) {
        gScore++
    }
    document.querySelector('h2 span').innerText = gGame.score
    if (gScore === foodCount) {
        gameOver(true)
    }
}

function gameOver(isWin) {
    // console.log('Game Over');
    gGame.isOn = false;
    clearInterval(gIntervalGhosts)
    clearInterval(gCherryInterval)
    if (!isWin) {
        gBoard[gPacman.location.i][gPacman.location.j] = EMPTY
        renderCell(gPacman.location, EMPTY)
        renderModal(false)
    } else {
        renderModal(true)
    }
}

function renderModal(isWin) {
    if (isWin) {
        document.querySelector(".win").style.display = 'block'
    } else {
        document.querySelector(".lose").style.display = 'block'
    }
}

function putCherry() {
    var emptyCells = getEmptyCells(gBoard)
    if (!emptyCells) return
    var randomIdx = getRandomIntInclusive(0, emptyCells.length)
    var emptyCell = emptyCells[randomIdx]
    gBoard[emptyCell.i][emptyCell.j] = '🍒'
    console.log(CHERRY);
    renderCell(emptyCell, CHERRY)
}


