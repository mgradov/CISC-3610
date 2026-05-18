// Register the service worker so the app works offline
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

// Install button logic
let deferredPrompt = null;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.hidden = false;
});

installBtn.addEventListener('click', function() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt = null;
    installBtn.hidden = true;
  }
});

// Load the animals from data.json and build the menu
let animals = [];

fetch('data.json')
  .then(function(res) { return res.json(); })
  .then(function(data) {
    animals = data.animals;
    buildMenu();
  });

function buildMenu() {
  const menu = document.getElementById('menu');
  for (let i = 0; i < animals.length; i++) {
    const btn = document.createElement('button');
    btn.textContent = animals[i].title;
    btn.onclick = function() { showAnimal(i); };
    menu.appendChild(btn);
  }
}

function showAnimal(i) {
  const a = animals[i];
  const content = document.getElementById('content');
  content.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = a.title;

  const img = document.createElement('img');
  img.src = a.image;
  img.alt = a.title;

  const habitat = document.createElement('p');
  habitat.innerHTML = '<strong>Habitat:</strong> ' + a.habitat;

  const desc = document.createElement('p');
  desc.textContent = a.description;

  const listenBtn = document.createElement('button');
  listenBtn.textContent = 'Listen';
  listenBtn.onclick = function() {
    if (a.audio) {
      new Audio(a.audio).play();
    } else {
      const u = new SpeechSynthesisUtterance(a.description);
      speechSynthesis.cancel();
      speechSynthesis.speak(u);
    }
  };

  content.appendChild(title);
  content.appendChild(img);
  content.appendChild(habitat);
  content.appendChild(desc);
  content.appendChild(listenBtn);
}
