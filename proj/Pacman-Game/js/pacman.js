'use strict'

var PACMAN = '<img src="img/pac-left.png" />';
// var pacman = '😷'

var gPacman

function createPacman(board) {
    // DONE: initialize gPacman...
    gPacman = {
        location: {
            i: 2,
            j: 2
        },
        isSuper: false
    }
    gBoard[gPacman.location.i][gPacman.location.j] = PACMAN

}

function movePacman(ev) {
    if (!gGame.isOn) return
    // DONE: use getNextLocation(), nextCell
    const nextLocation = getNextLocation(ev.key)
    const nextCell = gBoard[nextLocation.i][nextLocation.j]

    if (nextCell === WALL) return;
    if (nextCell === FOOD) {
        updateScore(1);
    } else if (nextCell === CHERRY) {
        updateScore(10)
    } else if (nextCell === GHOST) {
        if (!gPacman.isSuper) {
            gameOver(false);
            renderCell(gPacman.location, EMPTY)
            return;
        } else {
            killGhost(nextLocation)
        }
    } else if (nextCell === SUPER_FOOD) {
        if(gPacman.isSuper) return
        gPacman.isSuper = true
        renderGhosts()
        setTimeout(function () {
            gPacman.isSuper = false
            if (gKilledGhosts.length) {
                for (var i = 0; i < gKilledGhosts.length; i++) {
                    gGhosts.push(gKilledGhosts[i])
                }
            }
            renderGhosts()
            gKilledGhosts = []
        }, 5000)
    }


    // DONE: moving from current location:
    // DONE: update the model
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY
    // DONE: update the DOM
    renderCell(gPacman.location, EMPTY)


    // DONE: Move the pacman to new location:
    // DONE: update the model
    gBoard[nextLocation.i][nextLocation.j] = PACMAN
    gPacman.location = nextLocation
    // DONE: update the DOM
    renderCell(nextLocation, PACMAN)
}

function getNextLocation(eventKeyboard) {
    // console.log(eventKeyboard)
    const nextLocation = {
        i: gPacman.location.i,
        j: gPacman.location.j
    }
    // DONE: figure out nextLocation
    switch (eventKeyboard) {
        case 'ArrowUp':
            PACMAN = '<img src="img/pac-up.png" />';
            nextLocation.i--
            break;
        case 'ArrowRight':
            PACMAN = '<img src="img/pac-right.png" />';
            nextLocation.j++
            break;
        case 'ArrowDown':
            PACMAN = '<img src="img/pac-down.png" />';
            nextLocation.i++
            break;
        case 'ArrowLeft':
            PACMAN ='<img src="img/pac-left.png" />';
            nextLocation.j--
            break;
    }
    return nextLocation
}

////
function renderGhosts() {
    for (var i = 0; i < gGhosts.length; i++) {
        renderCell(gGhosts[i].location, getGhostHTML(gGhosts[i]))
    }
}

function killGhost(location) {
    for (var i = 0; i < gGhosts.length; i++) {
        if (gGhosts[i].location.i === location.i && gGhosts[i].location.j === location.j) {
            if (gGhosts[i].currCellContent === FOOD) {
                gGhosts[i].currCellContent = EMPTY
                updateScore(1)
            }
             var killedGhost = gGhosts.splice(i, 1)
            renderCell(location, EMPTY)
            gKilledGhosts.push(killedGhost[0])
        }
    }
}
