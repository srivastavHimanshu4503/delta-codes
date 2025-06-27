let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextFunction) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextFunction) nextFunction();
//   }, delay);
// }

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("brown", 1000, () => {
//         changeColor("hotpink", 1000, () => {
//           changeColor("black", 1000);
//         });
//       });
//     });
//   });
// });

function changeColorPromise(color,delay) {
    return new Promise((resolve, reject) => {
        if (color && delay) {
            setTimeout(() => {
                h1.style.color = color;
                resolve("Both arguments are available");
            }, delay);
        } 
        else reject("Either one or both arguments are missing.");
    })
}

// changeColorPromise("red", 1000)
// .then(()=> {
//     console.log("red color");
//     return changeColorPromise("orange", 1000);
// })
// .then(() => {
//     console.log("orange color");
//     return changeColorPromise("blue", 1000);
// })
// .then(()=>{
//     console.log("blue color");
//     return changeColorPromise("hotpink");
// })
// .catch((error) => {
//     console.log("promise rejected");
//     console.log(error);
// })


async function showColor() {
    await changeColorPromise("red", 1000);
    await changeColorPromise("orange", 1000);
    await changeColorPromise("grey", 1000);
    await changeColorPromise("green", 1000);
    await changeColorPromise("blue", 1000);
    await changeColorPromise("indigo", 1000);
    await changeColorPromise("black", 1000);
}

showColor();

// function saveToDB(data, success, failure) {
//   let internet = Math.floor(Math.random() * 10) + 1;
//   if (internet > 4) {
//     console.log("Data saved");
//     success();
//   } else failure();
// }

// saveToDB(
//   "shraddha",
//   () => {
//     console.log("Successfuly saved data 1");
//     saveToDB(
//       "villan",
//       () => {
//         console.log("Succesfuly saved data 2");
//         saveToDB(
//           "hero",
//           () => {
//             console.log("Successfully saved data 3");
//           },
//           () => {
//             console.log("Failure: weak connection 3");
//           }
//         );
//       },
//       () => {
//         console.log("Failure: weak connection 2");
//       }
//     );
//   },
//   () => {
//     console.log("Failure: weak connection 1");
//   }
// );

// function saveToDBPromises(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random()*10) + 1;
//         if (internetSpeed > 4) {
//             resolve("success: data was saved.");
//         } else reject("failure: weak connection");
//     })
// }

// saveToDBPromises("hero")
// .then((result)=> {
//     console.log("data 1 saved");
//     console.log(result);
//     return saveToDBPromises("world");
// })
// .then((result) => {
//     console.log("data 2 saved");
//     console.log(result);
//     return saveToDBPromises("Himanshu");
// })
// .then((result) => {
//     console.log("data 3 saved");
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("promises failed");
//     console.log(error);
// })

