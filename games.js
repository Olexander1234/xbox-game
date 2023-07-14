const searchCard = document.querySelector('.js-card-container');
const searchForm = document.querySelector('.js-search-form');

searchForm.addEventListener('submit', onChange);

const url = 'https://api.rawg.io/api/games';
const apiKey = 'f797e2bf18494069b662ff061b840e71';

function fetchSearch(value) {
  const query = encodeURIComponent(value);
  const fullUrl = `${url}?search=${query}&key=${apiKey}`;

  return fetch(fullUrl)
    .then(response => response.json())
    .then(data => data.results.slice(0, 3));
}

function generateHTML(articles) {
  return articles.map(article => `
    <div class="container">
      <h1>${article.name}</h1>
     
      <img src="${article.background_image}" alt="фото">
      <p> 
      rating:${article.rating}</p>
      <p> release: ${article.released}</p>
    </div>
  `).join('');
}

function onChange(event) {
  event.preventDefault();
  const value = event.currentTarget.elements.query.value;
  
  fetchSearch(value)
    .then(articles => {
      const markup = generateHTML(articles);
      searchCard.innerHTML = markup;
      searchForm.reset();
    });
}

