function isPalindrome(x) {
	let sNum = x.toString();
	if (sNum[0] == "-") return false;
	let i = 0,
		y = sNum.length - 1;
	while (i != y && i < y) {
		if (!(sNum[i] == sNum[y])) return false;
		i++;
		y--;
	}
	return true;
}

console.log(isPalindrome(121));
