// creating a fake database situation that causes call back hell

// function saveToDB(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1; // internet speed is responsible for saving data into db
//   if (internetSpeed > 4) {
//     // good speed
//     success();
//   } else {
//     failure();
//   }
// }

// situation of callback hell -> it also occurs in real life
// saveToDB(
//   "data1",
//   () => {
//     // success callback for first data
//     console.log("success1: your data was saved");
//     saveToDB( // If first data saved successfully then only save the 2nd data
//       "data2",
//       () => {
//         //success callback for second data
//         console.log("success2 : data2 saved");
//       },
//       () => {
//         // failure callback for second data
//         console.log("failure2: weak connection");
//       },
//     );
//   },
//   () => { // failure callback for first data
//     console.log("failure1: weak connnection");
//   },
// );

// Refactoring above code using promises

function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success: data saved");
    } else {
      reject("Failure: weak connection");
    }
  });
}

// let promiseObj = saveToDb("Data1");
// console.log(promiseObj);

// promiseObj
//   .then(() => {
//     console.log("success");
//   })
//   .catch(() => {
//     console.log("failure");
//   });



// Promise chaining -> efficient and readable than callback hell code and does the same work as callback hell  code
saveToDb("Data set 1")
  .then((result) => {
    console.log("data set 1 saved");
    console.log("result ", result);
    return saveToDb("Data set 2");
  })
  .then((result) => {
    console.log("Data set 2 saved");
    console.log("result ", result);
    return saveToDb("Data set 3");
  })
  .then((result) => {
    console.log("Data set 3 saved");
    console.log("result ", result);
  })
  .catch((error) => {
    console.log("fail: weak connection");
  });
