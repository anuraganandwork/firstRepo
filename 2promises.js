const fName = "anurag";
function firstName() {
  return new Promise(function (resolve, reject) {
    setInterval(() => {
      console.log("Name starts");
      resolve(fName);
    }, 3000);
  });
}

function secondName(fName) {
  return new Promise(function (resolve, reject) {
    setInterval(() => {
      const sName = `${fName}anand`;
      console.log("Second name starts");
      resolve(sName);
    }, 4000);
  });
}
let tName = "";
function thirdName(sName) {
  return new Promise(function (resolve, reject) {
    setInterval(() => {
      tName = `${sName}works`;
      console.log("Thirdname is coming up");
      resolve(tName);
    }, 5000);
  });
}
firstName()
  .then((fName) => {
    return secondName(fName);
  })
  .then((sName) => {
    return thirdName(sName);
  })
  .then(() => {
    console.log(tName);
  })
  .catch(() => {
    console.log("in building phase");
  });

// then k ander ek function hai , wo resolve hai
// catch k ander ek function hai ,wo reject hai
// clearInterval();
