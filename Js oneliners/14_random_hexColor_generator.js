const randomColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`
console.log(randomColor()); // #f24ff1
console.log(randomColor()); // #bac02b