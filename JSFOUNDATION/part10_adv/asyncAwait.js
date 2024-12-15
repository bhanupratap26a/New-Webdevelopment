function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ name: "Doon", url: "https://google.com/home" });
    }, 3000);
  });
}
async function getData() {
  try {
    console.log("fetching Data from User");
    const userData = await fetchData();
    console.log("user Data fetched Successfully");
    console.log("User Data:", userData);
  } catch (error) {
    console.log("Error in fetching Data", error);
  }
}
getData();
