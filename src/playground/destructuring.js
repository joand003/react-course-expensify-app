// Object destructuring

// const person = {
//   name: 'josh',
//   age: 36,
//   location: {
//     city: 'Andover',
//     temp: 75
//   }
// };

// const { name: firstName = 'anonymous', age } = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// Array Destructuring

const address = ['15830 Linnet St NW', 'Andover', 'Minnesota', '55304'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [type, , mediumCost] = item;

console.log(`A medium ${type}Coffee (hot) costs ${mediumCost}$2.50`);
