// DATA TYPES

// Strings
// Booleans
// Numbers
// Arrays
// Undefined
// Null

// Assignment Operator (=)
// const personName = 'Phil';

// const message = 'My name is ' + personName;

// console.log(message);

//////////////////////////////////////
const isSunny = false;

// NOT Operator
// console.log(!isSunny);

// if (!isSunny) { // ???
//   console.log('Stay inside')
// }

///////////////////////////////////////
// Strict Equality (===)

// const currentDay = 'Monday';

// if (currentDay === 'Friday') { // ???
//   console.log('Go out to a restaurant');
// } else if (currentDay === 'Tuesday') { // ???
//   console.log('Lets get takeout');
// } else if (currentDay === 'Monday') {
//   console.log('Take out the trash');
// } else {
//   console.log('Stay at home and make dinner');
// }

////////////////////////////////////////
// For Loop

// 0, 1, 2

// For each one of these numbers
// Say hello

'hello'
'hello'
'hello'
'hello'

// for (let number = 0; number < 10; number++) {
//   console.log(number);
// }

/////////////////////////////////////////////

// for (let number = 0; number < 10; number++) {
//   // If number is even
//   if (number % 2 === 0) {
//     // then log out the number
//     console.log(number);
//   }
// }

/////////////////////////////////////////////
// Create a for loop logging out the number
// 5 to 10

// for (let number = 5; number <= 10; number++) {
//   console.log(number);
// }

// Create a for loop logging out the number
// 10 to 0

// for (let number = 10; number >= 0; number--) {
//   console.log(number);
// }


// Create a for loop logging out from
// 200 to 300 logging out every 3rd number

// for (let number = 200; number <= 300; number += 3) {
//   console.log(number);
// }

////////////////////////////////////////////
// ARRAYS
// Store a list of related information

const students = [
  'Jill', // 0 
  'Harold', // 1
  'Dorothy', // 2
  'Victor', // 3
  'Heather'
];

// Create an array of your own and practice adding,
// removing, and updating items in the array.

// Pets
// Hobbies
// Favorite Restaurants
// Favorite Cities

console.log(students);

// Log out a single student
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[3]);
// console.log(students[4]);

// Log the length of the array
// console.log(students.length);

// Updating an item in the array
// students[1] = 'Harry';
// console.log(students);

// Add a item to the Array
// students.push('Heather', 'Kyle');
// students.push('Jerry');
// console.log(students);

// students.splice(2, 0, 'Phil');
// console.log(students);

// Remove an item from the Array
// students.pop();
// console.log(students);

// students.splice(1, 2);
// console.log(students);

//////////////////////////////////////////
// Combining Arrays with Loops
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);

// For each student
// Log out that student

for (let index = 0; index < students.length; index++) {
  console.log(students[index]);
}

//////////////////////////////////////////////
// Using your array that you created
// Use a for loop to print out each item