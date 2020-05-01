// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = new Array(3);
// // // const moreNumbers = array(3, 5);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(5);
// // console.log(yetMoreNumbers);
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

const testArray = [2, 2.3, -6, 13, 14.33];
// const resultArray = testArray.slice(2, 4);
const resultArray = testArray.concat([4, 5.7, -6], 4, [45, 2]);

testArray.push(10);
console.log(testArray, resultArray);
console.log(testArray.indexOf(2.3));

const personData = [{ name: 'ali' }, { name: 'dany' }];
console.log(personData.indexOf({ name: 'dany' }));

const dany = personData.find((person, idx, personData) => {
  return person.name === 'dany';
});
console.log(dany);
