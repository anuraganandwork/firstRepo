function any() {
  return new Promise(function (resolve, reject) {
    if (false) {
      resolve("Wait,its getting resolved");
    } else {
      reject("error occured");
    }
  });
}

any().then(
  (data) => {
    console.log(data);
  },
  (data) => {
    console.log(data);
  }
);
let arr = [];
const fetchData = () => {
  return new Promise(function (resolve, reject) {
    setInterval(() => {
      arr.push(2, 3, 4, 5, 6);
      if (arr.length > 0) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
};
fetchData()
  .then(
    () => {
      console.log("Data Fetched");
      console.log(arr);
    },
    () => {
      console.log("Data anvailable");
    }
  )
  .finally(() => {
    console.log("Everything will be fine ");
  });

// inside .then , first function is resolve callback and
// the other one is reject callBack
