const figlet = require("figlet");

async function printTxt() {
    const text = await figlet.text("Hii");
    const text2 = await figlet.text("Hello");
    console.log(text);
    console.log(text2);
}

printTxt();