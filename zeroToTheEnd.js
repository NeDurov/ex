function zeroToTheEnd(arr) {
	// let loves = [];

	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i] === 0) {
	// 		loves.push(i);
	// 	} else if (loves.length) {
	// 		let delIndex = loves.shift();
	// 		[arr[delIndex], arr[i]] = [arr[i], arr[delIndex]];
	// 		i--;
	// 	}
	// }
	// return arr;
	for (let i = 0, j = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			[arr[j], arr[i]] = [arr[i], arr[j]];
			j++;
		}
	}
	return arr;
}

console.log(zeroToTheEnd([1, 0, 2, 3, 0, 0, 4]));
