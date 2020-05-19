// const ids = new Set(["a", "n", "x"]);
// // console.log(ids);
// try {
//   if (ids.has("z")) {
//     ids.delete("z");
//   } else {
//     throw { errorMessage: "not excist in set" };
//   }
// } catch (err) {
//   // console.log(err);
// }

// for (const entry of ids.entries()) {
//   // console.log(entry[0]);
// }

// const person1 = { name: "max" };
// const person2 = { name: "manual" };

// const personData = new Map([
//   [person1, [{ price: [564, 997, 113] }]],
//   [person2, [{ price: [564, 997, 113], age: 30 }]],
// ]);

// console.log(personData);
// console.log(personData.get(person1));
// personData.set(person2, [{ date: 'tommorrow' }]);
// console.log(personData.get(person2));

// // // console.log(personData);
// // // console.log(personData.get(person2));

// // for (const [key, value] of personData.entries()) {
// //   //way 1 to go trow all entries
// //   console.log(key, value);
// // }

// // for (const key of personData.keys()) {
// //   console.log(key);
// // }

// // for (const val of personData.values()) {
// //     console.log(val);
// //   }

let person = { name: 'max' };
const persons = new WeakSet();
persons.add(person);
console.log(persons);

const personData = new WeakMap();
personData.set(person, 'bbbb');
person = null;
console.log(personData);
// person = null;

const dataName = ["hadi", "arbabi", { age: 22, address: "iran" }];
const [firstName, lastName, ...info ]= dataName;
console.log(firstName, lastName, info[0]);
