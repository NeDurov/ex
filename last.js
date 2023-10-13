Array.prototype.last = function () {
	this.length ? this[this.length - 1] : -1;
};

console.log([1, 2, 3].last());
