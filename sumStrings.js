function sumStrings(a,b) { 
	finalStr = [];
	function strToNumArray(str) {
		var numArr = [];
		for(var i = 0; i<str.length; i++) {
			var nextNum = Number(str[i]);
			numArr.push(nextNum);
		}
		return numArr;
	}
	function addArrays(arrA, arrB) {
		while(arrA[0] == 0) {
			arrA.shift();
		}
		while(arrB[0] == 0) {
			arrB.shift();
		}
		var largeArr = arrA;
		var smallArr = arrB;
		var nextSum = 0;
		var carryNum = 0;
		if(arrA.length < arrB.length) {
			largeArr = arrB;
			smallArr = arrA;
		}
		while(largeArr.length > 0) {
			while(smallArr.length > 0) {
				nextSum = Number(largeArr.pop()) + Number(smallArr.pop());
				if(carryNum === 1) {
					nextSum += 1;
					carryNum = 0;
				}
				if(nextSum >= 10) {
					nextSum -= 10;
					carryNum = 1;
				}
				finalStr.unshift(nextSum.toString());
			}
			if(carryNum !== 0) {
				if(largeArr.length > 0) {
					nextSum = Number(largeArr.pop()) + carryNum;
					finalStr.unshift(nextSum.toString());
				}
				else {
					finalStr.unshift(carryNum.toString())
				}
					carryNum = 0;
				}
			if(largeArr.length > 0) {
				finalStr.unshift(largeArr.pop().toString());
			}
		}
	}
	function segmentArrays(arrA, arrB) {
		var segA = [];
		var segB = [];
		while(arrA.length > 0) {
			segA.unshift(arrA.pop());
		}
		while(arrB.length > 0 ) {
			segB.unshift(arrB.pop());
		}
		addArrays(segA,segB);
	}
	var num1 = strToNumArray(a);
	var num2 = strToNumArray(b);
	segmentArrays(num1, num2);
	return finalStr.join('')
}

