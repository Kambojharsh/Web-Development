function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert("Please Enter Player Names First !!");
        return;
    }
    resetGameStatus();
    gameAreaEle.style.display = 'block';
    activePlayerNameEle.textContent = players[activePlayer].name;

}

function resetGameStatus(){
    currentRound=1;
    activePlayer=0;
    isGameOver = false;
    gameOverEle.firstElementChild.innerHTML = '<h2>You Won,<span id="winner-name">Player Name</span>!</h3>' ;
    gameOverEle.style.display = 'none';

    let gameBoardIndex =0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameData[i][j]=0;
            let gameBoardItemEle = document.getElementById('game-board').children[gameBoardIndex++];
            gameBoardItemEle.textContent = '';
            gameBoardItemEle.classList.remove('disabled');
        }
        
    }

}


function switchPlayer() {
    activePlayer = (activePlayer + 1) % 2;
    activePlayerNameEle.textContent = players[activePlayer].name;
}


function selectGameField(event) {
    if(isGameOver)
        return;

    const selectedField = event.target;
    const selectedCol = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;
    if (gameData[selectedRow][selectedCol] > 0)
        return;

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');
    gameData[selectedRow][selectedCol] = activePlayer + 1;
    const winnerId = checkForGameOver();
    if(winnerId!=0)
        endGame(winnerId);

    currentRound++;
    switchPlayer();

}

function checkForGameOver() {

    //row
    for (let i = 0; i < 3; i++) {
        if (gameData[i][0] > 0 && gameData[i][0] == gameData[i][1] && gameData[i][1] == gameData[i][2])
        return gameData[i][0];
    }
    //col
    for (let i = 0; i < 3; i++) {
        if (gameData[0][i] > 0 && gameData[0][i] == gameData[1][i] && gameData[1][i] == gameData[2][i])
        return gameData[0][i];
    }
    //diagonal
    if(gameData[0][0]>0 && gameData[0][0]==gameData[1][1] && gameData[1][1]==gameData[2][2])
        return gameData[1][1];
    if(gameData[0][2]>0 && gameData[0][2]==gameData[1][1] && gameData[1][1]==gameData[2][0])
        return gameData[1][1];

    if(currentRound==9)
        return -1;

    return 0;
    
}

function endGame(winnerId){
    gameOverEle.style.display ='block';
    isGameOver =true;
    if(winnerId >0){
        document.getElementById('winner-name').textContent =players[winnerId-1].name;
    }
    else{
        gameOverEle.firstElementChild.textContent = 'Oopsie! It\'s a DRAW';
    }
    
}