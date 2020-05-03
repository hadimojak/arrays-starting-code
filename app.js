// const numbers = [1, 2, 3];
// console.log(numbers);

//  const moreNumbers = new Array(3);
//  const moreNumbers = array(3, 5);
//  console.log(moreNumbers);

//  const yetMoreNumbers = Array.of(5);
//  console.log(yetMoreNumbers);
// const listItem = document.querySelectorAll('li');
// console.log(listItem);

// const arrayListItem = Array.from(listItem);
// console.log(arrayListItem);

// const dataAnalitics = [
//   [1, 2.5],
//   [3, 2, -5],
// ];
// for (const data of dataAnalitics) {
//   for (const innerdata of data) {
//     console.log(innerdata);
//   }
// }

// const hobbies = ['sports', 'cokking', 'reading'];
// hobbies.push('reading');
// hobbies.unshift('sking');
// hobbies.shift();
// hobbies.pop();

// hobbies[2] = 'coding';
// hobbies[5] = 'boxing';//not use 99.99 cases
// hobbies.splice(2, 0, 'booking');
// console.log(hobbies);

// const testArray = [2, 2.3, -6, 13, 14.33];
// const resultArray = testArray.slice(2, 4);
// const resultArray = testArray.concat([4, 5.7, -6], 4, [45, 2]);

// console.log(testArray.includes(-6));

// testArray.push(10);
// console.log(testArray, resultArray);
// console.log(testArray.indexOf(2.3));

// const personData = [{ name: 'ali' }, { name: 'dany' }];
// console.log(personData.indexOf({ name: 'dany' }));

// const dany = personData.find((person, idx, persons) => {
//   return person.name === 'dany';
// });
// const danyIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === 'dany';
// });
// console.log(dany, danyIndex);

// const prices = [10.99, 4.5, 60, 35];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * tax + price);
// // }
// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxPrice: price * tax + price };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [10.99, 4.5, 60, 1];
/*const tax = 0.19;

const textAdjuxtedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxPrice: price * tax + price };
  return priceObj;
});

// console.log(prices, '\n', textAdjuxtedPrices);

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

console.log(prices, sortedPrices);
console.log('--------------------');
console.log(prices.filter((price) => price > 10));
console.log('----------------');

let sun = 0;
prices.forEach((price) => (sun += price)); //result is 76.49000000000001
console.log(sun);

const initVal = 0;
const sum = prices.reduce(
  (previosVal, currentVal) => previosVal + currentVal,
  initVal,
);
console.log(sum);*/

const data = 'newyork;10.99;2009';
const transfomedData = data.split(';');
console.log(transfomedData);

const nameFragmentes = ['maxi', 'mill', 'yian'];
const name = nameFragmentes.join(' ');
console.log(name);

const cpeidNameFragments = [...nameFragmentes];
nameFragmentes.push('mandy');
console.log(nameFragmentes, cpeidNameFragments);

console.log(Math.min(...prices));

const persons = [
  { name: 'max', age: 30 },
  { name: 'jey', age: 31 },
];
const copiedPersons = [...persons];
console.log(copiedPersons);
