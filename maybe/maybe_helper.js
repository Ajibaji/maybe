// process.argv.forEach(function (val, index, array) {
//   console.log(index + ': ' + val);
// });

var args = process.argv.slice(2);
console.log(args);

// // Maybe function - to ascertain an expectation
// var maybe = {
//   isTrue: function(maybeToCheck) {
//     if (!maybeToCheck) {
//       throw new Error("Maybe failed: " + maybeToCheck + " is absolute bullshit");
//     }
//   };
// };
