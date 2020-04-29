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

const hobbies = ['sports', 'cokking', 'reading'];
// hobbies.push('reading');
// hobbies.unshift('sking');
// hobbies.shift();
// hobbies.pop();

// hobbies[2] = 'coding';
// hobbies[5] = 'boxing';//not use 99.99 cases
hobbies.splice(2, 0, 'booking');
console.log(hobbies);
