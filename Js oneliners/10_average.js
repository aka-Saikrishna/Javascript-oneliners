const average = (...args) => args.reduce((a, b) => a + b) / args.length;

console.log(average(2, 7, 8, 10));
console.log(average(5, 15, 10));