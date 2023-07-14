const gameName = 'Pubg';
const url = `https://api.rawg.io/api/games?search=${gameName}`;
const apiKey = 'f797e2bf18494069b662ff061b840e71';

fetch(`${url}&key=${apiKey}`)
  .then(response => response.json())
  .then(data => console.log(data.results[0]));


  

const image = [
{
    url:'./photos/ss_a35aaa73e605c0738a53a74abbcb53768e8f39e1.1920x1080.jpg',
    descraption: 'Я ЛОХ'
    
},

{
    url:'./photos/steep-heroBanner.jpg',
    descraption: 'Я ЛОХ'
},

{
    url:'./photos/cd1d8954a9a97d46a82b45dbe141be135d017949c21b9a14c32a17f0d010191f.jpg',
    descraption: 'Я ЛОХ'
},
{
    url:'./photos/Rectangle.jpg',
    descraption: 'Я ЛОХ'
}
]




const prev = document.querySelector('.icon-prev');
const next = document.querySelector('.icon-next');
const hero = document.querySelector('.hero');
const heroH1 = document.querySelector('.hero-h1');
const heroA = document.querySelector('.hero-a');

const heroMath = ['hero', 'hero-1', 'hero-2', 'hero-3', 'hero-4'];
const heroP = ['Star Wars Battlefront II', 'Destiny 2', 'STEEP', 'Forza Motorsport 7', 'Call of Duty: WWII'];
const heroLink = [
  'https://youtu.be/_q51LZ2HpbE',
  'https://youtu.be/raDbI_Yuc6A',
  'https://youtu.be/sAGXhqUcPzs',
  'https://youtu.be/9aAr5blVy0g',
  'https://youtu.be/D4Q_XYVescc'
];

let currentIndex = localStorage.getItem('currentIndex') || 0;

next.addEventListener('click', nextImage);
prev.addEventListener('click', prevImage);

updateImage();

function nextImage() {
  currentIndex = (currentIndex + 1) % heroMath.length;
  updateImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + heroMath.length) % heroMath.length;
  updateImage();
}

function updateImage() {
  hero.className = '';
  hero.classList.add(heroMath[currentIndex]);
  heroH1.textContent = heroP[currentIndex];
  heroA.href = heroLink[currentIndex];
  localStorage.setItem('currentIndex', currentIndex);
}
