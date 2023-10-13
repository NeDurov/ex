function twoSum(numbers, target) {
	let left = 0,
		right = numbers.length - 1;

	while (left < right) {
		let difference = target - numbers[right];
		if (difference === numbers[left]) return [++left, ++right];
		if (difference < numbers[left]) {
			right--;
		} else {
			left++;
		}
	}
}

let numbers = [-1, 0],
	target = -1;

console.log(twoSum(numbers, target));
