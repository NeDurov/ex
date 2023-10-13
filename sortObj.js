let array = [
	{ year: "2010", day: "1" },
	{ year: "2007", day: "6" },
	{ year: "2001", day: "1" },
	{ year: "1999", day: "2" },
	{ year: "2015", day: "3" },
	{ year: "2010", day: "4" },
	{ year: "2007", day: "5" },
	{ year: "2010", day: "10" },
	{ year: "2001", day: "5" },
];

function sort(array) {
	return array.sort(function (next, prev) {
		if (+next.year > +prev.year) {
			return 1;
		}
		if (+next.year < +prev.year) {
			return -1;
		}
		if (+next.year === +prev.year) {
			if (+next.day > +prev.day) {
				return 1;
			}
			if (+next.day < +prev.day) {
				return -1;
			}
			if (+next.day === +prev.day) {
				return 0;
			}
		}
	});
}

console.log(sort(array));
