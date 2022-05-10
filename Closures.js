// A function which returns the inner function in which inner function has access to its external enviroment
// Javascript doesnt have concept of private methods so we use closures to fullfill that requirment
var counter = (function () {
  // This is a private variable which is not accessible from global environment
  var privateCounter = 0;
  // This is a private method
  function changeCounter(val) {
    privateCounter += val;
  }
  // We return three functions/methods which will be accesible from global scope
  return {
    increment() {
      changeCounter(1);
    },
    decrement() {
      changeCounter(-1);
    },
    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
