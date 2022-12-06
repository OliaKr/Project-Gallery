'use strict'

const GHOST = '&#9781'
var gGhosts = []
var gIntervalGhosts
var gKilledGhosts = []

var gIntervalGhosts

function createGhosts(board) {
    gGhosts = []
    // TODO: 3 ghosts and an interval
    for (var i = 0; i < 3; i++) {
        createGhost(board)
    }
    gIntervalGhosts = setInterval(moveGhosts, 1000)
}

function createGhost(board) {
    // DONE
    const ghost = {
        location: {
            i: 4,
            j: 6
        
        },

        currCellContent: FOOD,
        color: getRandomColor()
        
       
    }
    gGhosts.push(ghost)
    board[ghost.location.i][ghost.location.j] = GHOST
}

function moveGhosts() {
    // DONE: loop through ghosts
    for (var i = 0; i < gGhosts.length; i++) {
        const ghost = gGhosts[i]
        moveGhost(ghost)
    }
    // console.log('')

}

function moveGhost(ghost) {
    var moveDiff = getMoveDiff();
    var nextLocation = {
        i: ghost.location.i + moveDiff.i,
        j: ghost.location.j + moveDiff.j
    }
    var nextCell = gBoard[nextLocation.i][nextLocation.j]
    if (nextCell === WALL) return;
    if (nextCell === GHOST) return;
    if (nextCell === PACMAN && !gPacman.isSuper) {
        gameOver(false);
        return;
    } else if (nextCell === PACMAN && gPacman.isSuper) return

    // model
    gBoard[ghost.location.i][ghost.location.j] = ghost.currCellContent
    // dom
    renderCell(ghost.location, ghost.currCellContent)

    // model
    ghost.location = nextLocation;
    ghost.currCellContent = gBoard[ghost.location.i][ghost.location.j]
    gBoard[ghost.location.i][ghost.location.j] = GHOST;
    // dom
    renderCell(ghost.location, getGhostHTML(ghost))
}

function getMoveDiff() {
    const randNum = getRandomIntInclusive(1, 4)

    switch (randNum) {
        case 1: return { i: 0, j: 1 }
        case 2: return { i: 1, j: 0 }
        case 3: return { i: 0, j: -1 }
        case 4: return { i: -1, j: 0 }
    }
}

// function getGhostHTML(ghost) {
//     return `<span>${GHOST}</span>`
// }

function getGhostHTML(ghost) {
    if (!gPacman.isSuper) {
        return `<span style="color:${ghost.color};">${GHOST}</span>`
    } else {
        return `<span style="color:blue ;">${GHOST}</span>`
    }
}