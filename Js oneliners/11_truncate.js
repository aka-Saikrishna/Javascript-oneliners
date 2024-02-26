const round = (n, d) =>  Number(Math.round(n + "e" + d) + "e-" + d );
const result = 
round(1.076363, 4) // 1.0764
round(1.076363, 4) // 1.076

console.log(result);