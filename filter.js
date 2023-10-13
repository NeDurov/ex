function filter(arr, fn) {
	let result = [];
	arr.forEach((el, i) => {
		if (fn(el, i)) {
			result.push(el);
		}
	});
	return result;
}

console.log(filter());
