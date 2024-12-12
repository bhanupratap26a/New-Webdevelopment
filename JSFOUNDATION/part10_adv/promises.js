function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let Data = false;
      if (Data) {
        resolve("Data fetched Successfully");
      } else {
        reject("Error fetching Data");
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
    return data.toLowerCase();
  })
  .then((data1) => console.log(data1))
  .catch((error) => {
    console.log(error);
  });
