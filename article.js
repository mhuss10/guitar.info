const allArticles = document.getElementsByClassName('article-container')[0];

const archiveBtn = allArticles.getElementsByTagName('button');

// console.log(archiveBtn);

// Array to store articles
let articles = [];

// Object to store each article to be pushed to articles array
let article = {};

for (let i = 0; i < archiveBtn.length; i++) {
    archiveBtn[i].addEventListener('click', () => {
        // console.log('clicked');
        // console.log(i);

        const articleTitle = allArticles.getElementsByTagName('h2')[i].innerHTML;
        console.log(articleTitle);

        const articleText = allArticles.getElementsByTagName('p')[i].innerHTML;
        // console.log(articleText);

        // Object to store article
        article = {
            title: articleTitle,
            text: articleText
        }

        // console.log(article)

        // Push article object to articles array
        articles.push(article);

        // add article to session storage
        sessionStorage.setItem('articles', JSON.stringify(articles));
    });
}

// Keep like icon active until clicked again
const likeBtn = document.getElementsByClassName('like-icon');

for (let i = 0; i < likeBtn.length; i++) {
    likeBtn[i].addEventListener('click', () => {
        likeBtn[i].classList.toggle('active');
    });
}







