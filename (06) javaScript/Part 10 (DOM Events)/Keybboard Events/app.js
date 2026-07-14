let inp = document.querySelector('input');

inp.addEventListener("keyup", function(event) {
    console.dir(`code = ${event.code}`);
    console.dir(`key = ${event.key}`);

    console.log("key was pressed");
})