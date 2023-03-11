let archContainer = document.getElementsByClassName('arch-article-container')[0];

// console.log(archContainer);

JSON.parse(sessionStorage.getItem('articles')).forEach((article, index) => {
    // console.log(article);
    // console.log(index);

    // create h2 element in archive div section
    let archTitle = document.createElement('h2');
    archTitle.className = 'arch-title';
    archContainer.appendChild(archTitle);

    // create p element in archive div section
    let archText = document.createElement('p');
    archText.className = 'arch-text';
    archTitle.key = index;
    archContainer.appendChild(archText);

    // create button element in archive div section
    let archBtn = document.createElement('button');
    archBtn.className = 'arch-btn';
    archTitle.key = index;
    archContainer.appendChild(archBtn);

    // Add innerHTML to h2, p and button elements
    archTitle.innerHTML = article.title;
    archText.innerHTML = article.text;
    archBtn.innerHTML = 'Remove from Archive';

    // Add to session storage
    sessionStorage.setItem('index', JSON.stringify(article));
});



// add event listener to each button in archive section
const archTitle = document.getElementsByClassName('arch-title');
const archText = document.getElementsByClassName('arch-text');
const archBtn = document.getElementsByClassName('arch-btn');


for (let i = 0; i < archBtn.length; i++) {
    archBtn[i].addEventListener('click', () => {
        // console.log('clicked');
        // console.log(i);

        // console.log(archContainer)

        // remove article from archive section
        archTitle[i].innerHTML = '';
        archText[i].innerHTML = '';

        // Remove button from archive
        archBtn[i].remove();
        
        // Target article to remove from archive
        let articleToRemove = JSON.parse(sessionStorage.getItem('index'));
        // console.log(articleToRemove);

        // Remove article from archive
        let articles = JSON.parse(sessionStorage.getItem('articles'));
        // console.log(articles);

        articles.splice(articleToRemove, 1);
        // console.log(articles);

        // Update session storage
        sessionStorage.setItem('articles', JSON.stringify(articles));
    });
}