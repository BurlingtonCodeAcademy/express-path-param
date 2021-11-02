const articleList = document.getElementById('article-list')

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(articles => {
    articles.forEach(article => {
      let link = document.createElement('a')
      let listItem = document.createElement('li')
      link.textContent = article.title
      //create url path for the front end to pass ID param
      link.href = `/article/${article.id}`

      listItem.appendChild(link)
      articleList.appendChild(listItem)
    });
  })