function TicTacToe() {
    // fill out the construction function
    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.gameStatus = false;
    this.currentPlayer;
    this.firstPlayer;
    this.returnArray = [];
    this.moveCount = 0;
}

TicTacToe.prototype.move = function(field) {
    // fill out the move method

    if(this.moveCount === 0) {
        if(field) {
            this.currentPlayer = 2;
        }
        else this.currentPlayer = 1;
    }
    else {
        if(this.currentPlayer === 2) {
            this.currentPlayer = 1;
            debugger;
        }
        else {
            this.currentPlayer = 2;
            debugger;
        }
    }
    
    if(this.gameStatus) {
    	this.message(5);
    	this.returnArray[0] = 0;
    	return this.returnArray;
    }
    else if(this.moveCount >= 9 ) {
    	this.returnArray[0] = 0;
    	this.message(2);
        this.gameStatus = true;
    	return this.returnArray;
    }
    //computer play
    else if (this.currentPlayer === 1) {
    	//no field input, computer plays
        this.moveCount++;
        this.computerChoice(1);
    } 
    else {
    	//user playing
        this.moveCount++;
        if(!field) {
            this.moveCount++;
            this.computerChoice(2);
        }
        else if (!this.board[field - 1]) {
        	//check if there is already a move on board
            this.board[field - 1] = 2;
            

        } else {
        	//move already exists
            this.message(6);
            this.returnArray[0] = 0;
            return this.returnArray;
        }
        //this.move();
    }
    this.gameStatus = this.checkMove(this.currentPlayer);
    //Game is not finished
    if (this.gameStatus === false) {
        if (this.currentPlayer === 1) {
        	//player is computer, set message to 'your move'
            this.message(1);
        }
        else {
        	//call computer move again
        	this.move();
        }
    } 
    else {
    	// If someone won game
        if (this.currentPlayer === 1) {
        	// computer wins
            this.message(4);
        } else {
        	//player wins
            this.message(3);
        }
    }
    //console.log(this.board);
    //var count = 0;
    for(var i = 0; i <= 6; i+= 3) {
    	console.log(this.board[i] +','+ this.board[i+1] +','+  this.board[i+2]);
    }
    //debugger;
    return this.returnArray;
}

TicTacToe.prototype.computerChoice = function(player) {
    var computerOrder = [4, 0, 2, 6, 8, 1, 3, 5, 7];
    for (var i = 0; i < computerOrder.length; i++) {
        if (!this.board[computerOrder[i]]) {
            this.returnArray[0] = computerOrder[i] + 1;
            //set move number to one plus
            this.board[computerOrder[i]] = player
            break;
        }
    } 
    //this.message(5);  
}

TicTacToe.prototype.message = function(code) {
    switch (code) {
        case 1:
            this.returnArray[1] = "Your move?";
            break;
        case 2:
            this.returnArray[1] = "Draw!";
            this.gameStatus = true;
            break;
        case 3:
            this.returnArray[1] = "You win!";
            this.gameStatus = true;
            break;
        case 4:
            this.returnArray[1] = "I win!";
            this.gameStatus = true;
            break;
        case 5:
            this.returnArray[1] = "Game ended";
            break;
        case 6:
            this.returnArray[1] = "Illegal move";
            break;
        default:
        	"invalid"
        	break;
    }

}

TicTacToe.prototype.checkMove = function(player) {
    var checkCell = 0;
    var winCheck = 0;
    // row check
    while (checkCell <= 6) {
        for (var i = checkCell; i < checkCell + 3; i++) {
            if (this.board[i] === player) {
                winCheck++;
            }
        }
        if (winCheck === 3) {
            return true;
        } else {
            winCheck = 0;
            checkCell += 3;
        }
    }
    // col check
    checkCell = 0;
    while (checkCell <= 2) {
        for (var i = checkCell; i <= checkCell + 6; i += 3) {
            if (this.board[i] === player) {
                winCheck++;
            }
        }
        if (winCheck === 3) {
            console.log('won');
            return true;
        } else {
            winCheck = 0;
            checkCell++;
        }
    }
    checkCell = 4;
    if (this.board[4] !== player) {
        return false;
    } else {
        if (this.board[0] === player && this.board[8] === player) {
            console.log('diag win')
            return true;
        }
        if (this.board[2] === player && this.board[6] === player) {
            console.log('diag win')
            return true;
        }
    }
    return false;
}

//var ttt = new TicTacToe();
