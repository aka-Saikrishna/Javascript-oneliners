//  To know the day of the year a certain date is
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))

const day = dayOfYear(new Date("2024-05-01")) // 122th day
console.log(day);