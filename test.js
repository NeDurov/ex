// {
// 	var a;
// }
// test();
// console.log(a);

// console.log(1);
// setTimeout(() => console.log(2), 2000);
// console.log(3);
// setTimeout(() => console.log(4), 0);
// console.log(5);

function test(label, arr) {
	arr.map((el) =>
		console.log(
			JSON.stringify({
				label: label,
				pattern: [{ LEMMA: el }],
			})
		)
	);
}

const l = "retail ";
const arr = ["ритейл", "рознчиная продажа"];

test(l, arr);
