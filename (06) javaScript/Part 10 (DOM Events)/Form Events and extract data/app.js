let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    console.dir(event);
    event.preventDefault(); // prevents by default works i.e redirection of webpg on some other url
    let user = document.querySelector("#user"); // selecting form element through query Selector
    let pass = this.elements[1]; // form.elements[1] -> selecting form elements through elements attribute of form itself

    
    console.log(`username = ${user.value}`);
    console.log(`pass = ${pass.value}`);

    alert(`Hi ${user.value}, your oassword is ${pass.value}.`);
})