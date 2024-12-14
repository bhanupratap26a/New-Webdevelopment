function fetchBlogData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("BlogData fetched Successfully");
    }, 3000);
  });
}
function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("CommentData fetched Successfully");
    });
  });
}

async function getData() {
  try {
    console.log("fetching Data..");

    // const blogData = await fetchBlogData();
    // const commentData = await fetchCommentData();
    const [blogData, commentData] = await Promise.all([
      fetchBlogData(),
      fetchCommentData(),
    ]);
    console.log(blogData);
    console.log(commentData);
    console.log("Data fetched Successfully");
  } catch (error) {
    console.log("Error in fetching Data");
  }
}
getData();
