const removeFalsy = (arr) => arr.filter(Boolean)

console.log(removeFalsy([0, '1 number', NaN, true, false, 70, undefined, "a string" ]));