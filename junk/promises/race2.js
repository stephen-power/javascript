var promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 5000, 'one');
});

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'two');
});

Promise.race([promise1, promise2]).then(function(value) {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"
