// async keyword -> creates async fnx which returns promise object by default

console.log("async keyword")

async function greet() {
  // async fnx using async keyword
//   throw "404 page not found";
  return "Hello world"; // return Promise object by default
  // value return is the PromiseResult
}

let obj = greet();
console.log("promise object return by async fnx with return value", greet());

greet()
  .then((result) => {
    console.log("hello fnx call 1 executed");
    console.log("result: ", result);
    return greet();
  })
  .then((result) => {
    console.log("hello fnx call 2 executed");
    console.log("result: ", result);
  })
  .catch((error) => {
    console.log(error);
    console.log("got an error in execution")
});


// async keyword with arrow fnx
let demo = async () => { // returns async fnx
}

console.log("promise object return by async fnx without any return value", demo()); // promise object with result undefined and state fulfilled






// await keyword -> pasusa the its surrounding async fnx call until promise is settled (resolved or reject)
console.log("Await keyword and promise rejection handling ");

let body = document.querySelector('body');

function changeBg(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if(num > 3) { // for demonstrating promise rejection using try and catch block
                console.log(color);
                reject(`Promise rejected`);
            } 
            body.style.backgroundColor = color;
            resolve("Bg color changed");
        }, delay);
    });
}

async function callChangeBg() {
    try { // Promise rejection handling using try and catch block so that code after async fnx calls must execute even in case of promise rejection
        await changeBg("green", 1000);
        await changeBg("red", 1000);
        await changeBg("pink", 1000);
        await changeBg("yellow", 1000); 
        await changeBg("black", 1000);
        await changeBg("brown", 1000);
        await changeBg("teal", 1000);
        await changeBg("DarkSalmon", 1000);
    } 
    catch(err) {
        console.log("caught an error");
        console.log(err);
    }

    console.log("Most important code executed"); // assuming it is most importst and must execute after above async fnx calls even if promise rejected above
}

callChangeBg();

