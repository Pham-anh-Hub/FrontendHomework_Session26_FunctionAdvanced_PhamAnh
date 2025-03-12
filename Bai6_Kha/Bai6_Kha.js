let monthArr = ["2025-03-10", "2024-12-25", "2023-07-01"];
const newMonthArr = monthArr.map((value) => value.split("-").reverse().join("/"));
console.log(newMonthArr);
