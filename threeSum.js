function threeSum(nums) {
	nums.sort((a, b) => a - b);

	let result = [];

	for (let i = 0; i < nums.length; i++) {
		let first = nums[i];
		if (first > 0) break;
		if (i > 0 && first === nums[i - 1]) continue;

		let left = i + 1,
			right = nums.length - 1;

		while (left < right) {
			if (first + nums[left] + nums[right] > 0) {
				right--;
			} else if (first + nums[left] + nums[right] < 0) {
				left++;
			} else {
				result.push([first, nums[left++], nums[right--]]);
				while (nums[left] === nums[left - 1] && left < right) {
					left++;
				}
			}
		}
	}

	return result;
}

let nums = [0, 0, 0, 0];

console.log(threeSum(nums));
