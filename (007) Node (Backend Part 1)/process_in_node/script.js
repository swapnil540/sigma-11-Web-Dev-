// let n = 5; 
// for(let i=0; i<n; i++) {
//     console.log("hii", i);
// }

// console.log("bye!");

let args = process.argv;

for(let i=0; i<args.length; i++) { // we can skip first 2 elements by starting i with idx 2
    console.log(args[i]);
}
