const gameData =[
    [0,0,0],
    [0,0,0],
    [0,0,0],
];



let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let isGameOver = false;

const players =[
    {
       name: '' ,
        symbol: 'X' 
    },
    {
        name: '' ,
        symbol: 'O' 
    }
];

const playerConfigOverlayEle = document.getElementById('config-overlay');
const backdropEle = document.getElementById('backdrop');
const formEle = document.querySelector('form');
const errorsOutputEle =document.getElementById('config-errors') ;
const gameAreaEle = document.getElementById('active-game');
const activePlayerNameEle = document.getElementById('active-player-name');
const gameOverEle = document.getElementById('game-over');


const editPlayer1btn = document.getElementById("edit-player-1-bnt");
const editPlayer2btn = document.getElementById("edit-player-2-bnt");
const cancelConfigBtnEle = document.getElementById('cancel-config-btn');
const startNewGameBtnEle = document.getElementById('start-game-btn');
const gameFieldElements = document.querySelectorAll('#game-board li');



editPlayer1btn.addEventListener('click', openPlayerConfig);
editPlayer2btn.addEventListener('click', openPlayerConfig);
cancelConfigBtnEle.addEventListener('click',closePlayerConfig);
backdropEle.addEventListener('click',closePlayerConfig);
formEle.addEventListener('submit', savePlayerConfig);
startNewGameBtnEle.addEventListener('click',startNewGame);

for( const gameFieldElement of gameFieldElements){
    gameFieldElement.addEventListener('click', selectGameField);
}