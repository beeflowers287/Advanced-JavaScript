/* eslint-disable */

// Refactor the following code to use the specified ES6 features.
// There are no automated tests.
// To make sure the code still works you can run this file using `node es6.js` from inside `/src`.

//----------------
// const, =>, default parameters, arrow functions default return statements using ()

let food = 'pineapple';

const isMyFavoriteFood = (food = 'thousand-year-old egg') => food;

const isThisMyFavorite = isMyFavoriteFood(food);

//----------------
//const, class, template literals, enhanced object literals (foo: foo, -> foo,)

function User({username, password}) {
  return {
    username,
    password,
    sayHi() {
      `${username} says hello!`;
    }
  }
}

// const options = [
//   {
//     username: 'JavaScriptForever',
//     password: 'password'
//   }
// ];

const me = User({username: 'JavaScriptForever', password: 'password'});

console.log(me.username); // 'JavaScriptForever'
console.log(me.password); // 'password'
console.log(me.sayHi()); // undefined :(

// ----------------
// let, const, =>, ... (spread operator)

const addArgs = (array) => {
  const args = Array.from(array);
  console.log(args);
  return args.reduce((sum, arg) => {
    return sum + arg;
  }, 0)
  // var sum = 0;
  // for (var i = 0; i < arguments.length; i++) {
  //   sum += arguments[i];
  // }
  // return sum;
};

// var argsToCb = function (cb) {
//   var args = Array.prototype.slice.call(arguments);
//   return cb.apply(null, args.splice(1));
// };

var result = addArgs([1,2,3,4]); // => 10
// var result = argsToCb(addArgs, 1, 2, 3, 4, 5); //result should be 15
console.log(result);

/* eslint-enable */
