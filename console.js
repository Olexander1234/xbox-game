const switcher = document.querySelector('.js-switch');
const pEl = document.querySelectorAll('p');
const h1El = document.querySelectorAll('h1');

// Перевіряємо, чи є збережений стан чекбокса в локальному сховищі
const savedState = localStorage.getItem('switcherState');
if (savedState === 'true') {
  switcher.checked = true;
  applyStyles();
}

switcher.addEventListener('change', switcherChecked);

function switcherChecked() {
  if (switcher.checked === true) {
    applyStyles();
    // Зберігаємо стан чекбокса в локальному сховищі
    localStorage.setItem('switcherState', 'true');
  } else {
    removeStyles();
    // Видаляємо збережений стан чекбокса з локального сховища
    localStorage.removeItem('switcherState');
  }
}

function applyStyles() {
  document.body.classList.add("body-black");
  pEl.forEach(function(p) {
    p.classList.add('black-p');
  });
  h1El.forEach(function(h1) {
    h1.classList.add('black-p');
  });
}

function removeStyles() {
  document.body.classList.remove("body-black");
  pEl.forEach(function(p) {
    p.classList.remove('black-p');
  });
  h1El.forEach(function(h1) {
    h1.classList.remove('black-p');
  });
}
