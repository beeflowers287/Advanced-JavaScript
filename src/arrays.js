// Complete the following functions.
// These functions only need to work with arrays.


const each = (elements, cb) => {
  elements.forEach((element, i) => {
    return cb(element, i);
  });
  return cb;
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each
};

const map = (elements, cb) => {
  const newArray = elements.map((element) => {
    return cb(element);
  });
  return newArray;
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
};

const reduce = (elements, cb, memo) => {
  let i = 0;
  if (!memo) {
    memo = elements[0];
    i++;
  }
  for (i; i < elements.length; i++) memo = cb(memo, elements[i]);
  return memo;
};
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.

const find = (elements, cb) => {
  const finder = elements.find((e) => {
    if (cb(e)) return e;
    return undefined;
  });
  return finder;
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
};

const filter = (elements, cb) => {
  const arr = [];
  elements.filter((e) => {
    if (cb(e)) {
      arr.push(e);
      return arr;
    } return [];
  });
  return arr;
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
};

const flatten = (elements) => {
  return elements.reduce((a, b) => {
    if (Array.isArray(b)) {
      return a.concat(flatten(b));
    }
    return a.concat(b);
  }, []);
  // a.concat(Array.isArray(b) ? flatten(b) : b), []});
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
};

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};
