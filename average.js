function average(salary) {
	let max = salary[0],
		min = salary[0];

	return (
		(salary.reduce((acc, cur) => {
			max = Math.max(cur, max);
			min = Math.min(cur, min);
			return acc + cur;
		}, 0) -
			(max + min)) /
		(salary.length - 2)
	);
}

let salary = [4000, 3000, 1000, 2000];

console.log(average(salary));
