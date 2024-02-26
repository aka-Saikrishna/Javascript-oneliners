const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));

const difference = diffDays(new Date("2024-01-21"), new Date("2024-02-11"))

console.log(difference, "Days");//21 days