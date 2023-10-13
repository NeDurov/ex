function compose(functions) {
	let length = functions.length;
	return function (x) {
		if (length === 0) return x;
		if (length > 1) return functions[0](compose(functions.slice(1))(x));
		return functions[0](x);
	};
}

console.log(compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x])(1));

// 					fn 1   fn 2   fn 3
//       fn 1( compose (fn 2     fn 3))
//             fn 2   fn 3
//fn 2 (compose (fn 3))
// fn3 (x)
//
//

//! ONE LINE

return (x) => functions.reduceRight((acc, f) => f(acc), x);
