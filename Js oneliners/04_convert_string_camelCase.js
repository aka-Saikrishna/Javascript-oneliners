const tocamelCase = (str) => str.trim().replace(/[-_ \s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))

console.log(tocamelCase('good morning'));
console.log(tocamelCase('goood-morning'));
console.log(tocamelCase('_gooood_morning'));
console.log(tocamelCase('goooood_morning'));