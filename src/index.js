module.exports = function reverse (n) {
	n = Math.abs(n);
	let str = n.toString();
    return str.split("").reverse().join("");
}
