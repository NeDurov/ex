function groupAnagrams(strs) {
	let groups = new Map();

	let wasAdd = false;
	let i = 0;

	let result = [];

	for (const str of strs) {
		wasAdd = false;
		for (const key of groups.keys()) {
			if (isAnagram(str, key)) {
				result[groups.get(key)].push(str);
				wasAdd = true;
				break;
			}
		}
		if (!wasAdd) {
			groups.set(str, i++);
			result.push([str]);
		}
	}
	return result;

	// let map = {};

	// for (let str of strs) {
	// 	let s = str.split("").sort().join("");
	// 	if (!map[s]) map[s] = [];
	// 	map[s].push(str);
	// }
	// return Object.values(map);
}

function isAnagram(s, t) {
	if (s.length != t.length) return false;

	let counter = new Map();

	for (let i = 0; i < s.length; i++) {
		counter.set(s[i], (counter.get(s[i]) || 0) + 1);
		counter.set(t[i], (counter.get(t[i]) || 0) - 1);
	}

	for (const iterator of counter.values()) {
		if (iterator) return false;
	}
	return true;
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(strs));
