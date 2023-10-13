async function sleep(millis) {
	await new Promise((resolve) => setTimeout(resolve, millis));
	return 1;
}
console.log(sleep(100).then((e) => console.log(e)));

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
