// const upperCaseWords = (str) =>  str.replace(/^(.)|s+(.)/g, (c) => c.toUpperCase())

// // const inputString = "this line is to convert first character to uppercase"

// const upperCaseString = upperCaseWords('make the first character to uppercase')

// console.log(upperCaseString);
const upperCaseWords = (str) =>  str.replace(/(\b\w)/g, (c) => c.toUpperCase());

console.log(upperCaseWords("make the first character to uppercase"));