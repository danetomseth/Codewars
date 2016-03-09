function TicTacToe() {
    // fill out the construction function
    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.gameStatus = false;
    this.currentPlayer = 1;
    this.firstPlayer;
    this.returnArray = [];
    this.moveCount = 0;
}


TicTacToe.prototype.move = function(choice) {
	//want to check if game is still valid
	if(this.gameStatus) {
		this.message(5);
		this.returnArray[0] = 0;
		return this.returnArray;
	}
	//if game count is 1, check for field
	else if(!this.moveCount && choice) {
		console.log('player goes first');
		this.currentPlayer = 2;
	}
	else this.switchPlayer();
	//pick choice


	if(!choice || this.currentPlayer === 1) {
		this.makeChoice();
	}
	else {
		
		this.customChoice(choice)
	}

	//check choice if return[0] !== 0
	if (this.returnArray[0]) {
		this.gameStatus = this.checkMove()
	}
	else {
	//Illegal move
		this.message(6);
		return this.returnArray;
	}

	//Determine which message to send if game is still valid
	for(var i = 0; i <= 6; i+= 3) {
    	console.log(this.board[i] +','+ this.board[i+1] +','+  this.board[i+2]);
    }
    
    if(this.checkDraw() && !this.gameStatus) {
    	this.message(2);
    	if(this.currentPlayer === 2) {
    		this.returnArray[0] = 0;
    	}
    	this.gameStatus = true;
    	return this.returnArray
    }
    this.chooseMessage();
    if(this.currentPlayer === 1) {
    	return this.returnArray;
    }
    else if(this.currentPlayer === 2 && !this.gameStatus) {
    	if(!choice) {
    		return this.returnArray;
    	}
    	else this.move();
    }
    
    return this.returnArray;
       
}
TicTacToe.prototype.checkDraw = function() {
	var returnBool = true;
	for (var i = 0; i < this.board.length; i++) {
		//sets bool to 0 if there is an empty space
		if(!this.board[i]) returnBool = false;
	}
	return returnBool;
}

TicTacToe.prototype.switchPlayer = function() {
	this.moveCount++
	if(this.moveCount % 2 === 1) {
		console.log('player 1');
		this.currentPlayer = 1;
	}
	else this.currentPlayer = 2;
	
}


TicTacToe.prototype.makeChoice = function() {
    var computerOrder = [4, 0, 2, 6, 8, 1, 3, 5, 7];
    for (var i = 0; i < computerOrder.length; i++) {
        if (!this.board[computerOrder[i]]) {
            this.returnArray[0] = computerOrder[i] + 1;
            //set move number to one plus
            this.board[computerOrder[i]] = this.currentPlayer;
            break;
        }
    } 
    //this.message(5);  
}

TicTacToe.prototype.customChoice = function(choice) {
	//check if square is taken
	if(this.board[choice - 1]) {
		console.log('Invalid choice');
		this.returnArray[0] = 0;
		
	}
	else {
		this.board[choice - 1] = this.currentPlayer;
		this.returnArray[0] = choice;
	}
}


TicTacToe.prototype.checkMove = function() {
    var checkCell = 0;
    var winCheck = 0;
    // row check
    while (checkCell <= 6) {
        for (var i = checkCell; i < checkCell + 3; i++) {
            if (this.board[i] === this.currentPlayer) {
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
            if (this.board[i] === this.currentPlayer) {
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
    if (this.board[4] !== this.currentPlayer) {
        return false;
    } else {
        if (this.board[0] === this.currentPlayer && this.board[8] === this.currentPlayer) {
            console.log('diag win')
            return true;
        }
        if (this.board[2] === this.currentPlayer && this.board[6] === this.currentPlayer) {
            console.log('diag win')
            return true;
        }
    }
    return false;
}

TicTacToe.prototype.chooseMessage = function() {
	if (this.gameStatus && this.moveCount <= 9) {
		if(this.currentPlayer === 1) {
			this.message(4)
			debugger;
			return;
		}
		else this.message(3)
	}
	else if(this.currentPlayer === 1) {
		this.message(1);
		return
	}
	else {
		return
	}
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
        	this.returnArray[0] = 0;
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


var ttt = new TicTacToe()
