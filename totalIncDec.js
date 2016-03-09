// totalIncDec(0)==1
// totalIncDec(1)==10
// totalIncDec(2)==100
// totalIncDec(3)==475
// totalIncDec(4)==1675
// totalIncDec(5)==4954
// totalIncDec(6)==12952



function totalIncDec(power) {
	var num = Math.pow(10, power);
	var totalCount = 0;
	totalCount += increasing(num);
	totalCount += decreasing(num);
	totalCount -= doubles(num);
	console.log('total:',totalCount);
}

function increasing(num) {
	var totalInc = 0;
	var checkingNum = 0;
	while(checkingNum < num) {
		var numArr = (""+checkingNum).split('')
		for(var i = 0; i < numArr.length; i++) {
			if(numArr[i+1] === undefined) {
				totalInc++;
				//console.log(checkingNum)
				break;
			}
			else if(numArr[i] > numArr[i+1]) {
				break;
			}
		}
		
		checkingNum++;
	}
	console.log('inc:',totalInc);
	return totalInc;
}

function decreasing(num) {
	var totalInc = 0;
	var checkingNum = 10;
	while(checkingNum < num) {
		var numArr = (""+checkingNum).split('')
		for(var i = 0; i < numArr.length; i++) {
			if(numArr[i+1] === undefined) {
				totalInc++;
				break;
			}
			else if(numArr[i] < numArr[i+1]) {
				break;
			}
		}
		
		checkingNum++;
	}
	console.log('dec',totalInc);
	return totalInc;
}

function doubles(num) {
	var totalInc = 0;
	var checkingNum = 10;
	while(checkingNum < num) {
		var numArr = (""+checkingNum).split('')
		for(var i = 0; i < numArr.length; i++) {
			if(numArr[i+1] === undefined) {
				totalInc++;
				break;
			}
			else if(numArr[i] != numArr[i+1]) {
				break;
			}
		}
		
		checkingNum++;
	}
	console.log('dub',totalInc);
	return totalInc;
}











totalIncDec(3);