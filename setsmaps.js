// const ids = new Set(['a', 'n', 'x']);
// console.log(ids);
// if (ids.has('a')) {
//   ids.delete('a');
// }
// ids.add(2);

// for (const entry of ids.entries()) {
//   console.log(entry[0]);
// }

// const person1 = { name: 'max' };
// const person2 = { name: 'manual' };

// const personData = new Map([
//   [person1, [{ price: [564, 997, 113] }]],
//   [person2, [{ price: [564, 997, 113], age: 30 }]],
// ]);

// personData.set(person2, [{ date: 'tommorrow' }]);

// // console.log(personData);
// // console.log(personData.get(person2));

// for (const [key, value] of personData.entries()) {
//   //way 1 to go trow all entries
//   console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }

// for (const val of personData.values()) {
//     console.log(val);
//   }

let person = { name: 'max' };
const persons = new WeakSet();
persons.add(person);
console.log(persons);



const personData = new WeakMap();
personData.set(person, 'bbbb');
person = null;
console.log(personData);
// person = null;


