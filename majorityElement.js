function majorityElement(nums) {
	if (nums.length == 2) return nums[0];

	return nums.sort()[Math.round((nums.length - 1) / 2)];

	//!  Moore’s Voting Algorithm

	//* Initialize sol and cnt to store the solution and its frequency for respective iterations...
	// let sol = 0,
	// 	cnt = 0;
	//* For every element i in the array...
	// for (let i = 0; i < nums.length; i++) {
	//* If cnt is equal to zero, update sol as sol = i
	// 	if (cnt == 0) {
	// 		sol = nums[i];
	// 		cnt = 1;
	// 	}
	//* If i is equal to candidate, increment cnt...
	// 	else if (sol == nums[i]) {
	// 		cnt++;
	// 	}
	//* Otherwise, decrement cnt...
	// 	else {
	// 		cnt--;
	// 	}
	// }
	//* Return & print the solution...
	// return sol;

	// ? OR

	// let candidate;
	// let count = 0;

	// for (const num of nums) {
	// 	if (count === 0) {
	// 		candidate = num;
	// 	}

	// 	count += num === candidate ? 1 : -1;
	// }

	// return candidate;
}

let nums = [-1, 1, 1, 1, 2, 1];

console.log(majorityElement(nums));
