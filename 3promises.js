function cycle() {
  return new Promise(function (resolve, reject) {
    setInterval(() => {
      const cycle = "🚲";
      resolve(cycle);
    }, 2000);
  });
}

function bike(cycle) {
  return new Promise(function (resolve, reject) {
    setInterval(() => {
      const bikee = `${cycle}🏍`;
      reject(`Error!!!${bikee}`);
    }, 2500);
  });
}

function car(bike) {
  return new Promise(function (resolve, reject) {
    setInterval(() => {
      const car = `${bike}🚘`;
      resolve(car);
    }, 3000);
  });
}

// cycle()
//   .then((cycle) => {
//     return bike(cycle);
//   })
//   .then((bike) => {
//     return car(bike);
//   })
//   .then((car) => {
//     console.log(car);
//   });
// //  we are using return beacuse to use .then promise should be returned

async function newWay() {
  try {
    const first = await cycle();
    console.log("here");
    const second = await bike(first);
    const third = await car(second);
    console.log(third);
  } catch (err) {
    console.log(`Error occured ${err}`);
  }
}
newWay();

// reject() is just the calling of the catch method
