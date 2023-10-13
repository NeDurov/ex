function diagonalSum(mat) {
	let primary = { x: 0, y: 0 },
		secondary = { x: 0, y: mat.length - 1 };
	let result = 0;
	while (primary.x < mat.length) {
		result += mat[primary.x++][primary.y++];
		result += mat[secondary.x++][secondary.y--];
	}
	return mat.length & 1
		? result - mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)]
		: result;

	//  let sum = 0;
	// 	for (let i = 0; i < mat.length; i++) {
	// 		sum += mat[i][i]; //
	// 		if (mat.length - i - 1 !== i) {
	//3-0-1==2, 3-1-1==>1,
	// 			sum += mat[i][mat.length - i - 1];
	// 		}
	// 	}
	// 	return sum;
}

let mat = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
console.log(diagonalSum(mat));
