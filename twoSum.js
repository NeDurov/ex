function twoSum(nums, target) {
	let difference = {};
	for (let index = 0; index < nums.length; index++) {
		if (Object.hasOwn(difference, nums[index])) {
			return [difference[nums[index]], index];
		}
		difference[target - nums[index]] = index;
	}
}

console.log(twoSum([2, 7, 11, 15], 9));
