function numSubseq(nums, target) {
	let left = 0,
		arr = [1];

	let right = nums.length - 1;

	let sort = nums.sort((a, b) => a - b);

	let result = 0;

	for (let i = 0; i < nums.length; i++) {
		arr.push((arr[arr.length - 1] * 2) % 1000000007);
	}

	while (left <= right) {
		if (sort[right] + sort[left] > target) {
			right--;
		} else {
			result = (result + arr[right - left++]) % 1000000007;
		}
	}
	return result;
}
let nums = [3, 5, 6, 7],
	target = 9;
console.log(numSubseq(nums, target));
// !!!! PROBLEM i cant understand
