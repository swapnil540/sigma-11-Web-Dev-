let h2 = document.querySelector("h2");

function changeColor(color, delay, nextColorChange) {
  setTimeout(function () {
    h2.style.color = color;
    if (nextColorChange)
      // don't execute if nextColorChange is undefined i.e false
      nextColorChange();
  }, delay);
}

// callback hell exists at production level in industries to write the code with dependencies
changeColor("red", 1000, () => {
  // callBack nesting -> CALLBACK HELL
  changeColor("green", 1000, () => {
    changeColor("orange", 1000, () => {
      // execute this only if above callbacks executed successfully
      changeColor("blue", 1000); // no next call back is passed, changeColor fnx will not call again afetr this
    });
  });
});

// callback nesting confusing to understand
// concpet of promises, async and wait -> better way to write dependent code instead of callback Hell

// Refactoring above callback hell code using promises
let h3 = document.querySelector("h3");

function changeColor2(color, delay) {
  return new Promise((resolve, reject) => {
    // no chances of rejection in color change that's why reject not calles
    setTimeout(function () {
      h3.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

changeColor2("red", 1000)
  .then(() => {
      console.log("red color was completed");
      return changeColor2("blue", 1000);
  })
  .then(() => {
      console.log("blue color was completed");
      return changeColor2("orange", 1000);
  })
  .then(() => {
      console.log("orange color was completed");
      return changeColor2("pink", 1000);
  })
  .then(() => {
      console.log("pink color was completed");
      return changeColor2("green", 1000);
  })
  .then(() => {
      console.log("green color was completed");
  })
  .catch((error) => {
      console.log(error);
      console.log("failed");
  });
