const expensive = () => {
  console.log("Expensive Api call");
};

const cheap = (func, limit) => {
  var timer;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      expensive.apply(context, args);
    }, limit);
  };
};

window.addEventListener("resize", cheap(expensive, 10000));
