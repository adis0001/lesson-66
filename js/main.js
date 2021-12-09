//! metods massiv (forEach, map, filter,reduce,indexof, every, some)

//! for Each - danyyi metod perebiraaet massiv and not back

// let arr = [1, 10, 20, 30, 40];
// arr.forEach((item, index, array) => {
//   if (item > 25) console.log(item);
// });

// let names = ["maks", "atai", "beka", "erick"];
// names.forEach((item, index, array) => {
//   console.log(item);
//   console.log(index);
//   console.log(array);
// });

// let nums = [-10, 20, -55, 145, 212, -99];
// let positiveNums = [];
// nums.forEach((item) => {
//   if (item > 0) {
//     positiveNums.push(item);
//   }
// });
// console.log(positiveNums);

//! map- dannyi metod perebiraet massiv and back new massiv
// let countries = ["USA", "Kazahstan", "Kyrgystan", "China"];
// let newCountries = countries.map((item, index, array) => {
//   console.log(item.length);
//   console.log(item);
//   console.log(index);
//   console.log(array);
//   return item.length;
// });
// console.log(newCountries);

// let nums = [4, 2, 9, 6, 5];
// let newNums = nums.map((item) => {
//   return item ** 2;
// });
// console.log(newNums);

//! filter - dannyi metod perebiraet massiv, if in return usolovye vedet true, to dannyi item back in new massiv , a if false, to not back

// let frameworks = ["react", "django", "node.js", "flutter"];
// frameworks.filter((item, index, array) => {
//   console.log(item);
// });

// let nums = [-10, 20, -55, 200, -42, 12];
// let negative = nums.filter((item) => {
//   return item < 0;
// });
// console.log(negative);
//! callback - it function which peredaetcy in arguments onther function or metods

// let shoes = [
//   {
//     name: "nike af-1",
//     price: 4000,
//   },
//   {
//     name: "li-ning kx-12",
//     price: 9000,
//   },
//   {
//     name: "adidas",
//     price: 6666,
//   },
//   {
//     name: "puma",
//     price: 10000,
//   },
// ];
// let price = shoes.filter((item) => {
//   return item.price > 6000 && item.price < 8000;
// });
// console.log(price);

//! indexOf- found index first coninicedent element

// let arr = ["number", 10, 20, 20];
// let index = arr.indexOf(20);
// console.log(index);

//! includes back true, if found inconcident , a if not found , to false

// let data = [true, 30, false];
// let result = data.includes(30);
// console.log(result);

//! some, every

// let arr = [10, 20, 30, 40];
// let result = arr.every((item) => {
//   return item > 0;
// });
// console.log(result);

//! reduce- dannyi metod prenimaet in yourself callback function, a function get prevValue ,item,index,array
//! if none second arguments, to prevValue raven first elemntu massiv, a item second. start so second circul prevValue raven tomu, what vernuli na predudushim circule.
//! if have second argument (initvalue), to prevValue raven inirvValue ,a item first elemnts massiv.
let nums = [175, 50, 25];
let sum = nums.reduce((val, item) => {
  return val - item;
});
console.log(sum);

// let celsius = [-15, 10, 24, 36, 0];
// let fa = celsius.map((item) => {
//   return item * 1.8 + 32;
// });
// console.log(fa);
