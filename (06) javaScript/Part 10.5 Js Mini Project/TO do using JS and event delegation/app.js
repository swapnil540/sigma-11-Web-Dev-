let taskInp = document.querySelector('#task');
let ul = document.querySelector('ul');
let form = document.querySelector('form');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(`task = ${taskInp.value}`);

    if(taskInp.value != "" && taskInp.value != " ") {
        let item = document.createElement('li');

        item.innerHTML = `${taskInp.value} <button class='delete'> delete </button>`;
        ul.insertAdjacentElement("beforeend", item);
    }


    taskInp.value = "";
});

// phenomenon of event delegation
ul.addEventListener("click", function(event) { 
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
    
})


// let deleteBtns = document.querySelectorAll(".delete");
// for(delBtn of deleteBtns) {
//     delBtn.addEventListener("click",function() { // applies only for existing elements not for new ones
//         let parent = this.parentElement;
//         parent.remove();
        
//     });
// }
