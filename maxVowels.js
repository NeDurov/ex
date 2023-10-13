function maxVowels(s, k) {
	const vowels = ["a", "e", "i", "o", "u"];
	const substring = [];
	let countOfVowels = 0;
	let maxVowels = 0;
	for (let i = 0; i < s.length; i++) {
		if (vowels.includes(s[i])) countOfVowels++;
		if (substring.length == k) {
			if (vowels.includes(substring.shift())) countOfVowels--;
		}
		substring.push(s[i]);
		if (maxVowels < countOfVowels) maxVowels = countOfVowels;
		if (maxVowels === k) return maxVowels;
	}
	return maxVowels;
}

let s = "ibpbhixfiouhdljnjfflpapptrxgcomvnb",
	k = 33;

console.log(maxVowels(s, k));
