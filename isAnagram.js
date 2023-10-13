function isAnagram(s, t) {
	// if (s.length != t.length) return false;

	// for (let letter of s) {
	// 	t = t.replace(letter, "");
	// }

	// return t.length === 0 ? true : false;

	// if (s.length != t.length) return false;

	// let mapS = new Map();

	// for (let letter of s) {
	// 	if (mapS.has(letter)) {
	// 		mapS.set(letter, mapS.get(letter) + 1);
	// 	} else {
	// 		mapS.set(letter, 1);
	// 	}
	// }

	// for (let letter of t) {
	// 	mapS.set(letter, mapS.get(letter) - 1);
	// }

	// for (let el of mapS) {
	// 	if (el[1] != 0) return false;
	// }

	// return true;

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

let s = "anagram",
	t = "nagaram";

console.log(isAnagram(s, t));
