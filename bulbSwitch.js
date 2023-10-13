function bulbSwitch(n) {
	// let resultA = Array(n).fill(true);
	let result = 1;
	let pos = 1;
	let step = 3;
	// for (let i = 1; i <= n; i++) {
	// 	for (let y = i; y < n; y += i + 1) {
	// 		resultA[y] = !resultA[y];
	// 	}
	// }
	// resultA.forEach((el) => {
	// 	if (el) result++;
	// });
	// return resultA;
	// if (n == 1 || n == 2) return 1;
	while (pos + step <= n) {
		result++;
		pos += step;
		step += 2;
	}
	return result;
}

console.log(bulbSwitch(1));
// console.log(bulbSwitch(6));
// console.log(bulbSwitch(10));
// console.log(bulbSwitch(17));
//? 1 2 1 4 1 6 1 8 1 10 1
