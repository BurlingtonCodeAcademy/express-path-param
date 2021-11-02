let titleCont = document.getElementById("title");
let bodyCont = document.getElementById("body");
let articleID = document.location.pathname.split("/")[2];

console.log(articleID);

//read the ID from the URL path to determine which article to fetch
fetch(`https://jsonplaceholder.typicode.com/posts/${articleID}`)
  .then((res) => res.json())
  .then((article) => {
    if (parseInt(articleID) <= 100) {
      titleCont.textContent = article.title;
      bodyCont.textContent = article.body;
    } else {
      titleCont.textContent = "No article found";
    }
  });
