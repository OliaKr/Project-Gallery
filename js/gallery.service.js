'use strict'
var gProjects = [
    {
        id: "pacman",
        name: "Pacman",
        title: "Eat for free and avoid ghosts",
        desc: "Pac-Man is an action maze chase video game; the player controls the eponymous character through an enclosed maze. The objective of the game is to eat all of the dots placed in the maze while avoiding four ghosts that pursue him.",
        url: "https://oliakr.github.io/Pacman-Game/",
        publishedAt: '05/12/2022',
        labels: ["Matrixes", "Board Games"],

    },  

    {
        id: "mineswepper",
        name: "Minesweeper",
        title: "Try not to get bombed",
        desc: "In this game, mines are scattered throughout a board, which is divided into cells. Cells have three states: uncovered, covered and flagged. A covered cell is blank and clickable, while an uncovered cell is exposed. Flagged cells are those marked by the player to indicate a potential mine location.",
        url: "https://oliakr.github.io/Minesweeper/",
        publishedAt: '05/12/2022',
        labels: ["Board Games"],

    },
    
    {
        id: "pop-baloons",
        name: "Pop Baloons",
        title: "Fun and exciting balloon pop free games filled with colorful balloons",
        desc: "A fun and educational balloon-popping game for toddlers and pre-school kids that want to learn something new",
        url: "https://oliakr.github.io/Pop-Baloons/",
        publishedAt: '05/12/2022',
        labels: ["Board Games"],

    }, 
    
    {
        id: "ball-board",
        name: "Ball Board",
        title: "Try not to get be ahead",
        desc: "Try eating all the ⚽ on the board without stepping on the evil 💩",
        url: "https://oliakr.github.io/Ball-Board/",
        publishedAt: '05/12/2022',
        labels: ["Board Games"],

    }, 
    
    {
        id: "safe-content",
        name: "Safe-Content",
        title: "Log in safely and enjoy a secret content!",
        desc: "A page with login form and some secret content",
        url: "https://oliakr.github.io/Safe-Content/",
        publishedAt: '05/12/2022',
        labels: ["design", "client-server"],

    },  

]
console.log('gProjects', gProjects);

function getProj() {
    return gProjects
    
}

function getProjId(projIdx) {
    var project = gProjects.find(function (proj) {
         return proj.id === projIdx
    })
    return project
}

