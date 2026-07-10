function multipleGreet(func, n) {
  // this fnx takes another fnx as an argument
  for (let i = 0; i < n; i++) {
    func(); // calling fnx recieved as argument
  }
}

let greet = function () {
  console.log("Hello");
};

multipleGreet(greet, 2); // calling

multipleGreet(function () {console.log("namaste");}, 3);
