// Do not change the line directly below.
const finder = require("./helpers/finder");

/**
 * logResult()
 * ========================
 * Logs out the entire array of objects returned from the `finder()` function.
 *
 * @param {Object} person - A person's names.
 * @param {Object} person.first - The person's first name.
 * @param {Object} person.last - The person's last name.
 */
function logResult(data) {
  finder(data.first, data.last)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })
}

/**
 * logTwoResults()
 * ========================
 * Logs out the entire array of objects returned from the `finder()` function for two different people.
 *
 * @param {Object} person1 - A person's names.
 * @param {Object} person1.first - The person's first name.
 * @param {Object} person1.last - The person's last name.
 * @param {Object} person2 - A person's names. In the same format as person1.
 */
function logTwoResults(...data) {
/*what I'm confused about is how data becomes an array of objects outside of the finder function. can you explain that to me?*/
/*AHHHHHH I SEE -- you used spread on data but I'm still confused tbh */
/* Could you also please explain the arguments and how they work? I was confused by your example*/
  data.forEach((item) => {
    finder(item.first, item.last)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  });
}


/**
 * logThreeResultsCities()
 * ========================
 * Logs out just the cities from all three people given to the function. You may assume that each search result will only return a single person.
 *
 * @param {Object} person1 - A person's names.
 * @param {Object} person1.first - The person's first name.
 * @param {Object} person1.last - The person's last name.
 * @param {Object} person2 - A person's names. In the same format as person1.
 * @param {Object} person3 - A person's names. In the same format as person1.
 */
function logThreeResultsCities(...data) {
  data.forEach((item) => {
    finder(item.first, item.last)
      .then((result) => {
        console.log(result[0].city);
      })
      .catch((error) => {
        console.log(error);
      })
  })
}
// function logThreeResultsCities(...data) {
//   /*
//   [
//     { first: "Joyce", last: "Wilkins" }, 
//     { first: "Marshall", last: "Short" }, 
//     { first: "Janet", last: "Evans" } 
//   ]

//   */

//   data.forEach((item) => {
//     finder(item.first, item.last)
//       .then((result) => {
//         /*
//           [ { last: 'Wilkins', first: 'Joyce', city: 'Kohatk', age: 30 } ]
//           [ { last: 'Short', first: 'Marshall', city: 'Soham', age: 26 } ]
//           [ { last: 'Evans', first: 'Janet', city: 'Lafferty', age: 61 } ]
//         */
//         console.log(result[0].city);
//         // result.forEach((item) => {
//         //   console.log(item.city);
//         // });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });
// }
// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
