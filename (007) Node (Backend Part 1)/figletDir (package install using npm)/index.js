const figlet = require("figlet");

async function printTxt() {
    const text = await figlet.text("Swapnil");
    const text2 = await figlet.text("Vaibhav");
    console.log(text);
    console.log(text2);
}

printTxt();


// another way to use figlet package

// import figlet from "figlet";

// async function doStuff() {
//   const text = await figlet.text("Hello World!!");
//   console.log(text);
// }

// doStuff();