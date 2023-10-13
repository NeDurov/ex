function romanToInt(s) {
	let result = 0;
	let resultS = s;

	const repl = {
		IV: 4,
		IX: 9,
		XL: 40,
		XC: 90,
		CD: 400,
		CM: 900,
	};
	const numbers = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	for (key in repl) {
		while (resultS.includes(key)) {
			resultS = resultS.replace(key, " ");
			result += repl[key];
		}
	}
	for (key in numbers) {
		while (resultS.includes(key)) {
			resultS = resultS.replace(key, " ");
			result += numbers[key];
		}
	}
	return result;
}

console.log(romanToInt("III"));
