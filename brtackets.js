function isValidBrackets(str) {
	const stack = [];

	const openBrackets = {
		"(": ")",
		"[": "]",
		"{": "}",
	};

	const closeBrackets = [")", "]", "}"];

	for (let i = 0; i < str.length; i++) {
		if (closeBrackets.includes(str[i])) {
			if (openBrackets[stack.pop()] != str[i]) return false;
		} else {
			stack.push(str[i]);
		}
	}
	return stack.length === 0;
}

console.log(isValidBrackets("(({})[])"));
