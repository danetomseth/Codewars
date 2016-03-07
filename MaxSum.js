// sequence of values −2, 1, −3, 4, −1, 2, 1, −5, 4; 
// largest sum is 4, −1, 2, 1, with sum 6.

// maxContiguousSum([3, -4, 8, 7, -10, 19, -3]); // returns 24
// maxContiguousSum([-8, -10, -12, -2, -3, 5]); // returns 5


function maxContiguousSum (arr) {
	var storeMax = 0;
	var currentMax = 0;
	var localMax = 0;
	var lastMax = 0;

	for(var i = 0; i < arr.length; i++) {
		for(var j = i; j < arr.length; j++) {
			currentMax += arr[j];
			if(currentMax > localMax) {
				localMax = currentMax;
			}
			lastMax = currentMax;
		}
		if(localMax > storeMax) {
			storeMax = localMax;
		}
		lastMax = 0;
		currentMax = 0;
		localMax = 0;
	}
	console.log('final max', storeMax);
	return storeMax;
}





maxContiguousSum([-2,1,-3,4,-1,2,1,-5,4]);
maxContiguousSum([2, -3, -3, 9, -29, 8, -9]);