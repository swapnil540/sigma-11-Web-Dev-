let jsonData = '{"fact":"Unlike humans, cats cannot detect sweetness which likely explains why they are not drawn to it at all.","length":102}'; // normal json data as string

// JSON.parse(json data) method
console.log(jsonData); // quotes not shown run this on console window to see quotes
console.log(jsonData.fact); // can't access because json data is in string

// run this json methods on console window to see the difference and understand in better way
let parsedJsonData = JSON.parse(jsonData); // converting json data to js object, basically removing quotes 

console.log(parsedJsonData); // JS object
console.log(parsedJsonData.fact); // can access becuase it converted to JS object


// JSON.stringify(parsed Json data) -> converts parsed json data to original json format enclosed withing quotes as string

let student = {
    name: "swapnil",
    marks: 70,
};

let jsonStudent = JSON.stringify(student);

console.log(jsonStudent);// quotes are not shown run this on console widow to see quotes

