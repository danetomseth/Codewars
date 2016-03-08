 var gliders = [
    [[1,0,0],
     [0,1,1],
     [1,1,0]],
    [[0,1,0],
     [0,0,1],
     [1,1,1]]
  ];

function getGeneration(inputArr, generations){
  var cells = inputArr;
  while(generations > 0) {
  for(var i = 0; i< cells.length; i++) {
    for(var j = 0; j < cells[i].length; j++) {
      var checkCell = inputArr[i][j];
      cells[i][j] = checkNeighbors(checkCell, j, i, inputArr);
      debugger;
    }
  }
  //console.log(cells);
  generations --;
  debugger;
}
  
  return cells;
}



function checkNeighbors (cell, x, y, cells) {
        var liveCount = 0;
        for (var i = (y - 1); i <= (y + 1); i++) {
            if (i !== -1 && i !== cells[y].length ) {
                for (var j = (x - 1); j <= (x + 1); j++) {
                    if (j !== -1 && j !== cells[x].length ) {
                        neighborCell = cells[j][i];
                        if (j === x && i === y) {
                          //current cell
                        }
                        else if(neighborCell == 1) {
                        	liveCount++;
                        }
                    }

                }
            }
        }
        if(x==2 && y == 2) {
	}
        cell = liveOrDie(cell, liveCount, cells);
  //       if(x==2 && y == 2) {
  //   cell = 1;
  // }
        return cell;
    }

function liveOrDie (cell, liveCount, cells) {


        if (cell === 0 && liveCount === 3) {
            cell = 1;
            debugger;
        }
        else if (liveCount < 2) {
            cell = 0
            debugger;
        } else if (liveCount > 3) {
            cell = 0;
            debugger;
        } 
   		return cell;

    }
var resp = getGeneration(gliders[0],1);