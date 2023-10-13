function findDifference(nums1, nums2) {
	// 	let result = [[], []];
	// 	const numsSet1 = [...new Set(nums1)];
	// 	const numsSet2 = [...new Set(nums2)];

	// 	numsSet1.forEach((num) => {
	// 		if (!numsSet2.includes(num)) result[0].push(num);
	// 	});

	// 	numsSet2.forEach((num) => {
	// 		if (!numsSet1.includes(num)) result[1].push(num);
	// 	});

	// 	return result;

	//!
	// nums1 = new Set(nums1);
	// nums2 = new Set(nums2);
	// for (let item of nums1) {
	// 	if (nums2.has(item)) {
	// 		nums1.delete(item);
	// 		nums2.delete(item);
	// 	}
	// }
	// return [[...nums1], [...nums2]];
	//!

	const set1 = new Set(nums1),
		set2 = new Set(nums2);

	const x = new Date().getTime();
	console.log(x);

	nums1.forEach(set2.delete, set2);
	nums2.forEach(set1.delete, set1);

	const y = new Date().getTime();
	console.log(y);
	console.log(y - x);

	return [[...set1], [...set2]];
}

let nums1 = [1, 2, 3],
	nums2 = [2, 4, 6];
console.log(findDifference(nums1, nums2));
